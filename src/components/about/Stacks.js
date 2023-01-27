import { useRecoilValue } from 'recoil';
import { stacks } from '../../atoms';
import CreateStack from './CreateStack';

const Stacks = () => {
   const my_stacks = useRecoilValue(stacks);
   return (
      <li className="stack-container">
         <div className="grid">
            {my_stacks.map((data, idx) => (
               <CreateStack data={data} key={idx} />
            ))}
         </div>
      </li>
   );
};

export default Stacks;
