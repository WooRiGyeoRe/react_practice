// 2.4.2 자바스크립트 표현
// import React from "react"

// function App() {
//   const name = '리액트';
//   return (
//     <div> 
//     <h1>{name} 안녕!</h1>
//     <h2>잘 작동하니?</h2>
//     </div>
//   )
// }

// export default App;



// 2.4.3 If 문 대신 조건부 연산자
// import React from "react"

// function App() {
//  // const name = '리액트';
//  const name = '자바'; 
//  return (
//     <div> 
//    {name === '리액트' ? (
//    <h1>리액트입니다.</h1>
//    ) : (
//     <h2>리액트가 아닙니다.</h2>
//    )}
//     </div>
//   )
// }

// export default App;



// 2.4.4 AND 연산자(&&)를 사용한 조건부 렌더링
// import React from "react"

// function App() {
 
//  const name = '리액트'; 
//  return (
//     <div> 
//       {
//       // name === '리액트' ? <h1>리액트입니다.</h1> : null
//       name === '리액트' && <h1>리액트입니다.</h1>
//       }
//     </div>
//   )
// }

// export default App;



// 2.4.5 undefined를 렌더링하지 않기
// import React from "react"

// function App() {
 
//  const name = undefined;
//  return  name;
// }

// export default App;


// ======================================
// function App() {
 
//     const name = undefined;
//     return  name || '값이 undefined입니다.';
//    }
   
//    export default App;



// 2.4.6 인라인 스타일링
// import React from "react"

// function App() {
// const name = '리액트';
// const style = {
//   backgroundColor: 'black',
//   color: 'aqua',
//   fontSize: '48px',
//   fontWeight: 'bold',
//   padding: 16
// };
// return <div style={style}>{name}</div>
// }

// export default App;


// ======================================
// import React from "react"

// function App() {
//   const name = '리액트';
//   return <div 
//  style= {{
//   backgroundColor: 'black',
//   color: 'aqua',
//   fontSize: '48px',
//   fontWeight: 'bold',
//   padding: 16
//  }}>
//    {name}
//  </div>
// }

// export default App;




// 2.4.7 class 대신 className
// import React from "react"
// import '././common/App.css';

// function App() {
//  const name = '리액트';
//  return <div className="react">{name}</div>;
// }

// export default App;



// 2.4.8 꼭 닫아야 하는 태그
// import React from "react"
// import '././common/App.css';

// function App() {
//   const name = '리액트';
//   return (
//     <>
//       <div className="react">{name}</div>
//       <input></input> // 또는 <input />
//     </>
//   );
// }
// export default App;

 