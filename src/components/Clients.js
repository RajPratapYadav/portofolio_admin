import { useState } from "react"
import colors from "./Colors"
import { BasicInfo } from "./ClientForms"

export const Client=()=>{
    const [innerTab,setInnerTab]=useState(0)
    const selectedTabStyle={
        flex:1,
        alignItems:'center',
        textAlign:'center',
        paddingBottom:5,
        paddingTop:5,
        backgroundColor:colors.secondary,
        color:colors.white,
        
    }
    const unSelectedTabStyle={
        
        alignItems:'center',
        borderWidth:.5,
        paddingTop:5,
        
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
            <text onClick={()=>{setInnerTab(6)}} style={innerTab>=6?selectedTabStyle:unSelectedTabStyle}>Terms</text>
            <text onClick={()=>{setInnerTab(7)}} style={innerTab>=7?selectedTabStyle:unSelectedTabStyle}>Customers</text>
            <text onClick={()=>{setInnerTab(8)}} style={innerTab>=8?selectedTabStyle:unSelectedTabStyle}>About Us</text>
            <text onClick={()=>{setInnerTab(9)}} style={innerTab>=9?selectedTabStyle:unSelectedTabStyle}>Contact Us</text>
 
        </div>
        {innerTab==0&&<BasicInfo
        setTab={setTabValue}/>}

    </div>)
}