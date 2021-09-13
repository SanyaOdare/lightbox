const modalBtn = document.querySelector('.modal-btn');
const modalOverlay = document.querySelector('.modal-overlay');
const closeBtn = document.querySelector('.close-btn');

// listen for click events on modal button
modalBtn.addEventListener('click', function() {
  modalOverlay.classList.add('open-modal');
})

// listen for click events on close button
closeBtn.addEventListener('click', function() {
  modalOverlay.classList.remove('open-modal');
})