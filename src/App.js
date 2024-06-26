import './App.css';
import Navbar from './components/Navbar';
//import TextForm from './components/TextForm';
import About from './components/About';
function App() {
  return (
   <>
   <Navbar title='TextConverter'/>
   <div className="container my-3">
       {/*<TextForm title='Enter Text Here'/>   */}
   </div>
   <About/>
   </>
  );
}

export default App;
