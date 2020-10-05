/**
Server Side:
req.headers -> IP Stack (lat & long) 
Open Cage (address) ->  
US geocoder (address & zip) ->  WE ARE HERE
JSON to display relevant data

get user ip addresss at '/' with req.header 
RES -> clientside

routes: api route
http://api.ipstack.com/100.36.173.152?access_key=a99e8aa317387ad37f27dcc6a7a478eb
api key: a99e8aa317387ad37f27dcc6a7a478eb
*/

const { default: Axios } = require('axios');
// const axios = require('axios');

// get user ip
const userIp = (req, res, next) => {
  // req.headers is for client ip and req.connection is for proxy ip
  const ip =
    '100.36.173.152' || // Remove this during production
    req.headers['x-forwarded-for'] ||
    req.connection.remoteAddress;
  res.locals.ipAddress = ip;
  return next();
};

const ipStack = async (req, res, next) => {
  const { ipAddress } = res.locals;
  const url = `http://api.ipstack.com/${ipAddress}?access_key=a99e8aa317387ad37f27dcc6a7a478eb`;

  try {
    const response = await Axios(url);
    const { latitude, longitude } = response.data;
    const location = {
      lat: latitude,
      long: longitude,
    };
    res.locals.location = location;
    return next();
  } catch (err) {
    return next(err);
  }
};

const locationToAddress = (req, res, next) => {
  const API_KEY = '03b7a51f4e7846b381384acce51a7496';
  const { lat, long } = res.locals.location;
  const API_URL = `https://api.opencagedata.com/geocode/v1/json?q=${lat}%2C%20${long}&key=${API_KEY}&language=en&pretty=1`;

  Axios(API_URL).then((response) => {
    const {
      house_number,
      road,
      village,
      state,
      postcode,
      formatted,
    } = response.data.results[0].components;

    const userAddress = {
      houseNumber: house_number,
      street: road,
      city: village,
      state,
      postcode,
      fullAddress: `${house_number} ${road} ${village}, ${state} ${postcode}`,
    };

    res.locals.address = userAddress;

    return next();
  });
};

const test = (req, res, next) => {
  console.log(res.locals.address);
  return next();
};

module.exports = [userIp, ipStack, locationToAddress, test];
