// https://www.nowcoder.com/ta/job-code-high
// https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest

let stringify = params => (Object.keys(params).map(k => `${k}=${params[k]}`).join('&'))
let buildUrl = (baseUrl, params) => `${baseUrl}?${stringify(params)}`

function request(url, callback) {
  let xhr = new XMLHttpRequest()
  xhr.addEventListener('load', callback)
  xhr.open('GET', url)
  xhr.send()
}

let res = []
function page(p) {
  let params = {
    token: '',
    topicId: 117,
    title: '',
    tags: '',
    difficulty: 0,
    order: '',
    asc: true,
    page: p,
    company: 665,
    job: 3,
    _: new Date().getTime()
  }
  let url = buildUrl('https://www.nowcoder.com/activity/oj/questions', params)
  let getDetailUrl =  (uuid, tpId, tqId) => `https://www.nowcoder.com/practice/${uuid}?tpId=${tpId}&&tqId=${tqId}&rp=1&ru=/ta/job-code-high&qru=/ta/job-code-high/question-ranking`
  return new Promise((resolve) => {
    request(url,
      function() {
        let questions = JSON.parse(this.responseText).data.questions
        res = res.concat(questions.map(item => ({
          // questionId: item.questionId,
          // questionNo: item.questionNo,
          title: item.questionTitle,
          // tpId: item.tpId,
          // tqId: item.tqId,
          tags: item.tags.map(item => item.name),
          url: getDetailUrl(item.questionUUid, item.tpId, item.tqId)
        })))
        resolve(res)
      }
    )
  })
}

page(1).then(() => page(2)).then(res => {
  console.log(JSON.stringify(res))
  console.log(res)
  // console.log(res.map((item, index) => (`## ${index+1}. [${item.title}](${item.url})\n${item.tags.map(t => `- ${t}`).join('\n')}`)).join('\n\n'))
})
