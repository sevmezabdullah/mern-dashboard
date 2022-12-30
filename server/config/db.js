const mongoose = require('mongoose');

const connectDB = async () => {
  mongoose.set('strictQuery', false);
  mongoose
    .connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log('Database Connected!');
    });
};

module.exports = {
  connectDB,
};
