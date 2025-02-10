import "accordion-js/dist/accordion.min.css";

document.addEventListener("DOMContentLoaded", function () {
    class Accordion {
        constructor(container) {
            this.container = document.querySelector(container);
            this.items = this.container.querySelectorAll(".ac-container");
            this.init();
        }

        init() {
            this.items.forEach((item) => {
                const button = item.querySelector(".faq-btn");
                const content = item.querySelector(".answer-text");
                const icon = button.querySelector(".faq-icon");
                
                content.style.display = "none";
                
                button.addEventListener("click", () => {
                    const isOpen = content.style.display === "block";
                    content.style.display = isOpen ? "none" : "block";
                    button.classList.toggle("active", !isOpen);
                    
                    icon.style.transform = isOpen ? "rotate(0deg)" : "rotate(180deg)";
                    icon.style.transition = "transform 0.3s ease";
                });
            });
        }
    }

    new Accordion(".accordion-container");
});
