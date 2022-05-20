/**
    * @description      : 
    * @author           : 
    * @group            : 
    * @created          : 17/05/2022 - 23:04:54
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 17/05/2022
    * - Author          : 
    * - Modification    : 
**/
import React from "react";
import { useGlobalContext } from "../Context";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineShoppingCart, } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";
import { Link } from 'react-router-dom';
//import  'bootstrap/dist/css/bootstrap.css'


function Navbar() {
  const { openSideBar, setShowCart, showCart } = useGlobalContext();

  const handleOnclick = () => {
    // openLightbox();
    openSideBar();
  };

  const handleCart = () => {
    setShowCart(!showCart);
  };
  return (
    <main>
    <nav>
      <GiHamburgerMenu className="burger" onClick={handleOnclick} />
     <Link to="/"> <img src="Sally-K/logo.png" alt="logo" className="logo" /></Link>
      <ul className="links">
      <li><Link className="auth-b" to="/">Collections</Link></li>
      </ul> 
      <form className='submitit'>
                            <FaSearch className='search' />
                            <input
                                type="text"
                                placeholder=" Search for a country..."
                                name="search"
                                id='link-text'
                                className='inputit'
                            />
                        </form>
                        &emsp;   &emsp;    &emsp;    &emsp;
                        <select
                                name='select'
                                className='filt'
                               // ref={regionRef}
                               // onChange={selectRegion}
                            >
                                <option value="" selected>Filter  by Need</option>
                                <option value="Africa" selected>Women's Wears </option>
                                <option value="America" selected>Men's Wears</option>
                                <option value="Asia">Wrist Watches</option>
                                <option value="Europe ">Sneakers </option>
                                <option value="Oceania">Heels</option>
                            </select>
      <div className="user">
        <AiOutlineShoppingCart className="cart" onClick={handleCart} />
        <span>Cart</span>
      </div>
      <ul type="none" className="user-li">
        <li className="auth-li"><Link className="auth-a" to="/signin">Sign In</Link></li>
        <li className="auth-li"><Link className="auth-a" to="/signup">Sign Up</Link></li>
      </ul>
    </nav>
    <section className="form-submit">
    <form className='submit-form'>
                            <FaSearch className='search' />
                            <input
                                type="text"
                                placeholder=" Search for a country..."
                                name="search"
                                id='link-text'
                                className='input-search'
                            />
                        </form>
                        <select
                                name='select'
                                className='filter'
                               // ref={regionRef}
                               // onChange={selectRegion}
                            >
                                <option value="" selected>Filter  by Need</option>
                                <option value="Africa" selected>Women's Wears </option>
                                <option value="America" selected>Men's Wears</option>
                                <option value="Asia">Wrist Watches</option>
                                <option value="Europe ">Sneakers </option>
                                <option value="Oceania">Heels</option>
                            </select>
                        </section>
    </main>
  );
}

export default Navbar;