import {test} from '@playwright/test'

test.skip('test annotation',({page})=>{


    console.log("Plain test method")
})

test.skip('test plain',({page})=>{


    console.log("Plain test method")
})

test.skip('test skip',({page})=>{


    console.log("Plain test method")
})

test.fixme('test fixme',({page})=>{


    console.log("fix me test method")
})

test.skip('test fail',({page})=>{


    console.log("fail test method")
})

test.slow('test slow',({page})=>{


    console.log("slow method")
})

//test.skip -> skip the particular test block
//test.only -> execute particular test block
//test.fixme -> Mark the test as broken.pw will not run the test. test block needs to be fixed.
//test.fail-> marks test as fail. Playwright runs this test and ensures that it fails.
//test.slow -> slows the execution , triple the default time out.(30000ms to 90000ms)
//test.describe --> declares the group of tests

