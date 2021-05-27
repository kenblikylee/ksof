// https://leetcode-cn.com/problemset/all/

let tagsContainer = document.getElementById('current-topic-tags')
let links = [].slice.call(tagsContainer.children)

let tags = links.map(link => link.getAttribute('href').match(/\/tag\/([\w-]+)/i)).filter(matched => matched && matched[1]).map(item => item[1])
