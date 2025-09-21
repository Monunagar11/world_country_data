import { useEffect, useState, useTransition } from "react"
import { NavLink } from "react-router-dom";

import { getCountryData } from "../../api/axiosapi";

import { FaLongArrowAltRight } from "react-icons/fa";

function CountrieCard() {

    const [countris, setCountry] = useState([]);
    const [isPending, startTransition] = useTransition();

    useEffect(()=>{
        startTransition(async()=>{
           const res = await getCountryData();
           setCountry(res.data);
             
        });
    },[]);

    if(isPending){
           return(
            <div className="container loader-container">
                <div className="loader"></div>

            </div>
           )   
        
        }

        // console.log(countris)

        const sortByPopulation = (order) => {
            setCountry([...countris].sort((a, b) => 
                order === "asc" ? a.population - b.population : b.population - a.population
            ));
        };
    

    return (
        <>
        {countris.map((curr,id)=>{
            const {name, capital,population, flags} = curr;
             return (
                 <div className="card">
                     <div className="country-img">
                         <img src={flags.png} alt="flag" />
                     </div>
                      <div className="card-name">
                         <h1>{name.common.length>10?name.common.slice(0,10)+"...":name.common}</h1>
                     </div>    
                     <div className="discription">
                         <p>
                             <span>Capital :</span>{capital}
                         </p>
 
                         <p>
                             <span>Population :</span>{population}
                         </p>
                     </div>
 
                     <NavLink to={`/country/${name.common}`}>
                     <button>
                         Read More <FaLongArrowAltRight />
                     </button>
                     </NavLink>
                 </div>
         
                 )
             }
         )}
    </>
    );
}

export default CountrieCard;