//VARIABLES

//if you add a comma after the first variable you dont have to repeatidly put const in front 
const modal = document.querySelector(".modal"),
    btn = document.querySelector(".btn")
    close = document.querySelector(".close")
    modalContent =document.querySelector(".modal-content")

btn.addEventListener("click", openModal)
close.addEventListener("click", closeModal)
modal.addEventListener("click", closeModal)

//OPEN MODAL
function openModal(e) {
    e.preventDefault()
    modal.style.display ="block"
}
//CLSOE MODAL
function closeModal(e) {
    modalContent.classList.add("slide-up")
    setTimeout(() => {
        modal.style.display ="none"
        modalContent.classList.remove("slide-up")
    }, 500)
}