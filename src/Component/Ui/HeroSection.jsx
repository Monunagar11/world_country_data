import { FaLongArrowAltRight } from "react-icons/fa";

export const HeroSection = ()=>{

    return(
    <section className="hero-main">
            <div className="hero container grid grid-two-cols">
                <div className="hero-left">
                    <h1 className="hero-heading">Discover the World at 
                        <br />
                         Your Fingertips
                    </h1>
                    <p className="hero-para"> Get key facts about any country—population,
                        economy, geography, and more—all in one place.
                    </p>
                    <button>Explore <FaLongArrowAltRight /></button>
                </div>

                <div className="hero-banner">
                    <img className="banner" src="/Images/world.png" alt="world img" />
                </div>

            </div>

    </section>
    )
}