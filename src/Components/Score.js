export default function Score({ $app, initState }) {
  this.state = initState;
  this.$Score = document.createElement("div");
  this.$Score.className = "Score";
  $app.appendChild(this.$Score);

  this.setState = (nextState) => {
    this.state = { ...this.state, ...nextState };
    this.render();
  };

  this.render = () => {
    if (this.state.winner !== -1) this.state.curScore[this.state.winner]++;

    this.$Score.innerHTML = `
      <div>${`${this.state.curScore[0]} : ${this.state.curScore[1]}`}</div>
    `;
  };
  this.render();
}
