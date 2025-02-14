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
import ParentComponent from './components/ParentComponent';
import UserGreting from './components/UserGreting';
import NameList from './components/NameList';
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';
import './appStyles.css'
import styles from './appStyles.module.css'
import Form from './components/Form';
function App() {
    return (
      <div className="App">
        <Form />
        {/* <h1 className='error'>error</h1> */}
        {/* <h1 className={styles.success}>success</h1> */}
        {/* <Inline /> */}
        {/* <Stylesheet primary={true}/> */}
        {/* <NameList /> */}
        {/* <UserGreting /> */}
        {/* <ParentComponent /> */}
        {/* <EventBind /> */}
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
