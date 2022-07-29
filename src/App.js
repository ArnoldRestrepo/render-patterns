import BadExample from './composition/BadExample';
import GoodExample from './composition/GoodExample';
import HOC from './composition/HOC';
import Hooks from './composition/Hooks';
import RenderProps from './composition/RenderProps';
import './App.css';

function App() {
  return (
    <section className='Container'>
      {/* <BadExample /> */}
      {/* <GoodExample /> */}
      {/* <RenderProps /> */}
      {/* <HOC /> */}
      <Hooks />
    </section>
  );
}

export default App;
