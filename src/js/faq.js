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
                
                content.style.maxHeight = "0";
                content.style.overflow = "hidden";
                content.style.transition = "max-height 0.3s ease-out, padding 0.3s ease-out";
                
                button.addEventListener("click", () => {
                    const isOpen = content.style.maxHeight !== "0px";
                    
                    if (isOpen) {
                        content.style.maxHeight = "0";
                        content.style.paddingTop = "0";
                        content.style.paddingBottom = "0";
                    } else {
                        content.style.maxHeight = content.scrollHeight + 50 + "px";
                        content.style.paddingTop = "10px";
                        content.style.paddingBottom = "10px";
                    }
                    
                    button.classList.toggle("active", !isOpen);
                    icon.style.transform = isOpen ? "rotate(0deg)" : "rotate(180deg)";
                    icon.style.transition = "transform 0.3s ease";
                });
            });
        }
    }

    new Accordion(".accordion-container");
});
