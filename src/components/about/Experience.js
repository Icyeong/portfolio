import { useRecoilValue } from 'recoil';
import { experience } from '../../atoms';
import CreateExperience from './CreateExperience';

const Experience = () => {
   const experience_data = useRecoilValue(experience);

   return (
      <li className="experience-container">
         {experience_data.map((data, idx) => (
            <CreateExperience data={data} key={idx} />
         ))}
      </li>
   );
};

export default Experience;
