import {test} from '@playwright/test'

test.beforeAll('',async()=>{
    console.log('only once per script')
})
test.afterAll('',async()=>{
    console.log('after all execution')
})

test.beforeEach('',()=>{
    console.log("Executes before each test execution")
})
test.afterEach('',()=>{
    console.log("Executes after each test execution")
})