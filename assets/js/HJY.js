document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("revealBtn");
  const text = document.getElementById("revealedText");

  button.addEventListener("click", () => {
    button.style.display = "none"; // 버튼 숨기기
    text.style.display = "block";  // 텍스트 보이기
  });
});
