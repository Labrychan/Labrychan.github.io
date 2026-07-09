const staticrypt = require('staticrypt');

const inputPath = 'C:/Users/bang/Desktop/my-blog/_site/test/2026/05/05/welcome-to-jekyll.html';
const password = '123456';
const outputPath = 'C:/Users/bang/Desktop/encrypted-test.html';

console.log('开始加密...');
console.log('输入文件:', inputPath);
console.log('输出文件:', outputPath);

const fs = require('fs');
if (!fs.existsSync(inputPath)) {
  console.error('错误：输入文件不存在！');
  process.exit(1);
}

staticrypt({
  filePath: inputPath,
  password: password,
  output: outputPath,
  short: true
}).then(() => {
  console.log('加密成功！输出文件:', outputPath);
}).catch(err => {
  console.error('加密失败:', err);
});