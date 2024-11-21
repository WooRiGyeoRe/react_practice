// import React, { Children } from 'react';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// const MyComponent = (props) => {
//   return (
//     <div>
//       안녕하세요, 제 이름은 {props.name}입니다. <br />
//       children 값은 {props.children}
//       입니다.
//     </div>
//   );
// };

// 더 짧게 작성 가능
// const MyComponent = (props) => {
//   const { name, children } = props;
//   return (
//     <div>
//       안녕하세요, 제 이름은 {name}입니다. <br />
//       children 값은 {children}입니다.
//     </div>
//   );
// };

// 여기서 더 짧게 작성 가능 => 비구조화 할당(구조 분해 문법)
// const MyComponent = ({ name, children }) => {
//   return (
//     <div>
//       안녕하세요, 제 이름은 {name}입니다. <br />
//       children 값은 {children}입니다.
//     </div>
//   );
// };

// MyComponent.defaultProps = {
//   name: '기본 이름',
// };

// ======= 필수 props / props의 타입(type)을 지정할 때
// => import PropTypes from 'prop-types'; 상단에 임포트 해주고 사용
/*import MyComponent from './sample3_App';
import MyComponent from './sample3_App';

const MyComponent = ({ name, children }) => {
  return (
    <div>
      안녕하세요, 제 이름은 {name}입니다. <br />
      children 값은 {children}입니다.
    </div>
  );
};

MyComponent.defaultProps = {
  name: '기본 이름',
};

//  name 값은 무조건 문자열(string) 형태로 전달
MyComponent.PropTypes = {
  name: PropTypes.string,
};
 */

// const MyComponent = ({ name, favoriteNumber, children }) => {
//   return (
//     <div>
//       안녕하세요, 제 이름은 {name}입니다. <br />
//       children 값은 {children}입니다. <br />
//       제가 좋아하는 숫자는 {favoriteNumber}입니다.
//     </div>
//   );
// };

// 3.3.7 클래스형에서 props 사용해보기 => render 함수에서 조회하면 됨
// class MyComponent extends Component {
//   render() {
//     const { name, favoriteNumber, children } = this.props; // 비구조화 할당
//     return (
//       <div>
//         안녕하세요, 제 이름은 {name}입니다. <br />
//         children 값은 {children}
//         입니다.
//         <br />
//         제가 좋아하는 숫자는 {favoriteNumber}입니다.
//       </div>
//     );
//   }
// }

// MyComponent.defaultProps = {
//   name: '기본 이름',
// };

// MyComponent.propTypes = {
//   name: PropTypes.string,
//   favoriteNumber: PropTypes.number.isRequired,
// };

// export default MyComponent;

// 3.3.7 class 내부에서 지정하는 방법
class MyComponent extends Component {
  static defaultProps = {
    name: '기본 이름',
  };
  static PropTypes = {
    name: PropTypes.string,
    favoriteNumber: PropTypes.number.isRequired,
  };
  render() {
    const { name, favoriteNumber, children } = this.props;
    return (
      <div>
        안녕하세요, 제 이름은 {name}입니다. <br />
        children 값은 {children}
        입니다.
        <br />
        제가 좋아하는 숫자는 {favoriteNumber}입니다.
      </div>
    );
  }
}

export default MyComponent;
