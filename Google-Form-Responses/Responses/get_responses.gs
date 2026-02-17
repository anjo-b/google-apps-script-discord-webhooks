function onFormSubmit(e) {
  var discordWebhookUrl = "PASTE_YOUR_DISCORD_WEBHOOK_URL_HERE";

  if (!discordWebhookUrl || discordWebhookUrl === "PASTE_YOUR_DISCORD_WEBHOOK_URL_HERE") {
    Logger.log("Please set your Discord Webhook URL.");
    return;
  }

  var sheet = e.range.getSheet();
  var headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
  var rowValues = e.values;

  // Format the date (Column 0 is usually the Timestamp)
  var submissionDate = rowValues[0] ? rowValues[0].toString() : "No Date";
  
  var responseList = "";
  var longestHeader = 0;

  // 1. Find the longest header for alignment (starting from index 1 to skip raw timestamp)
  for (var i = 1; i < headers.length; i++) {
    if (rowValues[i] && rowValues[i].toString().trim() !== "") {
      if (headers[i].toString().length > longestHeader) {
        longestHeader = headers[i].toString().length;
      }
    }
  }

  // 2. Add the Date at the top of the list
  var dateLabel = "Submission Date";
  if (dateLabel.length > longestHeader) longestHeader = dateLabel.length;
  
  responseList += dateLabel + " ".repeat(longestHeader - dateLabel.length) + " : " + submissionDate + "\n";
  responseList += "-".repeat(longestHeader + submissionDate.length + 3) + "\n"; // Decorative separator

  // 3. Build the rest of the list
  for (var i = 1; i < headers.length; i++) {
    var question = headers[i].toString();
    var answer = rowValues[i] ? rowValues[i].toString().trim() : "";

    if (answer !== "") {
      var padding = " ".repeat(longestHeader - question.length);
      responseList += question + padding + " : " + answer + "\n";
    }
  }

  var payload = {
    "embeds": [{
      "title": "📋 New Form Entry",
      "color": 3447003,
      "description": "```\n" + responseList + "```",
      "footer": { "text": "Form System" }
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
