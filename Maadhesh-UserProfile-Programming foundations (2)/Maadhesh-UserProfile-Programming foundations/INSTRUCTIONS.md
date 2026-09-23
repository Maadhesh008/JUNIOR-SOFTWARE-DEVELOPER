# Step-by-Step Implementation Guide

Follow these steps to deploy and test your project:

---

### Step 1: Create the Google Sheet & Backend API
1. Open Google Sheets at https://sheets.new and create a blank sheet.
2. In Row 1, add column headers:
   - A1: `Timestamp`
   - B1: `Name`
   - C1: `Email`
3. Click **Extensions > Apps Script**.
4. Erase any default code in `Code.gs` and paste the contents of `Code.gs` from this package.
5. Click the diskette icon (**Save**).

---

### Step 2: Deploy as a Web App (Crucial Step)
1. In Apps Script, click **Deploy > New deployment**.
2. Click the gear icon next to "Select type" and choose **Web app**.
3. Fill in the deployment configuration:
   - **Description**: `User Profile Sync API`
   - **Execute as**: `Me (<your-email>)`
   - **Who has access**: `Anyone`  <-- *CRUCIAL: Setting this to anything else will cause HTTP 401/403 CORS/Auth errors!*
4. Click **Deploy**.
5. Click **Authorize access**, choose your account, click **Advanced**, and click **Go to Untitled project (unsafe)**. Click **Allow**.
6. Copy the **Web app URL** (it ends with `/exec`).

---

### Step 3: Link the Frontend
1. Open `script.js` in any code or text editor.
2. Replace `"PASTE_YOUR_APPS_SCRIPT_WEB_APP_URL_HERE"` on line 2 with your copied Web App URL:
   ```javascript
   const SCRIPT_URL = "https://script.google.com/macros/s/AKfycb.../exec";
   ```
3. Save `script.js`.

---

### Step 4: Run and Test
1. Double-click `index.html` to open it in your browser.
2. **Test Cases 1 & 2 (POST)**:
   - Type a Name and Email, then click **Send to Sheet (POST)**.
   - Verify that the notification displays success and a new row appears in your Google Sheet.
3. **Test Cases 3 & 4 (GET)**:
   - Click **Refresh Profiles (GET)** to verify that existing rows are fetched and rendered in the HTML table.

---

### Step 5: Submission Format
Ensure your zip archive is renamed to match your rubric requirement:
`LastName,Name-UserProfile.zip` (e.g., `Smith,John-UserProfile.zip`)
