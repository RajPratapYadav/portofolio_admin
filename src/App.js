import logo from './logo.svg';
import './App.css';
import './Styles.css';
import { NavBar } from './components/Profile';
import { useState } from 'react';
import { AdminList } from './components/Admin';
import { Client, Login } from './components/Clients';

function App() {
  const [isLogin,setLogin]=useState(false)
  const [tab,setTab]=useState(0)
  const updateTab=(tabValue)=>{
    setTab(tabValue)
  }
  const updateLogin=(tabValue)=>{
    setLogin(tabValue)
  }
  return (
    <div>
    {
    isLogin==false?

    <div className="App">
      <Login updateLogin={updateLogin}/>
    </div>
    :
    <div className="App">
    <NavBar
          style={{
            display: 'flex',
            width: '100%',
            justifyContent: 'space-between',
            alignItems: 'center',
            height: 56,
            flexDirection: 'row',
            boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.2)', // Add bottom elevation
          }} 
          updateTab={updateTab}
          />
          {tab==0&&<AdminList/>}
          {tab==1&&<Client/>}

    </div>}
    </div>
  );
}

export default App;
