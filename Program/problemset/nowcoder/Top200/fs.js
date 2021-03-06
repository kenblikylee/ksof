const fs = require('fs')

async function print(path) {
  const dir = await fs.promises.opendir(path)
  for await (const dirent of dir) {
    console.log(dirent.name)
  }
}

print('./').catch(console.error)
