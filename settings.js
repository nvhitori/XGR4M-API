const fs = require('fs')

global.creator = 'XHITORI' 
global.apikey = ["xgram", "xwhy", "bochii", "hitori"]
global.lolkey = "ywxzyy"

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
	delete require.cache[file]
	require(file)
})
