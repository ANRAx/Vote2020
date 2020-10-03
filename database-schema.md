## EZ Vote SQL Schema

### Entites

- [x] Users
- [x] States

### Users
---
PK id serial  
email text  
password text  
address text  
state FK -> states.id  
zipcode number  
district number  
congressional_district_id text  
createdAt datetime

User sign up -> geocoder -> create an object containing the relevant info to a user -> insert into database

User logs in -> /api/userinfo -> 

### States  
---
PK id serial  
state text  
mail_in_deadline text  
on_line boolean  
absentee_ballot_due text