import React, {useState,} from 'react';
import LoginForm from './components/LoginForm';
import Welcome from './components/Welcome'
import Failure from './components/Failure'

function App(props) {
  const adminUser = {
    email: "admin@adming.com",
    password: "admin123"
  }

  const [user, setUser] = useState({name: "", email: ""});
  const [error, setError] = useState("");
  




  
  const Login = details => {
    console.log(details);

    if (details.email == adminUser.email && details.password == adminUser.password){
      setUser({
        name: details.name,
        email: details.email
      })
 
    } else  {
      setError(<Failure />)
    }
    
  }



  const Logout = () => {
    setUser({name: "", email: ""})
  }
  return (
    <div>
      
    
    <div className="App">
    <div>{error}</div>
      {(user.email != "") ? (
        <div className="welcome">
          <Welcome Username={user.name} />
          <button onClick={Logout}>Logout</button>
          </div>
      ) : (
        <LoginForm Login={Login} error={error}/>
      )}
      </div>
      </div>
    
  );
}

export default App


