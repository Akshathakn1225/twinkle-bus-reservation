document.getElementById('booking-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const booking = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    boarding: document.getElementById('boarding').value,
    dropping: document.getElementById('dropping').value,
    date: document.getElementById('date').value
  };
  const response = await fetch('https://your-backend.onrender.com/api/book', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(booking)
  });
  const data = await response.json();
  alert(data.message);
});
