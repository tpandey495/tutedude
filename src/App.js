import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import Ui from './component/Ui';
import Card from './component/Card';
import Body from './component/Body';
import Footer from './component/Footer';
function App() {
  return (
    <div className="App">
      <Header />
      <Ui />
      <Card />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
