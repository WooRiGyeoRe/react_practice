import React, { Component } from 'react';

// class EventPractice extends Component {
//   render() {
//     return (
//       <div>
//         <h1>이벤트 연습</h1>
//       </div>
//     );
//   }
// }

// 4.2.2 onChange 이벤트 핸들링하기
// class EventPractice extends Component {
//   render() {
//     return (
//       <div>
//         <h1>이벤트 연습</h1>
//         <input
//           type="text"
//           name="message"
//           placeholder="아무거나 입력해 보세요"
//           //   onChange={(e) => {
//           //     console.log(e);
//           //   }}
//           /*  앞으로 변할 인풋 값인 e.target.value를 콘솔에 기록하기 */
//           onChange={(e) => {
//             console.log(e.target.value);
//           }}
//         />
//       </div>
//     );
//   }
// }

// 4.2.2.2 state에 input 값 담기
// class EventPractice extends Component {
//   state = {
//     message: '',
//   };

//   render() {
//     return (
//       <div>
//         <h1>이벤트 연습</h1>
//         <input
//           type="text"
//           name="message"
//           placeholder="아무거나 입력해 보세요"
//           value={this.state.message}
//           onChange={(e) => {
//             this.setState({
//               message: e.target.value,
//             });
//           }}
//         />
//         <button
//           onClick={() => {
//             alert(this.state.message);
//             this.setState({ message: '' });
//           }}
//         >
//           확인
//         </button>
//       </div>
//     );
//   }
// }

// 4.2.3 임의 메서드 만들기
class EventPractice extends Component {
  state = {
    message: '',
  };

  // 4.2.3.2 Property Initializer Syntax를 사용한 메서드 작성
  /* 
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e) {
    this.setState({
      message: e.target.value,
    });
  }

  handleClick() {
    alert(this.state.message);
    this.setState({
      message: '',
    });
  }
  */
  // 보다 간결한 코드 작성 가능!
  // 바벨의 transform-class-properties 문법을 사용해
  // 화살표 함수 형태로 메서드를 정의하는 방법.
  handleChange = (e) => {
    this.setState({
      message: e.target.value,
    });
  };

  handleClick = () => {
    alert(this.state.message);
    this.setState({
      message: '',
    });
  };

  render() {
    return (
      <div>
        <h1>이벤트 연습</h1>
        <input
          type="text"
          name="message"
          placeholder="아무거나 입력해 보세요"
          value={this.state.message}
          onChange={this.handleChange}
        />
        <button onClick={this.handleClick}>확인</button>
      </div>
    );
  }
}

export default EventPractice;
