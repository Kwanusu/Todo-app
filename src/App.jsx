// import React from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import TodoList from "./TodoList";

// const App = () => {
//   return (
//     <Router>
//       <div>
//         <Switch>
//           <Route path="/" exact component={TodoList} />
//         </Switch>
//       </div>
//     </Router>
//   );
// };

// export default App;
import React from 'react'; 
import TodoList from './TodoList.jsx';


function App() { 
  return (
    <>
      <div>
       <TodoList />
    </div>
    </>

  )
   
}
export default App;


