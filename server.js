const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./db.js');

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req,res)=>{
  res.send("Started Dumbo")
})

app.use('/api/auth', require('./routes/auth.js'));
app.use('/api/events', require('./routes/event.js'));

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
