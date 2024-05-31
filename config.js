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
global.github = process.env.GITHUB || "https://github.com/Itxxwasi/WASI-MD-V2";
global.gurl = process.env.GURL || "https://chat.whatsapp.com/FaqPYCEsxE95vr4SP78HeD";
global.website = process.env.GURL || "https://chat.whatsapp.com/FaqPYCEsxE95vr4SP78HeD";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/30230e94c9a6c1894f190.jpg";
global.devs = "923135673658";
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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOEVPdTVZdDVEOEJJaFIrc3M2TDR3T3JDTnhzK2Jsakg5S3kyRm9uYjIxVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid29SQmZrOTlTcWZzZHlXSitkVHhuVmtoV25lVFBWWU9ORWUzY2RnT1R3az0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBSkMyWHFvVDJCTjBQWTE2T3FzYkl3Y1VZU1RZVnd6cHVCS1pEYkVpN2xnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvaHNaaUxuMk1NTkpWRllCZzUwbGE0MGFJeDYrQnVwOVZDQjI5V0pjTVc4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitPR0poOG5lcWhXbU9uays2eGFITHBncVRsV3ViWGl0RXo3ZXRRMzlXRms9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNjNUJaeGljRkQ4YmwvTFRrdFdVVGgrdkF0ZXRHRnVzUG5zb1pzSkpzRVk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ01UdnJpYmd3alcxNEVQTnI2ekpyM0I3NkpnMHhSMlFjOUJKQzVOdnBtQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibXM5RElacEVMUlhBU2RKRUJSVDhScnB6a3lIZGJnTExBNEJhQlJMdVdsST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImpJS3BmbHl0eUJPTnArcDMvRVhsa3RYblJLajRtKzNIUVNjdnpzMGQ0R0hML0tuTnBLMUk5dm5TR014dzVyRVZVUytHL2ZvZW9jeTJBNGMrTkc2R0N3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTg4LCJhZHZTZWNyZXRLZXkiOiJNQis2USs0R1N2bjVZNitRcEtza3hNb2EvVlBwUjhxK0NnWjhGUm5HUnNnPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjYxNDg1OTc1NDExQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkNBMTMxQzQ1MUJGRDRFODkwRjVFMDVFNDU0N0ZGQkNDIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MTcxNjU4NzB9LHsia2V5Ijp7InJlbW90ZUppZCI6IjYxNDg1OTc1NDExQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkI2MzA3RURFOUFCMkQ2Q0EyMkQyREFBNEU0NzQ0OUMxIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MTcxNjU4NzF9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IlZGQ3FTdjRuUUUyOEZGb0dzNXc4OWciLCJwaG9uZUlkIjoiMGU2MmM3NGEtZWRhYy00ZjhjLWJkMzItNmJiN2VmMWQ0ZDg2IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZzcFJvdHFvbjRaNmFObS9yL2w4S3VjWG44Zz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIvMnZ0cVpxbE9kbWxHcDNpN1dlVlZmclZvSjg9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiQkNBSzk1UVEiLCJtZSI6eyJpZCI6IjYxNDg1OTc1NDExOjdAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiQW5kcmV3IFRhdGEifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0tER3c0QUhFSisrNTdJR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IkYzOWhxdjZqQUJIUUdKK0owc0dHVktuN2NNWDhFenQwdGRXUDRMMFJLMkk9IiwiYWNjb3VudFNpZ25hdHVyZSI6IlVtcWlNQWRaQzZUOEVDWU1LWWJHY0djU2o1Ui9WVS8xaGdtMjdRS1E1c1lGb2p1ekFxL0lwQ0JsTkc1eUNxOUM3enhmQTVod3lYajNNekh0bzdMNUN3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJHKzBnay90ZWQ4cDkzVUxBVXJtR2xPU1ArYVZsNmlPejJxakZiaWhoUFpiZmQ5Ty8zMXdSUTN4aUIwd1hiR0NCbTloNCtwdW5DM2tUSDVNbEJYWWZBUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjYxNDg1OTc1NDExOjdAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCUmQvWWFyK293QVIwQmlmaWRMQmhsU3ArM0RGL0JNN2RMWFZqK0M5RVN0aSJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcxNzE2NTg2OCwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFIN28ifQ=="
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
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
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
