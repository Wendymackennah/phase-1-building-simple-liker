// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

// Wait for the DOM to be ready
document.addEventListener('DOMContentLoaded', function () {
  // Get all elements with the class 'like'
  var likeButtons = document.querySelectorAll('.like');

  // Add click event listener to each 'Like' button
  likeButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      // Simulate server call
      mimicServerCall()
        .then(function () {
          // Toggle the heart symbol
          toggleHeart(button);
        })
        .catch(function (error) {
          // Display error modal
          showErrorModal(error);
        });
    });
  });
});

// Function to toggle the heart symbol and add the activated-heart class
function toggleHeart(button) {
  // Toggle the 'liked' class on the parent article
  button.closest('.media-post').classList.toggle('liked');

  // Toggle the heart symbol and add the activated-heart class
  var likeGlyph = button.querySelector('.like-glyph');
  likeGlyph.innerHTML = likeGlyph.innerHTML === EMPTY_HEART ? FULL_HEART : EMPTY_HEART;
  likeGlyph.classList.toggle('activated-heart');
}

// Function to show error modal
function showErrorModal(message) {
  var modal = document.getElementById('modal');
  var modalMessage = document.getElementById('modal-message');
  
  modalMessage.textContent = message;
  modal.classList.remove('hidden');
  
  // Hide the modal after 3 seconds
  setTimeout(function () {
    modal.classList.add('hidden');
  }, 3000);
}





//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
