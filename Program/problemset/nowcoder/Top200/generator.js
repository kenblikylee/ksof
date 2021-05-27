const data = require('./top200.json')
const fs = require('fs')

let out = data.map((item, index) => (`## ${index+1}. [${item.title}](${item.url})\n\n${item.tags.map(t => `- ${t}`).join('\n')}`)).join('\n\n')

fs.writeFileSync('./README.md', '# 字节跳动笔试\n\n' + out + '\n', 'utf8')
