import { useEffect, useState, useTransition } from "react";
import { useParams } from "react-router-dom";
 
import { getCountryIndivisualData } from "../../api/axiosapi";

function CountryDetails() {

    const param = useParams();

    const [isPending, startTransition] = useTransition();
    const [country, setCountry] = useState([]);
    
        useEffect(()=>{
            startTransition(async()=>{
               const res = await getCountryIndivisualData(param.id);
               setCountry(res.data[0]);
            });
        },[]);
    
        if(isPending){
               return(
                <div className="container loader-container">
                    <div className="loader"></div>
                </div>
               )   
            
            }
            
            console.log(country);
        const{name,capital,languages,currencies,region,continents,population,flags,area,timezones} = country;
        // console.log(Object.keys(country.name.nativeName))
    
    return (
            <section className="container country-detail">
                <div className="card-container">
                    <div className="card-details card grid grid-two-cols">
                        <div className="country-img">
                            <img src={flags?.png} alt="flag" />
                        </div>
                        <div>
                        <div className="card-name">
                            <h1>{name?.common || "undefined"}</h1>
                        </div>    
                        <div className="discription">
                            <p>
                                <span>Official Name :</span> {name?.official}
                            </p>
                            <p>
                                <span>Capital :</span>{capital}
                            </p>
    
                            <p>
                                <span>Languages :</span>{languages?.eng}
                            </p>
    
                            {/* <p>
                                <span>Currencies :</span> [currencies?.{0}?.name] [{currencies?.SHP?.symbol}]
                            </p> */}
                            <p>
                                <span>Region :</span>{region}
                            </p>
    
                            <p>
                                <span>Continents :</span> {continents}
                            </p>
                            <p>
                                <span>Timezones :</span> {timezones}
                            </p>
                            <p>
                                <span>Continents :</span> {continents}
                            </p>
                            <p>
                                <span>Area :</span> {area}
                            </p>
                            <p>
                                <span>Population :</span> {population}
                            </p>
                        </div>
                        </div>
                    </div>
                </div>
            </section>
    );
}

export default CountryDetails;