const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

const contactRoutes = require('./routes/contactRoutes');
const messageRoutes = require('./routes/messageRoutes');

// ✅ Load environment variables (IMPORTANT)
dotenv.config(); // ❌ remove .env.example

const app = express();
// 🔥 Allow OPTIONS explicitly
router.options('*', (req, res) => {
  res.sendStatus(200);
});

router.post('/', async (req, res) => {
  res.status(200).json({ message: 'Contact received' });
});

module.exports = router;
// ✅ REQUIRED FOR RENDER / PROXIES
app.set('trust proxy', 1);

// ✅ CORS — allow ANY site
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
}));

// ✅ Handle preflight requests
app.options('*', cors());

// Body parser
app.use(express.json());

// Routes
app.use('/api/contact', contactRoutes);
app.use('/api/messages', messageRoutes);

// Base route
app.get('/', (req, res) => {
  res.send('Welcome to Sunrise Media House API');
});

// MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('✅ MongoDB connected'))
  .catch(err => console.error('❌ MongoDB error:', err));

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
