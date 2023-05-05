# DSAID VA QE Assessment

## Instructions

**First, please go to `tests.js` and add in the variables for the personal Microsoft account necessary for logging into the system**

Install node.js, and then run the tests by navigating to the root directory of the project and run the following command `npm test tests/tests.js`

Sometimes there might be additional screens asking to add the authenticator or other screens after providing the email/password. Those screens will break the log in flow, please try to log in with the account to dismiss those screens before executing the test scripts again.

## Notes
Unfortunately I ran into an issue on the availability of time to fully flesh out the assignment, due to various lide commitments and responsibilities, but unfortunately the website isn't the most friendly to automate via Selenium. 

In fact, if this video analytics service is the main use case, I highly suggest automating the workflows using their provided APIs instead. That will prove a lot more reliable then bumping around with the web interface which will also be a lot slower.