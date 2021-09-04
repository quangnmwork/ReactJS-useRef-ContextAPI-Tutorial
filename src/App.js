import React, {useContext} from 'react';
import AuthContext from './components/Context/auth-context';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';

function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  // useEffect(() => {
  //   const storedUserLogIn = localStorage.getItem('isLoggedIn');
  //   if(storedUserLogIn === '1'){
  //     setIsLoggedIn(true);
  //   }
  // }, []);

  // const loginHandler = (email, password) => {
  //   localStorage.removeItem('isLoggedIn');
  //   setIsLoggedIn(true);
  // };

  // const logoutHandler = () => {
  //   setIsLoggedIn(false);
  // };
  const ctx = useContext(AuthContext);

  return (
    <React.Fragment>
        <MainHeader  onLogout={ctx.onLogout} />
        <main>
          {!ctx.isLoggedIn && <Login onLogin={ctx.onLogIn} />}
          {ctx.isLoggedIn && <Home onLogout={ctx.onLogout} />}
        </main>
    </React.Fragment>
  );
}

export default App;
