const Stack = require('./stack5')

function divideByBase(decNumber, base = 2) {
  var remStack = new Stack(),
    rem,
    binaryString = ''
    while (decNumber > 0) {
      rem = Math.floor(decNumber % base)
      remStack.push(rem)
      decNumber = Math.floor(decNumber / base)
    }

    while (!remStack.isEmpty()) {
      if (remStack.peek() > 9) {
        binaryString += String.fromCharCode((remStack.pop() - 10) + 'a'.charCodeAt())
      } else {
        binaryString += remStack.pop().toString()
      }
    }

    return binaryString
}

function baseConverter(decNumber, base) {
  var remStack = new Stack(),
    baseString = '',
    digits = '0123456789ABCDEF'

    while (decNumber > 0) {
      remStack.push(decNumber % base)
      decNumber = Math.floor(decNumber / base)
    }

    while (!remStack.isEmpty()) {
      baseString += digits[remStack.pop()]
    }

    return baseString
}

module.exports = baseConverter
