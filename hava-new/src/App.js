import HavaViewer from "./components/hava-viewer";
import Login from './components/modules/auth/views/login';
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"
import {
  Routes,
  Route,
    NavLink
} from "react-router-dom";

function App() {

  const redirect = () =>{
    window.location = '/viewer';
  }
  return (
<>
<div>
  <NavLink to="/">
   <img src="/assets/images/hava-icon-reports.png" width='60'/>
  </NavLink>
  <NavLink to='/viewer' onClick={redirect}>
    <img src="/assets/icon-light.png" width='40'/>
  </NavLink>
</div>
  <Routes>
    <Route path="/" element={<Login/>}/>
    <Route path="/viewer" element={<HavaViewer/>}/>
  </Routes>
</>
  );
}

export default App;
