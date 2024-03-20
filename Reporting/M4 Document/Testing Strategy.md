1. # <a name="_4w5ju7g24iuv"></a>**Testing Strategy and Updates**
### <a name="_6qln2i1louzi"></a>Current Test Approaches
- Similar to what has been outlined in M3, we are sticking with 3 main testing approaches: ad-hoc, unit, and black box testing.
  - For **Ad-hoc** testing: We use this approach mainly to check if the application is showing or behaving a certain way that we expect it to be. These tests are discretionary and done quickly.
  - For **Unit** testing: We plan and develop them for features that we aim to implement within a given sprint before the features are implemented themselves.  In contrast to ad hoc tests, they are formally documented as test cases. For example, such tests would cover parsing JSON data from MongoDB queries and checking if the outputs are as expected. In addition, this may also involve checking if a query parameter always returns a unique object.
  - For **Black-box** testing: These tests are written mainly to target specific components and mock the process of receiving user input from an isolated frontend component followed by handling user input by REST API endpoints.

### <a name="_qf0ejphylm3v"></a>Future Additional Test Approaches
- For future weeks closer to our deliverable application, we will implement three more testing approaches: Integration Testing, Acceptance Testing, and Usability Testing.
  - For **Integration** testing: This will involve writing tests that specifically verify the interaction between the different components in our software. These tests will help us ensure that the individual components that we have built are working when they are integrated into our application.
  - For **Acceptance** testing: We will perform these tests by having our peers, and TA act as potential users. They will use the application and verify if our developed software meets the business/project requirements of COSC 310.
  - For **Usability** testing: This type of test will be performed by both our development team and our TA to see if the application is easy to use, intuitive, and meets the targeted users’ requirements interim of usability.