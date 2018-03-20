# BurstSMS Developer Challenge + Front End

## Task
This challenge is intended to help us understand how you approach a task, for it you are asked
to produce a small web application that allows users to send an SMS message via our API.
There is no one correct way to accomplish this task and it will form the basis for a discussion at
a further interview.

You will be provided with a BurstSMS account to use for this test that will have enough credit for
you to send SMS messages for testing.

Please be sure to provide enough technical instructions so we can setup and run your
code.(assume that the language runtime will already be available).

You are expected to use and demonstrate your knowledge of best practice with regards to the
current JavaScript ecosystem, using the latest language features and tooling.

### Requirements

- Create a web form in which a user can enter a phone number and upto 3 SMS
messages worth of text
- The application must load in credentials from a .env file in the root directory and we will
use our tokens when testing it
- On submission of the form search and replace any found http urls with a bitly shortlink
via the Bitly API
- Once the message is ready, send it to the given phone number as an sms via the HTTP BurstSMS API
- Please do not use the existing BurstSMS API client libraries

Submit your application to a public git repository, we will be looking at commits along with over
all code quality.

A simple visual design for the project can be found at
https://app.zeplin.io/project/5aa76a852f4500298ed14352
use the same login details given for the BurstSMS account to access.

## Setup

1. Clone [this repo](https://github.com/dexterfgo/burst-sms-challenge).
	
2. Change directory to the cloned repository.
3. Run 'yarn' and 'yarn run start'.

	``` $ yarn ```

	``` $ yarn run start ```

4. Open your browser to localhost:3000 (if not done automatically by the last command).