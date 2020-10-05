## 1. Express Routes

- [ ] API routes
- [ ] PSQL connection
- [ ] API List

### Express API Routes

---

1. Get users

- /api/users -> JSON -> client side

2. Create a new user

- /api/register -> database

When creating a new user

1. Address
2. Zipcode
3. State
4. Congressional District

Client -> API Route -> Voter Info

### API List

---

1. Use req.headers['x-forwarded-for'] -> User IP Address
2. IP Stack using user IP

- To find a users zip code and lat and long

3. Google Geolocator

- To parse a users lat and long into an address

4. US geocoder

- To show releveant info regarding election info to the user given an address

User lands on page

Client Side:
index.html -> bundle.js ->

Server Side:
req.headers -> IP Stack (lat & long)
Open Cage (address) ->  
US geocoder (address & zip) ->  
JSON to display relevant data

get user ip addresss at '/' with req.header
RES -> clientside

### IP Stack or NPM GeoIP-lite or req.headers[x-forwarded]

---

![json-res](./district.jpg)

routes: api route
http://api.ipstack.com/100.36.173.152?access_key=a99e8aa317387ad37f27dcc6a7a478eb
api key: a99e8aa317387ad37f27dcc6a7a478eb

### US Geocoder

---

routes: api route

api key: 01dd0330cd239608f041c6e9838d4d46

### PSQL Connection

---
