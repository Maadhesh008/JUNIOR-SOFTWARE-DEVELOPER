// Replace with your Google Apps Script Web App Deployment URL
const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwQG2-Wn1DegzvCobFwKkNIB29yNxOSPTNd17EoikCxOEjKepDlQsL8SK9WPMRc_fhS1A/exec";

// DOM Elements
const profileForm = document.getElementById("profileForm");
const submitBtn = document.getElementById("submitBtn");
const refreshBtn = document.getElementById("refreshBtn");
const statusMessage = document.getElementById("statusMessage");
const tableBody = document.getElementById("tableBody");

/**
 * Display user feedback banners
 */
function showStatus(text, isError = false) {
  statusMessage.textContent = text;
  statusMessage.className = `status-box ${isError ? "status-error" : "status-success"}`;
  statusMessage.classList.remove("hidden");
}

/**
 * TEST CASES 1 & 2: Send Data (POST)
 * Sends user profile inputs asynchronously to the Google Sheet endpoint.
 */
async function sendData(profileData) {
  submitBtn.disabled = true;
  submitBtn.textContent = "Sending...";

  try {
    const response = await fetch(SCRIPT_URL, {
      method: "POST",
      // Using text/plain avoids CORS preflight triggers while carrying JSON data
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
      body: JSON.stringify(profileData),
    });

    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }

    const result = await response.json();

    if (result.status === "success") {
      showStatus("Data successfully recorded to Google Sheet!");
      profileForm.reset();
      // Auto-refresh to demonstrate end-to-end sync
      await getData();
    } else {
      throw new Error(result.message || "Unknown error occurred on server.");
    }
  } catch (error) {
    console.error("POST Error:", error);
    showStatus(`Failed to send data: ${error.message}`, true);
  } finally {
    submitBtn.disabled = false;
    submitBtn.textContent = "Send to Sheet (POST)";
  }
}

/**
 * TEST CASES 3 & 4: Retrieve Data (GET)
 * Fetches all saved records from the Google Sheet and populates the table.
 */
async function getData() {
  refreshBtn.disabled = true;
  refreshBtn.textContent = "Loading...";

  try {
    const response = await fetch(SCRIPT_URL, {
      method: "GET",
    });

    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }

    const result = await response.json();

    if (result.status === "success") {
      renderTable(result.data);
    } else {
      throw new Error(result.message || "Failed to retrieve sheet data.");
    }
  } catch (error) {
    console.error("GET Error:", error);
    showStatus(`Failed to load data: ${error.message}`, true);
  } finally {
    refreshBtn.disabled = false;
    refreshBtn.textContent = "Refresh Profiles (GET)";
  }
}

/**
 * Renders records into the HTML table
 */
function renderTable(rows) {
  tableBody.innerHTML = "";

  if (!rows || rows.length === 0) {
    tableBody.innerHTML = '<tr><td colspan="3" class="placeholder">No records found.</td></tr>';
    return;
  }

  rows.forEach((row) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${row.Timestamp ? new Date(row.Timestamp).toLocaleString() : "N/A"}</td>
      <td>${row.Name || ""}</td>
      <td>${row.Email || ""}</td>
    `;
    tableBody.appendChild(tr);
  });
}

// Event Listeners
profileForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = {
    name: document.getElementById("name").value.trim(),
    email: document.getElementById("email").value.trim(),
  };

  if (formData.name && formData.email) {
    sendData(formData);
  } else {
    showStatus("Please fill out both Name and Email fields.", true);
  }
});

refreshBtn.addEventListener("click", getData);

// Initial data fetch on script load
window.addEventListener("DOMContentLoaded", getData);
