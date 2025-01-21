global.owner = [
  "492713876676", //ganti nomor owner
  "" //nomor owner kedua kalo ada
]
global.nomorbot = '4915172861284'
global.urlfoto = 'https://wallpapercave.com/w/wp10565455'

let fs = require('fs')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(`Update ${__filename}`)
delete require.cache[file]
require(file)
})
