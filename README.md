# tic-tac-toe

![image](https://user-images.githubusercontent.com/60723373/176410466-fd6337cb-13fe-4a9d-9bec-64c624b2c04e.png)


이 리포지토리는 Homework 1 : 틱택토 만들기 코드를 올리기 위해 만들어졌습니다.

### 프로젝트 상세
- 사용언어 : vanila js, html, css
- 주제 : 틱택토 게임
- 기간 : 2022.06.28 ~ 2022.06.29

### 프로젝트 파일 구조
```
│  index.html
│  index.js
|
└─ src
   |
   │ App.js
   │
   ├─ Components
   |    Components.index.js
   │    GameBoard.js
   │    GameButton.js
   │    Modal.js
   │    Score.js
   │ 	
   └─ Style
        style.css

```

### 프로젝트 실행 방향
1. index.html에서 module type의 index.js를 불러온다.
2. index.js에서 App.js의 function App 함수를 생성자 호출한다.
3. App.js에서 this.state로 게임에 필요한 상태값을 제어하며, 게임에 필요한 컴포넌트들을 화면에 띄운다. 
4. 게임이 누군가 이기거나, 게임판을 초기화 하거나, 게임 자체를 초기화 할 때는 그에 맞는 상태값을 this.state에 넣어주고 this.setState를 통해 다시 컴포넌트들을 리렌더링 해준다.


### 틱택토에서 누가 이겼는지 어떻게 감지하는가
1. 현재 플레이어가 찍은 점을 기준으로 좌, 우, 대각선(대각선 틱택토가 성립되는 좌표만)를 dfs로본다.
	- 각각 돌아봤을 때, count가 3이 되지 않는다면 틱택토가 완성이 되지 않은 것이기 때문에 다음 방식을 본다.
	- 만약, count가 3이라면 틱택토가 완성 된 것이기에 true를 반환한다.
2. 다 확인을 해도 틱택토가 완성된게 없으면 false를 반환한다.

 

