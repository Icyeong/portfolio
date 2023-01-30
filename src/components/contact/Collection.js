import styled from 'styled-components';
import Cat from '../aniball/Cat';
import Egg from '../aniball/Egg';
import Pig from '../aniball/Pig';
import Shark from '../aniball/Shark';

const Collection = () => {
   return (
      <Wrapper>
         <p>Aniball Collection</p>
         <ul className="container">
            <li>
               <div>
                  <Cat />
               </div>
            </li>
            <li>
               <div>
                  <Pig />
               </div>
            </li>
            <li>
               <div>
                  <Shark />
               </div>
            </li>
            <li>
               <div>
                  <Egg />
               </div>
            </li>
         </ul>
      </Wrapper>
   );
};

const Wrapper = styled.div`
   flex: 1;
   height: 100vh;
   display: flex;
   flex-direction: column;
   align-items: center;
   p {
      font-size: 1rem;
      font-weight: 700;
      margin: 25px auto;
   }
   ul {
      flex: 1;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-evenly;
   }
   li {
      width: 80%;
      max-width: 600px;
      height: 160px;
      display: flex;
      justify-content: flex-start;
      > div {
         width: 160px;
         height: 100%;
      }
      &:nth-child(even) {
         justify-content: flex-end;
      }
   }
`;

export default Collection;
