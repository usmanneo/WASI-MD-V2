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
global.userImages = process.env.USER_IMAGES || "true";
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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib09ONnNFeGdCWlBOdmpvbmtYRWFDWUo3TlJ2Yy8wcml2U3V4OUZDODZGND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOXJTbTBWbVpvZmZJNHFFdXZieGxNZTRDYy9iQnh4WkNHcFZiRXVCR2FHRT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1Qm04R3p4Nm5peng1QUxZZFhOOFEzZHcxTXFFRVBtejdaMzVMNFF1b1ZBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJURDB6MWg1NG5ET0JCV0F3b3ZTWWhQQXNROVBOcTUrUS9rLzFTZjZjcGhrPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1NN3VIeWt2MmZ4RThQUDVJQS81VHhhODcyUThyeC9udVBsSTdoMk5xRmM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhGdmZoMnIrWlhUUXh0RG5YRzNhbmpKanRaS2VzUnhnSG5tR2V3cVUwU2c9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0lUdWVTSndrb2t0SEc4d0M3RWtIU1VScnp2eFhZbWNJS3hrUzJncWIyUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoielZUZmZ2eW92MzRPR3loc3lrZEVPNXY3M1k3Y2NBL3pZZUFOZUY2U2JtST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjNpTE01dVJSdktCVzNGLzZCWk95MERDMUZIWm1ablNPV1p1ZTRWdC9SS2NNL3pJR1A1K3dKekxUNDBxRVBYSDVJR0w2MWZzL3VUWldzK2svaHZibGdRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NDUsImFkdlNlY3JldEtleSI6IlYwWmN0UUxCN3VjdVdQYXMxd3c4cmFDcktZTURtOWNVM2RGelBjTnpCNWM9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Ikp1NlRteDdmUWFXYl9GREY3c0pTdXciLCJwaG9uZUlkIjoiMjE5NjkzNGQtZTg2ZC00NmQwLTkyMzctMGVkNTlhNWU0ZGEwIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9uU0RkZzJkWVNxYktmZ0xUc3Y0b1dWb3htYz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJIby9IbXBKOUtNSURGdDgxOTYwOVp6cE9MM0E9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiNzlHOTc2QzUiLCJtZSI6eyJpZCI6IjYxNDg1OTc1NDExOjhAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiQW5kcmV3IFRhdGEifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0tIR3c0QUhFSnJjNTdJR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IkYzOWhxdjZqQUJIUUdKK0owc0dHVktuN2NNWDhFenQwdGRXUDRMMFJLMkk9IiwiYWNjb3VudFNpZ25hdHVyZSI6IjREY0FmK1N0aFVaY1M0ZUlIUGNIZzFsVkFNZVNpNS9tT2M3OUtYN0ZPWm1wUndNNVNNUWFOdUxxQ2tMcExPYWRQQlRZaVdwOHppYzZDTnFuakxuUEFBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJsY3R5bElJdWhZOSttMFc1QlgxeEZ0YTFjTnNsQWlmYng5N0JlaUxSYjdvSWcyRHpLR2RPMDJ6YU1BTnluL3MwcUExRG5vL3MvVEFVQXU3aFJvbUxoQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjYxNDg1OTc1NDExOjhAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCUmQvWWFyK293QVIwQmlmaWRMQmhsU3ArM0RGL0JNN2RMWFZqK0M5RVN0aSJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcxNzE2OTcwMywibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFIN28ifQ=="
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
