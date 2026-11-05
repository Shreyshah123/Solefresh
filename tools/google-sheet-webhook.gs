// SoleFresh leads: a Google Sheet that receives both forms.
//
// Setup (once, about five minutes; the steps are also in README.md):
//   1. In a personal Google account, open sheets.new and name the sheet "SoleFresh leads".
//   2. Extensions > Apps Script. Delete what is there, paste this whole file, and save.
//   3. Deploy > New deployment > the gear > Web app. Execute as: Me. Who has access: Anyone. Deploy, and allow access.
//   4. Copy the Web app URL. Use it as both BULK_WEBHOOK_URL and WAITLIST_WEBHOOK_URL in Vercel.
// The tabs and their headings appear by themselves with the first lead of each kind.
//
// Anyone who has the URL can add rows, so keep it out of the site and out of the repo: it belongs only in Vercel's
// environment variables. After editing this script, Deploy > Manage deployments > edit > New version keeps the same URL.

const TABS = {
  'solefresh-pilot': { name: 'Pilot', fields: ['at', 'organization', 'type', 'pairs', 'name', 'email', 'phone', 'message'] },
  'solefresh-waitlist': { name: 'Waitlist', fields: ['at', 'email'] },
};

function doPost(e) {
  const lock = LockService.getScriptLock();
  try {
    const lead = JSON.parse(e.postData.contents);
    const tab = TABS[lead.source];
    if (!tab) return reply({ ok: false, error: 'unknown source' });
    lock.waitLock(8000);                       // two leads at once must not land on the same row
    const book = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = book.getSheetByName(tab.name) || book.insertSheet(tab.name);
    if (sheet.getLastRow() === 0) { sheet.appendRow(tab.fields); sheet.setFrozenRows(1); }
    sheet.appendRow(tab.fields.map((f) => plain(lead[f])));
    return reply({ ok: true });
  } catch (err) {
    return reply({ ok: false, error: String(err) });   // the site then tells the visitor to try again and keeps what they typed
  } finally {
    lock.releaseLock();
  }
}

/** Open the Web app URL in a browser to check that it is live. */
function doGet() { return reply({ ok: true, service: 'SoleFresh leads' }); }

/** A visitor's text stays text: anything a sheet would read as a formula gets the leading apostrophe that keeps it plain. */
function plain(v) {
  const s = v === undefined || v === null ? '' : String(v);
  return /^[=+\-@\t\r]/.test(s) ? "'" + s : s;
}

function reply(body) { return ContentService.createTextOutput(JSON.stringify(body)).setMimeType(ContentService.MimeType.JSON); }
