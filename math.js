function calcMean(arr){
    //Find average(mean) of the given array
    const avg = arr.reduce((accumulator, nextNum) => accumulator + nextNum) / arr.length;
    console.log(avg);
    return avg;

}

function findMedian(arr){
    //Find the middle number of a sorted array. if the length if even then median is the sum of the two middle numbers divided by two

    let median;

    arr.sort(function (a,b) {
        return a - b;
    });

    if(arr.length %2 !=0){
        const midIdx = Math.floor(arr.length / 2);
        median = arr[midIdx];
    } else {
        const midIdx = Math.floor(arr.length / 2);
        median = (arr[midIdx] + arr[midIdx + 1] - 1 ) / 2;
    }
    return median;
}

function countFreqObj(arr){
    //make an object that sets array item as key, and the count as the value like this: [1,1,2,1] would return something like this { 1:3, 2:1 }
const counterObj = {};

for(let i = 0; i < arr.length; i++){
    const entry = arr[i];

    if(counterObj[entry]) {
        counterObj[entry] += 1;
    } else {
        counterObj[entry] = 1;
    }
}
    return counterObj;
}

function findMode(arr){
    //send the arr to the countFreqObj function which will turn into an object, then iterate through the keys, if the value at the key is greater than the starting count variable, the new count is value at the key

    const counterObj = countFreqObj(arr);
    
    let count = 0;
    
    let mostCommon;

    for (let key in counterObj) {
      if (counterObj[key] > count) {
        mostCommon = key;
        count = counterObj[key];
      }
    } 
    return +mostCommon; //plus sign reconverts this to number when returning
    //leaving off the plus sign returns the number wrapped in quotes "1"
}

function validateNumQuery(queryArr){
    const numbers = [];

    for(let i = 0; i < queryArr.length; i++){
        const convertToNum = Number(queryArr[i]);

        if(Number.isNaN(convertToNum)){
            return new Error(
                `${queryArr[i]} is not a number.`
              );
        }

        numbers.push(convertToNum);
    }

    return numbers
}

module.exports = {
    calcMean,
    findMedian,
    findMode,
    validateNumQuery,
};