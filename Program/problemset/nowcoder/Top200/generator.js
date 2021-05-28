const data = require('./top200.json')
const fs = require('fs')
const pairs = require('./tags')

let out = data.map((item, index) => (`### ${index+1}. [${item.title}](${item.url})\n\n${item.content}\n\n#### Tags:\n${item.tags.map(t => pairs.get(t) ? `- [${t}](https://leetcode-cn.com/tag/${pairs.get(t)}/problemset/)` : `- ${t}`).join('\n')}`)).join('\n\n')

let tagCount = new Map()
data.forEach(item => {
  item.tags.forEach(tag => {
    if (!tagCount.has(tag)) tagCount.set(tag, [])
    tagCount.get(tag).push([item.title, item.url])
  })
})

let tagItems = []
for (let entry of tagCount.entries()) {
  let [tag, items] = entry
  tagItems.push({
    tag,
    items
  })
}

let sorted = tagItems.sort((a, b) => b.items.length - a.items.length)
let tagsRank = sorted.map(item => `- [${item.tag} (${item.items.length})](https://leetcode-cn.com/tag/${pairs.get(item.tag)}/problemset/)\n${item.items.map(t => `\t- [${t[0]}](${t[1]})`).join('\n')}`).join('\n')

fs.writeFileSync('./README.md', '# 字节跳动笔试\n\n## 标签统计\n\n' + tagsRank + '\n\n## 排行榜\n\n' + out + '\n', 'utf8')
