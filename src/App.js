import './App.css';
// import Counter from './component/Counter';
import Title from './component/Title';
import FunctionClick from './component/FunctionClick';
import ClassClick from './component/Classclick';
import Eventbind from './component/Eventbind';
import Parentcompo from './component/Parentcompo';
import Counter from './component/Counter';
import Counter2 from './component/Counter2';
import UserGreeting from './component/UserGreeting';
import Stylesheet from './component/Stylesheet';
import Inline from './component/Inline';
// import './appStyles.css'
import styles from './appStyles.module.css'
import Firstcomponent from './component/Firstcomponent';
import Form from './component/Form';
// import Home from './pages/Home'
// import Message from './pages/Message'

function App() {
  return (
    <div className="App">
      <Title name="Heet" surname="Doshi" />
      <Title name='Guys!' />

      <Counter />
      {/* <FunctionClick />
      <ClassClick />
      <Eventbind />
      <Parentcompo /> */}
      <Counter />
      {/* <Counter2 /> */}
      {/* 
      <UserGreeting />

      <Stylesheet primary='true' />
      <Inline />
      <h1 className='error'>Error</h1>
      <h1 className={styles.success}>Success</h1>
      <Firstcomponent />
      <Form /> */}
    </div>
  );
}
export default App;
