import { useState } from 'react';
import './App.css';

function App() {

  const [userName, setUserName] = useState("")
  const [userPassword,setUserPassword] = useState(0)

  const submit = () =>{
    let name = userName
    let pwd = userPassword
    let h2 = document.getElementById("h2")
    if(name == "abhishek" & pwd == 1234){
      h2.innerHTML = `Password Matched Pal <span> Passwrod: ${pwd}</span>`
      setUserName("")
      setUserPassword("")
    }else{
      h2.innerHTML = `Password Does not matched Pal <span>check console</span>`
      console.log("userName: abhishek \nuserPassword: 1234")
      setUserName("")
      setUserPassword("")
    }
  }


  return (
    <div className="App">
      <h2 id='h2'>For Burp Suite Testing</h2>
      <header className="App-header">
        Enter your name: <input id="name" onChange={(e) =>setUserName(e.target.value)} value = {userName} type="text" />
        Enter your password: <input placeholder='number only' onChange={(e) => setUserPassword(e.target.value)} value = {userPassword} id="password" min="1" max="10000" type="number" />
       <small>Name: {userName} <br/> Password: {userPassword} </small>
        <input onClick={submit} type="submit" value="submit"/>
      </header>
    </div>
  );
}

export default App;
