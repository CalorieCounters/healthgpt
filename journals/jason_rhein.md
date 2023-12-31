June 9th

* The waiting game

This morning we wrapped up some styling issues and have completed deployment on our end. Currently
waiting on Galvanize's deployment issues to be resolved


June 8th

* Dashboard page and styling finishing touches

As we near the completion of our project, we had only one page remaining to display on
the front end, the user dashboard. In additon to this, we put the finishing touches on the
styling of the application and prepared to work on deployment.


June 7th

* Exercise pages and unit tests

With all things related to our nutrtional content squared away, we moved on to something
that was initially considered a stretch goal, exercise functionality. It took roughly one
full day but working into the evening last night we were able to finalize this aspect. We then
spent the first half of today working on our unit tests. It was slow going at first, but as
we completed one and then the next one we got better and better. By lunch today we had completed
all of our unit tests.


June 6th

* Moving on to food items

With much of the front end functionality complete, we moved on to a different aspect of our
nutrional tracking, which is storing individual food items. This took some thought as we
needed the food items to be created and stored in the database using the same api call
that contains our meal details. We also needed to track the nutrional content of each
individual food item. With some work arounds regarding the varying nutrtional content each
food item contains, we were able to get this working.


June 5th

* Front end authentication

The past few days have seen some breakthroughs for our group and we have moved on to
shaping the other aspects of our front end. Now that we have log a meal functionality
we were able to complete our meal history table. As we start finishing up front end features
we needed to finalize our front end authentication. We were initially having trouble having
our token follow the account to other pages once logged in. Today we finalized that aspect.


June 2nd

* Log a meal front end functionality complete

We worked into the evening last night and our front end Log a Meal form is complete. We
need to touch up some aspects of the page still, but the general functionality is working.
We also started work on some of the front end design aspects. We're implementing a
collapsible nav bar and are working to implement that the way we would prefer it to
look. Additionally we hid our keys.py file.


June 1st

* Completed backend meal functionality

Create and get meal backend functionality is complete. We committed and pushed to Gitlab.
We're now ready to move onto the front end of our appliation. The first thing we decided
to work on was our Log a Meal form. This will be the most code intensive of any of our
features so it seemed like a good place to start. We also realize our keys.py file is
not being displayed in a best practice sort of way.


May 31st

* Moving on to meal functionality

Now that we have account functionality, we moved onto our meal functions. We started the days
by cleaning up some of our account code. Then we started to tackle the meal functionality.


May 30th

* Finished create account functionality

With some clutch assistance from an instructor, we were able to get our create account
functionality where it needs to be to move forward. We committed and pushed these changes
to Gitlab. We now have backend functionality for login, logout, get account and create
account.


May 26th

* Create account functionality

We've been struggling for a few days now on the token authentication. We had SEIR help today
but they were unable to rectify our issues. We plan to ask for instructor assistance after the
holiday weekend.


May 24th

* Get account function complete

We finished the get account functionality and pushed it to gitlab. We then moved on to the
create account functionality. We are having a decently tough time with this functionality as
it is our first time working with the authentication token. We were lost as to what to try  next at times.


May 23rd

* Started working on backend

After deciding on a workflow for the initial features, we started to put together the router
and query functions. We started with accounts, working on the router and query functions. We
created an account using PGAdmin so that we had some data for the get account functionality.


May 22nd

* Started creating feature branches

Now that we have our models squared away for the time being, we started to think about
how we would begin working on the different features of our app. We made branches for the features we're going to work on first and started looking into how to get the backend set up for them.


May 19th

* Finalized the structure of our models

Using our third party API as a reference, we went over the nutritional values that it would
return and chose which items we wanted to display in our app. We then made our migration
tables on PGAdmin.


May 17th

* Started thinking about models

Once we decided on PostgreSQL as our database, we started to outline our models, considering
what we want to be included and the way in which the models would relate to each other. We downloaded PGAdmin and connected it to our server.


May 15th

* Decided which database to use

Today we looked over our wireframe and considered the structure we imagine our models will take.
Based on this we decided to use PostgreSQL for our database. We considered MongoDB as well, but
there didn't seem to be a necessity to go a non-relational route.
