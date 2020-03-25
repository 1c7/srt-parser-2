(Work in Progress, not usable yet)
## srt-parser-2
This is a SRT parser for Javascript      
It read `.srt` file into an array.    

Turn this:
```
1
00:00:11,544 --> 00:00:12,682
Hello
```

Into this:
```
[{
    id: '1',
    startTime: '00:00:11,544',
    endTime: '00:00:12,682',
    text: 'Hello' 
}]
```

## Install
```
npm i srt-parser-2
```

## Usage
```javascript
var { default: srtParser2 } = require("srt-parser-2")
var parser = new srtParser2()
var srt = `
1
00:00:11,544 --> 00:00:12,682
Hello
`
var result = parser.fromSrt(srt);
console.log(result);
```

## License
MIT

## Why? 
Why this one special? There are plently SRT parser on npm  
like: 

* [subtitles-parser](https://www.npmjs.com/package/subtitles-parser): Last update(on npmjs): 2013-10-17
* [subtitles-parser-vtt](https://www.npmjs.com/package/subtitles-parser-vtt):  Last update: 2020-2-14
* [subtitle](https://www.npmjs.com/package/subtitle):  Last update:  2019-4-4
* [srt](https://www.npmjs.com/package/srt):  Last update: 2012-7-18

## What's wrong with these?
Nothing.    
All of them can handle this: 
```
1
00:00:11,544 --> 00:00:12,682
Hello
```

## But I want to handle format like:   
```
1
00:00:11.544 --> 00:00:12.682
Hello
```
(Difference: use period as separator)   


## And this:  
```
1
00:00:00.05 --> 00:00:02.00
Hello
```  
(Difference: use period as separator & millisecond has only 2 digit)

## Format Support
| Format       | Other parser         | srt-parser-2 |
|--------------|----------------------|--------------|
| 00:00:01,544 | Yes :white_check_mark: | Yes :white_check_mark: |
| 00:00:01.544 | :question: Yes for some of them | Yes :white_check_mark: |
| 00:00:00.05  | :question: Yes for some of them | Yes :white_check_mark: |


## SRT Format Standard (kind of)
| Format       | Is this SRT standard  |
|--------------|-----------------------|
| 00:00:01,544 | Yes :white_check_mark:| 
| 00:00:01.544 | No     :x:            |
| 00:00:00.05  | No     :x:            |

Note: There are no official SRT standard.   
`00:00:01.544` and `00:00:00.05` is not 100% wrong. There are gray area.          
But most tutorial/file/example/code on the internet use `00:00:01,544`   

## Conclusion
1. Support more time format
2. Have extensive test

## Why I write this?
I am writing [Tern - Subtitle File Translator](https://tern.1c7.me/)

Some of the user says they have trouble translate some of the `.srt` file  

And I found out these `.srt` file have format like `00:00:01.544` and `00:00:00.05`   

that's why I write this   