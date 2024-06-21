import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
function App() {
  return (
   <>
   <Navbar title='TextConverter'/>
   <div className="container my-3">
       <TextForm title='Convert Your Text'></TextForm>
   </div>
   </>
  );
}

export default App;
