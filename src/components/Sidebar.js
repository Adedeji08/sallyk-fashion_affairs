/**
    * @description      : 
    * @author           : 
    * @group            : 
    * @created          : 19/05/2022 - 09:07:11
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 19/05/2022
    * - Author          : 
    * - Modification    : 
**/
import React from 'react'
import { useGlobalContext } from '../Context'
import {GrClose} from 'react-icons/gr'
import { Link } from 'react-router-dom';

export const Sidebar = () => {
    const {
		isSidebarOpen, 
		closeSideBar, 
		closeLightbox,
	} = useGlobalContext();

	const handleOnclick = () => {
		closeSideBar();
		closeLightbox();
	}
  return (
    <div>
     <div className={`${isSidebarOpen? 'side show-side' :'side'}`}>
			<GrClose className="close" onClick={handleOnclick}/>
			<ul className="side-links">
				<li> Collections</li>
				<li> Men</li>
				<li> Women</li>
				<li> About</li>
			</ul> 
      <ul type="none" className="user-links">
        <li className="auth-link"><Link className="auth-links" to="/signin">Sign In</Link></li><br/>
        <li className="auth-link"><Link className="auth-links" to="/signup">Sign Up</Link></li>
      </ul>
		</div>
    </div>
  )
}
