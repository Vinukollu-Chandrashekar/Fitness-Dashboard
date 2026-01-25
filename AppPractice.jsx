
import { useRef, useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header,{SubHeader} from './Practice/Header'
import Sample from '../src/Sample'
import Jsx from './src/JSX/Jsx_sample'
import Button from './Practice/Day2'
import { Button2 } from './Practice/Day2'
import States,{StateExample,Toggle,Multiple} from './Practice/Day3'
import Props,{Obj,Arrays, Btn, DefaultProps, JsxProps} from './Practice/Day4'
import Input, { Checkboxes, ControlledComponents } from './Practice/Day5'
import Radio,{Table}from './Practice/Day6'
import ReuseComponent , {UseEffect,Clock,DropDown} from './Practice/Day7'
import Adduser from './Practice/Adduser'
import NestedLooping from './Practice/Day8'
import PropsUseeffect from './Practice/Day9'
import Mounting from './Practice/Day10'
import DynamicStyling from './Practice/Day11'
import External from './Practice/Day12'
import ModuleCss, { StyledComponents } from './Practice/Day13'
import Bootstraping,{UseRef,Own} from './Practice/Day14';
import Uncontrolled from './Practice/Day15';
import Test from './Practice/Day15_part2';
import PassFun, { ForwardRef } from './Practice/Day16';
import UseForm from './Practice/Day17';
import Manual, { Auto } from './Practice/Day17_test';
import Transition,{TransitionHook} from './Practice/Day18';
import Derived from './Practice/Day19';
import OwnCode from '../src/OwnReact';
import LiftingStateUp, { UpdateArray, UpdatingObjects, UseActionStateHook } from './Practice/Day20';
import UseId,{CustomHook} from './Practice/Day21';
import ContextAPI, { ReactRouter,Routing,HeaderRouting } from './Practice/Day22';
import FitnessDashboard from './src/Fitness-dashboard/Fitness_nav';
import "./Bootstrap.css";
import PageNotFound from './Practice/Day23';
import NestedRouting from './Practice/Day23';
import LayoutRoutes from './Practice/Day24'
import PrefixRouting from './Practice/Day25'
import OptionalSegment from './Practice/Day26'
import FdMain from './src/Fitness-dashboard/FD_Main'
function App() {
  const [Name,setName]=useState("PAVAN");
  let name="chandu";
  let age=21
  let id="22VE1A66C8";
  let Object={
    name:"siddu",
    age:22,
    id:"22VE1A6667",
    }
  let arr=['chandu','siddu','aryan','ajay'];



  // Day 16 related function 
  const Display=(name)=>{
    alert(name)
  }

  const inputRef = useRef(null);

  const HandleBtn =()=>{  
  inputRef.current.focus();
  inputRef.current.style.color="#a57272ff";
  inputRef.current.value='chandu'
  }
  return (
    <>
      {/* <h1>Welcome to react app</h1>
      <Header></Header>
      <SubHeader /> 
      <Sample></Sample>
      <Jsx></Jsx> */}
      {/* <Button></Button>
      <Button2 /> */}
      {/* <States />
      <StateExample />
      <Toggle />
      <Multiple /> */}

      {/* Day 4

      <Props name={name}age={age}id={id}/>
      <Obj student={Object}/>
      <Arrays arr={arr} />
      <Btn name={Name}/>
      <button onClick={()=>setName("chandu")}>Update</button>
      <DefaultProps Name="Aryan"/>
      <DefaultProps />
      <JsxProps />
      <JsxProps>
        <h2 style={{color:"blue",width:'250px',border:'2px solid black',margin:'65px'}}>Hi, dude</h2>
      </JsxProps>
        <JsxProps>
        <h2>Hi, dude</h2>
      </JsxProps> */}

      {/* <Input />
      <ControlledComponents />
      <Checkboxes /> */}

      {/* Day 6 */}
      {/* <Radio />
      <Table /> */}

      {/* Day 7 */}
      {/* <ReuseComponent /> */}
      {/* <Clock />
      <DropDown />
      <UseEffect /> */}
      {/* <Adduser /> */}
      {/* <NestedLooping /> */}
      {/* <PropsUseeffect /> */}

      {/* Day 10 */}
      {/* <Mounting /> */}
      
      {/* Day 11 */}
      {/* <DynamicStyling /> */}

      {/* Day12 */}
      {/* <External /> */}

      {/* {Day13} */}
      {/* <div style={{display:"flex",flexWrap:'wrap',gap:'10px'}}>
        <ModuleCss />
      <ModuleCss /><ModuleCss />
      <ModuleCss />
      <ModuleCss />
      <ModuleCss />
      <ModuleCss />
      <ModuleCss />
      <ModuleCss />
      <ModuleCss />
      </div>
      <br /><br />
      <StyledComponents />   */}

      {/* Day 14 */}
      {/* <h1 style={{ color: 'red' }}>APP IS RENDERING</h1>
      <Bootstraping />
      <UseRef />
      <Own /> */}

      {/* Day 15 */}
      {/* <Uncontrolled />
       */}
      {/* <Test /> */}

      {/* Day 16 */}
      {/* <h1>Passing function as props in component</h1>
      <PassFun display={Display} name='chandu'/><br />
      <PassFun display={Display} name='aryan'/><br />
      <PassFun display={Display} name='siddu'/>
      <br /><hr ></hr>
      
      <ForwardRef ref={inputRef} handle={HandleBtn}/>
      <br /> */}
      

      {/* Day 17 */}
      {/* <UseForm />
      <Manual />
      <Auto /> */}


      {/* Day18 */}
      {/* <Transition />
      <TransitionHook/> */}


      {/* Day19 */}
      {/* <Derived /> */}

      {/* <OwnCode /> */}
      


      {/* Day20 */}
      {/* <LiftingStateUp />
      <UpdatingObjects />
      <UpdateArray />
      <UseActionStateHook /> */}


      {/* Day21 */}
      {/* <UseId />
      <CustomHook /> */}

      {/* Day22 */}
      {/* <ContextAPI />
      <hr /><br /><br />
      <ReactRouter />
      {/* <Routing /> */}
      {/* <HeaderRouting /> */} 

      <FdMain />



      {/* Day 23 */}
      {/* <PageNotFound/> */}
      {/* <NestedRouting /> */}


      {/* Day24 */}
      {/* <LayoutRoutes/> */}

      {/* Day25 */}
      {/* <PrefixRouting/> */}

      {/* Day26 */}
      {/* <OptionalSegment/> */}

    </>
  )
}



