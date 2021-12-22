import React from 'react'
import {NavLink, useLocation} from "react-router-dom"
import {FaQuestionCircle, FaArrowCircleLeft} from "react-icons/fa"    
import "../../App.css"

const Main = ({navlink1, navlink2, display1, display2, display3, btname1, btname2, image, heading, heading2, note, list, back}) => {

   const location = useLocation();
   console.log(location.pathname);

    return (
            <>
            <div className='container'>
                <div className='main'>
                    
                    <div className='android_logo'>
                        <img src={image} alt='android'/>
                    </div>
                    <div className='content'>
                    <NavLink to={back}><FaArrowCircleLeft/></NavLink>
                        <h2>{heading}</h2>

                        <h4>{heading2}
                        <ul>
                            {list.length ?
                            list.map(listItem=>(
                                
                                        <li>{listItem}</li>
                                 
                                )) : null }
                            
                             </ul>                           
                        </h4>

                        <h4 className='blue'><FaQuestionCircle className='icon'/> {note}</h4>

                         <div className='buttons'>
                            <NavLink to={navlink1}><button className='Yes' style={{display:display1}}>{btname1}</button></NavLink>
                            <NavLink to={navlink2}><button className='No'  style={{display:display2}}>{btname2}</button></NavLink>
                        </div>
                        <NavLink to="/userInfo"><p style={{display:display3}}>Cick here to view the stored user infos</p></NavLink>
                    </div>
                </div>
            </div>
            </>
    )
}

export default Main
