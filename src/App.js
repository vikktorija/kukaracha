import Header from "./components/Header";
import Main from "./components/Main";
import { links } from './data/headerLinks'


function App() {

  return (
    <div className="wrapper">
      <Header links={links} />
      <Main />
    </div>
  );
}

export default App;
