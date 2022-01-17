const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied');
const count = document.getElementById('count');
const total = document.getElementById('total');

let ticketPrice =50000+1000;

// update total and count
function updateSelectedCount() {
  const selectedSeats = document.querySelectorAll('.row .seat.selected');

  const seatsIndex = [...selectedSeats].map((seat) => [...seats].indexOf(seat));

  localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));

  const selectedSeatsCount = selectedSeats.length;

  count.innerText = selectedSeatsCount;
  total.innerText = selectedSeatsCount * ticketPrice;
}

container.addEventListener('click', (e) => {
  if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
    e.target.classList.toggle('selected');
    updateSelectedCount();
  }
});

var div =document.querySelectorAll('.row .seat.occupied');
for (var i = 0; i < div.length; i++)

updateSelectedCount();

function book() {

var div = document.querySelectorAll('.row .seat.selected');
for (var i = 0; i < div.length; i++) {
  div[i].classList.remove('selected');
  div[i].classList.add('occupied')
}
  alert('Konfirmasi Berhasil, seat telah dipilih. Terima Kasih!');
  updateSelectedCount();
}
