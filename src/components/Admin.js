import { useState } from "react";

export const AdminList=()=>{
    const [formData, setFormData] = useState({
        dropdown: '',
        serialNumber: '',
        name: '',
        phoneNumber: '',
        emailId: '',
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Perform any actions with the form data here
        console.log('Form data submitted:', formData);
      };
    
   return(<div style={{width:"100%",display:'flex',flexDirection:'row'}}>
    <div style={{width:'70%'}}>
        <div style={{display:'flex',flexDirection:'row'}}>

        </div>
 <div style={{display:'flex',flexDirection:'row',margin:'3%'}}>
            <div style={{flex:.3,backgroundColor:'#f7f7f7',paddingTop:5,paddingBottom:5,borderTopLeftRadius:4}}><text>S.no</text></div>
            <div style={{flex:.4,backgroundColor:'#f7f7f7',paddingTop:5,paddingBottom:5}}><text>Id</text></div>

            <div style={{flex:1,backgroundColor:'#f7f7f7',paddingTop:5,paddingBottom:5}}><text>Name</text></div>

            <div style={{flex:1,backgroundColor:'#f7f7f7',paddingTop:5,paddingBottom:5}}><text>Phone</text></div>

            <div style={{flex:1,backgroundColor:'#f7f7f7',paddingTop:5,paddingBottom:5}}><text>Email</text></div>
            <div style={{flex:.4,backgroundColor:'#f7f7f7',paddingTop:5,paddingBottom:5}}><text>Type</text></div>
            <div style={{flex:.3,backgroundColor:'#f7f7f7',paddingTop:5,paddingBottom:5,borderTopRightRadius:4}}><text>Status</text></div>

        </div>

        <div style={{display:'flex',backgroundColor:'#f7f7f7',flexDirection:'row',marginLeft:'3%',marginRight:'3%',height:18,borderBottomLeftRadius:8,borderBottomRightRadius:8}}>
            </div>
    </div>

<div className="form-container" style={{width:"30%",margin:'2%',display:'flex',flexDirection:'column'}}>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="dropdown" style={{alignItems:'flex-start',alignSelf:'flex-start',textAlign:'left'}}>Type of Admin:</label>
          <select
            id="dropdown"
            name="dropdown"
            value={formData.dropdown}
            onChange={handleChange}
          >
            <option value="">Select an option</option>
            <option value="option1">Modular</option>
            <option value="option2">Independent</option>
            {/* Add more options as needed */}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="serialNumber" style={{alignItems:'flex-start',alignSelf:'flex-start',textAlign:'left'}}>S no:</label>
          <input
            type="text"
            id="serialNumber"
            name="serialNumber"
            value={formData.serialNumber}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="name" style={{alignItems:'flex-start',alignSelf:'flex-start',textAlign:'left'}}>Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber" style={{alignItems:'flex-start',alignSelf:'flex-start',textAlign:'left'}}>Phone Number:</label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="emailId" style={{alignItems:'flex-start',alignSelf:'flex-start',textAlign:'left'}}>Email Id:</label>
          <input
            type="email"
            id="emailId"
            name="emailId"
            value={formData.emailId}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <button type="submit">Create</button>
        </div>
      </form>
      </div>
    </div>)
}