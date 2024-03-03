# Testing Approaches

We will follow a Test-Driven Development (TDD) approach whereby initial test cases are written before application components are developed. As our database is central to our feature development, test cases will largely rely on mock user data supplied to our MongoDB Atlas Cloud Database. As we ease into the development of application components, we will begin with black-box testing and move toward white-box testing as we approach the completion of critical features. 

# Test Frameworks

As we are using Next.js as our React framework, we are using Jest as our testing framework. For every component that we build, we will write the equivalent test cases that cover all aspects of its functionality. We also intend to set up GitHub actions to facilitate automatic testing and ensure that all prior test cases pass as new functionality is added. Jest provides a variety of key features including automated testing, built-in assertations, mocking, code coverage and asynchronous testing that makes it highly beneficial for our project.

# Test Workflow

All tests are written under the `__tests__` directory of our `frontend` folder. Each test follows the convention of `testName.test.tsx` and should only test one feature or component. A group of tests can be compiled under each component test but they need to be isolated to that particular feature.

# Specific Details

To run all tests, execute `npm run test:jest` while in the `application/frontend` directory.