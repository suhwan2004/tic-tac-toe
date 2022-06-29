/*
GameButton 컴포넌트의 경우, 초기생성 이후 re-rendering이 필요없는 컴포넌트임.
*/

export default function GameButton({ $app, onClick }) {
  this.$newGameButton = document.createElement("button");
  this.$resetGameButton = document.createElement("button");
  this.$gameButtonContainer = document.createElement("div");

  $app.appendChild(this.$gameButtonContainer);
  this.$gameButtonContainer.appendChild(this.$newGameButton);
  this.$gameButtonContainer.appendChild(this.$resetGameButton);

  this.$gameButtonContainer.className = "gameButtonContainer";
  this.$newGameButton.className = "newGameButton";
  this.$resetGameButton.className = "resetGameButton";

  this.$newGameButton.innerText = "New Game";
  this.$resetGameButton.innerText = "Reset Game";

  this.$gameButtonContainer.addEventListener("click", onClick);
}
