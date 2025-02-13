import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.contact-form');
const emailInput = document.getElementById('email');
const commentsInput = document.getElementById('comments');
const emailMessage = document.getElementById('message');

if (emailInput && emailMessage) {
  emailInput.addEventListener('input', () => {
    const value = emailInput.value.trim();

    if (!value) {
      emailMessage.textContent = '';
      return;
    }

    if (emailInput.checkValidity()) {
      emailMessage.textContent = 'Succes!';
      emailMessage.style.color = '#3cbc81';
    } else {
      emailMessage.textContent = 'Invalid email, try again';
      emailMessage.style.color = '#e74a3b';
    }
  });
}

form.addEventListener('submit', event => {
  event.preventDefault();

  const email = emailInput.value.trim();
  const comment = commentsInput.value.trim();

  if (!email || !comment) {
    iziToast.warning({
      title: 'Warning',
      message: 'Please fill in all fields!',
      position: 'topRight',
    });
    return;
  }

  sendFormData({ email, comment });
});

async function sendFormData(data) {
  try {
    const response = await axios.post(
      'https://portfolio-js.b.goit.study/api/requests',
      data
    );

    if (response.status === 201) {
      showSuccessModal(response.data);
      form.reset();
      emailMessage.textContent = '';
    }
  } catch (error) {
    handleError(error);
  }
}

function showSuccessModal({ title, message }) {
  window.showModal(title, message);
}

function handleError(error) {
  let message = 'An error occurred! Please try again later.';

  if (error.response) {
    if (error.response.status === 400) {
      message = 'Invalid form data. Please check your input!';
    } else if (error.response.status === 404) {
      message = 'Server not found!';
    } else if (error.response.status === 500) {
      message = 'Server error! Please try again later.';
    }
  }

  iziToast.error({
    title: 'Error',
    message,
    position: 'topRight',
  });
}
