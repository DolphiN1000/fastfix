new Swiper(".swiper-gallary",{direction:"horizontal",loop:!0,autoplay:{delay:5e3,disableOnInteraction:!1},pagination:{el:".swiper-pagination2"},navigation:{nextEl:".swiper-button-next2",prevEl:".swiper-button-prev2"},scrollbar:{el:".swiper-scrollbar2"},on:{init(){this.el.addEventListener("mouseenter",(()=>{this.autoplay.stop()})),this.el.addEventListener("mouseleave",(()=>{this.autoplay.start()}))}}}),new Swiper(".swiper",{direction:"horizontal",loop:!0,pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},scrollbar:{el:".swiper-scrollbar"}});var e,t,o;"function"!=typeof(e=window.Element.prototype).matches&&(e.matches=e.msMatchesSelector||e.mozMatchesSelector||e.webkitMatchesSelector||function(e){for(var t=this,o=(t.document||t.ownerDocument).querySelectorAll(e),n=0;o[n]&&o[n]!==t;)++n;return Boolean(o[n])}),"function"!=typeof e.closest&&(e.closest=function(e){for(var t=this;t&&1===t.nodeType;){if(t.matches(e))return t;t=t.parentNode}return null}),document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelectorAll(".js-open-modal"),t=document.querySelector(".js-overlay-modal"),o=document.querySelectorAll(".js-modal-close");e.forEach((function(e){e.addEventListener("click",(function(e){e.preventDefault();var o=this.getAttribute("data-modal");document.querySelector('.modal[data-modal="'+o+'"]').classList.add("active"),t.classList.add("active")}))})),o.forEach((function(e){e.addEventListener("click",(function(e){this.closest(".modal").classList.remove("active"),t.classList.remove("active")}))})),document.body.addEventListener("keyup",(function(e){27==e.keyCode&&(document.querySelector(".modal.active").classList.remove("active"),document.querySelector(".overlay").classList.remove("active"))}),!1),t.addEventListener("click",(function(){document.querySelector(".modal.active").classList.remove("active"),this.classList.remove("active")}))})),(()=>{const e=document.querySelector(".js-menu-container"),t=document.querySelector(".js-open-menu"),o=document.querySelector(".js-close-menu"),n=()=>{const o="true"===t.getAttribute("aria-expanded")||!1;t.setAttribute("aria-expanded",!o),e.classList.toggle("is-open");bodyScrollLock[o?"enableBodyScroll":"disableBodyScroll"](document.body)};t.addEventListener("click",n),o.addEventListener("click",n),window.matchMedia("(min-width: 768px)").addEventListener("change",(o=>{o.matches&&(e.classList.remove("is-open"),t.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))}))})(),(()=>{const e={openMenuBtn:document.querySelector("[data-menu-open]"),closeMenuBtn:document.querySelector("[data-menu-close]"),menu:document.querySelector("[data-menu]")};function t(){e.menu.classList.toggle("is-open")}e.openMenuBtn.addEventListener("click",t),e.closeMenuBtn.addEventListener("click",t)})(),(()=>{const e={openModalBtn:document.querySelector("[data-modal-bno]"),closeModalBtn:document.querySelector("[data-modal-buy-now-close]"),modal:document.querySelector("[data-modal-buy-now]")};function t(){e.modal.classList.toggle("is-hidden")}e.openModalBtn.addEventListener("click",t),e.closeModalBtn.addEventListener("click",t)})(),(()=>{const e={openModalBtnMobile:document.getElementById("button-buy-now"),modal:document.querySelector("[data-modal-buy-now]"),menuMob:document.querySelector("[data-menu]")};e.openModalBtnMobile.addEventListener("click",(function(){e.modal.classList.remove("is-hidden"),e.modal.classList.add("is-open"),e.menuMob.classList.remove("is-open")}))})(),(()=>{const e={openModalBtn:document.querySelector("[data-modal-location-open]"),closeModalBtn:document.querySelector("[data-modal-location-close]"),modal:document.querySelector("[data-modal-location]")};function t(){e.modal.classList.toggle("is-hidden")}e.openModalBtn.addEventListener("click",t),e.closeModalBtn.addEventListener("click",t)})(),(()=>{const e={openModalBtn:document.querySelector("[data-modal-franchise-open]"),closeModalBtn:document.querySelector("[data-modal-franchise-close]"),modal:document.querySelector("[data-modal-franchise]")};function t(){e.modal.classList.toggle("is-hidden")}e.openModalBtn.addEventListener("click",t),e.closeModalBtn.addEventListener("click",t)})(),(()=>{const e={openModalBtn:document.querySelector("[data-modal-read-more-open]"),closeModalBtn:document.querySelector("[data-modal-read-more-close]"),modal:document.querySelector("[data-modal-read-more]")};function t(){e.modal.classList.toggle("is-hidden")}e.openModalBtn.addEventListener("click",t),e.closeModalBtn.addEventListener("click",t)})(),t=document.querySelector(".popup"),o=document.querySelector(".modal-iframe"),t.addEventListener("click",(function(){o.src=o.getAttribute("data-src"),o.classList.toggle("hidden.iframe")})),(()=>{const e={openModalBtn:document.querySelector("[data-modal-products-open1]"),closeModalBtn:document.querySelector("[data-modal-products-close]"),modal:document.querySelector("[data-modal-products]")};function t(){e.modal.classList.toggle("is-hidden")}e.openModalBtn.addEventListener("click",t),e.closeModalBtn.addEventListener("click",t)})(),(()=>{const e={openModalBtn:document.querySelector("[data-modal-products-open2]"),closeModalBtn:document.querySelector("[data-modal-products-close]"),modal:document.querySelector("[data-modal-products]")};function t(){e.modal.classList.toggle("is-hidden")}e.openModalBtn.addEventListener("click",t),e.closeModalBtn.addEventListener("click",t)})(),(()=>{const e={openModalBtn:document.querySelector("[data-modal-products-open3]"),closeModalBtn:document.querySelector("[data-modal-products-close]"),modal:document.querySelector("[data-modal-products]")};function t(){e.modal.classList.toggle("is-hidden")}e.openModalBtn.addEventListener("click",t),e.closeModalBtn.addEventListener("click",t)})();
//# sourceMappingURL=index.1f59d183.js.map
