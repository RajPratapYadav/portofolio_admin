import { useState } from "react";

export const AdminList = () => {
  const [formData, setFormData] = useState({
    typeOfAdmin: '',
    serialNumber: '',
    name: '',
    phoneNumber: '',
    username: '',
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
    try {
      const response = await fetch('https://api.experteconsult.com/admin/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData), 
      });

      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }

      const data = await response.json();
      localStorage.setItem('ProfileData', JSON.stringify(data.data));

      console.log(data.data);
      alert("SignUp Success")
//      setApiData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
      alert('An error occurred while fetching data. Please try again.'); // Basic alert for error handling
    }
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
    console.log('Form data submitted:', formData);
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
          <label htmlFor="serialNumber" style={{ alignItems: 'flex-start', alignSelf: 'flex-start', textAlign: 'left' }}>S no:</label>
          <input
            type="text"
            id="serialNumber"
            name="serialNumber"
            value={formData.serialNumber}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="name" style={{ alignItems: 'flex-start', alignSelf: 'flex-start', textAlign: 'left' }}>Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber" style={{ alignItems: 'flex-start', alignSelf: 'flex-start', textAlign: 'left' }}>Phone Number:</label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handlePhoneChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="emailId" style={{ alignItems: 'flex-start', alignSelf: 'flex-start', textAlign: 'left' }}>Email Id:</label>
          <input
            type="email"
            id="emailId"
            name="username"
            value={formData.username}
            onChange={handleEmailChange}
          />
        </div>
        <div className="form-group">
            <label htmlFor="password" style={{ alignItems: 'flex-start', alignSelf: 'flex-start', textAlign: 'left' }}>Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
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
  const checked = formData[`Wether${id}`];

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

