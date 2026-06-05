"""
TRANSFERCHECK DATA FRAMEWORK v4 - Continuous Automated Ingestion Engine
-------------------------------------------------------------------------
This script implements a 100% fully automated ingestion pipeline.
Manual review steps are eliminated. It features:
- Rule A: High-Confidence Auto-Approval
- Rule B: Automated Drift & Change Detection (with archiving and versioning)
- Rule C: Webhook notifications for ambiguities
- Cron Job Scheduler integration using APScheduler
"""

import json
import hashlib
from datetime import datetime
import time
from typing import List, Dict, Any, Optional

# ============================================================================
# MOCK DATABASE MODELS (Prisma/PostgreSQL mirror)
# ============================================================================

class CourseRequirementRecord:
    def __init__(
        self,
        id: str,
        major_id: str,
        canonical_name: str,
        category: str,
        required_for_eligibility: bool,
        manual_review_required: bool,
        logic_group: Optional[str],
        official_source_quote: str,
        source_url: str,
        verified: bool,
        hash_val: str,
        data_version: int = 1,
        status: str = "VERIFIED"
    ):
        self.id = id
        self.major_id = major_id
        self.canonical_name = canonical_name
        self.category = category
        self.required_for_eligibility = required_for_eligibility
        self.manual_review_required = manual_review_required
        self.logic_group = logic_group
        self.official_source_quote = official_source_quote
        self.source_url = source_url
        self.verified = verified
        self.hash = hash_val
        self.data_version = data_version
        self.status = status
        self.last_verified_date = datetime.utcnow().isoformat()


class HistoricalRequirementLogRecord:
    def __init__(
        self,
        id: str,
        course_requirement_id: str,
        major_id: str,
        canonical_name: str,
        category: str,
        required_for_eligibility: bool,
        manual_review_required: bool,
        logic_group: Optional[str],
        official_source_quote: str,
        source_url: str,
        data_version: int,
        archived_at: str
    ):
        self.id = id
        self.course_requirement_id = course_requirement_id
        self.major_id = major_id
        self.canonical_name = canonical_name
        self.category = category
        self.required_for_eligibility = required_for_eligibility
        self.manual_review_required = manual_review_required
        self.logic_group = logic_group
        self.official_source_quote = official_source_quote
        self.source_url = source_url
        self.data_version = data_version
        self.archived_at = archived_at


class RawCourseMappingRecord:
    def __init__(self, university_id: str, local_course_code: str, canonical_name: str):
        self.university_id = university_id
        self.local_course_code = local_course_code
        self.canonical_name = canonical_name


class Database:
    """Mock Database representation."""
    def __init__(self):
        self.course_requirements: List[CourseRequirementRecord] = []
        self.historical_logs: List[HistoricalRequirementLogRecord] = []
        self.raw_mappings: List[RawCourseMappingRecord] = []
        
    def add_mapping(self, university_id: str, code: str, canonical: str):
        self.raw_mappings.append(RawCourseMappingRecord(university_id, code, canonical))


# Initialize database instance
db = Database()
# Seed mappings for validation
db.add_mapping("uni_ucb", "MATH 1A", "calculus_1")
db.add_mapping("uni_ucb", "MATH 1B", "calculus_2")
db.add_mapping("uni_ucb", "PHYS 7A", "physics_1_lecture")
db.add_mapping("uni_ucb", "PHYS 7AL", "physics_1_lab")

# ============================================================================
# AUTOMATED SYNC ENGINE CORE
# ============================================================================

def trigger_webhook_alert(requirement: Dict[str, Any], discrepancy_details: str):
    """
    Rule C: Programmatic Webhook notification for ambiguous requirements.
    In a real implementation, this performs an HTTP POST request to Slack/Discord.
    """
    payload = {
        "alert_type": "TRANSFER_REQUIREMENT_AMBIGUITY_ALERT",
        "timestamp": datetime.utcnow().isoformat(),
        "details": discrepancy_details,
        "payload": requirement
    }
    print(f"\n📢 [Webhook Notification Triggered]")
    print(json.dumps(payload, indent=2, ensure_ascii=False))
    print("----------------------------------------\n")


def compute_requirement_hash(req_data: Dict[str, Any]) -> str:
    """
    Helper to calculate a hash based on the schema fields to identify data drift.
    """
    raw_str = f"{req_data['canonical_name']}:{req_data['category']}:{req_data['required']}:{req_data['ambiguous']}:{req_data.get('logic_group')}:{req_data['quote']}"
    return hashlib.sha256(raw_str.encode('utf-8')).hexdigest()


def check_high_confidence_auto_approval(req_data: Dict[str, Any], university_id: str) -> bool:
    """
    Rule A: High-Confidence Auto-Approval.
    Returns True if raw course code exists in RawCourseMapping and quote has clear keywords.
    """
    # 1. Check if the local code is mapped
    mapped_codes = [m.local_course_code for m in db.raw_mappings 
                    if m.university_id == university_id and m.canonical_name == req_data['canonical_name']]
    
    has_mapping = len(mapped_codes) > 0

    # 2. Check if official source quote has clear mandatory keywords
    quote_lower = req_data['quote'].lower()
    mandatory_keywords = ["required", "must complete", "prerequisite", "essential"]
    has_mandatory_keywords = any(kw in quote_lower for kw in mandatory_keywords)
    
    return has_mapping and has_mandatory_keywords


def upsert_requirement_without_human(
    university_id: str,
    major_id: str,
    extracted_req: Dict[str, Any],
    source_url: str
):
    """
    Continuous Automated Synchronization Engine core writer.
    Handles auto-approval (Rule A), drift versioning and historical logging (Rule B),
    and alerts on ambiguity (Rule C) without human intervention.
    """
    canonical_name = extracted_req['canonical_name']
    current_hash = compute_requirement_hash(extracted_req)
    
    # 1. Query for existing record
    existing = next((r for r in db.course_requirements 
                     if r.major_id == major_id and r.canonical_name == canonical_name), None)

    # 2. If it is a brand-new requirement (No prior records)
    if not existing:
        # Check high confidence auto-approval (Rule A)
        is_auto_approved = check_high_confidence_auto_approval(extracted_req, university_id)
        
        verified_status = True if is_auto_approved else False
        status_flag = "VERIFIED" if is_auto_approved else "PENDING_CONFIRMATION"

        new_record = CourseRequirementRecord(
            id=f"req_{int(time.time() * 1000)}",
            major_id=major_id,
            canonical_name=canonical_name,
            category=extracted_req['category'],
            required_for_eligibility=extracted_req['required'],
            manual_review_required=extracted_req['ambiguous'],
            logic_group=extracted_req.get('logic_group'),
            official_source_quote=extracted_req['quote'],
            source_url=source_url,
            verified=verified_status,
            hash_val=current_hash,
            data_version=1,
            status=status_flag
        )
        db.course_requirements.append(new_record)
        print(f"📦 [Insert NEW] {canonical_name} added. Verified={verified_status} (Status: {status_flag})")
        
        # Rule C: If new requirement is ambiguous, trigger warning notification
        if extracted_req['ambiguous']:
            trigger_webhook_alert(
                extracted_req, 
                f"New requirement extracted for {canonical_name} is marked ambiguous. Manual verification recommended."
            )
        return

    # 3. If record already exists, check for drift (Rule B)
    if existing.hash == current_hash:
        # No change detected: Update verification date
        existing.last_verified_date = datetime.utcnow().isoformat()
        print(f"🔄 [Identical Match] {canonical_name} is identical. Updated last_verified_date.")
    else:
        # Data drift/change detected!
        # A) Archive the old record into HistoricalRequirementLog
        archive_record = HistoricalRequirementLogRecord(
            id=f"hist_{int(time.time() * 1000)}",
            course_requirement_id=existing.id,
            major_id=existing.major_id,
            canonical_name=existing.canonical_name,
            category=existing.category,
            required_for_eligibility=existing.required_for_eligibility,
            manual_review_required=existing.manual_review_required,
            logic_group=existing.logic_group,
            official_source_quote=existing.official_source_quote,
            source_url=existing.source_url,
            data_version=existing.data_version,
            archived_at=datetime.utcnow().isoformat()
        )
        db.historical_logs.append(archive_record)
        
        # B) Overwrite the production record immediately and increment version
        old_version = existing.data_version
        
        existing.category = extracted_req['category']
        existing.required_for_eligibility = extracted_req['required']
        existing.manual_review_required = extracted_req['ambiguous']
        existing.logic_group = extracted_req.get('logic_group')
        existing.official_source_quote = extracted_req['quote']
        existing.source_url = source_url
        existing.hash = current_hash
        existing.data_version += 1
        existing.status = "AUTO_UPDATED"
        existing.last_verified_date = datetime.utcnow().isoformat()
        
        # Determine confidence of auto-update
        is_auto_approved = check_high_confidence_auto_approval(extracted_req, university_id)
        existing.verified = is_auto_approved
        
        print(f"⚠️  [DRIFT DETECTED] {canonical_name} requirement changed!")
        print(f"   └─ Archived Old Record (Version {old_version}) to HistoricalRequirementLog.")
        print(f"   └─ Updated Production Record to Version {existing.data_version} (Status: AUTO_UPDATED, Verified: {is_auto_approved}).")

        # Rule C: Send notification alert for changes / ambiguities
        if extracted_req['ambiguous'] or not is_auto_approved:
            trigger_webhook_alert(
                extracted_req,
                f"Data drift detected in {canonical_name} requirement. Version updated from {old_version} to {existing.data_version}. Auto-approval confidence is low, verification recommended."
            )
        else:
            print(f"   └─ High confidence change auto-approved.")


# ============================================================================
# AGENT PIPELINE SCHEDULING WRAPPER
# ============================================================================

def run_agent_pipeline_sync():
    """
    Simulation of the 7-day scheduled agent sync.
    Scrapes, splits labs, parses, and upserts.
    """
    print(f"\n🤖 [Sync Engine] Scheduled Run Initiated at {datetime.utcnow().isoformat()}")
    
    # Mock scraped document data
    mock_scraped_reqs = [
        {"canonical_name": "calculus_1", "category": "MATHEMATICS", "required": True, "ambiguous": False, "quote": "Math 1A (Calculus 1) - Required."},
        {"canonical_name": "calculus_2", "category": "MATHEMATICS", "required": True, "ambiguous": False, "quote": "Math 1B (Calculus 2) - Required."},
        # Ambiguous english entry
        {"canonical_name": "english_composition_1", "category": "ENGLISH/COMM", "required": True, "ambiguous": True, "quote": "English Comp R1A - May satisfy with SAT english score of 680."}
    ]
    
    source_url = "https://engineering.berkeley.edu/requirements/"
    
    for req in mock_scraped_reqs:
        upsert_requirement_without_human("uni_ucb", "major_me", req, source_url)


def start_scheduler():
    """
    Sets up the 7-day recurrent job scheduling using APScheduler.
    """
    try:
        from apscheduler.schedulers.background import BackgroundScheduler
        scheduler = BackgroundScheduler()
        
        # Schedule the job to run every 7 days (604800 seconds)
        scheduler.add_job(run_agent_pipeline_sync, 'interval', days=7)
        scheduler.start()
        print("⏰ [Scheduler] APScheduler Background Job registered: Runs every 7 days.")
    except ImportError:
        print("⚠️  [Scheduler] APScheduler library is not installed.")
        print("⏰ [Fallback] Executing continuous sync simulation synchronously:")
        run_agent_pipeline_sync()


# ============================================================================
# SIMULATION DEMONSTRATION
# ============================================================================

if __name__ == "__main__":
    print("=== STARTING AUTOSYNC ENGINE DEMO ===")
    
    # 1. INITIAL RUN (Injecting new data into production)
    print("\n--- PHASE 1: Initial Sync Ingestion ---")
    start_scheduler() # Will execute synchronous fallback demo
    
    # 2. SECOND RUN: NO DRIFT (Identical data)
    print("\n--- PHASE 2: Second Scheduled Run (No data changes) ---")
    run_agent_pipeline_sync()
    
    # 3. THIRD RUN: DRIFT DETECTED (University updates requirements)
    print("\n--- PHASE 3: Third Scheduled Run (Data Drift detected: requirement change) ---")
    # Simulation of updated requirements (Calculus 2 is now optional, English Comp requirement is modified)
    drifted_scraped_reqs = [
        {"canonical_name": "calculus_1", "category": "MATHEMATICS", "required": True, "ambiguous": False, "quote": "Math 1A (Calculus 1) - Required."},
        # Drift: Calculus 2 was updated to optional in the university guidelines
        {"canonical_name": "calculus_2", "category": "MATHEMATICS", "required": False, "ambiguous": False, "quote": "Math 1B (Calculus 2) - Optional/Recommended."},
        # English requirement has been updated to have a higher score waiver (ambiguity persists)
        {"canonical_name": "english_composition_1", "category": "ENGLISH/COMM", "required": True, "ambiguous": True, "quote": "English Comp R1A - May satisfy with SAT english score of 720."}
    ]
    
    source_url = "https://engineering.berkeley.edu/requirements/"
    for req in drifted_scraped_reqs:
        upsert_requirement_without_human("uni_ucb", "major_me", req, source_url)

    print("\n=== PIPELINE SIMULATION RESULTS ===")
    print(f"Production Active Requirements count: {len(db.course_requirements)}")
    print(f"Historical logs (archived old versions) count: {len(db.historical_logs)}")
    print("=== AUTOMATION PIPELINE DEMO COMPLETE ===")
