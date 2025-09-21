import Country from "../api/Country.json"

export const About= ()=>{
    return(
       <section className="section-about container">
            <h1 className="about-heading container">
                Discover Countries Like Never Before
            </h1>

            <section className="card-container grid grid-four-cols">
            {Country.map((curr,id)=>{
                const {countryName, capital, population, fact} = curr;
            return (
            <div className="card">
                <div className="card-name">
                    <h1>{countryName}</h1>
                </div>    
                <div className="discription">
                    <p>
                        <span>Capital :</span>{capital}
                    </p>

                    <p>
                        <span>Population :</span>{population}
                    </p>
                    <p>
                        <span>Fact :</span>{fact}
                    </p>

                </div>
                </div>
            
            )
    }
            )}
            </section>
        </section>

    )
}