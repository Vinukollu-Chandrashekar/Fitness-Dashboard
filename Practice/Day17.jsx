// UseFormStatus Hook in react Js:

import { useFormStatus } from "react-dom";

// .What is useFormStatus
// .Example:
//     Make form
//     Handle submit form



export default function UseForm(){
    const handle=async()=>{
        await new Promise(res=>setTimeout(res,1000));
    };
    function CustomerForm(){
        const {pending}=useFormStatus();
        return(
            <>
                <input type="text" placeholder="Enter First Name" required />
                <br /><br />
                <input type="text" placeholder="Enter Last Name"required />
                <br /><br />
                <button disabled={pending}>{pending?'Submitting...':'Submit'}</button>
            </>
        );
    }
    return(
        <>
            <h2>UseFormStatus in react js: </h2>
            <form action={handle}>
                <CustomerForm />
            </form>
            <hr /><br /><br />
        </>
    );
}

