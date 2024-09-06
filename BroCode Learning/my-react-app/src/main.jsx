import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App/App.jsx'
// import './index.css'
import './index1.css'
import Header from './Header/Header.jsx'
import Footer from './Footer/Footer.jsx'
import Food from './Food/Food.jsx'
import Card from './Card/Card.jsx'
import Button from './Button/Button.jsx'
import Student from './Student/Student.jsx'
import UserGreeting from './UserGreeting/UserGreeting.jsx'
import List from './List/List.jsx'
import MyComponent from './MyComponent/MyComponent.jsx'
import Counter from './Counter/Counter.jsx'
import ColorPicker from './ColorPicker/ColorPicker.jsx'
import Car from './Car/Car.jsx'
import ToDoList from './ToDoList/ToDoList.jsx'
import UseEffectExample from './UseEffectExample/UseEffectExample.jsx'
import UseEffectReturnStmtExample from './UseEffectReturnStmtExample/UseEffectReturnStmtExample.jsx'
import DigitalClock from './DigitalClock/DigitalClock.jsx'
import ComponentA from './UseContextExample/ComponentA.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <Header />

    <ComponentA />
    
    <DigitalClock />

    <UserGreeting isLoggedIn={true} />

    <UseEffectReturnStmtExample />

    {/* <UseEffectExample /> */}

    <ToDoList />

    <Car />

    <Food />

    

    <ColorPicker />

    <Counter />

    <MyComponent />

    <Button />

    <Card/><Card/><Card/><Card/><Card/>

    <Student name="Spongebob" age={30} isStudent={true}/>
    <Student name="Patrick" age={42} isStudent={false}/>
    <Student name="Squidward" age={50} isStudent={false}/>
    <Student name="Sandy" age={27} isStudent={true}/>
    <Student />
    <Student name="Larry" />
    <Student age={28} isStudent={true}/>

    <Footer />
  </StrictMode>,
)
