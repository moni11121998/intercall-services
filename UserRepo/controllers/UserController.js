const User = require('../models/user');

exports.getAdminEmails = async (req, res) => {
  try {
    const admins = await User.find({ role: 'admin' }, 'email');
    res.json(admins.map(admin => admin.email));
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
