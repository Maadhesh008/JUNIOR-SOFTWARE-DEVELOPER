# User Profile - Google Sheets Sync

This project implements client-server communication using JavaScript asynchronous `fetch` requests (GET and POST) connected to a Google Sheets backend via Google Apps Script (TUC-TIFC-101.4).

## Package Contents
- `Code.gs`: Google Apps Script source handling `doGet()` and `doPost()`.
- `index.html`: Responsive form interface and live profiles data table.
- `script.js`: Asynchronous frontend request handling (POST profile and GET table rows).
- `style.css`: Clean, modern UI styling.
- `INSTRUCTIONS.md`: Step-by-step implementation and submission guide.

## Quick Start
1. Create a Google Sheet and paste `Code.gs` into **Extensions > Apps Script**.
2. Deploy as a Web App (set access to **Anyone**).
3. Copy your Web App deployment URL and paste it into `script.js` under `SCRIPT_URL`.
4. Open `index.html` in your browser.
