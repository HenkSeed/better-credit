// Функция обработки модального окна
function modal() {
  const dialog = document.querySelector(".dialog");
  const openModal = document.querySelector(".string__burger-img");
  const closeModal = dialog.querySelector(".dialog__cross");

  function openModalAndBlockScroll() {
    dialog.showModal();
    document.body.classList.add("scroll-block");
  }

  function returnScroll() {
    document.body.classList.remove("scroll-block");
  }

  function closeModalFunc() {
    dialog.close();
    returnScroll();
  }

  function closeOnOverlayClick({ currentTarget, target }) {
    const dialog = currentTarget;
    const isOnOverlayClick = target === dialog;
    if (isOnOverlayClick) {
      closeModalFunc();
    }
  }

  openModal.addEventListener("click", openModalAndBlockScroll);

  closeModal.addEventListener("click", () => closeModalFunc());

  dialog.addEventListener("cancel", () => returnScroll());

  // Если здесь использовать стрелочную функцию, тогда потребуется
  // передавать параметры, так как стрелочная функция не сохраняет
  // окружение, например:
  //   dialog.addEventListener("click", (event) => closeOnOverlayClick(event));
  dialog.addEventListener("click", closeOnOverlayClick);
}

export default modal;
