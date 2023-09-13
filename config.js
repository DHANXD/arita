let fs = require('fs')
let chalk = require('chalk')
const fetch = require("node-fetch");
const success = chalk.bold.green
const received = chalk.bold.cyan
const error = chalk.bold.red


global.owner = ['6285713729122'] // Put your number here
global.mods = [] // Want some help?
global.prems = [] // Premium user has unlimited limit
global.APIs = {
// Contoh Penambahan Rest Api Yang Akan Digunakan
// Prefix: 'Alamat Url Website Rest Api',
 'https://xzn.wtf/'
}
global.APIKeys = { 
// Contoh Penambahan Rest Api + Apikey Yang Akan Digunakan
// 'Alamat Url Website Rest Api': 'Apikey',
  'https://xzn.wtf/': 'arata'
}

// Sticker WM
global.packname = 'Arita'
global.author = 'Danz Tamvan'

global.sessionid = '48736705854:2Tq6joffmVDzaS:24' // ID Sesi Instagram, Kamu Bisa Menganti Dengan Sesi Milikmu
global.multiplier = 69 // Semakin Tinggi Angka/Nilai, Maka Peningkatan Level Akan Semakin Sulit
global.wait = '_*Tunggu Sebentar ya kak @user....*_' // Pesan Saat Memuat / Menunggu
global.eror = '_*Server Sedang Mengalami Error { Error:404 }*_' // Pesan Jika Mengalami Error
global.fla = 'https://iili.io/J9BYZe1.jpg'
global.getBuffer = getBuffer


global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      exp: '✉️',
      money: '💵',
      potion: '🥤',
      diamond: '💎',
      common: '📦',
      uncommon: '🎁',
      mythic: '🗳️',
      legendary: '🗃️',
      pet: '🎁',
      sampah: '🗑',
      armor: '🥼',
      sword: '⚔️',
      kayu: '🪵',
      batu: '🪨',
      string: '🕸️',
      kuda: '🐎',
      kucing: '🐈' ,
      anjing: '🐕',
      petFood: '🍖',
      gold: '👑',
      emerald: '💚'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}
function getBuffer(buffer) {
return ez(buffer).then(a => a.buffer())
}  
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})