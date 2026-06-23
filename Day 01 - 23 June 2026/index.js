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


const arr = [4, 5, 4, 6, 5, 4]

const findFreq = (array) => {

    const obj = {}
    
    for (let i = 0 ; i < array.length ; i++) {
        if (obj[array[i]]) {
            obj[array[i]]++
        }
        else {
            obj[array[i]] = 1
        }
    }

    return obj

}

console.log(findFreq(arr))