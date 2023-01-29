const fs = require('fs')

global.creator = 'Cecilia Lucia Ximena' 
global.apikey = ["lucia", "miracle", "kayraa", "kayraachan"]
global.lolkey = "kayraachan"

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
	delete require.cache[file]
	require(file)
})
