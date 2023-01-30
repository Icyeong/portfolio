import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import Github from '../../assets/image/icon-github.png';
import { projects, selected_project } from '../../atoms';

const DisplayBoard = () => {
   const selected_id = useRecoilValue(selected_project);
   const project = useRecoilValue(projects).filter(project => project.id === selected_id)[0];

   return (
      <Wrapper>
         <section>
            <div className="imgBox">
               <img src={project.imgUrl} alt="" />
            </div>
            <div className="inner-container">
               <div className="title">
                  {project.title}
                  <span>{project.subTitle}</span>
               </div>

               <p className="project-brief">{project.brief}</p>

               <ul className="content">
                  작업 사항
                  {project.content.map((data, idx) => (
                     <li key={idx}>{data}</li>
                  ))}
               </ul>
               <ul className="stacks">
                  {project.stacks.map((data, idx) => (
                     <li key={idx}>{data}</li>
                  ))}
               </ul>
               <div className="linkBtns">
                  <a className="github" href={project.githubLink} target="_blank" rel="noreferrer">
                     <img src={Github} alt="깃헙 링크" /> 깃허브
                  </a>
                  {project.deployLink && (
                     <a href={project.deployLink} target="_blank" rel="noreferrer">
                        배포 사이트
                     </a>
                  )}
                  {project.figma && (
                     <a href={project.figma} target="_blank" rel="noreferrer">
                        Figma
                     </a>
                  )}
               </div>
            </div>
         </section>
      </Wrapper>
   );
};

const Wrapper = styled.div`
   width: 60%;
   min-height: 100vh;
   display: flex;
   align-items: center;
   justify-content: center;
   section {
      width: 90%;
      height: 85vh;
      background-color: #2b2c2a;
      padding: 50px 70px;
      border-radius: 25px;
      box-shadow: inset 0px 0px 20px #000000;
      display: flex;
      flex-direction: column;
      &:hover .imgBox > img {
         transform: scale(1.01);
      }
      &:hover .imgBox::after {
         background: rgba(0, 0, 0, 0.1);
      }
   }
   .imgBox {
      width: 100%;
      height: 200px;
      background-color: lightgray;
      border-radius: 10px;
      margin-bottom: 45px;
      overflow: hidden;
      position: relative;
      img {
         width: 100%;
         display: flex;
         align-items: center;
         transition: 0.3s;
      }
      &::after {
         width: 100%;
         height: 100%;
         content: '';
         position: absolute;
         top: 0;
         left: 0;
         background: rgba(0, 0, 0, 0.4);
         transition: 0.3s;
      }
   }
   .inner-container {
      flex: 1;
      overflow-y: scroll;
   }
   .inner-container::-webkit-scrollbar {
      width: 10px;
      background: #2b2c2a;
   }
   .inner-container::-webkit-scrollbar-thumb {
      background: rgba(29, 29, 29, 1);
      border-radius: 30px;
   }
   .title {
      font-size: 1.8rem;
      font-weight: 700;
      margin-bottom: 15px;
      display: flex;
      flex-direction: column;
      color: #b8e829;
      span {
         font-size: 1.2rem;
         margin-top: 5px;
         font-weight: 600;
         color: white;
      }
   }
   p {
      font-size: 1.05rem;
      font-weight: 400;
      margin-bottom: 50px;
      margin-top: 30px;
      color: #d5d5d5;
   }
   .content {
      margin-bottom: 50px;
      font-size: 1.2rem;
      font-weight: 600;
      li {
         margin-left: 28px;
         font-size: 1.05rem;
         font-weight: 400;
         list-style: disc;
         padding: 6px 5px;
         color: #d5d5d5;
      }
   }
   .stacks {
      display: flex;
      margin-bottom: 20px;
      li {
         font-size: 1.1rem;
         font-weight: 700;
         padding: 0 10px;
         border-right: 1px solid white;
         color: #b6b6b6;
         cursor: default;
         &:last-child {
            border-right: none;
         }
      }
   }
   .linkBtns {
      display: flex;
   }
   a {
      font-size: 0.9rem;
      width: 100px;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #1d1d1d;
      color: white;
      border-radius: 2px;
      margin-right: 10px;
      margin-top: 40px;
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);
      transition: 0.2s;
      img {
         margin-right: 5px;
      }
      &:hover {
         color: #b8e829;
         transform: translateY(-3px);
      }
   }
`;

export default DisplayBoard;
