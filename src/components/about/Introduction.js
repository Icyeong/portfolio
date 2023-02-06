import styled from 'styled-components';
import Github from '../../assets/image/icon-github.png';
import Instagram from '../../assets/image/icon-instagram.png';

const Introduction = () => {
   return (
      <Wrapper>
         <div className="txt-container">
            <div className="greeting" data-aos="fade-up" data-aos-duration="500">
               Hello,
            </div>
            <h4 data-aos="fade-up" data-aos-delay="50" data-aos-duration="500">
               프론트엔드 개발자 임채영입니다.
            </h4>
            <div data-aos="fade-up" data-aos-delay="100" data-aos-duration="500">
               <p>
                  <span>구일신 일일신 우일신</span> 나날이 새롭게 하고, 또 날로 새롭게 하라. 어제보다는 더 성장한
                  개발자로, 내일은 오늘보다 더 좋은 코드를 짤 수 있도록 항상 진보하는 개발자가 되고자 합니다.
               </p>
               <p>
                  더 나은 UI, UX가 무엇인지 고민해보고 개선하는 것을 좋아하며, <span>매력적인 웹사이트</span> 개발에
                  관심이 많습니다.
               </p>
               <p>
                  아이디어로 새로운 시도를 해보고 응용하여 새로운 것을 제작하는 것을 좋아합니다. 또 애니메이션과 3D에도
                  관심이 많아 꾸준히 다른 사이트의 트렌드를 확인해보며 공부하고 있습니다.
               </p>
               <p>
                  기능과 심미적인 부분 모두 <span>조화를 이룰 수 있는</span> 웹을 제작하고, 팀원들과 조화롭게 어울릴 수
                  있는 팀원이 되고자 합니다.
               </p>
               <p>읽어주셔서 감사합니다.</p>
               <ul className="link-items">
                  <li>
                     <a href="https://github.com/Icyeong?tab=repositories" target="_blank" rel="noreferrer">
                        <img src={Github} alt="github" />
                     </a>
                  </li>
                  <li>
                     <a href="https://www.instagram.com/icy_yeong" target="_blank" rel="noreferrer">
                        <img src={Instagram} alt="instagram" />
                     </a>
                  </li>
               </ul>
            </div>
         </div>
      </Wrapper>
   );
};

const Wrapper = styled.section`
   height: 100vh;
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   justify-content: center;
   margin: 0 120px;
   .txt-container {
      width: 500px;
      h4 {
         font-size: 1.35rem;
         font-weight: 700;
         margin-bottom: 40px;
         position: relative;
         &::after {
            content: '프론트엔드 개발자 임채영입니다.';
            position: absolute;
            bottom: -100%;
            left: 0;
            transform: rotateX(180deg);
            background: linear-gradient(
               180deg,
               rgba(255, 255, 255, 0) 18.75%,
               rgba(255, 255, 255, 0.04) 60.94%,
               rgba(255, 255, 255, 0.27) 100%
            );
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
         }
      }
      p {
         color: #c1c1c1;
         font-size: 1.05rem;
         word-break: keep-all;
         line-height: 24px;
         margin-bottom: 20px;
         span {
            color: #b8e829;
            font-weight: 700;
         }
      }
   }
   .greeting {
      font-size: 3.75rem;
      font-weight: 700;
      color: #b8e829;
      margin-bottom: 4.5rem;
      position: relative;
      &::after {
         content: 'Hello,';
         position: absolute;
         bottom: -100%;
         left: 0;
         transform: rotateX(180deg);
         background: linear-gradient(
            180deg,
            rgba(255, 255, 255, 0) 36.98%,
            rgba(255, 255, 255, 0.05) 63.54%,
            rgba(255, 255, 255, 0.29) 100%
         );
         -webkit-background-clip: text;
         -webkit-text-fill-color: transparent;
         background-clip: text;
      }
   }
   .link-items {
      display: flex;
      li {
         transition: 0.2s;
         margin-right: 15px;
         &:last-child {
            transform: translateY(1px);
         }
         &:hover {
            transform: translateY(-2px);
         }
      }
   }

   @media screen and (max-width: 1750px) {
      margin: 0 3vw;
   }
   @media screen and (max-width: 1600px) {
      .txt-container {
         width: 35vw;
      }
   }
`;

export default Introduction;
