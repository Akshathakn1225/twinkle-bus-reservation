const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

let bookings = [];

app.get('/api/bookings', (req, res) => {
  res.json(bookings);
});

app.post('/api/book', (req, res) => {
  const booking = req.body;
  bookings.push(booking);
  res.json({ success: true, message: 'Booking successful', booking });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
