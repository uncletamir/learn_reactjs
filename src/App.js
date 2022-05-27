import './App.css';
import Clock from './Clock';
import Greeting from './Greeting';
import LoginControl from './LoginControl';
import ToggleButton from './ToggleButton';
import Welcome from './Welcome';

function App() {
  return (
    <div>
      <LoginControl hasNewMessage={true} credit={100} hasWarning={true} />
    </div>
  );
}

export default App;
