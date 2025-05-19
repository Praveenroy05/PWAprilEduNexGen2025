// POM - Page Object Model

// Page Object Model is a design pattern used in the software testing to represent a web page as an object. It is a way to organise the interaction with a web page by creating classes that encapsulate the properties and behaviour of the page.

// Each page object class typically consists of methods for interacting with the elements on the page, such as clicking button, entering text, and retrieving information, making tests more readable and maintainable.

// This approach promotes readablilty, reusability, reduces code duplication as the same page object can be used across multiple test cases.


// POM from scratch

// 1. Page Layer - Will create a package or folder  (pages) - Locators and methods related to a specific page
// BasePage - Customized function - getTextFromElement() ....
// LoginPage.ts - Locators and methods specific to login page
// HomePage.ts - Locators and methods specific to home page
// CartPage.ts, PaymentPage.ts

// 2. Test Layer - Pure test case and assertions
// LoginPageTest.spec.ts, HomePageTest.spec.ts, CartPageTest.spec.ts .....

// 3. Test Data - Which will manage all the test data related to the test cases - JSON/Excel - loginPage.json, loginPage.xlsx, Constant class 

// 4. Utils - API methods, screenshot, scrolling, read the data from the excel etc etc

// 5. Report - Allure/HTML 


// 1. Login page validation 
 // a. valid login scenario - valid credentials
 // b. invalid login scenario - invalid credentials

 // 1. Page Layer
  // LoginPage.ts  - Locators (username, password, login button)
  // methods - async validLogin(), async invalidLogin()

// 2. Test Layer
// LoginPageTest.spec.ts - Test case for valid login scenario
// Call the validLogin() from Page Layer
// Call the invalidLogin() from page layer

// 3. Test Data - login.json/excel/constant class - url, username, password

// 4. Utils - launchURL(URL)

// 5. Report - HTML/Allure


// Dashboard Page validation
    // a. Search a product and add to the cart
    // b. Search a product and view the details







