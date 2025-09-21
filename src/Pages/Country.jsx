// import CountrieCard from "../Component/Ui/CountrieCard"
import { useEffect, useState, useTransition } from "react"
import { NavLink } from "react-router-dom";

import { getCountryData } from "../api/axiosapi";

import { FaLongArrowAltRight } from "react-icons/fa";

export const Country= ()=>{
     const [countris, setCountry] = useState([]);
     const [isPending, startTransition] = useTransition();
     const [search, setSearch] = useState("");
    
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
            
            const searchData = search?countris.filter((curr)=>
                    curr.name?.common?.toLowerCase().includes(search.toLowerCase())
                ):countris;

                console.log(searchData)
            

            const sortByPopulation = async(order) => {
                try {
                    const res = await getCountryData();
                    if(order === "asc"){
                    const sortedData = res.data.sort((a, b) => a.name.common.localeCompare(b.name.common));
                    setCountry(sortedData);
                    }
                    else{
                        const sortedData = res.data.sort((a, b) => b.name.common.localeCompare(a.name.common));
                    setCountry(sortedData);
                    }
                } catch (error) {
                    console.error("Error fetching country data:", error);
                }
            };
        

    return(
        <section className="section-about container">
                <div className="country-top grid grid-four-cols">

                    <input type="text" 
                        placeholder="Search Country"
                        name="Country"
                        value={search}
                        onChange={(e)=>setSearch(e.target.value)}
                        className="searchCountry" />

                    <button onClick={()=>sortByPopulation("asc")}>Asen</button>
                    <button onClick={()=>sortByPopulation("dsc")}>Dec</button>
                    
                    <select name="Filter">
                        <option>All</option>
                        <option>Continents</option>
                        <option>area</option>

                    </select>
                </div>

            <section className="card-container grid grid-four-cols">
            
            {searchData.map((curr,id)=>{
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
            </section>
        </section>
    )
}