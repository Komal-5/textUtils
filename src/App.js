
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
      {/* ctrl+d -->duplicate a line */}
      {/* sending abouttext but further wont sent as it will take it from default props
      <Navbar title="TextUtils" aboutText="About TextUtlils"/> */}
      <Navbar title="TextUtils" />
      {/* checking default prop values
      <Navbar /> */}
      <div className="container my-3" >
        {/* container ia a class is boot strap which gives it a different look */}
        <TextForm heading="Enter the text to analyse" />
        {/* <About /> */}

      </div>


    </>
  );
}

export default App;
