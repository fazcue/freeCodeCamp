function telephoneCheck(str) {
    //If tel doesnt have all neccesary numbers...
    if (str.length < 10) {
        return false
    }
  
    //If tel has parentheses, return true only if there are in position => '1 (555) 555 5555'
    if (/\)|\(/.test(str)) {
        return /^1{0,1}(\s){0,1}(\()\d{3}(\))(\s){0,1}\d{3}(-|\s)*\d{4}$/g.test(str)
    }
  
    //Else
    return /^1{0,1}(-|\s){0,1}\d{3}(-|\s){0,1}\d{3}(-|\s){0,1}\d{4}$/g.test(str)
  }
  
telephoneCheck("1 (555) 553-4555")
