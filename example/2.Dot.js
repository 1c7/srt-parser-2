// node example/2.Dot.js
const srtParser2 = require('srt-parser-2').default

var srt = `
1
00:00:11.544 --> 00:00:12.682
Hello
`;

var parser = new srtParser2();
var result = parser.fromSrt(srt);
console.log(result);
