# take-home-test

At Healthtech-1, one of our core responsibilities is to ingest registration forms; transform them; update some external systems and get them ready for future processing (by the FORM-BOT).

Your task is to code the "/ingest" endpoint. This endpoint takes a form from an external system and needs to:
- Check the form conforms to the schema we've agreed with the external provider. This schema is found in ingested_schema.ts but unfortunately the data source isn't 100% reliable and schema changes aren't always communicated in a timely fashion
- Call ideal postcodes and transform the postcode into a longitude and latitude so that we have specific address information for the FORM-BOT. A mock implementation of ideal postcodes is provided.
- Try to transform the form into the schema found in transformed_schema.ts
- If the transform is successful, the form then needs adding to a database (you are free to pick the technology here) ready for the FORM-BOT
- If transform is unsuccessful, proprose a process by which we can edit our code and handle this form post a coding change

Some additional notes on the system
- The third party external provider does not guarantee exactly once delivery
- We should never be able to give the FORM-BOT the same form twice
- If the transform is successful, we should send a guaranteed email to our team happyforms@bots.com that a form was ingested

Some notes on this take home
- We expect you to add some basic tests to your code
- We allow/expect you to use AI to aid you in this task but please do not just ask Claude to do the whole thing for you
- You are free to pick another server techology (e.g. Nest JS) if you wish and even pick another language though please check with us first on language.

How to submit
- Please send an email to laurence@healthtech1.uk with a link to your repository and a link to a 5 minute (max) loom which explains your code and some of your design decisions