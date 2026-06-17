const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

async function runTest() {
  console.log("Launching browser...");
  const browser = await puppeteer.launch({
    headless: true,
    executablePath: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  try {
    const page = await browser.newPage();
    
    // Set viewport size
    await page.setViewport({ width: 1280, height: 800 });
    
    // Listen for console logs
    page.on('console', msg => {
      console.log(`[BROWSER CONSOLE] ${msg.type().toUpperCase()}: ${msg.text()}`);
    });

    // Listen for page errors
    page.on('pageerror', err => {
      console.error(`[BROWSER ERROR] ${err.toString()}`);
    });

    console.log("Navigating to http://localhost:3000/index.html...");
    await page.goto('http://localhost:3000/index.html', { waitUntil: 'networkidle2' });

    console.log("Setting up activePaymentContext and executing payment...");
    
    // Inject activePaymentContext and call executePayment
    const result = await page.evaluate(async () => {
      window.activePaymentContext = {
        type: "essay",
        plan: "Essay Pass",
        buyerName: "테스트구매자",
        buyerPhone: "010-1234-5678",
        currentUser: "test@example.com",
        krwAmount: 9900,
        usdAmount: 8,
        krwProductName: "AI 에세이 대학교 프리패스",
        usdProductName: "AI Target Essay Pass (1 School Unlimited)"
      };

      try {
        window.executePayment("Inicis");
        return { success: true };
      } catch (e) {
        return { success: false, error: e.message };
      }
    });

    console.log("Payment initialization call result:", result);

    // Wait for PortOne iframe or modal to appear
    console.log("Waiting 7 seconds for PortOne payment modal/iframe to load...");
    await new Promise(r => setTimeout(r, 7000));

    // Capture screen to verify payment modal is rendered
    const screenshotPath = path.join(__dirname, 'payment_test.png');
    console.log(`Taking screenshot: ${screenshotPath}`);
    await page.screenshot({ path: screenshotPath });

    // Inspect if any iframes from PortOne are present
    const frames = page.frames();
    console.log(`Total active frames on page: ${frames.length}`);
    for (let i = 0; i < frames.length; i++) {
      const url = frames[i].url();
      console.log(`Frame ${i}: ${url}`);
    }

  } catch (error) {
    console.error("Test execution failed:", error);
  } finally {
    await browser.close();
    console.log("Browser closed.");
  }
}

runTest();
