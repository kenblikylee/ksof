const data = require('./top200.json')
const fs = require('fs')
const pairs = require('./tags')

let out = data.map((item, index) => (`## ${index+1}. [${item.title}](${item.url})\n\n${item.content}\n\n### Tags:\n${item.tags.map(t => pairs.get(t) ? `- [${t}](https://leetcode-cn.com/tag/${pairs.get(t)}/problemset/)` : `- ${t}`).join('\n')}`)).join('\n\n')

fs.writeFileSync('./README.md', '# 字节跳动笔试\n\n' + out + '\n', 'utf8')
