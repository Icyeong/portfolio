import { useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Navbar = () => {
   const ulRef = useRef();
   const [isStretched, setStretchState] = useState(false);
   return (
      <NavWrapper>
         <ul ref={ulRef} className={isStretched ? 'stretch' : null}>
            <li>
               <NavLink to="/" active="active" onClick={() => setStretchState(false)}>
                  Icyeong
               </NavLink>
            </li>
            <li>
               <NavLink to="/about" active="active" onClick={() => setStretchState(true)}>
                  About
               </NavLink>
            </li>
            <li>
               <NavLink to="/work" active="active" onClick={() => setStretchState(true)}>
                  Work
               </NavLink>
            </li>
            <li>
               <NavLink to="/contact" active="active" onClick={() => setStretchState(true)}>
                  Contact
               </NavLink>
            </li>
         </ul>
      </NavWrapper>
   );
};

const NavWrapper = styled.div`
   position: fixed;
   top: 0;
   left: 0;
   z-index: 15;
   width: 130px;
   height: 100vh;
   display: flex;
   align-items: center;
   ul {
      width: 100%;
      height: 210px;
      background-color: #161616;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 15px 0;
      transition: 0.3s;
      &.stretch {
         height: 100%;
      }
   }
   a {
      display: block;
      border-top: 1px solid #1d1d1d;
      padding: 12px;
      text-align: center;
      cursor: pointer;
      &last-child {
         border-bottom: 1px solid #1d1d1d;
      }
      color: #969696;
      font-size: 15px;
      font-weight: 600;
      text-align: center;
      border-left: 2px solid transparent;
      transition: 0.3s;
   }
   a.active {
      border-left: 2px solid #b8e829;
      color: white;
      padding-left: 18px;
   }
`;

export default Navbar;
