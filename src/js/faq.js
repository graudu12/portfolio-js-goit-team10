
import Accordion from "accordion-js";
import "accordion-js/dist/accordion.min.css";

document.addEventListener("DOMContentLoaded", function () {
    class Accordion {
        constructor(container) {
            this.container = document.querySelector(container);
            this.items = this.container.querySelectorAll(".faq-container");
            this.init();
        }

        init() {
            let firstOpened = false;
            this.items.forEach((item) => {
                const button = item.querySelector(".faq-btn");
                const content = item.querySelector("p");
                const icon = button.querySelector(".faq-icon");
                
                if (!firstOpened) {
                    content.style.display = "block";
                    button.classList.add("active");
                    icon.style.transform = "rotate(180deg)";
                    firstOpened = true;
                } else {
                    content.style.display = "none"; 
                }

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
