# Software Development Process and Testing Methodology

We will follow a Test-Driven Development (TDD) approach whereby initial test cases are written before application components are developed. As our database is central to our feature development, test cases rely on mock user data supplied to our MongoDB Atlas database on the cloud. As we ease into the development of application components, we will proceed with black-box testing as we begin to finalize components.

# Software Testing Approaches

We are using a mix of adhoc, unit and black-box testing. Our general approach is to first conduct adhoc testing for newly introduced backend processes, such as MongoDB queries. Such tests are discretionary and do not have any accompanying documentation, design or test cases—they are quick and done when necessary to test code as it is written.

Our subsequent approach is to conduct unit testing for backend processes. These processes follow Test-Driven Development as theses tests are written before components are included and only target database queries in isolation. In contrast to adhoc tests, they are formally documented as test cases. For example, such tests would cover parsing JSON data from MongoDB queries and checking if the outputs are as expected. In addition, this may also involve checking if a query parameter always returns a unique object.

Our final approach is to conduct black-box testing. Such testing targets specific components and mocks the process of receiving user input from an isolated frontend component followed by the handling of user input by REST API endpoints. As the final level of testing, this approach is particularly rigorous as the test is three-fold:

1. Testing that all form data is captured in State variables 
2. Testing that every `onSubmit` function successfully sends an HTTP request to the corresponding API endpoints that handles that request
3. Testing that the API endpoint successfully receives the data from the HTTP request and processes it correctly with the database

## Our Current Approaches

Our current approaches are strictly focused on adhoc and unit testing. These are suitable for TDD as all test cases are written before components are integrated.

## Our Future Approaches

Once we finalize existing components and begin introducing more components to the application, we will proceed to black-box testing whereby we test the complete pipeline of receiving and processing user input across frontend components and API endpoints.


# Test Frameworks

As we are using Next.js as our React framework, we are using Jest as our testing framework. For every component that we build, we will write the equivalent test cases that cover all aspects of its functionality. We also intend to set up GitHub actions to facilitate automatic testing and ensure that all prior test cases pass as new functionality is added. Jest provides a variety of key features including automated testing, built-in assertations, mocking, code coverage and asynchronous testing that makes it highly beneficial for our project.

# Test Workflow

All tests are written under the `__tests__` directory of our `frontend` folder. Each test follows the convention of `testName.test.tsx` and should only test one feature or component. A group of tests can be compiled under each component test but they need to be isolated to that particular feature.

# Specific Details

To run all tests, execute `npm run test:jest` while in the `application/frontend` directory.