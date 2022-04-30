import './App.css';
import Card from './components/Card/Card';

function App() {
  const [{ opacity }, dragRef] = useDrag(() => ({

    type: ItemTypes.CARD,
    item: { text },
    collect: (monitor) => ({
      opacity: monitor.isDragging() ? 0.5 : 1
    })
  }),[])
  
  return (
    <div className="App">
    </div>
  );
}

export default App;
