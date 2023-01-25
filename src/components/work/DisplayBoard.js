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
                  <span>{project.period}</span>
               </div>
               <p className="project-brief">{project.brief}</p>

               <ul className="content">
                  {project.content.map((data, idx) => (
                     <li key={idx}>{data}</li>
                  ))}
               </ul>
               <ul className="stacks">
                  {project.stacks.map((data, idx) => (
                     <li key={idx}>{data}</li>
                  ))}
               </ul>
               <a className="github" href={project.githubLink}>
                  <img src={Github} alt="깃헙 링크" />
               </a>
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
      padding: 50px;
      border-radius: 25px;
      box-shadow: inset 0px 0px 20px #000000;
      display: flex;
      flex-direction: column;
   }
   .imgBox {
      width: 100%;
      height: 200px;
      background-color: lightgray;
      border-radius: 10px;
      margin-bottom: 45px;
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
      font-size: 1.4rem;
      font-weight: 700;
      margin-bottom: 15px;
      span {
         font-size: 1rem;
         margin-left: 30px;
      }
   }
   p {
      font-size: 1.1rem;
      margin-bottom: 50px;
   }
   .content {
      padding-left: 25px;
      margin-bottom: 40px;
      li {
         font-size: 1rem;
         list-style: disc;
         padding: 6px 10px;
      }
   }
   .stacks {
      display: flex;
      li {
         font-size: 15px;
         padding: 0 10px;
         border-right: 1px solid white;

         &:last-child {
            border-right: none;
         }
      }
   }
   a {
      display: block;
      margin-top: 40px;
   }
`;

export default DisplayBoard;
