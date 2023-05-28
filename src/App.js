import logo from './logo.svg';
import './App.css';
import Tooltip from './component/ToolTip/ToolTip';
function App() {
  return (
    <div className="App">
      <Tooltip  tip="This is a tooltip">
        <button className='btn'>Hover over me</button>
      </Tooltip>
    </div>
  );
}

export default App;
