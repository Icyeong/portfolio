const CreateExperience = ({ data }) => {
   return (
      <ul>
         <li>
            <div className="period">{data.period}</div>
            <div>
               <p className="title">{data.title}</p>
               <p className="smallTitle">{data.smallTitle && data.smallTitle}</p>
               <div className="detail">
                  {data.detail && data.detail.map((list, idx) => <p key={idx}>{list}</p>)}

                  {data.certificate && (
                     <a href={data.certificate} target="_blank" rel="noreferrer">
                        [수료증]
                     </a>
                  )}
               </div>
            </div>
         </li>
      </ul>
   );
};

export default CreateExperience;
