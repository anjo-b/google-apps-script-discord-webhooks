function onFormSubmit(e) {
  var discordWebhookUrl = "PASTE_YOUR_DISCORD_WEBHOOK_URL_HERE";

  if (!discordWebhookUrl || discordWebhookUrl === "PASTE_YOUR_DISCORD_WEBHOOK_URL_HERE") {
    Logger.log("Please set your Discord Webhook URL.");
    return;
  }

  // --- CONFIGURATION: Add the exact header names you want to keep here ---
  var allowedFields = ["Name", "Surname", "Age", "Email"]; 
  // -----------------------------------------------------------------------

  var responses = e.namedValues;
  var submissionDate = e.values[0]; // Gets the timestamp
  var responseList = "";
  var longestHeader = 0;

  // 1. Calculate alignment based only on allowed fields
  allowedFields.forEach(function(field) {
    if (field.length > longestHeader) longestHeader = field.length;
  });
  
  // Add "Date" to the alignment calculation
  var dateLabel = "Date";
  if (dateLabel.length > longestHeader) longestHeader = dateLabel.length;

  // 2. Build the Date row
  responseList += dateLabel + " ".repeat(longestHeader - dateLabel.length) + " : " + submissionDate + "\n";
  responseList += "-".repeat(longestHeader + 25) + "\n";

  // 3. Build only the allowed rows
  allowedFields.forEach(function(field) {
    var answer = responses[field] ? responses[field][0] : ""; // namedValues returns an array
    
    if (answer && answer.trim() !== "") {
      var padding = " ".repeat(longestHeader - field.length);
      responseList += field + padding + " : " + answer + "\n";
    }
  });

  var payload = {
    "embeds": [{
      "title": "👤 Specific Profile Details",
      "color": 3447003,
      "description": "```\n" + responseList + "```"
    }]
  };

  var options = {
    "method": "post",
    "contentType": "application/json",
    "payload": JSON.stringify(payload),
    "muteHttpExceptions": true
  };

  try {
    UrlFetchApp.fetch(discordWebhookUrl, options);
  } catch (error) {
    Logger.log("Error: " + error.toString());
  }
}
