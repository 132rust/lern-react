import './App.css';
import Header from './components/Header/header';
import Navbar from './components/Navbar/navbar';
import Profile from './components/Profile/profile';

function App() {
  return (

    <div className="app-wrapper">
     <Header />
      <div className='container'>
        <div className='footer_inner'>
          <Navbar />
          <Profile />
        </div>
      </div>
    </div>
  );
}

export default App;

