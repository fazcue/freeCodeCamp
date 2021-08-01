function rot13(str) {
  const ABC = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N',  'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M']
  const SHIFTED = 13
  let res

  //Split string into array
  let arr = str.split('')

  //Map array filtering alphabetic only characters, and return new value 
  res = arr.map(e => {
    let pos

    if (/[A-Z]/.test(e)) {
      pos = ABC.findIndex((l) => e === l) + SHIFTED
      return ABC[pos]
    } else {
      return e
    }
  })

  //Return as string
  return res.join('')
}

rot13("SERR PBQR PNZC");
