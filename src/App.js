import React from 'react';
import './App.css';
import MainComponent from './components/main/mainComponent'

class myApp extends Component {
  render(){
    return (
      <div className="myApp">
        <h1>App</h1>
      </div>
    )
  }
}

function App() {
  return (
    <div>
      <MainComponent />
    </div>
  );
}

export default App;
