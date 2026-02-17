# 📋 Google Form Responses to Discord

This folder contains Google Apps Script utilities that automatically send Google Form responses to Discord channels via webhooks. Two versions are provided to handle different use cases.

## 📁 Folder Structure

```
Google Form Responses/
├── Responses/
│   ├── get_responses.gs      # Sends ALL form fields to Discord
│   └── README.md              # Detailed documentation
└── Specific-Responses/
    ├── get_specific_responses.gs  # Sends SELECTED fields only
    └── README.md                   # Detailed documentation
```

## 🎯 Which Script Should You Use?

| Script | Best For | Behavior |
|--------|----------|----------|
| **`Responses/get_responses.gs`** | Full data collection | Sends every form question and answer |
| **`Specific-Responses/get_specific_responses.gs`** | Privacy/Filtering | Sends ONLY specified fields (e.g., Name, Email) |

## 🚀 Quick Start

### Prerequisites
- A Google Form linked to a Google Sheet
- A Discord server with webhook creation permissions
- Google account (for Apps Script)

### 1️⃣ Create a Discord Webhook
1. Open your Discord server
2. Go to **Server Settings → Integrations → Webhooks**
3. Click **New Webhook**
4. Name it (e.g., "Form Responses")
5. Copy the Webhook URL

### 2️⃣ Add the Script to Google Sheets
1. Open the Google Sheet linked to your form
2. Click **Extensions → Apps Script**
3. Delete any existing code
4. Paste your chosen script (`get_responses.gs` or `get_specific_responses.gs`)
5. Replace the placeholder URL:
   ```javascript
   var discordWebhookUrl = "PASTE_YOUR_DISCORD_WEBHOOK_URL_HERE";
   ```
   with:
   ```javascript
   var discordWebhookUrl = "https://discord.com/api/webhooks/your-actual-webhook-id/token";
   ```
6. Click **Save** (💾 icon)

### 3️⃣ Configure (for Specific Responses only)
If using `get_specific_responses.gs`, modify the `allowedFields` array to match your form:
```javascript
var allowedFields = ["Name", "Email", "Age", "Country"]; // Add your exact question titles
```

### 4️⃣ Set Up the Trigger
1. In Apps Script, click the **clock icon** (Triggers) in the left sidebar
2. Click **+ Add Trigger** (bottom right)
3. Configure:
   - **Function:** `onFormSubmit`
   - **Event source:** `From spreadsheet`
   - **Event type:** `On form submit`
   - **Failure notification:** Get notified if something breaks
4. Click **Save**
5. Authorize permissions when prompted

## 📤 What Gets Sent to Discord

### **Full Responses Script** (`get_responses.gs`)
```
Submission Date : 2/17/2026 14:32:10
-------------------------------------
Name            : John Doe
Email           : john@email.com
Age             : 25
Country         : USA
Feedback        : Great service!
```

### **Specific Responses Script** (`get_specific_responses.gs`)
```
Date     : 2/17/2026 14:32:10
------------------------------
Name     : John Doe
Email    : john@email.com
Age      : 25
```

## ⚙️ Customization Options

### Change Embed Color
Modify the `color` value (decimal color codes):
```javascript
"color": 3447003,  // Blue
// Common colors:
// 3447003 - Blue
// 15158332 - Red  
// 3066993 - Green
// 15844367 - Gold
// 10181046 - Purple
```

### Change Embed Title
```javascript
"title": "📋 New Form Entry",  // Full responses
"title": "👤 Specific Profile Details",  // Specific responses
```

### Add a Custom Footer
```javascript
"footer": {
  "text": "Form System v2.0"
}
```

### Include Bot Name & Avatar
```javascript
var payload = {
  "embeds": [embed],
  "username": "Form Bot",  // Custom bot name
  "avatar_url": "https://i.imgur.com/your-image.png"  // Custom avatar
};
```

## 🔧 Testing Your Setup

1. **Submit a test response** to your Google Form
2. Check your Discord channel for the message
3. If nothing appears:
   - Check Apps Script **Executions** tab for errors
   - Verify your webhook URL is correct
   - Ensure the trigger is properly set up

## 🐛 Common Issues & Solutions

| Issue | Solution |
|-------|----------|
| Nothing happens after form submit | Check trigger setup in Apps Script |
| "Invalid Webhook URL" error | Verify URL starts with `https://discord.com/api/webhooks/` |
| Some fields missing | For specific script: check `allowedFields` matches exact question titles |
| Empty fields showing | Scripts automatically skip empty responses |
| Date format wrong | Modify the `submissionDate` formatting in the script |

## 🔒 Security Notes

- **Never share your webhook URL** publicly
- If exposed, regenerate the webhook in Discord immediately
- Scripts only send data—they don't store or process it elsewhere
- Google requires authorization—review permissions carefully

## 🎨 Advanced Usage Ideas

### Add Role Mentions
```javascript
// Add this before sending
var message = "<@&123456789> New form submission!"; // Role ID
var payload = {
  "content": message,
  "embeds": [embed]
};
```

### Include Response Count
```javascript
// Add to embed fields
{
  "name": "Total Responses",
  "value": sheet.getLastRow() - 1,  // Exclude header row
  "inline": true
}
```

### Send to Multiple Channels
Create multiple webhook URLs and loop through them:
```javascript
var webhooks = ["url1", "url2", "url3"];
webhooks.forEach(function(url) {
  // Send to each URL
});
```

## 📚 Related Resources

- Main project: [Discord Webhook Scripts for Google Apps Script](../)
- Simple text notifications: [Send_Notifications](../Send_Notifications/)
- Alert system with embeds: [Alert](../Alert/)
