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

// mongoimport --uri mongodb+srv://avinishrao:Avinishrao@1234@cluster0.npzpvtc.mongodb.net/bookmyeventdb --collection bme_card --type jsonArray --file "D:\Semester 1\Software Engineering\BookMyEvent\card-data.json"

// mongoimport --uri "mongodb+srv://avinishrao:Avinishrao%401234@cluster0.npzpvtc.mongodb.net/bookmyeventdb" --collection bme_card --type jsonArray --file "D:/Semester 1/Software Engineering/BookMyEvent/card-data.json"


// mongoimport --db bookmyeventdb --collection bme_card --file "D:/Semester 1/Software Engineering/BookMyEvent/card-data.json" --jsonArray


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
