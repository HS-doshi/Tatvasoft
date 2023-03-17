import './App.css';
import React, { PureComponent } from 'react';
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
import Classprops from './component/Classprops';
import Functionalprops from './component/Functionalprops';
import NewCompo from './component/NewCompo';
import Click from './component/Click';
import LifecycleA from './component/LifecycleA';
import { LifecycleB } from './component/LifecycleB';
import Form1 from './component/Form1';
import FragementDemo from './component/FragementDemo';
import Pure from './component/Pure';
import RegComp from './component/RegComp';
import ParentCom from './component/ParentCom';
import MemoCom from './component/MemoCom';
import RefsDemo from './component/RefsDemo';
import FocusInput from './component/FocusInput';
import FRInput from './component/FRInput';
import FRParentInput from './component/FRParentInput';
import PortalDemo from './component/PortalDemo';
import Hero from './component/Hero';
import ErrorBoundry from './component/ErrorBoundry';
import ClickCounter from './component/ClickCounter';
import HoverCounter from './component/HoverCounter';
import User from './component/User';
import Counter37 from './component/Counter37';
import ComponentC from './component/ComponentC';
import { UserProvider } from './component/UserContext';
import PostList from './component/PostList';
import PostForm from './component/PostForm';
import ClassCounter from './component/ClassCounter';
import HookCounter from './component/HookCounter';
import HookCounter2 from './component/HookCounter2';
// import Login from './component/Login';


// import Home from './pages/Home'
// import Message from './pages/Message'

class App extends React.Component {

  styles = {
    fontStyle: 'bold',
    color: 'teal'
  };
  render() {
    return (
      <div className="App" >

        {/* <Login /> */}
        {/* <Title name="Heet" surname="Doshi" />
      <Title name='Guys!' /> */}

        {/* <Counter /> */}
        {/* <FunctionClick />
      <ClassClick />
      <Eventbind />
      <Parentcompo /> */}
        {/* <Counter /> */}
        {/* <Counter2 /> */}
        {/* 
      <UserGreeting />

      <Stylesheet primary='true' />
      <Inline />
      <h1 className='error'>Error</h1>
      <h1 className={styles.success}>Success</h1>
      <Firstcomponent />
    // <Form /> */}


        {/* <Classprops name='Heet' profession='Best React Developer' place='Idar' />
        <Classprops name='Jinay' profession='flutter developer' place='surat'>
          <button>Click</button>
          <div>Hello</div>
        </Classprops>
        <Classprops name='Diya' profession='Best Full Stack Developer' place='Idar' />

        <Functionalprops name='Heet' place='Idar' />
        <Functionalprops name='Diya' place='Idar' />
        <h2 style={this.styles}>Welcome</h2>

        <NewCompo className='App' />
        <Click /> */}

        {/* <Stylesheet /> */}
        {/* <Form /> */}

        {/* <Form1 />
        <LifecycleA />
        <FragementDemo />
        <hr />
        <h3>PureComponent - Task</h3>
        <ParentCom />
        <MemoCom /> */}

        {/* <RefsDemo /> */}
        {/* <FocusInput /> */}

        <FRParentInput />
        {/* <PortalDemo /> */}

        {/* <ErrorBoundry>

          <Hero heroName='Batman' />

          <Hero heroName='Superman' />

          <Hero heroName='Joker' />
        </ErrorBoundry>
        <ClickCounter name='Heet' />
        <HoverCounter /> */}

        <User render={(isLoggednIn) => isLoggednIn ? 'Heet' : 'Guest'} />

        <Counter37 render={(count, incrementCount) => (
          <ClickCounter count={count} incrementCount={incrementCount} />
        )}
        />

        <Counter37 render={(count, incrementCount) => (
          <HoverCounter count={count} incrementCount={incrementCount} />
        )}
        />
        <hr></hr>
        <h3>Day - 10 : Context API</h3>
        <UserProvider value='React JS'>
          <ComponentC />
        </UserProvider>

        <hr></hr>
        <h3>Day - 11 : Http Method!</h3>
        <h5> Here, List of Posts shown API data using axios get method.</h5>
        <PostList />
        <hr></hr>

        <h3>Day - 12 : Submit form of API call with the Post method</h3>
        <PostForm />
        {/* <ClassCounter /> */}

        <hr>
        </hr>
        <h3> Day - 13 : Task</h3>
        <HookCounter />
        <HookCounter2 />
      </div>
    );
  }
}
export default App;
