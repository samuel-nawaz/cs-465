# cs-465
Samuel Nawaz
Prof. Kellogg
Architecture
•	Compare and contrast the types of frontend development you used in your full stack project, including Express HTML, JavaScript, and the single-page application (SPA).
The front end types used in this project were similar, yet very different at the same time. The customer site initially used Express HTML, but in an effort to save resources and speed up the rendering, we switched to handlebars. This move achieved both goals as every component was not loaded at each refresh/interval. We utilized JavaScript to help pull the trip data from the MongoDB as the user interacts with it and to add dynamic elements to both the front end and backend as HTML is static and thus cannot make any alterations to the backend database, thus, it could not be used to dynamically alter the information. Single page applications only load the page once and do not completely refresh when the user interacts and manipulates the site, this is the opposite of how a HTML page would react. An example would be that an HTML page would edit the header of every page on every file. SPA applications benefits are mostly the speed and smoothness of the navigation, and reducing the load on the server.
•	Why did the backend use a NoSQL MongoDB database?
The backend used a NoSQL MongoDB database as it uses JavaScript, making it ideal within the MEAN stack. Also, the NoSQL MongoDB makes it easier to change the schema when functionality and scaling changes are introduced. Also, as it is not related to the database, it is easier to scale horizontally more rapidly. 

Functionality
•	How is JSON different from Javascript and how does JSON tie together the frontend and backend development pieces?
JSON is different from JavaScript in that JSON holds the information for JavaScript, you cannot actually run functions with JSON. JSON also breaks objects into key or value pairs. JSON ties together the frontend development pieces by allowing the JavaScript object to store the JSON information and manipulate it. JSON ties together the backend development pieces by allowing the MongoDB to store objects in the BSON, similar to JSON. This actually does a great job converting. The frontend is able to send JSON information to the MongoDB, as well as a read function to showcase the information. The backend utilizes JSON to call and respond through the database.
•	Provide instances in the full stack process when you refactored code to improve functionality and efficiencies, and name the benefits that come from reusable user interface (UI) components.
Initially, we used static HTML to build the pages, however, we refactored when we switched to handlebars and static JSON while maintaining separation from the database. This move drastically improved the user interface as it helped to save resources and speed up the rendering. It also made coding more streamlined as, instead of writing multiple lines of code for each item in Trip, we now could write about 6 lines of code that would cover all items in Trip. By utilizing {{#each trips}} and {{/each}} tag before and after the HTML block we could then manipulate how the HTML worked and also help reduce errors. Going a step further, we again refactored to include the database, this allowed us to control how the information was managed and also made it easier to create and edit functions. The benefits that come from reusable user interface components is that they help save time as you don’t need to manually code everything, reduce errors, and de-clutter, or clean up, the code.
Testing
•	Methods for request and retrieval necessitate various types of API testing of endpoints, in addition to the difficulties of testing with added layers of security. Explain your understanding of methods, endpoints, and security in a full stack application.
There are numerous ways to test without having incorporated security measures. Simply going to the local host address and verifying that the page loads the correct information correctly and successfully is one test. Using tools such as Postman you can test HTTP requests, and also verify certain security measures, such as unauthenticated user attempts, to ensure that the build is going as expected. From my understanding, the methods push the functionality and dynamics of the webpage. GET, POST, PUT, and DELETE are http requests designed to alter or pull the database’s information in order to implement the function. The functions of the database: .create, .findOne, .find, .findOneAndUpdate, are used to take the user’s needs and alter the database accordingly. Endpoints must be tested to ensure that they display the information correctly and act as intended. Also, if something is not correct, the errors thrown can be very useful to help troubleshoot. Security is incorporated to help prevent unauthorized and unauthenticated users from gaining access to the database. Securing endpoints is critical to help prevent data loss or manipulation.
  
Reflection
•	How has this course helped you in reaching your professional goals? What skills have you learned, developed, or mastered in this course to help you become a more marketable candidate in your career field?
This course has taught me a lot about what goes into development. Learning the various approaches and the pros and cons of each really helped me understand the thought process of developers and how they approach a new project. This course also taught me the importance of a functional database and the various security methods that can be incorporated. Also, my understanding of JavaScript coding has gotten better in this course. I believe that the understanding of how routers and services work within the code will help me a lot as these have not been as prevalent in previous courses. Overall, the skills I learned in this course make me that much more marketable in a highly competitive work field.


