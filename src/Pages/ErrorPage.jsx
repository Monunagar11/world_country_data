import { NavLink, useRouteError } from "react-router-dom"

export const ErrorPage = ()=>{
    const error = useRouteError();
    
    return <div>
        <h1>OOP's something went wrong</h1>
        {error && <p>{error.data}</p>}
        <NavLink to="/"><button>Go Back</button></NavLink>
        </div>
}