const express = require('express');
const cors = require('cors');
const app = express();

// ✅ Proper CORS Setup
app.use(cors({
  origin: ['http://localhost:3000', 'https://todo-frontend-ten-orcin.vercel.app'],
  credentials: true,
}));

app.use(express.json());

// Routes and DB connection
require('./model/taskSchema.js');
require('./model/userSchema.js');
const TaskRouter = require('./Router/taskApi.js');
const UserRouter = require('./Router/userApi.js');
const ConnectDB = require('./Connection/conn');

app.use(TaskRouter);
app.use(UserRouter);

ConnectDB();

app.get('/', (req, res) => {
  res.send('Hello I am Home Page..');
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`App is running on the port ${port}`);
});
