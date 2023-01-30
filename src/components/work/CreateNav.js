import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { selected_project } from '../../atoms';

const CreateNav = ({ data }) => {
   const [projectId, setProjectId] = useRecoilState(selected_project);

   return (
      <Nav onClick={() => setProjectId(data.id)} className={projectId === data.id && 'active'}>
         <div>{data.id.toString().padStart(2, '0')}</div>
         <p>{data.navTitle}</p>
      </Nav>
   );
};

const Nav = styled.button`
   display: flex;
   align-items: center;
   padding: 14px 15px;
   div {
      font-weight: 700;
      font-size: 1.6rem;
      line-height: 36px;
      color: #929292;
      margin-right: 50px;
      transition: 0.3s;
   }
   p {
      font-size: 1.25rem;
      font-weight: 700;
      color: #929292;
      transition: 0.3s;
   }
   &.active div {
      transform: translateX(5px) scale(1.2);
      color: white;
      position: relative;
      transform-origin: left;
   }
   &.active p {
      transform: scale(1.2);
      transform-origin: left;
      color: white;
   }
   div::before {
      width: 3px;
      height: 0%;
      background: #e311f5;
      border-radius: 5px;
      content: '';
      position: absolute;
      top: 50%;
      left: -15px;
      transform: translateY(-50%);
      transition: 0.3s;
      opacity: 0;
   }
   &.active div::before {
      height: 100%;
      top: 0%;
      transform: translateY(0%);
      opacity: 1;
   }
`;

export default CreateNav;
