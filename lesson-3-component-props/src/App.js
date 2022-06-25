import logo from './logo.svg';
import './App.css';
import FunctionalComponent from './components/FunctionalComponent';
import ClassComponent from './components/ClassComponent';
import NamedCard from './components/NamedCard';

/*
  - ReactJS is a library
  - ReactJS : Single Page Application
  => Client side rendering != Server Side rendering (tranditonal)

  - Component
    + Functional Componensd
    + Class Component

  - React JS return JXS => be wrapped by single tag, array, Fragment, <> </>
  - State
  - Prop is read-only
 */


function App() {

  const people = [
    { name: "Hung Trinh", role: "admin" },
    { name: "Nam Nguyen", role: "Customer" },
    { name: "Toi di code dao", role: 'Technical Lead' }
  ]

  // const cardList = people.map((person, index) => {
  //   return <NamedCard name={person.name} role={person.role} key={index} />
  // })
  return (
    <div className='App'>
      {/* <h1>This is App Component</h1>
     FunctionalComponent />
      <ClassComponent /> */}
      {/* {cardList} */}
    </div>
  );
}
export default App;
