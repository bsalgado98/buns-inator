import './App.css';
import Draggable from 'react-draggable';
import Card from './components/Card/Card';

function App() {
  return (
    <div className="App">
      <Draggable>
        <div>
          <Card text="bunz"></Card>
        </div>
      </Draggable>
    </div>
  );
}

export default App;
