import { stack_dummyData } from '../../dummyData/stack';
import CreateStack from './CreateStack';

const Stacks = () => {
   return (
      <li className="stack-container">
         <div className="grid">
            {stack_dummyData.map((data, idx) => (
               <CreateStack data={data} key={idx} />
            ))}
         </div>
      </li>
   );
};

export default Stacks;
