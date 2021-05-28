const data = require('./top200.json')
const pairs = require('./tags')
const fs = require('fs')

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
let stats = sorted.map(item => ({ tag: item.tag, name: pairs.get(item.tag), count: item.items.length }))

let tagDirPairs = new Map()
stats.forEach((stat, i) => {
  let d = `./solutions/${i+1} ${stat.name}`
  tagDirPairs.set(stat.tag, d)
  fs.mkdirSync(d, { recursive: true, mode: 0o777 })
})

data.forEach((item, i) => {
  console.log(item.title, item.tags[0])
  fs.writeFileSync(`${tagDirPairs.get(item.tags[0])}/${i+1}.js`, `// #${i+1} ${item.title}\n// ${item.content}\n`)
})

// let dirs = fs.readdirSync('./solutions', { encoding: 'utf8', withFileTypes: true })
// console.log(dirs[0].name)
// console.log(dirs[0].isDirectory())
// console.log(dirs[0].isFile())
// console.log(dirs[0].isSymbolicLink())
// // console.log(dirs[0].isBlockDevice())
// console.log(dirs[0].isCharacterDevice())
// console.log(fs.readFileSync('./tags.js', 'utf8'))

// fs.rm
// fs.rmdir
// fs.rename
// fs.symlink
// fs.unlink
// fs.mkdir
// if (!fs.existsSync('./solutions')) {
//   fs.mkdirSync('./solutions')
// }
// fs.mkdirSync('./solutions/3 dynamic-programming', { recursive: true, mode: 0o777 })
// fs.rmdirSync('./solutions', { recursive: true })
// fs.rm('./solutions', { force: true, recursive: true })
