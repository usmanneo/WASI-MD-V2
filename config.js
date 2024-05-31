//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "hunterpasha456@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "https://github.com/usmanneo/WASI-MD-V2";
global.gurl = process.env.GURL || "https://chat.whatsapp.com/FaqPYCEsxE95vr4SP78HeD";
global.website = process.env.GURL || "https://chat.whatsapp.com/FaqPYCEsxE95vr4SP78HeD";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/30230e94c9a6c1894f190.jpg";
global.devs = "923034088220";
global.sudo = process.env.SUDO || "923034088220,923034088220";
global.owner = process.env.OWNER_NUMBER || "923034088220";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://wasimdscanner-68feefafb737.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU0hHSVlrRXMwdTF4Qk9oUDExQ1B0Mnl2V05kbGM1UjNpVG53Z3lqVmFWYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZGdUT0xvRldsM1BtaTZLNnVLSm1VbkU3bEE4Z1E4VWE3ZlhGeVJMbTJVOD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3RTBNbmJKSjZObjdkNG1SWXFtV0RzTFo4eDhYdnJycDZoK1VOdHdmRkZVPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzdmkvQm1kL1hPa0wrcWlMNk15U1BhWWNNQTEvMW82M0VSMVJDZTNYZmlZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjRMTHZTR1htL1Q5RXB6SlYxc0xtL3VjUlEyOHhwemlVTFBackl4cm1sWDA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InhFc1ZGWjhtNlZ3QzQrd1VsajFpd09ORCsrcm4zZWtJbnBCL0FkQVp1a2M9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMFBZY0hObXJLVlpCd3lidzkvV0RrLzc2MUZaeVBSTlhnVXF6SXNuVFRVdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNDBwNzZIaUVXbHgrV05vUzJMQ1F1bDltVmpWL3p6ZkJheVlGTGQyWXptaz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Imd2bGFVYnByR04vZkorWjRsRVlaRXdEalRhUnYyVlVrRVNsd0Z2UXllVmYwVTFxREd6VUJLOWtHdEE2L0xGRkh0bjRzUVNVRW1rWWJXOXl0RmI1RWd3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjE2LCJhZHZTZWNyZXRLZXkiOiJFWVpRbHkvN1BDZE5UTHRYNUczL0w3clVlSDNMc3lhWkRIQVpOWWx4NGwwPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjYxNDg1OTc1NDExQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkVGOTRFODM2N0QzNTI2NUE1Q0JFMUQzMUVFQUQ2MUNFIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MTcxNzI3NjF9LHsia2V5Ijp7InJlbW90ZUppZCI6IjYxNDg1OTc1NDExQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkUyRjAwMDYwM0RDOTExNTQyRjkwNzI1MzgyMDg4Q0Y5In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MTcxNzI3NjN9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IkdGMUhMWHEwUl9TbGtsUzdOOEtyZkEiLCJwaG9uZUlkIjoiM2VkYThiNmEtNzcxNC00NjU5LWE0M2QtNGQxYTc1NTY1M2I3IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkZsK0k0d0NyUWdKaEVKdERha0FjVmZEUUxjdz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJKNEF3a3FRc3MwOGt1aEV0ekF2dElnN1ZKcFE9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiNlE4QUpNMzkiLCJtZSI6eyJpZCI6IjYxNDg1OTc1NDExOjlAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiQW5kcmV3IFRhdGEifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0tMR3c0QUhFSXIwNTdJR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IkYzOWhxdjZqQUJIUUdKK0owc0dHVktuN2NNWDhFenQwdGRXUDRMMFJLMkk9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkJYUytmZDZxVGtXQWtkOVp0VjhCcXJ1ODViMHdTdUhhOEZjaFgvNFVBaWlQS1VCWFBjOFFnQXpPelJzcUZneG5Udlp4aUpMdEh3b25ueHNRa1lzN0RRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiIxeGNTY3Z4bEtINi9wTGtRb1NMWHgrMjB2SnNZeElGSWQyUXBka0gzRyt5MjBIdWp0SHlvRmZSVkJRTkVaUlJzOUdvNXlmeTcvL29MczhsUVBNSHFpQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjYxNDg1OTc1NDExOjlAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCUmQvWWFyK293QVIwQmlmaWRMQmhsU3ArM0RGL0JNN2RMWFZqK0M5RVN0aSJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcxNzE3Mjc1OSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFIN28ifQ=="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝐅𝐈𝐋𝐄-𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃-𝐁𝐘-Usman-𝐌𝐃-𝐕2😍",
  author: process.env.PACK_AUTHER || "Usman",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "Usman",
  ownername: process.env.OWNER_NAME || "Usman",
  errorChat: process.env.ERROR_CHAT || "923034088220",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "2GBv7MBGs7NossXTnN1rsvvX",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "Usman").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
