const CreateStack = ({ data }) => {
   return (
      <div className="item">
         <div className="imgBox">
            <img src={data.src} alt="" />
         </div>
         {data.stack}
      </div>
   );
};

export default CreateStack;
