    // Style with css module

    // .Why we need css module
    // .Make css module File
    // .Write module css
    // .Import css in component
    import styled from 'styled-components'
    import style from './Css/Day13.module.css'
    import mypic from './Mypic.png'
    export default function ModuleCss(){
        return(
            <><div className={style.Container}>
                <div className={style.main}>
                    <div>
                        <img src={mypic} className={style.img} alt="" />
                    </div>
                    <div className={style.text}>
                        <h4>CHANDU</h4>
                        <p>WEB DEVELOPER</p>
                    </div>
                </div>
            </div>
                
            </>
        )
    }

// Part 2

// Styled components

// .What is styled components
// .Install style component package
// .Import and apply styled component
// .Write style with styled component

export function StyledComponents(){
    const Btn=styled.button({
        backgroundColor:"red",
        color:'black',
        borderRadius:'10px',
        width:"100px",
        height:"35px",
        padding:"5px"
    })

    const BUTTON = styled.button`
    background-color: #ddddddc7;
    color: black;
    border-radius:10px;
    width: 100px;
    height: 30px;
    padding: 5px;`
    return(
        <>
            <Btn>Login</Btn>
            <BUTTON>User</BUTTON>
        </>
    )
}