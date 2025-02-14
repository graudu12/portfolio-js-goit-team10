(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
    modalTitle: document.querySelector('.modal h3'),
    modalMessage: document.querySelector('.modal p'),
  };

  refs.closeModalBtn.addEventListener('click', toggleModal);
  refs.modal.addEventListener('click', event => {
    if (event.target === event.currentTarget) {
      toggleModal();
    }
  });
  function toggleModal() {
    refs.modal.classList.toggle('is-open');
    document.body.style.overflow =
      document.body.style.overflow === 'hidden' ? '' : 'hidden';

    if (refs.modal.classList.contains('is-open')) {
      document.addEventListener('keydown', onEscPress);
    } else {
      document.removeEventListener('keydown', onEscPress);
    }
  }
  function onEscPress(event) {
    if (event.code === 'Escape') {
      toggleModal();
    }
  }
  function showModal(title, message) {
    refs.modalTitle.textContent = title;
    refs.modalMessage.textContent = message;
    toggleModal();
  }

  window.showModal = showModal;
})();
