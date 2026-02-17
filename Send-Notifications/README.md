
# Discord Webhook Script for Google Apps

A simple, safe script to send notifications from Google Apps Script (Sheets, Forms, etc.) to a Discord channel.

## ⚡ Quick Setup

1.  **Get your Webhook URL:**
    * Go to **Discord Server Settings** > **Apps** > **Integrations** > **Webhooks**.
    * Create a New Webhook and copy the **Webhook URL**.
2.  **Install the Script:**
    * Open your Google Sheet or Project (`Extensions` > `Apps Script`).
    * Paste the `sendHelloWorldToDiscord` code into the editor.
3.  **Configure:**
    * Replace:

```javascript
var discordWebhookUrl = "PASTE_YOUR_DISCORD_WEBHOOK_URL_HERE";
```

with:

```javascript
var discordWebhookUrl = "YOUR_ACTUAL_WEBHOOK_URL";
```

5. Save the project

---

## 🕹️ Usage

To send a message, run the function:

```javascript
sendHelloWorldToDiscord();
```

To verify it works without spamming, run the test function:

```javascript
testDiscordConnection();
```


---

### 3️⃣ Run the Script

- Click **Run** inside Apps Script.
- Authorize permissions (first time only).
- Check **Logs** to confirm successful execution.

---

## ⚙️ Configuration

You can customize the bot's appearance by modifying the `payload` variable in the script:

### Message Content (`content`)

The `content` field supports `\n` for line breaks. Here are various examples:

```javascript
// Before - Hardcoded message
var payload = {
  content: "Hello, World! 🚀" + "\n" + 
           "This is line two of the message." + "\n\n" + 
           "There is a double space above this line."
};

// After - Using message variable (recommended)
var message = "Hello, World! 🚀" + "\n" + 
                "This is line two of the message." + "\n\n" + 
                "There is a double space above this line.";

var payload = {
  content: message
};
```

#### Content Formatting Examples:

**Single line message:**
```javascript
var message = "Hello, World! 🚀";
```

**Multi-line message with single breaks:**
```javascript
var message = "Line 1" + "\n" + 
              "Line 2" + "\n" + 
              "Line 3";
// Output:
// Line 1
// Line 2
// Line 3
```

**Message with double spacing:**
```javascript
var message = "Section 1" + "\n\n" + 
              "Section 2" + "\n\n" + 
              "Section 3";
// Output:
// Section 1
//
// Section 2
//
// Section 3
```

### Complete Configuration

**Minimal setup:**
```javascript
var payload = {
  content: message
};
```

**Fully customized setup:**
```javascript
var payload = {
  content: message,
  username: "Server Monitor",
  avatar_url: "https://i.imgur.com/AfFp7pu.png"
};
```

### Available Configuration Options

| Field | Description | Example |
|-------|-------------|---------|
| `content` | The message text (supports `\n` for line breaks) | `"Line1\nLine2\n\nLine4"` |
| `username` | Display name for the bot | `"System Monitor"` |
| `avatar_url` | Direct URL to bot profile picture | `"https://i.imgur.com/AfFp7pu.png"` |

### Content Formatting Cheat Sheet

| Format | Code | Output |
|--------|------|--------|
| New line | `"Line1" + "\n" + "Line2"` | Line1<br>Line2 |
| Double space | `"Line1" + "\n\n" + "Line2"` | Line1<br><br>Line2 |
| Separator line | `"──────────────"` | ────────────── |
| Double line | `"══════════════"` | ══════════════ |
| Dotted line | `"┄┄┄┄┄┄┄┄┄┄┄┄"` | ┄┄┄┄┄┄┄┄┄┄┄┄ |

---

## ⚠ Important Notes

- Never share your webhook URL publicly.
- If exposed, regenerate the webhook in Discord.
- The script logs API errors for easier debugging.
- Avatar images should be publicly accessible URLs (use image hosting services like Imgur).
- Discord has a 2000 character limit for the `content` field.
