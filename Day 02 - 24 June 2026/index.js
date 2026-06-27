const arr = [1,2,3,1]

const findDuplicates = (array) => {

    const obj = {}

    for (let item of array) {
        if (obj[item]) {
            return true
        }
        
        else {
            obj[item] = 1 
        }
    
    }

    return false 

}

console.log(findDuplicates(arr))