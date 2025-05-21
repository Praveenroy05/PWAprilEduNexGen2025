// Hooks

// test.beforeAll() - Executed once before executing nay of the test cases
// test.beforeEach() - Executed once before executing each and every test cases
// test.afterEach() - Executed once after executing each and every test cases
// test.afterAll() - Executed once after executing all the test cases

import {test} from '@playwright/test'

test.beforeAll(async ()=>{
    console.log("Before All Test case");
})

test.beforeEach(async ()=>{
    console.log("Before Each Test case");
})

test("Test1", async ()=>{
    console.log("Test1");
})

test("Test2", async ()=>{
    console.log("Test2");
})

test("Test3", async ()=>{
    console.log("Test3");
})

test.afterEach(async ()=>{
    console.log("After Each Test case");
})
test.afterAll(async ()=>{
    console.log("After All Test case");
})