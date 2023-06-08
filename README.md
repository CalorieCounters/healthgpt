# Module3 Project Gamma

## Overview

Juno Lee
Jason Rhein
Italiz Vazquez
Christian Tegene
Alex Winterlee

## Install Extensions

- Prettier: <https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode>
- Black Formatter: <https://marketplace.visualstudio.com/items?itemName=ms-python.black-formatter>

## Deliverables

- Wire-frame diagrams:
  https://ita835417.invisionapp.com/freehand/Project-Gamma-tHdPyE9bK

- API documentation:
  https://docs.google.com/document/d/1_q-K-ObMTZvO0qUEAxROrN3bwMujwAN25sLHwJzliK0/edit#heading=h.73n49tgew66c

## Intended Market

The HealthGPT target audience is not restricted to a specific demographic. Anyone interested in tracking their nutritional intake and caloric calculation can utilize our natural language based product!

## Functionality

Users of the site are met with a stylish homepage, offering them the opportunity
to either log in or create an account if they don't already have one. Once they sign up or log in they are transported to to the Dashboard, the center of the user's nutrional rundown. This area shows the user details of their nutrional intake and exerise output, allowing them to easily keep track of their progress. If the user decides to click on the navigation bar, disguiesed as a button labeled "Menu", they are once again treated to the view of a fully functioning navigation bar, complete with quick links to each aspect of our site. From this navigation menu, the user can access every piece of the site, seemlesly transitioning from logging their meals, viewing the meals they've eaten, logging their exercise for the day, and viewing said exercise.

These features alone are beneficial for the user to have access to, and HealthGPT combines them all for a seamless user experience.

The "Log Meal" page allows the user to input their consumption for any given meal, snack, or desert, using a natural language input system. NutritionIX API accepts their input and provides a nutrtional breakdown for both individual food items and aggregate meals.

The "Eaten Meals" page takes the user's input and stores them in a table, giving the user a way to view their consumption with ease.

The "Log Exercise" page behaves identically to the "Log Meal" page, using NutrionIX's natural language input systyem to give the user a breakdown of each exercise they perform.

The "My Exercises" page is a twin to the "Eaten Meals" page, allowing the user to easily see the breakdown of each exercise they've done.

## Project Initialization

To test this application on your local machine, please follow these steps:

1. Clone the repository down to your local machine
2. CD into the new project directory
3. Run docker volum to create sample_service
4. Run docker compose build
5. Run docker compose up
6. Run docker exec -it module3-project-gamma-fastapi-1 bash
7. Run python manage.py
8. Exit the container's CLI and enjoy HealthGPT!

#### Your GitLab pages URL

You can't find this in GitLab until after you've done a deploy
but you can figure it out yourself from your GitLab project URL.

If this is your project URL

https://gitlab.com/GROUP_NAME/PROJECT_NAME

then your GitLab pages URL will be

https://GROUP_NAME.gitlab.io/PROJECT_NAME

### Initialize CapRover

1. Attain IP address and domain from an instructor
1. Follow the steps in the CD Cookbook in Learn.

### Update GitLab CI/CD variables

Copy the service URL for your CapRover service and then paste
that into the value for the SAMPLE_SERVICE_API_HOST CI/CD variable
in GitLab.

### Deploy it

Merge a change into main to kick off the initial deploy. Once the build pipeline
finishes you should be able to see an "under construction" page on your GitLab
pages site.

## Project Initialization

To test this application on your local machine, please follow these steps:

1. Clone the repository down to your local machine
2. CD into the new project directory
3. Run docker volum to create sample_service
4. Run docker compose build
5. Run docker compose up
6. Run docker exec -it module3-project-gamma-fastapi-1 bash
7. Run python manage.py
8. Exit the container's CLI and enjoy HealthGPT!
