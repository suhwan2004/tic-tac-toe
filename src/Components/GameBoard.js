/*
최초 동작 시에, 아무것도 없는 판을 만들어줘야됨. = this.render() 1회 실행.
이벤트리스너(클릭)은 table에서 클릭 이벤트를 감지함.
*/

export default function GameBoard({ $app, initState, onClick }) {
  this.state = initState;
  this.$table = document.createElement("table");

  $app.appendChild(this.$table);

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  //this.render => 테이블 생성
  this.render = () => {
    if (this.state.winner === -1) {
      let count = 1;
      this.$table.innerHTML = "";
      for (let i = 0; i < 3; i++) {
        let $line = document.createElement("tr");
        for (let j = 0; j < 3; j++) {
          let $Cell = document.createElement("td");
          $Cell.id = `Cell_${count++}`;
          $line.appendChild($Cell);
        }
        this.$table.appendChild($line);
      }
    }
  };

  this.render();

  this.$table.addEventListener("click", onClick);
}
