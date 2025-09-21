import FooterApi from "../../api/FooterApi.json"

import { MdContacts } from "react-icons/md";
import { MdMarkEmailUnread } from "react-icons/md";
import { FaMapLocationDot } from "react-icons/fa6";

export const Footer= ()=>{

    const FooterIcon = {
        FaMapLocationDot:<FaMapLocationDot />,
        MdContacts: <MdContacts />,
        MdMarkEmailUnread:<MdMarkEmailUnread /> 
    }
    return(
       <>
       <footer className="container">
                <div className="footer-contact grid grid-three-cols">

                        {
                            FooterApi.map((curr,id)=>{
                                return <div className="footer-card">
                                <div className="footer-icon">
                                {FooterIcon[curr.icon]}
                                </div>
                                <div className="footer-contact-details">
                                <p>
                                    <span>{curr.title}</span>
                                    <br/>
                                    {curr.details}
                                </p>
                                </div>
                                </div>
                            })
                        }
                </div>
                <div className="footer-submenu grid">

                </div>
       </footer>
       </>
    )
}