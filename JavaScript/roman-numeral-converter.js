function convertToRoman(num) {
  const ref = {1: 'I', 5: 'V', 10: 'X', 50: 'L', 100: 'C', 500: 'D', 1000: 'M'}

  //Convert num to string and split it
  let arr = String(num).split('')

  //Go number by number and return it`s roman value
  let res = arr.reduce((r, n, i) => {

    //Omit number 0
    if (Number(n) !== 0) {

      //Add ceros according position
      let newNum = n * Math.pow(10, arr.length - 1 - i)
      //Variable to calculate rest until it reachs 0
      let rest = newNum
      //The roman number 'string'
      let roman = ''

      //Special numbers, 4 and 9
      if (Number(n) === 4 || Number(n) === 9) {
        const refKeys = Object.keys(ref)
        do {
          let rv = refKeys.find(e => e >= rest)
          roman = ref[rv] + roman
          rest = rv - rest
        } while (rest > 0)
      } else {
        const refKeys = Object.keys(ref).reverse()
        do {
          let rv = refKeys.find(e => e <= rest)
          roman += ref[rv]
          rest -= rv
        } while (rest > 0)
      }

      return [...r, roman]
    }

    return r

  },[])

  return res.join('')
}

convertToRoman(3999)
