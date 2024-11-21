import React, { Component } from 'react';

// 3.4.1 클래스형 컴포넌트의 state
// class Counter extends Component {
//   constructor(props) {
//     super(props);
//     // state 초깃값 설정
//     this.state = {
//       number: 0,
//     };
//   }
//   render() {
//     const { number } = this.state; // state 조회 시 => this.state로 조회
//     return (
//       <div>
//         <h1>{number}</h1>
//         <button
//           // onClick => 버튼 클릭시, 호출할 함수를 지정
//           onClick={() => {
//             // this.setState => state에 새로운 값 넣음
//             this.setState({ number: number + 1 });
//           }}
//         >
//           +1
//         </button>
//       </div>
//     );
//   }
// }

// 3.4.1.1 state 객체 안에 여러 값이 있을 때
// class Counter extends Component {
//   constructor(props) {
//     super(props);
//     // state 초깃값 설정
//     this.state = {
//       number: 0,
//       fixedNumber: 0, // 추가된 state 객체!!!
//     };
//   }
//   render() {
//     // 여기에도 새로 작성한 객체 추가!!!!!
//     const { number, fixedNumber } = this.state;
//     return (
//       <div>
//         <h1>{number}</h1>
//         <h2>바뀌지 않는 값: {fixedNumber}</h2>
//         <button
//           onClick={() => {
//             this.setState({ number: number + 1 });
//             // this.setState({ number: this.state.number + 5 });
//           }}
//         >
//           +1
//         </button>
//       </div>
//     );
//   }
// }

// 3.4.1.3 this.setState에 객체 대신 함수 인자 전달하기
// class Counter extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       number: 0,
//       fixedNumber: 0,
//     };
//   }
//   render() {
//     const { number, fixedNumber } = this.state;
//     return (
//       <div>
//         <h1>{number}</h1>
//         <h2>바뀌지 않는 값: {fixedNumber}</h2>
//         <button
//           onClick={() => {
//             this.setState((prevState) => {
//               return {
//                 number: prevState.number + 1,
//               };
//             });
//             // 위 코드랑 똑같은 기능!
//             // 아래 코드는 함수에서 바로 객체를 반환한다는 의미!
//             this.setState((prevState) => ({
//               number: prevState.number + 1,
//             }));
//           }}
//         >
//           +1
//         </button>
//       </div>
//     );
//   }
// }

// 3.4.1.4 this.setState가 끝난 후 특정 작업 실행하기
class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
      fixedNumber: 0,
    };
  }
  render() {
    const { number, fixedNumber } = this.state;
    return (
      <div>
        <h1>{number}</h1>
        <h2>바뀌지 않는 값: {fixedNumber}</h2>
        <button
          // onClick을 통해 버튼이 클릭되었을 때 호출할 함수를 지정합니다.
          onClick={() => {
            this.setState(
              {
                number: number + 1,
              },
              () => {
                console.log('방금 setState가 호출되었습니다.');
                console.log(this.state);
              }
            );
          }}
        >
          +1
        </button>
      </div>
    );
  }
}

export default Counter;
