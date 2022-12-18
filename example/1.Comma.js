// node example/1.Comma.js

let srt = `
1
00:00:11,544 --> 00:00:12,682
Hello
`;

const srtParser2 = require('srt-parser-2').default
var parser = new srtParser2();
var result = parser.fromSrt(srt);
console.log(result);
console.log('\n\n');

// turn array back to SRT string.
var srt_string = parser.toSrt(result);
console.log(srt_string);