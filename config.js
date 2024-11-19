const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348139598985";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_22_05_11_19_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAyMTMsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNzMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMzQsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMzEsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTEzLFxuICAgICAgICAxMzYsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMzIsXG4gICAgICAgIDcsXG4gICAgICAgIDczLFxuICAgICAgICAyMDQsXG4gICAgICAgIDQ1LFxuICAgICAgICAxOTksXG4gICAgICAgIDMxLFxuICAgICAgICAyMjEsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjE0LFxuICAgICAgICA2MixcbiAgICAgICAgMTMwLFxuICAgICAgICA5LFxuICAgICAgICA5MixcbiAgICAgICAgMjI3LFxuICAgICAgICAzOCxcbiAgICAgICAgODFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMTksXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjIxLFxuICAgICAgICA1LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjE2LFxuICAgICAgICA1MixcbiAgICAgICAgMTExLFxuICAgICAgICAxNDYsXG4gICAgICAgIDczLFxuICAgICAgICA5NixcbiAgICAgICAgMjI5LFxuICAgICAgICAyMjMsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMCxcbiAgICAgICAgNDIsXG4gICAgICAgIDIzMixcbiAgICAgICAgODcsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMjEsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTc2LFxuICAgICAgICA5OCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMzMsXG4gICAgICAgIDc4LFxuICAgICAgICAxNDMsXG4gICAgICAgIDExNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAyMTUsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMTYsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNjcsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTgyLFxuICAgICAgICAxNDksXG4gICAgICAgIDgxLFxuICAgICAgICAyMzYsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMTMsXG4gICAgICAgIDc4LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTQsXG4gICAgICAgIDk5LFxuICAgICAgICAxMDIsXG4gICAgICAgIDI0LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNDksXG4gICAgICAgIDU1LFxuICAgICAgICAxMjEsXG4gICAgICAgIDc2LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTc1LFxuICAgICAgICAxMDZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAzNSxcbiAgICAgICAgOTAsXG4gICAgICAgIDI0LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIzNyxcbiAgICAgICAgODIsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTIsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTIwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMTEsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgOTUsXG4gICAgICAgIDcsXG4gICAgICAgIDEzMixcbiAgICAgICAgOTQsXG4gICAgICAgIDQ4LFxuICAgICAgICA3OSxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMzgsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAyNTIsXG4gICAgICAgIDc0LFxuICAgICAgICA5OCxcbiAgICAgICAgNjIsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNjgsXG4gICAgICAgIDI4LFxuICAgICAgICAxNDYsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNDYsXG4gICAgICAgIDYsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjMwLFxuICAgICAgICAxOTMsXG4gICAgICAgIDMsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjAxLFxuICAgICAgICAxOTYsXG4gICAgICAgIDg4LFxuICAgICAgICA1OSxcbiAgICAgICAgMTA0LFxuICAgICAgICAyNDIsXG4gICAgICAgIDM5LFxuICAgICAgICAyMyxcbiAgICAgICAgNDgsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMzIsXG4gICAgICAgIDQxLFxuICAgICAgICAxNjYsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTE2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMjUsXG4gICAgICAgIDY4LFxuICAgICAgICA5NixcbiAgICAgICAgMSxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMjQsXG4gICAgICAgIDEzLFxuICAgICAgICA5LFxuICAgICAgICAxNTQsXG4gICAgICAgIDgyLFxuICAgICAgICA2MixcbiAgICAgICAgMTMxLFxuICAgICAgICA4NCxcbiAgICAgICAgMTIzLFxuICAgICAgICA1LFxuICAgICAgICAxMixcbiAgICAgICAgMjQzLFxuICAgICAgICAxNTEsXG4gICAgICAgIDE5NixcbiAgICAgICAgNTMsXG4gICAgICAgIDE3LFxuICAgICAgICAyMjksXG4gICAgICAgIDE1OCxcbiAgICAgICAgNTcsXG4gICAgICAgIDEzMixcbiAgICAgICAgNDEsXG4gICAgICAgIDMzLFxuICAgICAgICAyNDYsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNjVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDY3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE1MixcbiAgICAgICAgICA3LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDM5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE5LFxuICAgICAgICA1MSxcbiAgICAgICAgNDYsXG4gICAgICAgIDIwNixcbiAgICAgICAgNDgsXG4gICAgICAgIDcwLFxuICAgICAgICAxMDcsXG4gICAgICAgIDE0LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxODksXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTU3LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNDQsXG4gICAgICAgIDI5LFxuICAgICAgICAxNjksXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMjksXG4gICAgICAgIDE1MixcbiAgICAgICAgMTE2LFxuICAgICAgICAyMjYsXG4gICAgICAgIDYyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNDQsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNzMsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjE3LFxuICAgICAgICAxOTksXG4gICAgICAgIDE4MixcbiAgICAgICAgMTgwLFxuICAgICAgICA2MixcbiAgICAgICAgMTg3LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNjAsXG4gICAgICAgIDYzLFxuICAgICAgICAxMDcsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMixcbiAgICAgICAgNTYsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMzYsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMDgsXG4gICAgICAgIDQyLFxuICAgICAgICAzOSxcbiAgICAgICAgMzEsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTIsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNTUsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxOTEsXG4gICAgICAgIDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEzOCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ3UFY2TzhXbXFKeEpxd3ZtN1Y3NFAvTDVRNGV4aGltdlUvdkwxeTFHcExZPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDgxMzk1OTg5ODVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjU3ODRDMzgyRTM5OENGNDI1MEE0OTc1QTIzMTBDN0ZGXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczMjA1MzkwMVxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDgxMzk1OTg5ODVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjA2QkFDOEFGNDY0NkEwQzc4MUE4MkE1QTY3NzhEQ0VFXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczMjA1MzkwMlxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJCU0Y2NmxGVlRxT0Y0bWE3UF9ra1h3XCIsXG4gIFwicGhvbmVJZFwiOiBcImFjNzgyMGFlLTAwMDctNGY0Ny1iNWFlLTAyMWRiY2U3NTgzZVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAzNSxcbiAgICAgIDE2MSxcbiAgICAgIDI1NSxcbiAgICAgIDE4MSxcbiAgICAgIDE4MyxcbiAgICAgIDEwLFxuICAgICAgMTg3LFxuICAgICAgMTU2LFxuICAgICAgMTY5LFxuICAgICAgMzgsXG4gICAgICAyMCxcbiAgICAgIDExNCxcbiAgICAgIDExNCxcbiAgICAgIDY3LFxuICAgICAgMjA3LFxuICAgICAgMTIwLFxuICAgICAgMjIwLFxuICAgICAgMTk4LFxuICAgICAgNDcsXG4gICAgICAxNTZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTIyLFxuICAgICAgNzgsXG4gICAgICAxNDMsXG4gICAgICAyMzEsXG4gICAgICAyNixcbiAgICAgIDI0MyxcbiAgICAgIDE0MCxcbiAgICAgIDYzLFxuICAgICAgMjQwLFxuICAgICAgMjMyLFxuICAgICAgMjMwLFxuICAgICAgMTExLFxuICAgICAgMTUzLFxuICAgICAgMjQzLFxuICAgICAgMTkzLFxuICAgICAgMjQxLFxuICAgICAgNDgsXG4gICAgICAxMzYsXG4gICAgICA1NSxcbiAgICAgIDBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiVjNUOEtDQlNcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgxMzk1OTg5ODU6NzJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJjcjcgc3VwcmVtZVwiLFxuICAgIFwibGlkXCI6IFwiNzcyNjY2NDYyNDk1NTg6NzJAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTDY4azVJR0VJV1g5TGtHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJWTld6bUV0VlgzcEJ0bklnYUtzbDZsSTRxL2FaTW0waU81UGdLYi9nVWtRPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkw1cmp2YVpaU2FPTUZBZUZDWGxMYkpEQVc3VGUwUWJ0amh3eTJoZ3NxS0VJRnhDeGpKNzJkN0hEOFdJSzFMbTJETzBEaDAvZ2tWdEJzYzFKWkFraENnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlh1MzBjTHVGSGd3ekhpVUhEVjBsN2xySU1qVkNVVnpGZGJENDNCQnMwR1A5dGtWNUl2V05XUWhBVWlXNUVyNk9CVE8xMHZFSThldEFXWlgrdWRKd0R3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgxMzk1OTg5ODU6NzJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICA3NSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDY4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzIwNTM4OTYsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFJUWZcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUlRZi5qc29uIjogIntcImtleURhdGFcIjpcIkc4UVFTUTVJYXg5UUR0K3pudlY5NDg5N1E0Wk8vWE8xdXVUa3R3cFNWZmc9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTY0ODY4MDUxMCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzMyMDUzODk4MDE3XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
