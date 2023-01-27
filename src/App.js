import './App.css';
import Header from './Component/Header/Header';
import Body from './Component/Body/Body';

function App() {
  return (
    <div className='body-inner-container'>
      <div className='body-cover'>
    <Header/>
    <Body />
    </div>
    </div>
  );
}

export default App;
