const CreateStack = ({ data }) => {
   return (
      <div className="item">
         <div className="imgBox">
            <img src={data.src[data.srcName]} alt="" />
         </div>
         {data.stack}
      </div>
   );
};

export default CreateStack;
