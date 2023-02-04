import styled from 'styled-components';

const CoverBg = () => {
   return (
      <Wrapper>
         <div className="alphabet alphabet_1">Y</div>
         <div className="alphabet alphabet_2">E</div>
         <div className="alphabet alphabet_3">N</div>
         <div className="alphabet alphabet_4">O</div>
         <div className="alphabet alphabet_5">G</div>
         <div className="alphabet alphabet_6">E</div>
         <div className="alphabet alphabet_7">N</div>
         <div className="alphabet alphabet_8">G</div>
         <div className="alphabet alphabet_9">O</div>
      </Wrapper>
   );
};

const Wrapper = styled.div`
   width: 100%;
   height: 100%;
   position: absolute;
   top: 0;
   left: 0;
   user-select: none;
   .alphabet {
      font-size: 5vw;
      font-weight: 900;
      position: absolute;
      top: 0;
      left: 0;
      animation: movement 1s infinite alternate;
   }
   .alphabet_1 {
      color: #313131;
      left: 10vw;
      top: 5vh;
      animation-delay: 0.5s;
   }
   .alphabet_2 {
      color: #313131;
      left: 16vw;
      top: 40vh;
      animation-delay: 0.2s;
   }
   .alphabet_3 {
      color: black;
      left: 12vw;
      top: 70vh;
      animation-delay: 0.5s;
   }
   .alphabet_4 {
      color: black;
      left: 30vw;
      top: 15vh;
      animation-delay: 0.9s;
   }
   .alphabet_5 {
      color: #313131;
      left: 45vw;
      top: 75vh;
      animation-delay: 0.6s;
   }
   .alphabet_6 {
      color: #313131;
      left: 57vw;
      top: 12vh;
      animation-delay: 0.8s;
   }
   .alphabet_7 {
      color: black;
      left: 80vw;
      top: 17vh;
   }
   .alphabet_8 {
      color: #313131;
      left: 85vw;
      top: 50vh;
      animation-delay: 0.7s;
   }
   .alphabet_9 {
      color: black;
      left: 72vw;
      top: 72vh;
   }

   @keyframes movement {
      from {
         transform: scale(0.8);
      }
      to {
         transform: scale(1.2);
      }
   }
`;

export default CoverBg;
