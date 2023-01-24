import { experience_dummyData } from '../../dummyData/experience';
import CreateExperience from './CreateExperience';

const Experience = () => {
   return (
      <li className="experience-container">
         {experience_dummyData.map((data, idx) => (
            <CreateExperience data={data} key={idx} />
         ))}
      </li>
   );
};

export default Experience;
