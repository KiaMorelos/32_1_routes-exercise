const {calcMean, findMedian, findMode, validateNumQuery} = require('./math');

describe("calcMean", function(){
    it("finds the mean otherwise known as the AVERAGE of an array of numbers", function(){ 
      expect(calcMean([1,2,3])).toEqual(2)
    })
  })

describe("findMedian", function(){
    it("sorts and finds the middle number in an array with a length that is odd", function(){ 
        expect(findMedian([1,2,3])).toEqual(2)
      })
      it("if length of the array even it sort and then sums the middle two numbers and divides them by two", function(){ 
        expect(findMedian([1,2,3,2])).toEqual(2)
      })
})

describe("findMode", function(){
    it("finds the most common number in an array, most used", function(){ 
        expect(findMode([1,1,1])).toEqual(1)
      })
      it("finds the most common number in an array, most used", function(){ 
        expect(findMode([1,2,3,2])).toEqual(2)
      })
})

describe("validateNumQuery", function(){
    it("check if array has valid numbers", function(){ 
        expect(validateNumQuery(["1", "2", "NO!"])).toBeInstanceOf(Error);
      })
      it("check if array has valid numbers", function(){ 
        expect(validateNumQuery(["1", "2", "3"])).toContain(3);
      })
})


