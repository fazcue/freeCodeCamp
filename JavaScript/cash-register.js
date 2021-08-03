const getExactChange = (needed, cid) => {
    const ref = {PENNY: 0.01, NICKEL: 0.05, DIME: 0.1, QUARTER: 0.25, ONE: 1, FIVE: 5, TEN: 10, TWENTY: 20, ONE_HUNDRED: 100}
    let stillNeeded = needed
    let res = []
  
    for (let i=0; i < cid.length; i++) {
        //Still needs some change to complete
        if (stillNeeded > 0) {
            //Get ref value of current elem
            let refValue = cid[i][0] !== 'ONE HUNDRED' ? ref[cid[i][0]] : ref['ONE_HUNDRED']
            //Get current cid elem value
            let currentCid = cid[i][1]
            //Total change available for current cid elem
            let total = 0

            //If ref value <= still change needed AND <= current cid elem...
            if (refValue <= stillNeeded && refValue <= cid[i][1]) {
                do {
                    total = parseFloat(total.toFixed(2)) + parseFloat(refValue.toFixed(2))
                    stillNeeded = parseFloat(stillNeeded.toFixed(2)) - parseFloat(refValue.toFixed(2))
                    currentCid = parseFloat(currentCid.toFixed(2)) - parseFloat(refValue.toFixed(2))
                } while (currentCid >= refValue && stillNeeded.toFixed(2) >= refValue)

                res.push([cid[i][0], total])
            }

        }
    }
    
    return res
}
  
const checkCashRegister = (price, cash, cid) => {
    let res = {status: 'INSUFFICIENT_FUNDS', change: []}
    let change = []
  
    //Get total cash in drawer
    let totalCiD = cid.reduce((sum, e) => {
        return sum += e[1]
    }, 0)
  
    //Get change needed
    let changeNeeded = cash - price
  
    //If not enough cid, return INSUFFICIENT_FUNDS
    if (changeNeeded > totalCiD) {
        return res
    }
  
    //Else, see if there is exact change in cid
    change = getExactChange(changeNeeded, cid.reverse())
  
    //Get total valid change in drawer
    let totalChange = change.reduce((sum, e) => {
        return sum += e[1]
    }, 0)
  
    //IF not exact change, return INSUFFICIENT_FUNDS
    if (changeNeeded > totalChange) {
        return res
    }
  
    //Else, if change needed === total cid, then close it and return same cid
    if (changeNeeded === totalCiD) {
        res.status = 'CLOSED'
        res.change = cid.reverse()
        return res
    }
  
    //Else, if cid has more than enough cash and can give exact change, leave drawer open and return exact change
    res.status = 'OPEN'
    res.change = change
    return res
}

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])
