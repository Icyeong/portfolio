import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Navbar = () => {
   return (
      <NavWrapper>
         <ul>
            <li>
               <NavLink to="/" active="active">
                  Icyeong
               </NavLink>
            </li>
            <li>
               <NavLink to="/about" active="active">
                  About
               </NavLink>
            </li>
            <li>
               <NavLink to="/work" active="active">
                  Work
               </NavLink>
            </li>
            <li>
               <NavLink to="/contact" active="active">
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
   z-index: 10;
   width: 130px;
   height: 100vh;
   display: flex;
   align-items: center;
   ul {
      width: 100%;
      height: fit-content;
      background-color: #161616;
      display: flex;
      flex-direction: column;
      padding: 15px 0;
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
