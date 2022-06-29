/*

Modal Component

 - initialState 내의 winner key의 값 종류는 -1, 0, 1임.
 - 시작, 게임 진행 중의 winner의 값은 -1임.
 - 만약, GameBoard의 onClick 이벤트가 발동하면서 승리자가 정해졌을 경우 App.js에서 this.setState를 통해
   Modal.js의 this.setState를 실행시킴.
  => 모달창이 테이블 범위만큼 뜰 것임. 
*/

export default function Modal({ $app, initialState }) {
  this.state = initialState;
  this.$modal = document.createElement("div");
  this.$modal.className = "Modal GameResult";
  $app.appendChild(this.$modal);

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    //승자가 발생할 때, 모달창이 올라온다.
    this.$modal.style.display =
      this.state.winner === -1 && this.state.turnCount !== 9 ? "none" : "flex";
    //승자가 발생했다면 innerHTML을 통해 추가, 없을 경우는 공백으로 추가함.
    if (this.state.winner !== -1) {
      this.$modal.innerHTML = `
      <p>Player${this.state.winner === 0 ? "1" : "2"}의 승리!</p>
      <br/>
      <p>다시하기는 new Game입니다.</p>
      <p>초기화는 reset Game입니다.</p>
    `;
    } else if (this.state.turnCount === 9) {
      this.$modal.innerHTML = `
      <p>무승부입니다!</p>
      <br/>
      <p>다시하기는 new Game입니다.</p>
      <p>초기화는 reset Game입니다.</p>
      `;
    } else {
      this.$modal.innerHTML = ``;
    }
  };
  this.render();
}
