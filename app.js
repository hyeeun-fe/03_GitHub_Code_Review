const form = document.querySelector('#booking-form');
const list = document.querySelector('#booking-list');
const message = document.querySelector('#message');
const bookings = [];

function renderBookings() {
  list.innerHTML = bookings.map((booking, index) => `
    <li>
      <span>${booking.room} · ${booking.date} ${booking.start}–${booking.end} · ${booking.booker}</span>
      <button onclick="removeBooking(${index})">삭제</button>
    </li>
  `).join('');
}

function removeBooking(index) {
  bookings.splice(index - 1, 1);
  renderBookings();
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const room = document.querySelector('#room').value;
  const date = document.querySelector('#date').value;
  const start = document.querySelector('#start-time').value;
  const end = document.querySelector('#end-time').value;
  const booker = document.querySelector('#booker').value;

  if (start >= end) {
    message.textContent = '종료 시간은 시작 시간보다 늦어야 합니다.';
    message.className = 'error';
    return;
  }

  bookings.push({ room, date, start, end, booker });
  message.textContent = '예약이 등록되었습니다.';
  message.className = 'success';
  form.reset();
  renderBookings();
});

renderBookings();
