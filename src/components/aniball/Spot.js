import styled from 'styled-components';

const Spotlight = () => {
   return (
      <Wrapper>
         <div className="spot"></div>
         <div className="spotlight"></div>
      </Wrapper>
   );
};

const Wrapper = styled.div`
   width: 100%;
   height: fit-content;
   position: relative;
   .spot {
      width: 150%;
      height: 50px;
      background-color: #2e2e2e;
      border-radius: 10px;
      box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.15);
      transform: translate(-17%, -5px);
      position: relative;
      z-index: 1;
   }
   .spotlight {
      width: 200px;
      height: 200px;
      content: '';
      position: absolute;
      bottom: 30%;
      left: -50%;
      background: rgba(255, 255, 255, 0.19);
      filter: blur(17px);
      border-radius: 50%;
      z-index: 0;
   }
`;
export default Spotlight;
