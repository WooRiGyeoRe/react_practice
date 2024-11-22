// import React from 'react';
import React, { useRef } from 'react'; // useRef를 명시적으로 가져오기
import ScrollBox from './features/5_ref_DOM/ScrollBox';

// const App = () => {
//   // return <ScrollBox />;
//   const scrollBoxRef = useRef(null); // useRef로 ref 생성

//   return (
//     <div>
//       <ScrollBox ref={scrollBoxRef} />
//       <button onClick={() => scrollBoxRef.current.scrollToBottom()}>
//         맨 밑으로
//       </button>
//     </div>
//   );
// };

class App extends Component {
  render() {
    return (
      <div>
        <ScrollBox ref={(ref) => this.scrollBox=ref}/>
        <button onClick={() => this.scrollBox.scrollToBottom()}>
          맨 밑으로
        </button>
      </div>
    );
  }
}
 

export default App;
