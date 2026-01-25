
// Styling concepts in react:

// .inline
// .External
// .Module
// .Css style



import mypic from './Mypic.png';
import siddu from './siddu.png';
import aryan from './aryan.jpeg';
import ajay from './ajay.png';
import teja from './teja.png';
import  {useEffect}  from 'react';

export default function Styling(){
    
      useEffect(()=>{
        console.log("hello mounting");
    },[])
    
    useEffect(()=>{
        return ()=>{
            console.log("Unmounting");
        }
    },[])
    
    const style={border:'2px solid #cccccc57',
        width:"300px",
        padding:"20px",
        boxShadow:"2px 2px 2px #cccccc57",
        borderRadius:"20px"
    }
    return(
        <>
            <div style={{display:"flex",flexWrap:"wrap"}}>

                <div style={style}>
                    <img src={mypic} style={{ width:"300px"}}/>
                    <div>
                        <h3>VINUKOLLU CHANDRASHEKAR</h3>
                        <h4>WEB DEVELOPER</h4>
                    </div>
                </div>

                <div style={style}>
                    <img src={siddu} style={{ width:"300px"}}/>
                    <div>
                        <h3>AKULA SIDDHARTHA</h3>
                        <h4>WEB DEVELOPER</h4>
                    </div>
                </div>

                <div style={style}>
                    <img src={aryan} style={{ width:"300px",height:"300px", overflow:"hidden",objectFit:"cover"}}/>
                    <div>
                        <h3>KOIMAKANDI ARYAN</h3>
                        <h4>DATA ANALYST</h4>
                    </div>
                </div>

                <div style={style}>
                    <img src={ajay} style={{ width:"300px",}}/>
                    <div>
                        <h3>GUDISE AJAY MUDHIRAJ</h3>
                        <h4>RESEARCH SCIENTIST(ROBOTICS)</h4>
                    </div>
                </div>

                <div style={style}>
                    <img src={teja} style={{ width:"300px"}}/>
                    <div>
                        <h3>DASARI SRI VIGNA TEJA</h3>
                        <h4>SOFTWARE DEVELOPER</h4>
                    </div>
                </div>

            </div>
            
        </>
    )
}