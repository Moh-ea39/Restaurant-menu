import './component/header/header.css'
import './App.css';
import Headerfunction from './component/header/header';
import ComponentFunction from './component/main/component';

function App() {
  return (
    <div className="parent_component">
    <Headerfunction />
    <ComponentFunction />
    </div>
  );
}

export default App;
