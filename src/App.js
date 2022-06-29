/*
배경색 : 609EA1
선 색 : DEB987
X 색 : 흰색
O 색 : 026165
*/

import {
  GameBoard,
  GameButton,
  Modal,
  Score,
} from "./Components/Components.index.js";

export default function App($app) {
  this.state = { curScore: [0, 0], winner: -1 };
  const $gameBoardContainer = document.createElement("div");
  $gameBoardContainer.className = "gameBoardContainer";

  this.setState = (nextState) => {
    this.state = nextState;
    score.setState({
      winner: this.state.winner,
      curScore: this.state.curScore,
    });
    modal.setState({
      winner: this.state.winner,
      turnCount: this.state.turnCount,
    });
    gameBoard.setState({ winner: this.state.winner });
  };

  const score = new Score({ $app, initState: this.state });
  $app.appendChild($gameBoardContainer);

  const modal = new Modal({
    $app: $gameBoardContainer,
    initialState: { winner: this.state.winner },
  });
  const gameBoard = new GameBoard({
    $app: $gameBoardContainer,
    initState: { ...this.state },
    onClick: (e) => {
      let $curCell = e.target.closest("td");
      if (!$curCell || $curCell.innerText !== "") {
        return;
      } else {
        const nextState = { ...this.state };
        const curLoc = Number($curCell.id.split("_")[1]) - 1;
        const [row, col] = [Math.floor(curLoc / 3), curLoc % 3];

        if (this.state.turn === "O") {
          $curCell.innerText = "O";
          $curCell.style.color = "#026165";
          nextState.turn = "X";
        } else {
          $curCell.innerText = "X";
          $curCell.style.color = "white";
          nextState.turn = "O";
        }

        nextState.gameRecord[row][col] = nextState.turn === "O" ? "X" : "O";
        nextState.turnCount++;

        //승자가 발생했다면, re-rendering...
        if (findWinner(nextState, row, col)) {
          nextState.winner = nextState.turn === "X" ? 0 : 1;
          this.setState(nextState);
        } else {
          if (nextState.turnCount === 9) {
            this.setState(nextState);
          } else {
            this.state.turn = nextState.turn;
            this.state.turnCount = nextState.turnCount;
            this.state.gameRecord = nextState.gameRecord;
          }
        }
      }
    },
  });
  const gameButton = new GameButton({
    $app,
    onClick: (e) => {
      let curClickBtn = e.target.closest("button");
      if (!curClickBtn) return;

      if (curClickBtn.className === "newGameButton") {
        this.setState({
          ...this.state,
          winner: -1,
          turn: "O",
          turnCount: 0,
          gameRecord: Array.from(Array(3), () => Array(3).fill(" ")),
        });
      } else {
        this.setState({
          ...this.state,
          winner: -1,
          turn: "O",
          turnCount: 0,
          gameRecord: Array.from(Array(3), () => Array(3).fill(" ")),
          curScore: [0, 0],
        });
      }
    },
  });

  this.init = () => {
    this.setState({
      ...this.state,
      turn: "O",
      turnCount: 0,
      curScore: [0, 0],
      winner: -1,
      gameRecord: Array.from(Array(3), () => Array(3).fill(" ")),
    });
  };
  this.init();

  function findWinner(curState, row, col) {
    let curturn = curState.gameRecord[row][col]; //지금 판에 들어간 입력이 무엇인지.
    let curRecord = curState.gameRecord;
    let [rowLen, colLen] = [curRecord.length, curRecord[0].length];
    let count = 0;
    let directions = {
      horizontal: [
        [0, 1],
        [0, -1],
      ],

      vertical: [
        [1, 0],
        [-1, 0],
      ],
    };
    if (
      (row === 0 && col === 0) ||
      (row === 2 && col === 2) ||
      (row === 0 && col === 2) ||
      (row === 2 && col === 0) ||
      (row === 1 && col === 1)
    ) {
      directions.upcross = [
        [-1, 1],
        [1, -1],
      ];
      directions.downcross = [
        [-1, -1],
        [1, 1],
      ];
    }

    for (let [key, direction] of Object.entries(directions)) {
      count += dfs(row, col, direction[0]) + dfs(row, col, direction[1]) - 1;
      if (count === 3) return true;
      count = 0;
    }

    function dfs(curRow, curCol, dir) {
      let [newRow, newCol] = [curRow + dir[0], curCol + dir[1]];
      let res = 1;

      if (
        isInArraySize(newRow, newCol, rowLen, colLen) &&
        curRecord[newRow][newCol] === curturn
      ) {
        res += dfs(newRow, newCol, dir);
      }

      return res;
    }
    function isInArraySize(curRow, curCol, rowSize, colSize) {
      return curRow >= 0 && curRow < rowSize && curCol >= 0 && curCol < colSize
        ? true
        : false;
    }

    return false;
  }
}
