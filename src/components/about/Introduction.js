import styled from 'styled-components';
import Github from '../../assets/image/icon-github.png';
import Instagram from '../../assets/image/icon-instagram.png';

const Introduction = () => {
   return (
      <Wrapper>
         <div className="txt-container">
            <div className="greeting">Hello,</div>
            <h4>프론트엔드 개발자 임채영입니다.</h4>
            <p>
               대학생활에 다양한 프로젝트와 인턴십과정에서 다양한 <span>프로젝트</span>를 진행하였고, 이를 통해 웹 개발
               업무 프로세스에 전반적인 이해력을 습득하였습니다.
            </p>
            <p>
               개발하면서 제가 느낀 좋은 <span>IT 서비스</span>는 사용자의 입장에서 쓰기편한 서비스라 생각하고, 늘
               사용자의 관점을 고안하며 개발하고 있습니다.
            </p>
            <p>
               대학생활에 다양한 프로젝트와 인턴십과정에서 다양한 <span>프로젝트</span>를 진행하였고, 이를 통해 웹 개발
               업무 프로세스에 전반적인 이해력을 습득하였습니다.
            </p>
            <p>
               개발하면서 제가 느낀 좋은<span>IT 서비스</span>는 사용자의 입장에서 쓰기편한 서비스라 생각하고, 늘
               사용자의 관점을 고안하며 개발하고 있습니다.
            </p>
            <ul className="link-items">
               <li>
                  <a href="https://github.com/Icyeong?tab=repositories" target="_blank" rel="noreferrer">
                     <img src={Github} alt="github" />
                  </a>
               </li>
               <li>
                  <a href="https://github.com/Icyeong?tab=repositories" target="_blank" rel="noreferrer">
                     <img src={Instagram} alt="instagram" />
                  </a>
               </li>
            </ul>
         </div>
      </Wrapper>
   );
};

const Wrapper = styled.section`
   height: 100vh;
   display: flex;
   flex-direction: column;
   align-items: flex-start;
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
      margin-top: 100px;
      margin-bottom: 90px;
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
         margin-right: 15px;
         &:last-child {
            transform: translateY(2px);
         }
      }
   }
`;

export default Introduction;
