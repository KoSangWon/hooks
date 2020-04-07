export * from './useTabs'

//사용 예시
// const content = [
//     {
//       tab: "Section 1",
//       content: "I'm the content of the section 1"
//     },
//     {
//       tab: "Section 2",
//       content: "I'm the content of the section 2"
//     }
//   ];
  
  
//   const App = () => {
//     const {currentItem, changeItem} = useTaps(0, content);
//     return (
//       <div className="App">
//         {content.map((section, index) => (
//           <button onClick={() => changeItem(index)}>{section.tab}</button>))
//         }
//         <div>{currentItem.content}</div>
//       </div>
//     );
//   };