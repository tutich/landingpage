import logo from './logo.svg';
import './App.css';
import Navbar from './components/Nav/Navbar';
import Body from './components/Body/Body';
import Articles from './components/Articles/Articles';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Body />
        <Articles />
      </main>
      <Footer />
    </div>
  );
}

export default App;
