// const locationToAddress = (req, res, next) => {
//   const API_KEY = '03b7a51f4e7846b381384acce51a7496';
//   const { lat, long } = res.locals.location;
//   const API_URL = `https://api.opencagedata.com/geocode/v1/json?q=${lat}%2C%20${long}&key=${API_KEY}&language=en&pretty=1`;

//   Axios(API_URL).then((response) => {
//     const {
//       house_number,
//       road,
//       village,
//       state,
//       postcode,
//       formatted,
//     } = response.data.results[0].components;

//     const userAddress = {
//       houseNumber: house_number,
//       street: road,
//       city: village,
//       state,
//       postcode,
//       fullAddress: `${house_number} ${road} ${village}, ${state} ${postcode}`,
//     };

//     res.locals.address = userAddress;

//     return next();
//   });
// };
