const CreateExperience = ({ data }) => {
   return (
      <ul>
         <li>
            <div className="period">{data.period}</div>
            <div>
               <p className="title">{data.title}</p>
               <div className="detail">
                  {data.detail.map((list, idx) => (
                     <p key={idx}>{list}</p>
                  ))}
               </div>
            </div>
         </li>
      </ul>
   );
};

export default CreateExperience;
