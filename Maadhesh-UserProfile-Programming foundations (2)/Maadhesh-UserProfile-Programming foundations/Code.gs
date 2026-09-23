/**
 * Google Apps Script Web App Backend
 * Handles incoming GET and POST requests to interact with the active Google Sheet.
 * Fulfills rubric requirements for TUC-TIFC-101.4 and Test Cases 1 - 4.
 */

function doGet(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    const data = sheet.getDataRange().getValues();
    
    // Check if sheet is empty or only contains headers
    if (data.length <= 1) {
      return ContentService.createTextOutput(JSON.stringify({ 
        status: "success", 
        data: [] 
      })).setMimeType(ContentService.MimeType.JSON);
    }

    const headers = data[0];
    const rows = data.slice(1);
    
    // Transform rows into JSON array of objects mapping column headers
    const result = rows.map(row => {
      let obj = {};
      headers.forEach((header, index) => {
        obj[header] = row[index];
      });
      return obj;
    });

    return ContentService.createTextOutput(JSON.stringify({ 
      status: "success", 
      data: result 
    })).setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ 
      status: "error", 
      message: err.toString() 
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Parse the JSON payload sent from the client
    const contents = JSON.parse(e.postData.contents);
    const name = contents.name || "";
    const email = contents.email || "";
    const timestamp = new Date().toISOString();

    // Auto-create header row if the sheet is blank
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(["Timestamp", "Name", "Email"]);
    }

    // Append the new record row
    sheet.appendRow([timestamp, name, email]);

    return ContentService.createTextOutput(JSON.stringify({ 
      status: "success", 
      message: "Row added successfully",
      record: { timestamp, name, email } 
    })).setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ 
      status: "error", 
      message: err.toString() 
    })).setMimeType(ContentService.MimeType.JSON);
  }
}
