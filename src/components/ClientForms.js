import colors from "./Colors"

export const BasicInfo = ({setTab}) => {
    return (<div style={{ width: '95%', alignSelf: 'center', marginTop: 20 ,alignItems:'center',flexDirection:'column',display:'flex'}}>
        <h1 style={{ color: colors.black }}>Basic Info</h1>
        <div style={{ flexDirection: 'row', display: 'flex',width:'80%',marginTop:'3%' }}>
            <div style={{ flexDirection: 'column', flex: 1, flexDirection: 'column', marginLeft: '5%' , marginRight: '5%' }}>
                <div style={{ flexDirection: 'row', display: 'flex', alignItems: 'center' }}>
                    <text style={{flex:1,textAlign:'left'}}>S.No: </text>
                    <input placeholder="Serial No" style={{flex:1, borderColor: '#c1c1c1', borderWidth: 1, borderStyle: 'solid', marginLeft: 10 }} />
                </div>

                <div style={{ flexDirection: 'row', display: 'flex',marginTop:10, alignItems: 'center' }}>
                    <text style={{flex:1,textAlign:'left'}}>Name </text>
                    <input placeholder="Enter Your Name" style={{ flex:1,borderColor: '#c1c1c1', borderWidth: 1, borderStyle: 'solid', marginLeft: 10 }} />
                </div>
                <div style={{ flexDirection: 'row', display: 'flex',marginTop:10, alignItems: 'center' }}>
                    <text style={{flex:1,textAlign:'left'}}>Phone </text>
                    <input placeholder="Enter Your Phone" style={{ flex:1,borderColor: '#c1c1c1', borderWidth: 1, borderStyle: 'solid', marginLeft: 10 }} />
                </div>
                <div style={{ flexDirection: 'row', display: 'flex',marginTop:10, alignItems: 'center' }}>
                    <text style={{flex:1,textAlign:'left'}}>Email </text>
                    <input placeholder="Enter Your Email Id" style={{flex:1, borderColor: '#c1c1c1', borderWidth: 1, borderStyle: 'solid', marginLeft: 10 }} />
                </div>
            </div>
            <div style={{ flexDirection: 'column', flex: 1, flexDirection: 'column', marginLeft: '5%' , marginRight: '5%' }}>
            <div style={{ flexDirection: 'row', display: 'flex', alignItems: 'center' }}>
                    <text style={{flex:1,textAlign:'left'}}>FB Link </text>
                    <input placeholder="facebook.com" style={{flex:1, borderColor: '#c1c1c1', borderWidth: 1, borderStyle: 'solid', marginLeft: 10 }} />
                </div>
                <div style={{ flexDirection: 'row', display: 'flex', alignItems: 'center' }}>
                    <text style={{flex:1,textAlign:'left'}}>Insta Link </text>
                    <input placeholder="instagram.com" style={{flex:1,marginTop:10, borderColor: '#c1c1c1', borderWidth: 1, borderStyle: 'solid', marginLeft: 10 }} />
                </div> <div style={{ flexDirection: 'row', display: 'flex', alignItems: 'center' }}>
                    <text style={{flex:1,textAlign:'left'}}>X Link </text>
                    <input placeholder="x.com" style={{flex:1, borderColor: '#c1c1c1', marginTop:10,borderWidth: 1, borderStyle: 'solid', marginLeft: 10 }} />
                </div>
            </div>

            
        </div>
        <button style={{backgroundColor:colors.primary,maxWidth:150,marginTop:30}} onClick={()=>{setTab(1)}}>Save</button>
    </div>)
}