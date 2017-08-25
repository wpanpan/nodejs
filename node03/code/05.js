// 文件编码问题

const fs = require('fs');
const path = require('path');
const iconv = require('iconv-lite');

fs.readFile(path.join(__dirname, './../lyrics/恋曲1980 Live.lrc'), (error, data) => {
  console.log(iconv.decode(data, 'gbk'));
});


// 遇到问题
// 尝试自己解决
// 整理一下需求
// 抽象几个关键词
// google

// stackoverflow

