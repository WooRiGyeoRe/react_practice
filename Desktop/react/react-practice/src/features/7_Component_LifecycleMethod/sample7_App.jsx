/*
// import React from 'react';
import React, { Component } from 'react';
import LifeCycleSample from './features/7_Component_LifecycleMethod/LifeCycleSample';
import { number } from 'prop-types';

// 랜덤 색상을 생성합니다.
function getRandomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

class App extends Component {
  state = {
    color: '#000000',
  };

  handleClick = () => {
    this.setState({
      color: getRandomColor(),
    });
  };

  // render() {
  //   return (
  //     <div>
  //       <button onClick={this.handleClick}>랜덤 색상</button>
  //       <LifeCycleSample color={this.state.color} />
  //     </div>
  //   );
  // }

  // 기존 render 함수 주석처리하고 새로 만들어서
  // 일부러 에러를 발새시켜보자.
  render() {
    console.log('render');
    const style = {
      color: this.props.color,
    };

    return (
      <div>
        {this.props.missing.value}
        <h1 style={style} ref={(ref) => (this.myRef = ref)}>
          {this.state.number}
        </h1>
        <p>color: {this.state.color}</p>
        <button onClick={this.handleClick}>더하기</button>
      </div>
    );
  }
}
export default App;
 */

// 에러 발생시켜보기
// import React, { Component } from 'react';
// import LifeCycleSample from './features/7_Component_LifecycleMethod/LifeCycleSample';
// import ErrorBoundary from './features/7_Component_LifecycleMethod/ErrorBoundary';

// // 랜덤 색상을 생성합니다.
// function getRandomColor() {
//   return '#' + Math.floor(Math.random() * 16777215).toString(16);
// }

// class App extends Component {
//   state = {
//     color: '#000000',
//   };

//   handleClick = () => {
//     this.setState({
//       color: getRandomColor(),
//     });
//   };

//   render() {
//     return (
//       <div>
//         <button onClick={this.handleClick}>랜덤 색상</button>
//         <ErrorBoundary>
//           <LifeCycleSample color={this.state.color} />
//         </ErrorBoundary>
//       </div>
//     );
//   }
// }

// export default App;
