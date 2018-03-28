import mongoose from 'mongoose';

const opendb = async (uri = 'mongodb://localhost/website') => {
  try {

    const connection = mongoose.connection;
    connection.on('error', console.error.bind(console, 'connection error: --> '));
    connection.on('open', console.log.bind(console, 'connection open: --> '));
    // mongoose.set('bufferCommands', false);

    const options = {
      // useMongoClient: true,
      autoIndex: false, // Don't build indexes
      reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
      reconnectInterval: 500, // Reconnect every 500ms
      poolSize: 10, // Maintain up to 10 socket connections
      // If not connected, return errors immediately rather than waiting for reconnect
      bufferMaxEntries: 0,
      keepAlive: true,
    };
    await mongoose.connect(uri, options);

  } catch (error) {
    console.error(error);
  }
}

export default opendb;