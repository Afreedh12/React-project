import './App.css';
import React from 'react';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
function App() {
    return (
      <div className="App">
        <EventBind />
        {/* <FunctionClick /> */}
        {/* <ClassClick /> */}
        {/* <Counter/>  */}
        {/* <Message/> */}
        {/* <Greet name="Afreedh" heroName="Batman">
          <p>This is children props</p>
        </Greet> */}
        {/* <Greet name="Bilal" heroName="Superman">
          <button>Action</button>
        </Greet> */}
        {/* <Greet name="Vasi" heroName="Spider man" /> */}
        {/* <Welcome name="Afreedh" heroName="Batman"/> */}
        {/* <Welcome name="Bilal" heroName="Superman"/>
        <Welcome name="Vasi" heroName="Spider man"/>
        <Hello />  */}
      </div>
    );
}

export default App;
