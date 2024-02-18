import { useEffect, useState } from "react"
import colors from "./Colors"
import { BasicInfo, BookingManagement, Layout, LayoutInputForm, Links, Payment, Pricing } from "./ClientForms"
import TermForm from "./TermsForm"

export const Login = ({updateLogin}) => {
  const [EmailID, setUsername] = useState('');
  const [Password, setPassword] = useState('');

  const handleLogin = () => {
    // Perform login logic here (e.g., send credentials to server)
    console.log('Logging in with:', { EmailID, Password });
    handleApiCall();
  };
  
  
  const handleApiCall = async () => {
    try {
      const response = await fetch('https://api.experteconsult.com/admin/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ EmailID,Password }), // Replace with your actual data
      });

      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }

      const data = await response.json();
      localStorage.setItem('ProfileData', JSON.stringify(data.data));

      console.log(data.data);
updateLogin();
//      setApiData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
      alert('An error occurred while fetching data. Please try again.'); // Basic alert for error handling
    }
  };


  return (
    <div style={styles.loginContainer}>
      <div style={styles.loginCard}>
        <h2 style={styles.cardTitle}>Login</h2>
        <form>
          <div style={styles.formGroup}>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              style={styles.formInput}
              value={EmailID}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              style={styles.formInput}
              value={Password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="button" style={styles.btnPrimary} onClick={handleLogin}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

const styles = {
  loginContainer: {
    textAlign: 'center',
  },
  loginCard: {
    backgroundColor: '#fff',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    padding: '20px',
    width: '300px',
    borderRadius: '5px',
    margin: 'auto',
    marginTop: '50px',
  },
  cardTitle: {
    marginBottom: '20px',
    color: '#333',
    fontSize: '1.5rem',
  },
  formGroup: {
    marginBottom: '15px',
  },
  formInput: {
    width: '100%',
    padding: '10px',
    boxSizing: 'border-box',
    border: '1px solid #ccc',
    borderRadius: '3px',
  },
  btnPrimary: {
    backgroundColor: '#007bff',
    color: '#fff',
    padding: '10px 15px',
    border: 'none',
    borderRadius: '3px',
    cursor: 'pointer',
  },
};

  
export const Client=()=>{
    const [innerTab,setInnerTab]=useState(0)
    const [data,setData]=useState({})
    const selectedTabStyle={
        flex:1,
        alignItems:'center',
        textAlign:'center',
        paddingBottom:5,
        paddingTop:5,
        backgroundColor:colors.secondary,
        color:colors.white,
        
    }
    useEffect(() => {
      getInformation()
    }, []);
    const getInformation= async()=> {
      let x= await localStorage.getItem('ProfileData')
      setData(x)
    }
    const unSelectedTabStyle={
        
        alignItems:'center',
        borderWidth:.5,
        paddingTop:5,
        opacity:.5,
        
        paddingBottom:5,
        borderStyle:'solid',
        flex:1,
        color:colors.secondary,
        backgroundColor:colors.gray
    }
    const setTabValue=(value)=>{
        setInnerTab(value)
    }
    return(<div style={{width:'100%',display:'flex',flexDirection:'column'}}>
        <div style={{flexDirection:'row',display:'flex',width:'95%',alignSelf:"center",marginTop:'3%'}}>
            <div onClick={()=>{setInnerTab(0)}} style={innerTab>=0?selectedTabStyle:unSelectedTabStyle}>Basic Info</div>

            <div onClick={()=>{setInnerTab(1)}} style={innerTab>=1?selectedTabStyle:unSelectedTabStyle}>Layout</div>
            <div onClick={()=>{setInnerTab(2)}} style={innerTab>=2?selectedTabStyle:unSelectedTabStyle}>Input</div>
            <text onClick={()=>{setInnerTab(3)}} style={innerTab>=3?selectedTabStyle:unSelectedTabStyle}>Links</text>
            <text onClick={()=>{setInnerTab(4)}} style={innerTab>=4?selectedTabStyle:unSelectedTabStyle}>Payment</text>
            <text onClick={()=>{setInnerTab(5)}} style={innerTab>=5?selectedTabStyle:unSelectedTabStyle}>Bookings</text>
            <text onClick={()=>{setInnerTab(6)}} style={innerTab>=6?selectedTabStyle:unSelectedTabStyle}>Pricing</text>
            
            <text onClick={()=>{setInnerTab(7)}} style={innerTab>=7?selectedTabStyle:unSelectedTabStyle}>Terms</text>
            <text onClick={()=>{setInnerTab(8)}} style={innerTab>=8?selectedTabStyle:unSelectedTabStyle}>Customers</text>
            <text onClick={()=>{setInnerTab(9)}} style={innerTab>=9?selectedTabStyle:unSelectedTabStyle}>About Us</text>
            <text onClick={()=>{setInnerTab(10)}} style={innerTab>=10?selectedTabStyle:unSelectedTabStyle}>Contact Us</text>
 
        </div>
        {innerTab==0&&<BasicInfo
        setTab={setTabValue}/>}
        
        {innerTab==1&&<Layout
        setTab={setTabValue}/>}
        
        {innerTab==2&&<LayoutInputForm
        setTab={setTabValue}/>}
        
        {innerTab==3&&<Links setTab={setTabValue}/>}
        {innerTab==4&&<Payment setTab={setTabValue}/>}
        
        {innerTab==5&&<BookingManagement setTab={setTabValue}/>}
        {innerTab==6&&<Pricing setTab={setTabValue}/>}

        {innerTab==7&&<TermForm/>}
        {innerTab==8&&<TermForm/>}
        {innerTab==9&&<TermForm/>}
        {innerTab==10&&<TermForm/>}
        

    </div>)
}