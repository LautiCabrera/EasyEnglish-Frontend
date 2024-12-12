function showModal(message) {
  const modal = document.getElementById("modal");
  const modalMessage = document.getElementById("modal-message");
  modalMessage.textContent = message;
  modal.style.display = "flex";

  document.getElementById("close-modal").addEventListener("click", () => {
    modal.style.display = "none";
  });
}
