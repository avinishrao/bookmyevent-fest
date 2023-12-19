import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle';
// import 'bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle'
import Home from './screens/Home';
import{
  BrowserRouter as Router,
  Routes, 
  Route
} from 'react-router-dom';
import Login from './screens/Login';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
// import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
// import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';



function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path ='/' element={<Home/>}/>
          <Route exact path ='/login' element={<Login/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
