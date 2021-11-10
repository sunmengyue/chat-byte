import MainScreen from './components/MainScreen';
import Sidebar from './components/Sidebar';
import _ from 'lodash';
import store from './store';
import './Styles/Screen.css';

function App() {
  const { contacts } = store.getState();

  return (
    <div className="screen">
      <Sidebar contacts={_.values(contacts)} />
      <MainScreen />
    </div>
  );
}

export default App;
