const data = require('./top200.json')
const fs = require('fs')
const pairs = require('./tags')

let tagCount = new Map()
data.forEach((item, i) => {
  item.tags.forEach(tag => {
    if (!tagCount.has(tag)) tagCount.set(tag, [])
    tagCount.get(tag).push([item.title, item.url, item.tags[0], i+1])
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

let tagDirPairs = new Map()
sorted.forEach((item, i) => {
  let d = encodeURI(`https://github.com/kenblikylee/ksof/tree/main/Program/problemset/nowcoder/Top200/solutions/${i+1} ${pairs.get(item.tag)}`)
  tagDirPairs.set(item.tag, d)
})

// console.log(tagDirPairs)
let tagsRank = sorted.map(item => `- [${item.tag} (${item.items.length})](https://leetcode-cn.com/tag/${pairs.get(item.tag)}/problemset/)\n${item.items.map(t => `\t- [${t[0]}](${t[1]})\n\t\t- [Solution](${tagDirPairs.get(t[2])}/${t[3]}.js)`).join('\n')}`).join('\n')

let out = data.map((item, index) => (`### ${index+1}. [${item.title}](${item.url})\n\n${item.content}\n\n#### Tags: ${item.tags.map(t => pairs.get(t) ? `[\`${t}\`](https://leetcode-cn.com/tag/${pairs.get(t)}/problemset/)` : `\`${t}\``).join(' ')}\n\n[**Solution**](${tagDirPairs.get(item.tags[0])}/${index+1}.js)`)).join('\n\n<hr>\n\n')

fs.writeFileSync('./README.md', '# 字节跳动笔试\n\n## 标签统计\n\n' + tagsRank + '\n\n## 排行榜\n\n' + out + '\n', 'utf8')
