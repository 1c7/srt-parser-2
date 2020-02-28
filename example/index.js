var { default: srtParser2 } = require("srt-parser-2")
var parser = new srtParser2()
var srt = `
1
00:00:11,544 --> 00:00:12,682
Hello
`
var result = parser.fromSrt(srt);
console.log(result);