const infobot = (status, offline, latensii, totalchat, giid, wa_version, mcc, mnc, os_version, device_manufacturer, device_model, ownerNumberr,runtime, kyun) => {
return `ℒ⃝👾 *B O T  S T A T I S T I C*

👨‍💻 Owner : @${ownerNumberr.split('@')[0]}
☪️ Lib  : Baileys
☸️ Type  : NodeJs
♂️ Mode : ${status}
♀️ Status : ${offline ? 'OFFLINE' : 'ONLINE'}
👨‍👨‍👧‍👦 Group Chat : ${giid.length}
👥 Personal Chat : ${totalchat.length - giid.length}
👨‍👩‍👧‍👧 Total Chat : ${totalchat.length}
🍃 Speed : ${latensii.toFixed(4)} Seconds
🌾 Runtime : ${kyun(runtime)}


ℒ⃝📲 *P H O N E  S T A T I S T I C*

🪀 WhatsApp V : ${wa_version}
🛑 RAM : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
📈 MCC : ${mcc}
📉 MNC : ${mnc}
📊 OS Version : ${os_version}
📫 Merk Hp : ${device_manufacturer}
📮 Versi Hp : ${device_model}


ℒ⃝👨‍💻 *C O N N E C T  W I T H  M E*

⛎ Api : api-abx.herokuapp.com/api
♈ YouTube : youtube.com/c/zeeoneofc
♉ Github : https://github.com/AndhikaNations
♊ Instagram : instagram.com/munje_eobseoyo_
♏ WhatsApp : wa.me/62895371897020

*PERHATIAN!*
_JADWAL TUTUP BOT!_
*PUKUL* : 12.00-14.00 Wib
*PUKUL* : 15.30-16.00 Wib
*PUKUL* : 18.00-18.30 Wib
*PUKUL* : 22.00- 05.00 Wib

*Bot juga perlu istirahat!😇
`}

exports.infobot = infobot
 
