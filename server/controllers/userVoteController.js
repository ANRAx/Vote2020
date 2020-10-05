const { default: Axios } = require('axios');
const absenteeVote = require('../database/absentee.js');

const UserStateInfo = async (req, res, next) => {
  const { lat, long } = res.locals.location;
  const URL = `https://usgeocoder.com/api/get_info.php?lat=${lat}&lon=${long}&authkey=01dd0330cd239608f041c6e9838d4d46&format=json`;

  const response = await Axios(URL);

  const districtNumber =
    response.data.usgeocoder.jurisdictions_info.congressional_legislators
      .last_congressional_district_id.last_congressional_district_id_value;
  const state =
    response.data.usgeocoder.jurisdictions_info.congressional_legislators
      .official_state;

  res.locals.stateInfo = {
    districtNumber,
    state,
  };

  return next();
};

const userInfo = (req, res, next) => {
  const filteredData = absenteeVote.data.filter((el) => {
    return (
      el.state.replace(/\s+/g, '').toLowerCase() ===
      res.locals.stateInfo.state.replace(/\s+/g, '').toLowerCase()
    );
  });

  const data = filteredData[0].deadline.split('.');

  res.locals.userInfo = {
    state: res.locals.stateInfo.state,
    districtNumber: res.locals.stateInfo.districtNumber,
    inPersonDeadline: data[0],
    mailInDeadline: data[1],
    onlineDeadline: data[2],
  };

  return next();
};

module.exports = [UserStateInfo, userInfo];
