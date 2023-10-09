import Header from './components/Header.js';
import Footer from './components/Footer.js';
import HomePage from './pages/home/homePage.js';
import './common/css/common.css';
import './common/css/style.css';
import './common/css/slick_custom.css';

function App() {
  return (
    <div>
      <Header/>
      <HomePage />
      <Footer/>
    </div>
  );
}

export default App;
