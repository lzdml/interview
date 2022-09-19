var regex = /hello/

console.log(regex.test('hello world'));
console.log(regex.test('hello'));


// {m,n} 表示连续出现最少m次, 最多n次, g表示全局匹配, 即在目标字符串中按顺序找到满足匹配模式的所有子串，强调的是“所有”，而不只是“第一个”。g是单词global的首字母。

var regex1 = /ab{2,5}c/g;
var string = "abc abbc abbbc abbbbc abbbbbc abbbbbbc";
console.log(string.match(regex1));


var regex2 = /a[123]b/g;
var string2 = "a0 a1b a2b a3b a4b a5b";
console.log(string2.match(regex2));


var regex3 = /\d{2,5}/g;
var string3 = "12 1 123 1234 12345 123456 2345678"
console.log(string3.match(regex3));


var regex4 = /good|nice/g;
var string4 = "good idea, nice try";
console.log(string4.match(regex4));

var regex5 = /good|goodbye/g;
var regex51 = /goodbye|good/g;
var string5 = "goodbye";
console.log(string5.match(regex5), string5.match(regex51));


// 匹配16进制颜色
var regex6 = /#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})/g;
var string6 = "#ffbbad #fc01DF #ffe #acd";
console.log(string6.match(regex6));


// 匹配 23:59, 02:07
/*
  共4位数字, 第一位数字可以是[0-2]
  当第一位为2时, 第2位可以为[0-3], 其他情况时, 第2位是[0-9]
  第3位数字为[0-5], 第4位数字是[0-9]
*/
var regex7 = /^([01][0-9]|[2][0-3]):[0-5][0-9]$/
console.log(regex7.test('23:59'));
console.log(regex7.test('02:07'));
console.log(regex7.test('02:59'));


// 匹配日期 yyyy-mm-dd格式为例
/*
  分析: 
  年, 四位数字即可, \d{4}
  月, 共12月, 01-09, 10-12 (0[1-9]|1[0-2])
  日  最大31天, (0[1-9]|[12][0-9]|[3][01])
*/
var regex8 = /^[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|[3][01])$/
console.log('2020-01-20', regex8.test('2020-01-20'));
console.log('2020-01:20', regex8.test('2020-01:20'));
console.log('2020--1/21', regex8.test('2020--1/21'));


// 匹配id
/*
  <div id="container" class="main"></div>
*/
var regex9 = /id="[^"]*"/
var string9 = '<div id="container" class="main"></div>'
console.log(string9.match(regex9)[0]);


// 弄出所有的逗号
var reg10 = /(?!^)(?=(\d{3})+$)/g;
var result = "123456789".replace(reg10, ',')
console.log(result);


/*
  ^和$
*/

var result1 = "hello".replace(/^|$/g, '#!')
console.log('result1', result1);

var result2 = "I\nlove\njavascript".replace(/^|$/gm, '#')
console.log('result2', result2);

var result3 = "[JS] Lesson_01.mp4".replace(/\b/g, '#')
console.log(result3);


// 分组
var result4 = /(ab)+/g;
console.log("ababa abbb ababab", "ababa abbb ababab".match(result4));

var result5 = /^I love (JS|Regular)$/
console.log(result5.test('I love JSa'));
console.log(result5.test('I love JS'));
console.log(result5.test('I love Regular'));

var result6 = /(\d{4})-(\d{2})-(\d{2})/
console.log("2017-04-12".replace(result6, "$1/$2/$3"));

function titleSize(str) {
  return str.toLowerCase().replace(/(?:^|\s)\w/g, function (c) {
    return c.toUpperCase()
  })
}
console.log('titleSize', titleSize('my name is dzl'));

/*
  验证密码问题
  密码长度6-12位, 由数字, 小写字符和大写字母组成, 但必须至少包括2种字符。
*/

var regex11 = /^$/