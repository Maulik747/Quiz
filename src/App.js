import Login from './Login/Login';
import Question from './Question/Question'
import Thankyou from './Thankyou/Thankyou'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  return (

    <div className="App">
      <Router>
        <Routes>
           <Route path="/" element={<Login/>}></Route>
           <Route path='/quiz' element={<Question/>}/>
           <Route path='/result' element={<Thankyou/>}/>

        </Routes>
      </Router>

    </div>
  );
}

export default App;
