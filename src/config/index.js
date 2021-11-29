const env = {
   // ACCESS_POINT: "http://localhost:5001",
   ACCESS_POINT: process.env.REACT_APP_ENDPOINT
  };
  console.log(process.env.REACT_APP_ENDPOINT,"process.env.REACT_APP_ENDPOINT")
  module.exports = env;
  