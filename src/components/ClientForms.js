import { useState } from "react"
import { Checkbox } from "./Admin"
import colors from "./Colors"
import TermForm from "./TermsForm"

export const BasicInfo = ({ setTab }) => {
    return (<div style={{ width: '95%', alignSelf: 'center', marginTop: 20, alignItems: 'center', flexDirection: 'column', display: 'flex' }}>
        <h1 style={{ color: colors.black }}>Basic Info</h1>
        <div style={{ flexDirection: 'row', display: 'flex', width: '80%', marginTop: '3%' }}>
            <div style={{ flexDirection: 'column', flex: 1, flexDirection: 'column', marginLeft: '5%', marginRight: '5%' }}>
                <div style={{ flexDirection: 'row', display: 'flex', alignItems: 'center' }}>
                    <text style={{ flex: 1, textAlign: 'left' }}>S.No: </text>
                    <input placeholder="Serial No" style={{ flex: 1, borderColor: '#c1c1c1', borderWidth: 1, borderStyle: 'solid', marginLeft: 10 }} />
                </div>

                <div style={{ flexDirection: 'row', display: 'flex', marginTop: 10, alignItems: 'center' }}>
                    <text style={{ flex: 1, textAlign: 'left' }}>Name </text>
                    <input placeholder="Enter Your Name" style={{ flex: 1, borderColor: '#c1c1c1', borderWidth: 1, borderStyle: 'solid', marginLeft: 10 }} />
                </div>
                <div style={{ flexDirection: 'row', display: 'flex', marginTop: 10, alignItems: 'center' }}>
                    <text style={{ flex: 1, textAlign: 'left' }}>Phone </text>
                    <input placeholder="Enter Your Phone" style={{ flex: 1, borderColor: '#c1c1c1', borderWidth: 1, borderStyle: 'solid', marginLeft: 10 }} />
                </div>
                <div style={{ flexDirection: 'row', display: 'flex', marginTop: 10, alignItems: 'center' }}>
                    <text style={{ flex: 1, textAlign: 'left' }}>Email </text>
                    <input placeholder="Enter Your Email Id" style={{ flex: 1, borderColor: '#c1c1c1', borderWidth: 1, borderStyle: 'solid', marginLeft: 10 }} />
                </div>
            </div>
            <div style={{ flexDirection: 'column', flex: 1, flexDirection: 'column', marginLeft: '5%', marginRight: '5%' }}>
                <div style={{ flexDirection: 'row', display: 'flex', alignItems: 'center' }}>
                    <text style={{ flex: 1, textAlign: 'left' }}>FB Link </text>
                    <input placeholder="facebook.com" style={{ flex: 1, borderColor: '#c1c1c1', borderWidth: 1, borderStyle: 'solid', marginLeft: 10 }} />
                </div>
                <div style={{ flexDirection: 'row', display: 'flex', alignItems: 'center' }}>
                    <text style={{ flex: 1, textAlign: 'left' }}>Insta Link </text>
                    <input placeholder="instagram.com" style={{ flex: 1, marginTop: 10, borderColor: '#c1c1c1', borderWidth: 1, borderStyle: 'solid', marginLeft: 10 }} />
                </div> <div style={{ flexDirection: 'row', display: 'flex', alignItems: 'center' }}>
                    <text style={{ flex: 1, textAlign: 'left' }}>X Link </text>
                    <input placeholder="x.com" style={{ flex: 1, borderColor: '#c1c1c1', marginTop: 10, borderWidth: 1, borderStyle: 'solid', marginLeft: 10 }} />
                </div>
            </div>


        </div>
        <button style={{ backgroundColor: colors.primary, maxWidth: 150, marginTop: 30 }} onClick={() => { setTab(1) }}>Save</button>
    </div>)
}
export const Layout = ({ setTab }) => {
    const data = [1, 2];
    return (
        <div style={{ width: '95%', alignSelf: 'center', marginTop: 20, alignItems: 'center', flexDirection: 'column', display: 'flex' }}>
            <h1 style={{ color: colors.black }}>Select Layout</h1>
            <div style={{ display: 'flex', flexDirection: 'row', width: '100%', alignItems: 'center' }}>

                {data.map((item) => {
                    return (
                    <div style={{display:'flex',flexDirection:'column',flex:1,alignItems:'center',justifyContent:'space-around'}}>
                        <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',textAlign:'center'}}>
                            <Checkbox id={""}/> <h3>Layout {item}</h3>
                        </div>
                    <div style={{ width: '50%', height: 220, backgroundColor: (item == 1 ? 'red' : 'blue'), borderWidth: .2, borderStyle: 'solid', borderColor: "gray" }}>

                    </div>
                    </div>
                    )
                })}
            </div>

            <button style={{ backgroundColor: colors.primary, maxWidth: 150, marginTop: 30 }} onClick={() => { setTab(2) }}>Save</button>
        </div>)
}

export const LayoutInputForm = ({setTab}) => {
  const [backgroundImage, setBackgroundImage] = useState(null);
  const [profilePicture, setProfilePicture] = useState(null);
  const [companyLogo, setCompanyLogo] = useState(null);
  const [companyName, setCompanyName] = useState('');
  const [introText, setIntroText] = useState('');
  const [bannerImage, setBannerImage] = useState(null);
  const [bannerVideo, setBannerVideo] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement your logic for form submission, including file uploads
    // You may use FormData to handle file uploads.
    // Example: const formData = new FormData(); formData.append('backgroundImage', backgroundImage);
    // Send formData to your backend.
  };

    return (<div style={{ width: '95%', alignSelf: 'center', marginTop: 20, alignItems: 'center', flexDirection: 'column', display: 'flex' }}>
    <h1 style={{ color: colors.black }}>Layout Input</h1>
    <div style={{ flexDirection: 'row', display: 'flex', width: '80%', marginTop: '3%' ,justifyContent:'space-between'}}>
   
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px',marginBottom:30 }}>
  <div style={{ display: 'flex', alignItems: 'center' }}>
    <label style={{ flex: 1, textAlign: 'left' }}>Background Image</label>
    <input type="file" accept="image/*" onChange={(e) => setBackgroundImage(e.target.files[0])} style={{ flex: 1 }} />
    {backgroundImage && <img src={URL.createObjectURL(backgroundImage)} alt="Background Preview" />}
  </div>

  <div style={{ display: 'flex', alignItems: 'center', marginTop: 10 }}>
    <label style={{ flex: 1, textAlign: 'left' }}>Profile Picture</label>
    <input style={{ flex: 1 }} type="file" accept="image/*" onChange={(e) => setProfilePicture(e.target.files[0])} />
    {profilePicture && <img src={URL.createObjectURL(profilePicture)} alt="Profile Picture Preview" />}
  </div>

  <div style={{ display: 'flex', alignItems: 'center', marginTop: 5 }}>
    <label style={{ flex: 1, textAlign: 'left' }}>Logo</label>
    <input style={{ flex: 1 }} type="file" accept=".svg, .png, .jpg, .jpeg" onChange={(e) => setCompanyLogo(e.target.files[0])} />
    {companyLogo && <img src={URL.createObjectURL(companyLogo)} alt="Logo Preview" />}
  </div>

  <div style={{ display: 'flex', alignItems: 'center', marginTop: 5 }}>
    <label style={{ flex: 1, textAlign: 'left' }}>Banner Image</label>
    <input style={{ flex: 1 }} type="file" accept=".svg, .png, .jpg, .jpeg" onChange={(e) => setBannerImage(e.target.files[0])} />
    {bannerImage && <img src={URL.createObjectURL(bannerImage)} alt="Banner Image Preview" />}
  </div>

  <div style={{ display: 'flex', alignItems: 'center', marginTop: 5 }}>
    <label style={{ flex: 1, textAlign: 'left' }}>Banner Video</label>
    <input type="file" accept="video/*" onChange={(e) => setBannerVideo(e.target.files[0])} style={{ flex: 1 }} />
    {bannerVideo && (
      <video width="320" height="240" controls>
        <source src={URL.createObjectURL(bannerVideo)} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    )}
  </div>

  <div style={{ display: 'flex', alignItems: 'center', marginTop: 5 }}>
    <label style={{ flex: 1, textAlign: 'left' }}>Name of the Company</label>
    <input style={{ flex: 1 }} type="text" value={companyName} onChange={(e) => setCompanyName(e.target.value)} />
  </div>

  <div style={{ display: 'flex', alignItems: 'flex-start', marginTop: 5 }}>
    <label style={{ flex: 1, textAlign: 'left' }}>Text for Intro</label>
    <textarea style={{ flex: 1, minHeight: '4em' }} value={introText} onChange={(e) => setIntroText(e.target.value)} />
  </div>

  <button style={{ backgroundColor: colors.primary, maxWidth: 150, marginTop: 30,alignSelf:'center' }} onClick={() => { setTab(3) }}>Save</button>

</form>
<div style={{backgroundColor:'red',width:'40%',height:300}}>

</div>
    </div>
    </div>
  );
};

export const Links=({setTab})=>{
    const [formData, setFormData] = useState({
        dropdown: '',
        serialNumber: '',
        name: '',
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
    
      return (
        <div style={{ width: '95%', alignSelf: 'center', marginTop: 20, alignItems: 'center', flexDirection: 'column', display: 'flex' }}>
        <h1 style={{ color: colors.black }}>Meeting Links</h1>
        <div style={{ flexDirection: 'row', display: 'flex', width: '80%'}}>
      
       
    
        <div className="form-container" style={{ width: "30%", display: 'flex', flexDirection: 'column' }}>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="dropdown" style={{ alignItems: 'flex-start', alignSelf: 'flex-start', textAlign: 'left' }}>meeting links:</label>
              <select
                id="dropdown"
                name="dropdown"
                value={formData.dropdown}
                onChange={handleChange}
              >
                <option value="">Select an option</option>
                <option value="Modular">zoom meets</option>
                <option value="Independent">google meet</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="serialNumber" style={{ alignItems: 'flex-start', alignSelf: 'flex-start', textAlign: 'left' }}>static permanent link:</label>
              <input
                type="text"
                id="serialNumber"
                name="serialNumber"
                value={formData.serialNumber}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="name" style={{ alignItems: 'flex-start', alignSelf: 'flex-start', textAlign: 'left' }}>premium permanant link (paid):</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
           
             <div className="form-group">
             <button style={{ backgroundColor: colors.primary, maxWidth: 150, marginTop: 30 }} onClick={() => { setTab(4) }}>Save</button>

            </div>
          </form>
        </div>
      
      </div>
    </div>)
    
}


export const Payment=({setTab})=>{
    const [formData, setFormData] = useState({
        dropdown: '',
        serialNumber: '',
        name: '',
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
    
      return (
        <div style={{ width: '95%', alignSelf: 'center', marginTop: 20, alignItems: 'center', flexDirection: 'column', display: 'flex' }}>
        <h1 style={{ color: colors.black }}>Payment Gateway</h1>
        <div style={{ flexDirection: 'row', display: 'flex', width: '80%'}}>
      
       
    
        <div className="form-container" style={{ width: "30%", display: 'flex', flexDirection: 'column' }}>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="dropdown" style={{ alignItems: 'flex-start', alignSelf: 'flex-start', textAlign: 'left' }}>Payment Gateway:</label>
              <select
                id="dropdown"
                name="dropdown"
                value={formData.dropdown}
                onChange={handleChange}
              >
                <option value="">Select an option</option>
                <option value="Modular">phonepay</option>
                <option value="Independent">razorpay</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="serialNumber" style={{ alignItems: 'flex-start', alignSelf: 'flex-start', textAlign: 'left' }}>key:</label>
              <input
                type="text"
                id="serialNumber"
                name="serialNumber"
                value={formData.serialNumber}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="name" style={{ alignItems: 'flex-start', alignSelf: 'flex-start', textAlign: 'left' }}>key secret:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
           
             <div className="form-group">
             <button style={{ backgroundColor: colors.primary, maxWidth: 150, marginTop: 30 }} onClick={() => { setTab(5) }}>Save</button>

            </div>
          </form>
        </div>
      
      </div>
    </div>)
    
}

export const Pricing = ({ setTab }) => {
    return (<div style={{ width: '95%', alignSelf: 'center', marginTop: 20, alignItems: 'center', flexDirection: 'column', display: 'flex' }}>
        <h1 style={{ color: colors.black }}>Pricing</h1>
        <div style={{ flexDirection: 'row', display: 'flex', width: '80%', marginTop: '3%' }}>
            <div style={{ flexDirection: 'column', flex: 1, flexDirection: 'column', marginLeft: '5%', marginRight: '5%' }}>
                <div style={{ flexDirection: 'row', display: 'flex', alignItems: 'center' }}>
                    <text style={{ flex: 1, textAlign: 'left' }}>Label 1: </text>
                    <input placeholder="Label 1" style={{ flex: 1, borderColor: '#c1c1c1', borderWidth: 1, borderStyle: 'solid', marginLeft: 10 }} />
                </div>

                <div style={{ flexDirection: 'row', display: 'flex', marginTop: 10, alignItems: 'center' }}>
                    <text style={{ flex: 1, textAlign: 'left' }}>Price </text>
                    <input placeholder="00.0" style={{ flex: 1, borderColor: '#c1c1c1', borderWidth: 1, borderStyle: 'solid', marginLeft: 10 }} />
                </div>
                
            </div>

            <div style={{ flexDirection: 'column', flex: 1, flexDirection: 'column', marginLeft: '5%', marginRight: '5%' }}>
                <div style={{ flexDirection: 'row', display: 'flex', alignItems: 'center' }}>
                    <text style={{ flex: 1, textAlign: 'left' }}>Label 2</text>
                    <input placeholder="Label 2" style={{ flex: 1, borderColor: '#c1c1c1', borderWidth: 1, borderStyle: 'solid', marginLeft: 10 }} />
                </div>
                <div style={{ flexDirection: 'row', display: 'flex', alignItems: 'center' }}>
                    <text style={{ flex: 1, textAlign: 'left' }}>Offer Price </text>
                    <input placeholder="00" style={{ flex: 1, marginTop: 10, borderColor: '#c1c1c1', borderWidth: 1, borderStyle: 'solid', marginLeft: 10 }} />
                </div> 
            </div>


        </div>
        <div style={{width:'100%',height:250,marginTop:20}}>
                <TermForm/>
                </div>
        <button style={{ backgroundColor: colors.primary, maxWidth: 150, marginTop: 30,marginBottom:50 }} onClick={() => { setTab(7) }}>Save</button>
    </div>)
}