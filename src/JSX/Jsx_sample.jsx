// Day 1==>1. What is React
//         2. Components
//         3. packages
//         4. node_moules
//         5. diff bw normal fun and react component
//         6.default export and named export
//         7.What is Jsx


function Jsx(){
    let Name="chandu";
    function operation(a,b,op){
        if(op=='+'){
            return a+b;
        }
        else if(op=='-'){
            return a-b;
        }
        else if(op=='*'){
            return a*b;
        }
        else{
            alert("Please enter operation in bw(+,-,*)");
        }
    }
    const Obj={
        Name:"VINUKOLLU CHANDRASHEKAR",
        Occupation:"Student",
    }
    let path="https://www.freepik.com/free-ai-image/portrait-elegant-professional-businessman_81390839.htm#fromView=search&page=1&position=24&uuid=07a38162-f2b0-4d4c-9c5b-0cda60f1cf50&query=user";
    return(
        <div>
            <img src={path} alt="Sorry" />
            <ol>
                <li>Name: VINUKOLLU CHANDRASHEKAR</li>
                <li>Roll: 22VE1A66C8</li>
                <li>Branch: AI&ML</li>
            </ol>
            <h1>{operation(10,20,'+')}</h1>
            <h2>{Name}</h2>
            <h2>{Obj.Occupation}</h2>
            
        </div>
    )
}
export default Jsx;