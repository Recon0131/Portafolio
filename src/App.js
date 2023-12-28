import Inicio from "./components/Inicio";
import Proyectos from "./components/Proyectos";
import Social from "./components/Social";
import Email from './components/Email.jsx'


function App() {
  return (
    <div className=" m-auto grid max-w-3xl my-20 gap-10">
      <Inicio/>
      <hr className=" border border-gray-600 rounded-md"/>
      <Proyectos/>
      <hr className=" border border-gray-600 rounded-md"/>
      <Social/>
      <hr className=" border border-gray-600 rounded-md"/>
      <Email/>
    </div>
  );
}

export default App;
