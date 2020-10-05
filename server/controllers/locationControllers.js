/**
Server Side:
req.headers -> IP Stack (lat & long)  
US geocoder (address & zip) ->  WE ARE HERE
JSON to display relevant data

get user ip addresss at '/' with req.header 
RES -> clientside

if required, user input can post address
then we parse the address into lat and long
using locationToAddress middleware
*/

const { default: Axios } = require('axios');

// get user ip
const userIp = (req, res, next) => {
  // req.headers is for client ip and req.connection is for proxy ip
  // '100.36.173.152' || // Remove this during production
  const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
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

module.exports = [userIp, ipStack];
