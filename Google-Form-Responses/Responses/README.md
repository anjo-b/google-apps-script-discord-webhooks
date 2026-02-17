
# 📋 Google Forms to Discord Webhook Integration

This Google Apps Script automatically sends new Google Form responses to a Discord channel using a Discord Webhook.

Whenever someone submits your Google Form, the script formats the response neatly and posts it to Discord as an embedded message.

---

## 🚀 Why This Script?

Managing form responses inside Google Sheets is useful — but sometimes you need **real-time notifications**.

This script helps you:

* ✅ Get instant Discord notifications for new form submissions
* ✅ Keep your team updated automatically
* ✅ Format responses cleanly and professionally
* ✅ Avoid manually checking Google Sheets
* ✅ Improve workflow automation

Perfect for:

* Community applications
* Event registrations
* Support forms
* Staff applications
* Feedback submissions

---

## 🛠 How It Works

1. A user submits your Google Form.
2. The response is stored in Google Sheets.
3. The script triggers on form submission.
4. It:

   * Extracts the submission data
   * Aligns questions and answers neatly
   * Formats the data inside a Discord embed
5. Sends it to your Discord channel via webhook.

---

## 📦 Setup Instructions

### 1️⃣ Create a Discord Webhook

* Go to your Discord server
* Open **Server Settings → Integrations → Webhooks**
* Click **New Webhook**
* Copy the Webhook URL

---

### 2️⃣ Add the Script to Google Sheets

1. Open your linked Google Form response sheet
2. Click **Extensions → Apps Script**
3. Paste the script into the editor
4. Replace:

```javascript
var discordWebhookUrl = "PASTE_YOUR_DISCORD_WEBHOOK_URL_HERE";
```

with:

```javascript
var discordWebhookUrl = "YOUR_ACTUAL_WEBHOOK_URL";
```

5. Save the project

---

### 3️⃣ Set the Trigger

1. In Apps Script, go to **Triggers (⏰ icon)**
2. Click **Add Trigger**
3. Choose:

   * Function: `onFormSubmit`
   * Event source: `From spreadsheet`
   * Event type: `On form submit`
4. Save

---

## 📄 Example Output in Discord

The bot will send a clean embedded message like:

```
Submission Date : 2/16/2026 14:32:10
-------------------------------------
Name            : John Doe
Email           : john@email.com
Application     : Moderator
Experience      : 2 Years
```

---

## 🎨 Features

* Clean aligned formatting
* Automatically includes submission date
* Ignores empty fields
* Uses Discord embed for better visual display
* Error handling included
* Easy to customize

---

## 🔒 Permissions

The script requires:

* Access to the Google Sheet
* Permission to send external requests (`UrlFetchApp`)

---

## ⚠ Important Notes

* Never share your webhook URL publicly.
* If exposed, regenerate the webhook in Discord.
* The script logs API errors for easier debugging.
