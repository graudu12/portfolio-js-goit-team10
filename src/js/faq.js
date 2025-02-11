import 'accordion-js/dist/accordion.min.css';

document.addEventListener('DOMContentLoaded', function () {
  class Accordion {
    constructor(container) {
      this.container = document.querySelector(container);
      this.items = this.container.querySelectorAll('.faq-li');
      this.init();
    }

    init() {
      this.items.forEach(item => {
        const button = item.querySelector('.faq-btn');
        const content = item.querySelector('p');
        const icon = button.querySelector('.faq-icon');

        content.style.overflow = 'hidden';
        content.style.transition =
          'max-height 0.8s cubic-bezier(0.4, 0, 0.2, 1), padding 0.8s cubic-bezier(0.4, 0, 0.2, 1)';

        content.style.maxHeight = '0px';
        content.style.paddingTop = '0';
        content.style.paddingBottom = '0';

        button.addEventListener('click', () => {
          const isOpen = button.classList.contains('active');
          if (isOpen) {
            content.style.maxHeight = '0px';
            content.style.paddingTop = '0';
            content.style.paddingBottom = '0';
            button.classList.remove('active');
            icon.style.transform = 'rotate(0deg)';
          } else {
            content.style.maxHeight = content.scrollHeight + 'px';

            button.classList.add('active');
            icon.style.transform = 'rotate(180deg)';
          }
          icon.style.transition = 'transform 0.3s ease';
        });
      });
    }
  }

  new Accordion('.accordion-container');
});