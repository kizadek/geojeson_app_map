const NodeGeocoder = require('node-geocoder');

const options = {
  provider: process.env.GEOCODER_PROVIDER,
  
  // Optionnal depending of the providers
  httpAdapter: 'https', // Default
  apiKey: process.env. GEOCODER_API_KEY, 
  formatter: null         // 'gpx', 'string', ...
};

const geocoder = NodeGeocoder(options);

module.exports = geocoder;
