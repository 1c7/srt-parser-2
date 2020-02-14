(Work in Progress)
## srt-parser-2
This is a SRT parser for Javascript      
It read `.srt` file into an array.    


Read this:
```
1
00:00:11,544 --> 00:00:12,682
Hello
```

Turn into this:
```
[{
    id: '1',
    startTime: '00:00:11,544',
    endTime: '00:00:12,682',
    text: 'Hello' 
}]
```

## Install
todo

## Usage
todo

## Author
Cheng Zheng (chengzheng.apply@gmail.com)  

## License
MIT

## Why this one special? There are already plently SRT parser on npm  
At the time I am writing this (2020-Feb-14)     
If you want to parse SRT with Javascript.  
Here is your option:  

* [subtitles-parser](https://www.npmjs.com/package/subtitles-parser) -- Last update(on npmjs): 2013-10-17
* [subtitles-parser-vtt](https://www.npmjs.com/package/subtitles-parser-vtt) -- Last update: 2020-2-14
* [subtitle](https://www.npmjs.com/package/subtitle) -- Last update:  2019-4-4
* [srt](https://www.npmjs.com/package/srt) -- Last update: 2012-7-18

## What's wrong with these?
Nothing.    
All of them can handle this: 
```
1
00:00:11,544 --> 00:00:12,682
Hello
```

## But I want more.  
I want to handle format like this:   
```
1
00:00:11.544 --> 00:00:12.682
Hello
```
(Difference: use period as separator)   


And this:  
```
1
00:00:00.05 --> 00:00:02.00
Hello
```  
(Difference: use period as separator & millisecond has only 2 digit)

## In short, Here is format support table
| Format       | Other parser         | srt-parser-2 |
|--------------|----------------------|--------------|
| 00:00:01,544 | Yes :white_check_mark: | Yes :white_check_mark: |
| 00:00:01.544 | :question: Yes for some of them | Yes :white_check_mark: |
| 00:00:00.05  | :question: Yes for some of them | Yes :white_check_mark: |


## This is SRT format standard
| Format       | Is this SRT standard  |
|--------------|-----------------------|
| 00:00:01,544 | Yes :white_check_mark:| 
| 00:00:01.544 | No     :x:            |
| 00:00:00.05  | No     :x:            |

Note: There are no official SRT format standard.   
`00:00:01.544` and `00:00:00.05` is not 100% wrong. There are gray area.          
Most example/code package on the internet use `00:00:01,544`   

## Conclusion: Why this srt parser is better?
1. Support more time format
2. Have extensive test

## Why I write this npm package?:  
I am writing [Tern - Subtitle File Translator](https://tern.1c7.me/)

Some of the user says they have trouble translate some of the `.srt` file  

And I found out these `.srt` file have format like `00:00:01.544` and `00:00:00.05`   

that's why I write this   