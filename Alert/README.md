
# Google Apps Script → Discord Webhook (Embed Message)

This script sends a formatted **embed message** to a Discord channel using a Discord Webhook.

It is designed to be used inside **Google Apps Script**, typically connected to **Google Sheets**, but it can be used in any Apps Script project.

---

## 🚀 Why This Script?

This script allows you to automatically send structured notifications from Google services to Discord.

Common use cases:

- ✅ Notify a Discord server when a task is completed
- 📊 Send updates from Google Sheets
- ⏰ Trigger alerts based on form submissions
- 🤖 Automate workflow notifications
- 🔔 Monitor status changes

Instead of manually posting updates, this script sends a clean, professional embed message automatically.

---

## 📦 What It Does

- Sends a Discord **embed message**
- Includes:
  - Title
  - Description
  - Color styling
  - Status field
  - Timestamp
  - Footer
- Handles errors and logs responses
- Checks if the webhook URL is configured

---

## 🛠 Setup Instructions

### 1️⃣ Create a Discord Webhook

1. Open your Discord server.
2. Go to **Server Settings → Integrations → Webhooks**.
3. Click **New Webhook**.
4. Copy the Webhook URL.

---

### 2️⃣ Add Script to Google Apps Script

1. Open Google Sheets.
2. Go to **Extensions → Apps Script**.
3. Paste the script into the editor.
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

### 3️⃣ Run the Script

- Click **Run** inside Apps Script.
- Authorize permissions (first time only).
- Check **Logs** to confirm successful execution.

---

## ⚙️ Configuration

You can customize the bot's appearance by modifying the `payload` variable in the script:

### Bot Username and Avatar (`username`, `avatar_url`)

```javascript
// Before - Default configuration (no username/avatar specified)
var payload = {
  "embeds": [embed]
};

// After - With custom username and avatar
var payload = {
  "embeds": [embed],
  "username": "System Monitor",
  "avatar_url": "https://i.imgur.com/AfFp7pu.png"
};
```

### Configuration

**Minimal embed with custom bot:**
```javascript
var payload = {
  "embeds": [embed],
  "username": "Alert Bot",
  "avatar_url": "https://i.imgur.com/AfFp7pu.png"
};
```

### Available Configuration Options

| Field | Description | Example |
|-------|-------------|---------|
| `username` | Display name for the bot | `"System Monitor"` |
| `avatar_url` | Direct URL to bot profile picture | `"https://i.imgur.com/AfFp7pu.png"` |

---

## 📤 Example Output in Discord

The script sends an embed that looks like:

- 🚀 New Alert from Google Sheets  
- Status: ✅ Success  
- Timestamp: Current date & time  
- Footer: Sent via Google Apps Script  

The message will appear with your custom bot name and avatar in Discord.

---

## ⚠ Important Notes

- Never share your webhook URL publicly.
- If exposed, regenerate the webhook in Discord.
- The script logs API errors for easier debugging.
- Avatar images should be publicly accessible URLs (use image hosting services like Imgur).
- If no `username` is specified, Discord will use the default webhook name.
- If no `avatar_url` is specified, Discord will use the default webhook avatar.
