let mongoose=require('mongoose');

mongoose.connect(process.env.MONGODB_PATH,{
    poolSize: 10,
    serverSelectionTimeoutMS: 30000,
    useNewUrlParser:true,
    useUnifiedTopology:true
});
const db = mongoose.connection;

// db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

