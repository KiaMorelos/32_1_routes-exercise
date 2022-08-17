const express = require('express');
const {calcMean, findMedian, findMode, validateNumQuery} = require('./math');
const ExpressError = require('./expressError');

const app = express();

app.get('/mean', (req, res) => {

    if(!req.query.nums){
        throw new ExpressError('Query needs to be numbers separated by commas and cannot be blank. nums=1,2,3', 400)
    }

    const numStrsArr = req.query.nums.split(',')
    let nums = validateNumQuery(numStrsArr)

    if(nums instanceof Error){
        throw new ExpressError(nums.message)
    }

    const response = {
        operation: "mean",
        result: calcMean(nums)
    }

    return res.send(response)
});

app.get('/median', (req, res) => {

    if(!req.query.nums){
        throw new ExpressError('Query needs to be numbers separated by commas and cannot be blank. nums=1,2,3', 400)
    }

    const numStrsArr = req.query.nums.split(',')
    let nums = validateNumQuery(numStrsArr)

    if(nums instanceof Error){
        throw new ExpressError(nums.message)
    }

    const response = {
        operation: "median",
        result: findMedian(nums)
    }
    return res.send(response)
});

app.get('/mode', (req, res) => {

    if(!req.query.nums){
        throw new ExpressError('Query needs to be numbers separated by commas and cannot be blank. nums=1,2,3', 400)
    }

    const numStrsArr = req.query.nums.split(',')
    let nums = validateNumQuery(numStrsArr)

    if(nums instanceof Error){
        throw new ExpressError(nums.message)
    }

    const response = {
        operation: "mode",
        result: findMode(nums)
    }

    return res.send(response)
});

app.get('/all', (req, res) => {
    if(!req.query.nums){
        throw new ExpressError('Query needs to be numbers separated by commas and cannot be blank. nums=1,2,3', 400)
    }

    const numStrsArr = req.query.nums.split(',')
    let nums = validateNumQuery(numStrsArr)

    if(nums instanceof Error){
        throw new ExpressError(nums.message)
    }

    const response = {
        operation: "all",
        mean: calcMean(nums),
        median: findMedian(nums),
        mode: findMode(nums)
    }

    return res.send(response)
})

// findMedian([7,4,6,9,3,8]);
// calcMean([1,3,5,7]);
// findMode([1,1,3,5,1]);
// validateNumQuery(['1', '2', 'NO!']);


//keep at bottom of this file
app.listen(3000, () => console.log('App running on port 3000'));