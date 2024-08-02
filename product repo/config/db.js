const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://test123:11121998@atlascluster.s8edkac.mongodb.net/?retryWrites=true&w=majority&appName=AtlasCluster', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('DB connected successfully');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
