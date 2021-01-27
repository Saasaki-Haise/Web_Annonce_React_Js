// Import Dependence
import { BrowserRouter , Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// Import Component
import Profil from './component/Profil';
import DeposerUneAnnonce from './component/DeposerUneAnnonce';
import Favorie from './component/Favorie';
import Messages from './component/Messages';
import Logo from './component/Logo';
import Navbar from './component/Navbar';
import './App.css';
import Acceuil from './component/Acceuil';
import Login from './component/Login';
import Signup from './component/Signup';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Logo/>
        <Navbar/>
        <Route exact path='/' component={Acceuil} />
        <Route path='/DeposerUneAnnonce' component={DeposerUneAnnonce} />
        <Route path='/Favoris' component={Favorie} />
        <Route path='/Messages' component={Messages} />
        <Route path='/Profil'  component={Profil} />
        <Route path='/Login'  component={Login} />
        <Route path='/Signup'  component={Signup} />
        
        </BrowserRouter>
    </div>
  );
}

export default App;
