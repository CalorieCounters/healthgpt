These Notes were kept in my Notes

## June 9, 2023

Today, we worked on:

* Deploying

We continued from yesterday to work on CI/CD. We were able to pass the pipeline but noticed that the page wasn't displaying and receiving a CORS error. We noticed that the backend wasn't being built properly. As a group, we sought assistance from others and gain an understanding of how the flow of deployment works Andrew's explanation that it could be due to quota has been met and needs to expand.

## June 8, 2023

Today, I worked on:

* Dashboard - Graph

I used Chart.js for a dashboard feature by creating an interactive and informative interface for users to monitor their progress and access relevant information. I decided to use a bar graph to show the total calories of the day for each meal type and a pie chart to show eaten calories and burned calories of the day.

## June 7, 2023

Today, Christian and I worked on:

* CI/CL, Dashboard

Christian and I focused on exploring CI/CD pipeline for our project. I was starting able to understand the purpose of the pipeline and how helpful it checks the code before it's ready to be deployed.

## June 6, 2023

Today, I worked on:

* Exercise Unit Test

Continue receiving a 401 status code or 422 status code. After reviewing fastAPI Tests documentation. I decided to experiment with the code. I noticed by removing the param in the fake account function, I was able to pass all the tests.

## June 5, 2023

Today, I worked on:

* Exercise Unit Test

I focused on writing comprehensive unit tests for the exercise-related functionalities. By thoroughly testing the code, we aimed to ensure the reliability and robustness of our application, delivering a high-quality user experience. I was trying to pass my tests but kept receiving a 401 status code or 422 status code.

## June 4, 2023

Today, I worked on:

* Exercise Form and Exercise List

I decided to focus on the exercise-related features, I added exercise form and exercise list functionalities. These features allowed users to track and manage their exercise routines and provide valuable insights. I think this moment is where I was able to gain a full understanding of how the backend works.

## June 3, 2023

Today, Christian and I worked on:

* Eaten Meal List

I helped Christian with his feature on the eaten meal list. I was able to learn about Promise.all() and better understanding of what are an useEffect and its purpose.

## June 2, 2023

Today, we worked on:

* Log Meal, Meal List, Food Items and Fix auth

We were able to work on multiple features related to meal form, including the log meal functionality, and the food items list display. I was able to understand the issue by remembering what the 422 status code stands for, bypassing prints, and the logs statements have helped me track back where the main problem which was related to the pydantic models. I was able to have some understanding of fastAPI flow.

## June 1, 2023

Today, we worked on:

* Connect to the Third-party API endpoint, Status Code: 401, 422

Continuing with establishing a connection to a third-party API endpoint, we were continuously facing issues. We were all researching trying to understand the errors on the logs and finding where is the main issue.

## May 31, 2023

Today, we worked on:

* Connect to the Third-party API endpoint

With the instructor's advice, we refactor our code. We focused on establishing a connection to a third-party API endpoint, which was crucial for integrating external data sources and enhancing the functionality and versatility of our app.

## May 30, 2023

Today, we worked on:

* Meals Endpoint and Meal Form

We collaboratively worked on the meals endpoint and the corresponding meal form. This involved setting up the necessary API routes and designing a user-friendly form for adding and managing meals within our app.

## May 29, 2023

Today, I worked on:

* Frontend Auth

Shifting my focus to the frontend, I engaged in the implementation of auth features by installing the JWTdown package. I worked on integrating the necessary components and functionality to support user authentication on the frontend side of our application, enhancing the overall user experience. It was a very nice refresher on React.

## May 26, 2023

Today, we worked on:

* Create, Get Meals Endpoint, and Organize files

We continued working our create and getting endpoints for Meals. As we noticed as we making our routers and queries for our accounts and meals it would be best to organize the files for a better developer experience.

## May 25, 2023

Today, we worked on:

* Backend Auth - Create Account Endpoint

Continuing with the backend authentication, focusing on the create account endpoint. We were all trying to find the bug in our code, while some of us were reviewing previous notes and videos to have an understanding of the flow. I was able to find a bug in which we were using the wrong variable. It was an important lesson for all of us to not copy and paste blindly from the docs.

## May 24, 2023

Today, we worked on:

* Backend Auth - Create Account Endpoint

Continuing with the backend authentication, we created create account endpoint. This endpoint enabled the creation of new user accounts in our system, integrating crucial functionality for user registration and account management.

## May 23, 2023

Today, I worked on:

* Backend Auth - Get One Account Endpoint

Continuing with the backend auth, we were able to create get one account endpoint that allow us to retrieve a single user account from the database, which was an important step in ensuring user authentication and authorization.

## May 22, 2023

Today, we worked on:

* Backend Auth - Install JWTdown

We discussed within the group on what's the next steps to proceed with the app. The majority of the group wanted to start on the backend Auth. I expressed my argument to focus on splitting the features (Accounts and Meals) and begin the CRUD endpoints without auth. We all reviewed documents and discussed how to integrate JWTdown.

## May 18, 2023

Today, Christian and I worked on:

* Created Database Schema for MVP

I played around with PGAdmin tool to gain a better understanding of our app. By exploring the capabilities of PGAdmin, I familiarized myself with the database environment, enabling me to make informed decisions regarding data organization and storage. During our group discussions, it became evident that the majority of the group expressed a strong interest in prioritizing backend auth for our application. I supported the decision and contributed my ideas to ensure the successful implementation of this critical feature. I took the initiative to establish clear main goals and stretch goals for the group. I defined our main objectives that aligned with our vision. These goals served as a roadmap, guiding our efforts and helping the group stay focused on delivering essential functionality.

## May 17, 2023

Today, we worked on:

* Setup Pydandic Models, Account Models, and Discussed MVP models

We explored the specific additions and modifications needed for the MPV models within the database. By analyzing the project requirements and considering user needs, we determined the most crucial data fields and relationships to incorporate into our database design.

## May 16, 2023

Today, we worked on:

* Setup Pydandic Models and Account Models

I took the lead in assisting the group with setting up and utilizing SQL in pgAdmin. During our design conversations, we explored the necessary additions and modifications required for the account models in the database. By discussing and analyzing the requirements, we ensured that the account models aligned with the desired functionality of our application. Through clear explanations and examples, I helped my group understand the structure and usage of Pydantic models, enabling consistent and efficient data handling within our application.

## May 15, 2023

Today, we worked on:

* Setup FastAPI

We focused on setting up FastAPI for our project. I guided the group in utilizing SQL in pgAdmin, ensuring everyone had a clear understanding of how to work with the database. As a group, we created pydantic models, emphasizing their importance in defining the structure and validation of data for our FastAPI endpoints. During the setup process, we encountered some challenges with package installations. We worked together to troubleshoot and resolve these issues, ensuring that all necessary packages were properly installed and configured. Through collaboration, we successfully set up FastAPI, laying the groundwork for our project's development.

## May 12, 2023

Today, we worked on:

* Discussed the models, design, fastAPI endpoints, and DB

During our discussions, we talked about models, designs, FastAPI endpoints, and the choice of database. I created a model diagram that visualized the structure and relationships of our project components for the entire group to review. We discussed the flaws and issues in the natural language and made sure to address them, ensuring clear communication and understanding among group members. We collectively decided to utilize SQL as our chosen database technology. These discussions helped us align our understanding, make informed decisions, and establish a solid foundation for the development process.

## May 11, 2023

Today, we worked on:

* Discussed Models and DB

We noticed that we were confusing ourselves by using different vocabulary. We agreed to set up ubiquitous language, so we all have a better understanding when we discuss our app. We explored various models and their relationships within the database. Our discussions involved considering diverse perspectives and making informed decisions.

## May 10, 2023

Today, we worked on:

* Discussed Models and Wireframe tools

We all shared our thoughts and approaches to creating our models. There were some disagreements and agreements within the group on how we should set up our models for the meals and food items. We used Invision for wireframe to help us visually understand our app instead of Figma because it seem complicated to use.
