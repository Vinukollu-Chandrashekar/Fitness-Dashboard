// Dynamic and conditional inline style

// .Make buttons for dynamic style
// .Use state for style object
// .Update style on button click
// .Apply style conditional
import { useState } from 'react';
import mypic from './Mypic.png';
export default function DynamicStyling() {
    const [stylecard, setStyleCard] = useState({
        width: "300px",
        borderRadius: "15px",
        border: "2px solid #edededff",
    })

    const [btn, setbtn] = useState(true);
    const handleByclick = (bgcolor, textcolor) => {
        setStyleCard({ ...stylecard, backgroundColor: bgcolor, color: textcolor });
    
    }
    return (
        <>
            <h2>Dynamic Styling Concept</h2>
            <button onClick={() => handleByclick("#8c8f87ad", "#003b46ff")}>Gray color</button>
            <button onClick={() => handleByclick("white", "black")}>Default color</button>
            <button onClick={() => setbtn(!btn)}>Toggle</button>
            <div style={{display:"flex",flexWrap:"wrap",display: btn?"flex":"block" }}>
                <div style={stylecard}>
                    <img src={mypic} alt="sorry" style={{ width: "180px", borderRadius: "15px", padding: "10px" }} />
                    <div>
                        <h3>VINUKOLLU CHANDRASHEKAR</h3>
                        <h3>WEB DEVELOPER</h3>
                    </div>
                </div>

                <div style={stylecard}>
                    <img src={mypic} alt="sorry" style={{ width: "180px", borderRadius: "15px", padding: "10px" }} />
                    <div>
                        <h3>VINUKOLLU CHANDRASHEKAR</h3>
                        <h3>WEB DEVELOPER</h3>
                    </div>
                </div>

                <div style={stylecard}>
                    <img src={mypic} alt="sorry" style={{ width: "180px", borderRadius: "15px", padding: "10px" }} />
                    <div>
                        <h3>VINUKOLLU CHANDRASHEKAR</h3>
                        <h3>WEB DEVELOPER</h3>
                    </div>
                </div>

                <div style={stylecard}>
                    <img src={mypic} alt="sorry" style={{ width: "180px", borderRadius: "15px", padding: "10px" }} />
                    <div>
                        <h3>VINUKOLLU CHANDRASHEKAR</h3>
                        <h3>WEB DEVELOPER</h3>
                    </div>
                </div><div style={stylecard}>
                    <img src={mypic} alt="sorry" style={{ width: "180px", borderRadius: "15px", padding: "10px" }} />
                    <div>
                        <h3>VINUKOLLU CHANDRASHEKAR</h3>
                        <h3>WEB DEVELOPER</h3>
                    </div>
                </div><div style={stylecard}>
                    <img src={mypic} alt="sorry" style={{ width: "180px", borderRadius: "15px", padding: "10px" }} />
                    <div>
                        <h3>VINUKOLLU CHANDRASHEKAR</h3>
                        <h3>WEB DEVELOPER</h3>
                    </div>
                </div><div style={stylecard}>
                    <img src={mypic} alt="sorry" style={{ width: "180px", borderRadius: "15px", padding: "10px" }} />
                    <div>
                        <h3>VINUKOLLU CHANDRASHEKAR</h3>
                        <h3>WEB DEVELOPER</h3>
                    </div>
                </div><div style={stylecard}>
                    <img src={mypic} alt="sorry" style={{ width: "180px", borderRadius: "15px", padding: "10px" }} />
                    <div>
                        <h3>VINUKOLLU CHANDRASHEKAR</h3>
                        <h3>WEB DEVELOPER</h3>
                    </div>
                </div><div style={stylecard}>
                    <img src={mypic} alt="sorry" style={{ width: "180px", borderRadius: "15px", padding: "10px" }} />
                    <div>
                        <h3>VINUKOLLU CHANDRASHEKAR</h3>
                        <h3>WEB DEVELOPER</h3>
                    </div>
                </div><div style={stylecard}>
                    <img src={mypic} alt="sorry" style={{ width: "180px", borderRadius: "15px", padding: "10px" }} />
                    <div>
                        <h3>VINUKOLLU CHANDRASHEKAR</h3>
                        <h3>WEB DEVELOPER</h3>
                    </div>
                </div>
                <div style={stylecard}>
                    <img src={mypic} alt="sorry" style={{ width: "180px", borderRadius: "15px", padding: "10px" }} />
                    <div>
                        <h3>VINUKOLLU CHANDRASHEKAR</h3>
                        <h3>WEB DEVELOPER</h3>
                    </div>
                </div>
                <div style={stylecard}>
                    <img src={mypic} alt="sorry" style={{ width: "180px", borderRadius: "15px", padding: "10px" }} />
                    <div>
                        <h3>VINUKOLLU CHANDRASHEKAR</h3>
                        <h3>WEB DEVELOPER</h3>
                    </div>
                </div>



            </div>

        </>
    )
}