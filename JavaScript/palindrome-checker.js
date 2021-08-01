const palindrome = (str) => {
  let res = false
  let firstHalf = ''
  let secondHalf = ''

  //Convert string to lower case and split it
  let arr = str.toLowerCase().split('')

  //Remove all characters different to [a-z] or \d
  let newArr = arr.filter(e => /[a-z]|\d/.test(e))

  //Get first half of string
  firstHalf = newArr.slice(0, newArr.length / 2).join('')

  //Get second half of string and reverse it (exclude middle character if exists)
  if (newArr.length % 2 === 0) {
    secondHalf = newArr.slice(newArr.length / 2).reverse().join('')
  } else {
    secondHalf = newArr.slice(newArr.length / 2 + 1).reverse().join('')
  }

  //Compare both half
  if (firstHalf === secondHalf) {
    res = true
  }

  return res
}

palindrome("A man, a plan, a canal. Panama");
