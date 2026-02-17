# Google Forms → Discord Webhook Integration

This Google Apps Script automatically sends selected Google Form responses to a Discord channel using a Discord Webhook.

## 📌 What This Script Does

When a form is submitted:

- It captures the submission data
- Filters only specific fields you choose (e.g., Name, Surname, Age, Email)
- Formats the data neatly
- Sends it as a styled embed message to Discord

Only the fields listed in the `allowedFields` array will be included in the Discord message.

---

## 🎯 Why Use This Script?

- ✅ Send form responses instantly to Discord
- ✅ Share only specific fields (ignore unnecessary data)
- ✅ Keep formatting clean and aligned
- ✅ Simple and lightweight setup
- ✅ No external libraries required

This is useful for:
- Community applications
- Staff applications
- Registration forms
- Profile submissions
- Lead collection
- Notifications for teams

---

## ⚙️ Setup Instructions

### 1️⃣ Create a Discord Webhook

1. Go to your Discord server.
2. Open **Server Settings → Integrations → Webhooks**.
3. Click **New Webhook**.
4. Copy the Webhook URL.

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

### 3️⃣ Configure Allowed Fields

Modify this array to match your exact Google Form question titles:

```javascript
var allowedFields = ["Name", "Surname", "Age", "Email"];
```

⚠️ The names must match the form question titles exactly.

---

### 4️⃣ Set the Trigger

1. In Apps Script, click **Triggers** (clock icon).
2. Click **Add Trigger**.
3. Choose:
   - Function: `onFormSubmit`
   - Event source: `From form`
   - Event type: `On form submit`

Save and authorize the script.

---

## 📩 Example Discord Output

```
Date     : 2026-02-16 12:34:56
------------------------------
Name     : John
Surname  : Doe
Age      : 25
Email    : john@email.com
```

The message appears inside a Discord embed titled:

> 👤 Specific Profile Details

---

## 🛡 Notes

- The script ignores empty fields.
- If the webhook URL is missing, it will log an error.
- Only fields listed in `allowedFields` are sent.
- Data is formatted in a code block for clean alignment.

---

## 🚀 Customization Ideas

- Change the embed color
- Add a footer
- Include all form responses
- Mention a Discord role
- Add validation rules

---

## ⚠ Important Notes

- Never share your webhook URL publicly.
- If exposed, regenerate the webhook in Discord.
- The script logs API errors for easier debugging.
