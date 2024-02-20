import axios from "axios";
import { useEffect, useState } from "react";

export const AdminList = () => {
  const [list, setList] = useState([])
  const roleLabels = [
    { id: 'WetherClients', title: 'Clients' },
    { id: 'WetherBanner', title: 'Banners' },
    { id: 'WetherPayment', title: 'Payments' },
    { id: 'WetherMeeting', title: 'Meeting' },
    { id: 'WetherBooking', title: 'Booking' },
    { id: 'WetherDocument', title: 'Document' },
    { id: 'WetherCostumers', title: 'Customer' },
    { id: 'WetherContact', title: 'Contact Me' },
    { id: 'WetherAboutUs', title: 'About Us' },
    { id: 'WetherBasicInfo', title: 'Client BasicInfo' },
    { id: 'WetherLayout', title: 'Client Layout' },
    { id: 'WetherInput', title: 'Client Input' },
    { id: 'WetherLinks', title: 'Client Links' },
    { id: 'WetherClientPayment', title: 'Client Payment' },
    { id: 'WetherBookings', title: 'Client Bookings' },
    { id: 'WetherPricing', title: 'Client Pricing' },
    { id: 'WetherTerms', title: 'Client Terms' },
    { id: 'WetherCustomers', title: 'Client Customers' },
    { id: 'WetherAbout', title: 'Client About' },
    { id: 'WetherContact', title: 'Client Contact' },
  ];
  const [selectedItemIndex, setSelectedItemIndex] = useState(null);
  const toggleOptions = (index) => {
    setSelectedItemIndex(selectedItemIndex === index ? null : index);
  };
  const [formData, setFormData] = useState({
    typeOfAdmin: '',
    serialNumber: '',
    Name: '',
    PhoneNumber: '',
    EmailID: '',
    Designation: 'CEO',
  });
  useEffect(() => {
    getList();
  }, [])
  const getList = async () => {
    let a = await localStorage.getItem('ProfileData')
    var x = JSON.parse(a)
    var request = {}
    request.AdminID = x.AdminData.AdminID
    request.SessionID = x.AdminData.SessionID
    request.Skip = 0
    request.Limit = 100
    request.Whether_Status_Filter = false
    request.Status = true
    request.Whether_Search_Filter = false
    axios
      ({
        "method": "POST",
        'url': 'https://api.experteconsult.com/admin/Fetch_All_Admin_Users',
        data: request
      }).
      then((response) => {
        console.log(response.data.extras.Data);
        setList(response.data.extras.Data)
        //    alert("Succcessfull")
      }).catch((error) => {
        var msg = ''
        try {
          msg = error.response.data.extras.msg
        } catch (error) {
          msg = "Something Wents Wrong!"
        }
        console.log(msg)
        alert(msg)
      })
  }
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleChangePassword=(e)=>{
    formData.Password=e.target.value
    setFormData(formData)
  }

  const handleEmailChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleApiCall = async () => {
    var request = {}
    request.Name = formData.Name
    let a = await localStorage.getItem('ProfileData')
    var x = JSON.parse(a)

    var id = x.AdminData.AdminID
    // console.log(x,x.AdminData)

    if (formData.typeOfAdmin == '2') {
      formData.Roles = {
        WetherAboutUs: formData.Roles.WetherAboutUs,
        WetherContact: formData.Roles.WetherContact,
        WetherCostumers: formData.Roles.WetherCostumers,
        WetherDocument: formData.Roles.WetherDocument,
        WetherBooking: formData.Roles.WetherBooking,
        WetherPayment: formData.Roles.WetherPayment,
        WetherMeeting: formData.Roles.WetherMeeting,
        WetherBanner: formData.Roles.WetherBanner,
        WetherClients: formData.Roles.WetherClients
      }
    }

    formData.Role_Type = parseInt(formData.typeOfAdmin)

    //    formData.PhoneNumber=parseInt(formData.PhoneNumber)
    formData.AdminID = id
    formData.SessionID = x.AdminData.SessionID

    request.Name = formData.Name
    request.Designation = "CEO"
    request.EmailID = formData.EmailID
    request.PhoneNumber = formData.PhoneNumber
    request.Password = formData.Password
    request.Role_Type = formData.Role_Type + 1
    request.Roles = formData.Roles
    request.AdminID = id
    request.SessionID = x.AdminData.SessionID
    request.Selected_AdminID=formData.Selected_AdminID
console.log(request)
    axios
      ({
        "method": "POST",
        'url': request.Selected_AdminID?'https://api.experteconsult.com/admin/Update_Admin_Information':'https://api.experteconsult.com/admin/Create_Admin_User',
        data: request
      }).
      then((response) => {
        //        formData = {};
        setFormData({})
        getList()
        alert("Succcessfull")
      }).catch((error) => {
        var msg = ''
        try {
          msg = error.response.data.extras.msg
        } catch (error) {
          msg = "Something Wents Wrong!"
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
 
  const Checkbox1 = ({ id, title }) => 
  {
    if (!formData.Roles) {
      formData.Roles = {};
    }
    const checked = formData?.Roles[id];
  
    const handleChange = () => {
      formData.Roles = {
        ...formData.Roles,
        [id]: !checked,
      };
    setFormData(formData)
    };
    
  
    return (
      <label style={{ flexDirection: 'row', display: 'flex', alignItems: 'flex-start', whiteSpace: 'nowrap' }}>
        <input
          style={{ paddingRight: 15 }}
          type="checkbox"
          checked={checked}
          onChange={handleChange}
        />
        {title}
      </label>
    );
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
        <div style={{ flex: .3, textAlign: 'left', backgroundColor: '#f7f7f7', paddingTop: 5, paddingBottom: 5, borderTopLeftRadius: 4 }}><text>S.no</text></div>
        {/* <div style={{ flex: .4, backgroundColor: '#f7f7f7', paddingTop: 5, paddingBottom: 5 }}><text>Id</text></div>
*/}
        <div style={{ flex: 1, textAlign: 'left', backgroundColor: '#f7f7f7', paddingTop: 5, paddingBottom: 5 }}><text>Name</text></div>

        <div style={{ flex: 1, textAlign: 'left', backgroundColor: '#f7f7f7', paddingTop: 5, paddingBottom: 5 }}><text>Phone</text></div>

        <div style={{ flex: 1, textAlign: 'left', backgroundColor: '#f7f7f7', paddingTop: 5, paddingBottom: 5 }}><text>Email</text></div>
        <div style={{ flex: .4, textAlign: 'left', backgroundColor: '#f7f7f7', paddingTop: 5, paddingBottom: 5 }}><text>Type</text></div>
        <div style={{ flex: .3, textAlign: 'left', backgroundColor: '#f7f7f7', paddingTop: 5, paddingBottom: 5, borderTopRightRadius: 4 }}><text>Status</text></div>

      </div>

      {list.map((item, index) => (
        <div key={index} style={{ display: 'flex', flexDirection: 'row', marginRight: '3%', marginLeft: '3%' }}>
          <div style={{ flex: 0.3, textAlign: 'left', backgroundColor: '#fff', paddingTop: 5, paddingBottom: 5, borderTopLeftRadius: 4 }}>
            <text>{index + 1}</text>
          </div>
          {  /*<div style={{ flex: 0.4, backgroundColor: '#fff', paddingTop: 5, paddingBottom: 5 }}>
            <text>{item.AdminID}</text>
          </div>*/}
          <div style={{ flex: 1, textAlign: 'left', backgroundColor: '#fff', paddingTop: 5, paddingBottom: 5 }}>
            <text>{item.Name}</text>
          </div>
          <div style={{ flex: 1, textAlign: 'left', backgroundColor: '#fff', paddingTop: 5, paddingBottom: 5 }}>
            <text>{item.PhoneNumber}</text>
          </div>
          <div style={{ flex: 1, textAlign: 'left', backgroundColor: '#fff', paddingTop: 5, paddingBottom: 5 }}>
            <text>{item.EmailID}</text>
          </div>
          <div style={{ flex: 0.4, textAlign: 'left', backgroundColor: '#fff', paddingTop: 5, paddingBottom: 5 }}>
            <text>{item.Role_Type}</text>
          </div>
          <div style={{ flex: 0.3, textAlign: 'left', backgroundColor: '#fff', paddingTop: 5, paddingBottom: 5, borderTopRightRadius: 4, position: 'relative', display: "flex", flexDirection: 'row' }}>
            <text>{item.status ? 'Active' : 'Inactive'}</text>
            <button onClick={() => toggleOptions(index)} style={{ marginLeft: '5px', backgroundColor: 'white', color: 'black', transform: 'rotate(90deg)', border: 'none', cursor: 'pointer' }}>{"..."}</button>
            {selectedItemIndex === index && (
              <div style={{ position: 'absolute', zIndex: 1, top: '100%', left: 0, backgroundColor: '#fff', border: '1px solid #ccc', borderRadius: '4px', flexDirection: 'column' }}>
                <div onClick={() => {
                  item.typeOfAdmin = item.Role_Type
                  item.Selected_AdminID=item.AdminID
                  setFormData(item)
                  console.log(item)
                  formData.Roles = item.Roles

                  toggleOptions(-1)
                }} style={{ padding: '8px', cursor: 'pointer' }}>Update</div>
                <div onClick={() => alert('Option 2 clicked')} style={{ padding: '8px', cursor: 'pointer' }}>{item.Status ? "Inactive" : "Active"}</div>
              </div>
            )}
          </div>    </div>
      ))}
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
            <option value='2'>Modular</option>
            <option value="3">Independent</option>
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
            onChange={handleChangePassword}
          />
        </div>
        {formData.typeOfAdmin == '2' && 
        <div style={{ flexDirection: 'column', width: '100%', alignItems: 'flex-start', display: 'flex' }}>
        {roleLabels.map((item, index) => (
          <Checkbox1 key={index} id={item.id} title={item.title} />
        ))}
      </div>
      
        }
        <div className="form-group">
          <button type="submit">{formData.Selected_AdminID?"Update":"Create"}</button>
        </div>
      </form>
    </div>
  </div>)
}

export const Checkbox = ({ id, formData, handleBannerChange }) => {
  const checked = id === 1 ? formData?.Roles?.WetherBanner :
                id === 2 ? formData?.Roles?.WetherPayment :
                id === 4 ? formData?.Roles?.WetherMeeting :
                id === 6 ? formData?.Roles?.WetherBooking :
                id === 7 ? formData?.Roles?.WetherDocument :
                id === 8 ? formData?.Roles?.WetherCostumers :
                id === 9 ? formData?.Roles?.WetherContact :
                id === 10 ? formData?.Roles?.WetherAboutUs :
                id === 0 ? formData?.Roles?.WetherClients :
                id == 11 ? formData?.Roles?.WetherBasicInfo :
                id == 12 ? formData?.Roles?.WetherLayout :
                id == 13 ? formData?.Roles?.WetherInput :
                id == 14 ? formData?.Roles?.WetherLinks :
                id == 15 ? formData?.Roles?.WetherClientPayment :
                id == 16 ? formData?.Roles?.WetherBookings :
                id == 17 ? formData?.Roles?.WetherPricing :
                id == 18 ? formData?.Roles?.WetherTerms :
                id == 19 ? formData?.Roles?.WetherCustomers :
                id == 20 ? formData?.Roles?.WetherAbout :
                id == 21 ? formData?.Roles?.WetherContact :
                false;

  return (
    <label style={{ flexDirection: 'row', display: 'flex', alignItems: 'flex-start', whiteSpace: 'nowrap' }}>
      <input
        style={{ paddingRight: 15 }}
        type="checkbox"
        checked={checked}
        onChange={() => handleBannerChange({
          target: {
            name: id === 1 ? 'WetherBanner' :
              id === 2 ? 'WetherPayment' :
                id === 4 ? 'WetherMeeting' :
                  id === 6 ? 'WetherBooking' :
                    id === 7 ? 'WetherDocument' :
                      id === 8 ? 'WetherCostumers' :
                        id === 9 ? 'WetherContact' :
                          id === 10 ? 'WetherAboutUs' :
                            id === 0 ? "WetherClients" :

                              id === 11 ? "WetherBasicInfo"
                                :
                                id === 12 ? 'WetherLayout'
                                  :
                                  id === 13 ? 'WetherInput'
                                    :
                                    id === 14 ? 'WetherLinks'
                                      :
                                      id === 15 ? 'WetherClientPayment'
                                        :
                                        id === 16 ? 'WetherBookings'
                                          :
                                          id === 17 ? 'WetherPricing'
                                            :
                                            id === 18 ? 'WetherTerms'
                                              :
                                              id === 19 ? 'WetherCustomers'
                                                :
                                                id === 20 ? 'WetherAbout'
                                                  :
                                                  id === 21 ? 'WetherContact' :
                                                    id, checked: !checked
          }
        })}
      />
      {id === 1 ? 'Banners' :
        id === 2 ? 'Payments' :
          id === 4 ? 'Meeting' :
            id === 6 ? 'Booking' :
              id === 7 ? 'Document' :
                id === 8 ? 'Customer' :
                  id === 9 ? 'Contact Me' :
                    id === 10 ? 'About Us' :
                      id === 0 ? "Clients" :
                        id === 11 ? "Client BasicInfo"
                          :
                          id === 12 ? "Client Layout"
                            :
                            id === 13 ? "Client Input"
                              :
                              id === 14 ? "Client Links"
                                :
                                id === 15 ? "Client Payment"
                                  :
                                  id === 16 ? "Client Bookings"
                                    :
                                    id === 17 ? "Client Pricing"
                                      :
                                      id === 18 ? "Client Terms"
                                        :
                                        id === 19 ? "Client Customers"
                                          :
                                          id === 20 ? "Client About"
                                            :
                                            id === 21 ? "Client Contact" :
                                              id}
    </label>
  );
};

