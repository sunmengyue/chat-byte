import MainScreen from './components/MainScreen';
import Sidebar from './components/Sidebar';
import './Styles/Screen.css';

function App() {
  return (
    <div className="screen">
      <Sidebar />
      <MainScreen />
    </div>
  );
}

export default App;
