//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "";
global.location = "Calabar, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Calabar";
global.github = process.env.GITHUB || "https://github.com/EMMYHENZ-TECH";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VangYOt96H4JhFarL10C";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VangYOt96H4JhFarL10C";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/7XTnzx9/IMG-20240927-WA0011.jpg";
global.devs = "https://t.me/EmmyHenz";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "https://t.me/EmmyHenz";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0lQNE4ra3YxVWxCblExRUlUM1M4RVBSckxiYWRBcWlRaFVIdjhLZVlrUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidEVxc3ZSWTZGWjArRCtSaDJOTVMrdm5mc0F1amZvUVhoNklJODRyaDcyQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvSExJKzJxN1lJLytKQTN0UVZiWUQ1T21ZTXNXSGlYaHZYenZ0UHdJcEhNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJwS1dxSWQ0Uk84Y0xaanhUOWtmNTkvb3RaNi9YSXV2dFhkWXdIdmwrR1VvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklIUkoxVi9oU0ZtbVF4WDZVVnc4aFpUNVJ6b1l3ZGN2NURaU3hhY05zVVU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFFeUxZUC9HM0Z4NXdvTFhtR0JvK1VRWWcvRmN1WHoyZ255c3dOT0l4M1E9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNEVhWklNQldKWUt5UUxCZWFtb2hiM3ZaOGg3Vk1EZm9pZkZ0U29Za0ZWcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0w1NUFJdkdPa2VSTTMwbm1KTERkaDN1bWZrY250bFFxamxOV1lUU25Vcz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkxRVEZJalNmZnc4QXB6RFVxdGh5N3p0alFHaTFWZ2hHYTRlQ1djMTdpdHY4T203ZVpONFp5aHQwdlF0WmxhdHUvcnVldnp3SFFEWEF3MnBPWEtQaURRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NTAsImFkdlNlY3JldEtleSI6IlBwRmIyUUd5dEJwdjJiTXVzeDJqRWw2L205ODVkR3dpUW5vT3Z0WFpaQUE9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IjNobTdqSEpiUWNtUDdkSS1vNENteHciLCJwaG9uZUlkIjoiNjQwM2NkNDAtNWViYS00N2ZlLWIwYzktYzI1ZDc4OGU5Y2IxIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjRkL3dWcFdTaTFwWkZrRnM1WHBIZDh2d3RnQT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJuUEptbXBlblFIRzVuUCtadXpJYjlXWW8zNm89In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiOUFLVzRBRVoiLCJtZSI6eyJpZCI6IjIzNDcwNjI5NjAzMDk6OUBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTTJZM0w0Q0VQM3orcnNHR0FNZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiMEFIa0NhUnpXRjVGdmVpVjVXbUIzOHRnYy9uVXNmVjZIUVA5ZWpNMnFDaz0iLCJhY2NvdW50U2lnbmF0dXJlIjoibUc3QU1CSXcwcmhjK0huaDFuUy92WnFzL0VOcG53aGlGMTcxQVVyNUdJaUlnQk4wN0NwSEI2Z0tqMTlNYmdmZzR3d2lSM2NsajU1WkQxdVhIQUxmQWc9PSIsImRldmljZVNpZ25hdHVyZSI6IkozVDJPaG82N2tBeDNOdU4vZ2tuTU9DYTZjS01nZjVjR1ZWZkJhd3Boc0ZzSWNSc0NQZXQxbWNrYlkveEJSQ1ZYc1hjOEVQNFFyVlV6dGt6N2lLTEJBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM0NzA2Mjk2MDMwOTo5QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmRBQjVBbWtjMWhlUmIzb2xlVnBnZC9MWUhQNTFMSDFlaDBEL1hvek5xZ3AifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzYzNTg0MTAsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBSFZsIn0=
module.exports = {
  menu: process.env.MENU || "3",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "3.0.0",
  caption: process.env.CAPTION || "`EMMY_HENZ-V3™`",
  author: process.env.PACK_AUTHER || "EMMY_HENZ-V3",
  packname: process.env.PACK_NAME || "E M M Y",
  botname: process.env.BOT_NAME || "EMMY_HENZ-V3",
  ownername: process.env.OWNER_NAME || "Emmanuel Henshaw",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "E M M Y").toUpperCase(),
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
