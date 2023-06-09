5/8/2023
Brainstormed project ideas and decided to create a project based on health. More specifically, we aim to track nutritional intake and calculate daily calories.

5/9/2023
Decided to use the Nutrionix third-party API because it not only provides endpoints for nutrition data but also allows users to input their intake in natural language. Progressed in structuring how our project will handle data with the third-party API.

5/12/2023
Finalized the software architecture of the front end and started discussing how we should structure our data tables.

5/15/2023
Decided on the database to use, considering PostgreSQL and MongoDB. Also discussed what we should personally study to have a smoother development process.

5/17/2023
Realized there was confusion when designing our models and clarified the difference between Pydantic models and database tables.

5/20/2023
Explored the inputs and outputs of the third-party API in depth. Created the first migration table in PgAdmin.

5/22/2023
Discussed the features to include and defined our Minimum Buyable Product (MBP). We concluded that the exercise aspect of the project would be a stretch goal, and we would focus on allowing users to log what they eat.

5/23/2023
Worked on the query and router for the account. Since authentication is required, we identified the account as the first model we should tackle.

5/24/2023
After trial and error, we were able to figure out the GET account, but the POST account was not progressing as well as we had hoped. We delved deep into understanding FastAPI for a better grasp of the data flow. Authentication was a separate concept that we started to tackle but couldn't fully understand through the documentation alone.

5/25/2023
Authentication continued to hinder our progress, so we sought assistance from SEIRs.

5/30/2023
With the help of the instructor, we were able to achieve a fully functioning account POST.

6/1/2023
Wrapped up the meal router and query. Since we had the account router and query figured out, the development process became smoother. Integrating the third-party API was a great learning experience. We also took note of our keys.py file, which contained our API keys but was displaying on GitLab once committed.

6/2/2023
Started to heavily work on the front end. One of the most important features, logging a meal, was completed. We also began discussing the design aspect.

6/5/2023
Completed front end authentication, although we still found it to be one of the more challenging steps. On the other hand, most of the front end functionality was done. We split up the group to tackle multiple tasks simultaneously, experiencing different styles of development.

6/6/2023
Needed to define the remaining tasks for the project as the due date was approaching. We were glad that the backend work for exercise was completed, but the front end still required some final touches. Also, finalized the design theme of our webpage and discovered many useful sites for designing. Personally, I find the front end very enjoyable!

6/7/2023
Wrapped up the homepage and worked on the logos. Encountered some issues with certain React components, but debugging them was significantly easier than dealing with backend issues. We worked individually at this point to tackle a couple of minor tasks more efficiently, as we aimed to have minimal tasks left for the remaining days.

6/8/2023
The last two major tasks were completing the dashboard page and deployment. The skeleton of the dashboard page has been finished, and now it's a matter of how much time we have and whether we want to display more information or not. None of us felt comfortable with deployment at the moment, so we needed to study that aspect individually.

6/9/2023
Actually had some time to play around with the styling last night, and With the help of peers we were able to successfully finish the deployment process.
There was a quota issue for deploying, which is why the deployment wasn't successful.
