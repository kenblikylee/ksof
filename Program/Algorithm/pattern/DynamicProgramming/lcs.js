function lcs(wordX, wordY) {
  var m = wordX.length,
    n = wordY.length,
    l = [],
    i, j, a, b, solution = []
  for (i = 0; i <= m; ++i) {
    l[i] = []
    solution[i] = []
    for (j = 0; j <= n; ++j) {
      l[i][j] = 0
      solution[i][j] = '0'
    }
  }

  for (i = 0; i <= m; i++) {
    for (j = 0; j <= n; j++) {
      if (i === 0 || j === 0) {
        l[i][j] = 0
      } else if (wordX[i-1] === wordY[j-1]) {
        l[i][j] = l[i-1][j-1] + 1
        solution[i][j] = 'diagonal'
      } else {
        a = l[i-1][j]
        b = l[i][j-1]
        l[i][j] = (a > b) ? a : b
        solution[i][j] = (l[i][j] == l[i-1][j]) ? 'top' : 'left'
      }
    }
  }
  printSolution(solution, wordX, m, n)
  return l[m][n]
}

function printSolution(solution, wordX, m, n) {
  var a = m, b = n,
    x = solution[a][b],
    answer = ''
  while (x !== '0') {
    if (solution[a][b] === 'diagonal') {
      answer = wordX[a - 1] +  answer
      a--
      b--
    } else if (solution[a][b] === 'left') {
      b--
    } else if (solution[a][b] === 'top') {
      a--
    }
    x = solution[a][b]
  }
  console.log('lcs: ' + answer)
}

console.log(lcs('acbaed', 'abcadf'))

console.log('')
