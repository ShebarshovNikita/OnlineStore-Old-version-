import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import NavBar from './components/Navbar'


function App() {
  return (
    <BrowserRouter className="App">
		<NavBar/>
      	<AppRouter/>
    </BrowserRouter>
  );
}

export default App;