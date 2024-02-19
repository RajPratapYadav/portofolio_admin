import axios from "axios";
import { useState } from "react";

export const AdminList = () => {
  const [formData, setFormData] = useState({
    typeOfAdmin: '',
    serialNumber: '',
    Name: '',
    PhoneNumber: '',
    EmailID:'',
    Designation: 'CEO',
    WetherAboutUs: false,
    WetherContact: false,
    WetherCostumers: false,
    WetherDocument: false,
    WetherBooking: false,
    WetherPayment: false,
    WetherMeeting: false,
    WetherBanner: false,
    WetherClients: false,
    WetherHome: false
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleEmailChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleApiCall = async () => {
var request={}
request.Name=formData.Name
    let a= await localStorage.getItem('ProfileData')
    var x=JSON.parse(a)

    var id=x.AdminData.AdminID
   // console.log(x,x.AdminData)
 
    if(formData.typeOfAdmin=='1')
    {formData.Roles={
    WetherAboutUs: formData.WetherAboutUs,
    WetherContact: formData.WetherContact,
    WetherCostumers: formData.WetherCostumers,
    WetherDocument: formData.WetherDocument,
    WetherBooking: formData.WetherBooking,
    WetherPayment: formData.WetherPayment,
    WetherMeeting: formData.WetherMeeting,
    WetherBanner: formData.WetherBanner,
    WetherClients: formData.WetherClients,
    WetherHome: formData.WetherHome
    }}
    
    formData.Role_Type=parseInt(formData.typeOfAdmin)
    
//    formData.PhoneNumber=parseInt(formData.PhoneNumber)
    formData.AdminID=id
    formData.SessionID=x.AdminData.SessionID
    
    request.Name=formData.Name
    request.Designation="CEO"
    request.EmailID=formData.EmailID
    request.PhoneNumber=formData.PhoneNumber
    request.Password=formData.Password
     request.Role_Type=formData.Role_Type+1
    request.Roles=formData.Roles 
    request.AdminID=id
    request.SessionID=x.AdminData.SessionID

   axios
      ({
        "method": "POST",
      'url':'https://api.experteconsult.com/admin/Create_Admin_User',
      data:request
      }).
      then((response) => {
        formData = {};
        alert("Succcessfull")
      }).catch((error)=>{
var msg=''
try {
  msg=error.response.data.extras.msg
} catch (error) {
  msg="Something Wents Wrong!"
}
        console.log(msg)
       alert(msg)
      })
      
      };

  const handlePhoneChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleBannerChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.checked,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
//    console.log('Form data submitted:', formData);
    // Perform any other actions with the form data here
    handleApiCall()
  };

  return (<div style={{ width: "100%", display: 'flex', flexDirection: 'row' }}>
    <div style={{ width: '70%' }}>
      <div style={{ display: 'flex', flexDirection: 'row' }}>

      </div>
      <div style={{ display: 'flex', flexDirection: 'row', margin: '3%' }}>
        <div style={{ flex: .3, backgroundColor: '#f7f7f7', paddingTop: 5, paddingBottom: 5, borderTopLeftRadius: 4 }}><text>S.no</text></div>
        <div style={{ flex: .4, backgroundColor: '#f7f7f7', paddingTop: 5, paddingBottom: 5 }}><text>Id</text></div>

        <div style={{ flex: 1, backgroundColor: '#f7f7f7', paddingTop: 5, paddingBottom: 5 }}><text>Name</text></div>

        <div style={{ flex: 1, backgroundColor: '#f7f7f7', paddingTop: 5, paddingBottom: 5 }}><text>Phone</text></div>

        <div style={{ flex: 1, backgroundColor: '#f7f7f7', paddingTop: 5, paddingBottom: 5 }}><text>Email</text></div>
        <div style={{ flex: .4, backgroundColor: '#f7f7f7', paddingTop: 5, paddingBottom: 5 }}><text>Type</text></div>
        <div style={{ flex: .3, backgroundColor: '#f7f7f7', paddingTop: 5, paddingBottom: 5, borderTopRightRadius: 4 }}><text>Status</text></div>

      </div>

      <div style={{ display: 'flex', backgroundColor: '#f7f7f7', flexDirection: 'row', marginLeft: '3%', marginRight: '3%', height: 18, borderBottomLeftRadius: 8, borderBottomRightRadius: 8 }}>
      </div>
    </div>

    <div className="form-container" style={{ width: "30%", margin: '2%', display: 'flex', flexDirection: 'column' }}>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="typeOfAdmin" style={{ alignItems: 'flex-start', alignSelf: 'flex-start', textAlign: 'left' }}>Type of Admin:</label>
          <select
            id="typeOfAdmin"
            name="typeOfAdmin"
            value={formData.typeOfAdmin}
            onChange={handleChange}
          >
            <option value="">Select an option</option>
            <option value='1'>Modular</option>
            <option value="2">Independent</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="Name" style={{ alignItems: 'flex-start', alignSelf: 'flex-start', textAlign: 'left' }}>Name:</label>
          <input
            type="text"
            id="Name"
            name="Name"
            value={formData.Name}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="PhoneNumber" style={{ alignItems: 'flex-start', alignSelf: 'flex-start', textAlign: 'left' }}>Phone Number:</label>
          <input
            type="tel"
            id="PhoneNumber"
            name="PhoneNumber"
            value={formData.PhoneNumber}
            onChange={handlePhoneChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="EmailID" style={{ alignItems: 'flex-start', alignSelf: 'flex-start', textAlign: 'left' }}>Email Id:</label>
          <input
            type="email"
            id="EmailID"
            name="EmailID"
            value={formData.EmailID}
            onChange={handleEmailChange}
          />
        </div>
        <div className="form-group">
            <label htmlFor="Password" style={{ alignItems: 'flex-start', alignSelf: 'flex-start', textAlign: 'left' }}>Password:</label>
            <input
              type="password"
              id="Password"
              name="Password"
              value={formData.Password}
              onChange={handleChange}
            />
          </div>
      {formData.typeOfAdmin=='1'&&<div style={{flexDirection:'column',width:'100%',alignItems:'flex-start',display:'flex'}}>  
      <Checkbox id={0}  key={0} formData={formData} handleBannerChange={handleBannerChange}/>
     
      <Checkbox id={1}  key={1} formData={formData} handleBannerChange={handleBannerChange}/>
    
        <Checkbox id={2}  key={2} formData={formData} handleBannerChange={handleBannerChange}/>
        <Checkbox id={4}  key={4} formData={formData} handleBannerChange={handleBannerChange}/>
        <Checkbox id={6}  key={6} formData={formData} handleBannerChange={handleBannerChange}/>
        <Checkbox id={7}  key={7} formData={formData} handleBannerChange={handleBannerChange}/>
        <Checkbox id={8}  key={8} formData={formData} handleBannerChange={handleBannerChange}/>
        <Checkbox id={9}  key={9} formData={formData} handleBannerChange={handleBannerChange}/>
        <Checkbox id={10}  key={10} formData={formData} handleBannerChange={handleBannerChange}/>
   
        </div>
   }  
      <div className="form-group">
          <button type="submit">Create</button>
        </div>
      </form>
    </div>
  </div>)
}

export const Checkbox = ({ id, formData, handleBannerChange }) => {
  const checked = id === 1 ? formData.WetherBanner :
  id === 2 ? formData.WetherPayment :
      id === 4 ? formData.WetherMeeting :
          id === 6 ? formData.WetherBooking :
            id === 7 ? formData.WetherDocument :
              id === 8 ? formData.WetherCostumers :
                id === 9 ? formData.WetherContact :
                  id === 10 ? formData.WetherAboutUs :
                  id===0?formData.WetherClients:
                  false;

  return (
    <label style={{ flexDirection: 'row', display: 'flex', alignItems: 'flex-start', whiteSpace: 'nowrap' }}>
      <input
        style={{ paddingRight: 15 }}
        type="checkbox"
        checked={checked}
        onChange={() => handleBannerChange({ target: { name: id === 1 ? 'WetherBanner' :
        id === 2 ? 'WetherPayment' :
            id === 4 ? 'WetherMeeting' :
                id === 6 ? 'WetherBooking' :
                  id === 7 ? 'WetherDocument' :
                    id === 8 ? 'WetherCostumers' :
                      id === 9 ? 'WetherContact' :
                        id === 10 ? 'WetherAboutUs' :
                        id===0?"WetherClients":
                        id, checked: !checked } })}
      />
      {id === 1 ? 'Banners' :
        id === 2 ? 'Payments' :
            id === 4 ? 'Meeting' :
                id === 6 ? 'Booking' :
                  id === 7 ? 'Document' :
                    id === 8 ? 'Customer' :
                      id === 9 ? 'Contact Me' :
                        id === 10 ? 'About Us' :
                        id===0?"Clients":
                        id}
    </label>
  );
};

