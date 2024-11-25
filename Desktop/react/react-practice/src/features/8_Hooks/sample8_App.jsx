// Counter.jsx 사용 시, App.jsx 코드
// import React, { useState } from 'react';

// const Counter = () => {
//     const [value, setValue] = useState(0);

//     return (
//         <div>
//         <p>현재 카운터 값은 <b>{value}</b>입니다.</p>
//         <button onClick={() => setValue(value +1)}>+1</button>
//         <button onClick={() => setValue(value-1)}>-1</button>
//         </div>
//     );
// };

// export default Counter;

// 8.1.1 useState를 여러 번 사용하기
// import React from 'react';
// import Info from './features/8_Hooks/Info';

// const App = () => {
//   return <Info />;
// };

// export default App;

//
// import React, { useState } from 'react';
// import Info from './features/8_Hooks/Info';

// const App = () => {
//   const [visible, setVisible] = useState(false);

//   return (
//     <div>
//       <button
//         onClick={() => {
//           setVisible(!visible);
//         }}
//       >
//         {visible ? '숨기기' : '보이기'}
//       </button>
//       <hr />
//       {visible && <Info />}
//     </div>
//   );
// };

// export default App;

// 8.3.1 카운터 구현하기
// import React from 'react';
// import Counter from './features/8_Hooks/Counter';

// const App = () => {
//   return <Counter />;
// };

// export default App;

// 8.3.2 인풋 상태 관리하기
// import React from 'react';
// import Info_input from './features/8_Hooks/Info_input';

// const App = () => {
//   return <Info_input />;
// };

// export default App;

// 8.4 useMemo
// import React from 'react';
// import Average from './features/8_Hooks/Average';

// const App = () => {
//   return <Average />;
// };

// export default App;
