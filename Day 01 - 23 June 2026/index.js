// 🧠 Question 1 (Warm-up – Frequency Basics)
// ❓ Problem:

// Given an array, find the frequency of each element.

// Input:
// [4, 5, 4, 6, 5, 4]
// Output:
// {
    //   4: 3,
    //   5: 2,
//   6: 1
// }


// const arr = [4, 5, 4, 6, 5, 4]

// const findFreq = (array) => {

//     const obj = {}
    
//     for (let i = 0 ; i < array.length ; i++) {
//         if (obj[array[i]]) {
//             obj[array[i]]++
//         }
//         else {
//             obj[array[i]] = 1
//         }
//     }

//     return obj

// }

// console.log(findFreq(arr))

// Contains Duplicates 

const arr = [1,2,3,1]

const findDuplicates = (arr) => {
    const obj = {}


    for (let i = 0 ; i < arr.length ; i++) {
        
        const num = arr[i]

        if (obj[num]) {
            obj[num]++
            if (obj[num] > 1) {
                return true
            }
        }

        else {
            obj[num] = 1
        }



        
    } 
    
    // return obj
    return false

}

console.log(findDuplicates(arr))