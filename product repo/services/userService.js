const axios = require('axios');

exports.fetchAdminEmails = async () => {
  const response = await axios.get('http://localhost:3002/users/admin-emails');
  return response.data;
};
