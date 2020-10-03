## EZ Vote SQL Schema

### Entites

- [x] Users
- [x] States

### Users
---
PK id serial  
email text  
password text  
zipcode number  
district number  
createdAt datetime

### States  
---
PK id serial  
state text  
mail_in_deadline text  
online boolean  
absentee_ballot_due text