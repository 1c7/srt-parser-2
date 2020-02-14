(Work in Progress)
## srt-parser-2
This is a SRT parser.    
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

## Why this one special? There are already plently srt parser on npm.
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

## In short
| Format       | Other parser         | srt-parser-2 |
|--------------|----------------------|--------------|
| 00:00:11,544 | Yes                  | Yes          |
| 00:00:11.544 | Yes for some of them | Yes          |
| 00:00:00.05  | no                   | Yes          |


| Format       | Is this SRT standard |
|--------------|----------------------|
| 00:00:11,544 | Yes                  | 
| 00:00:11.544 | No                   |
| 00:00:00.05  | No                   |

