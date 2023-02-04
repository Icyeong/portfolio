import styled from 'styled-components';
import Form from './Form';

const FormSection = () => {
   return (
      <Wrapper>
         <h1>Contact me!</h1>
         <p>
            궁금한 점이 있다면 아래의 폼을 통해,
            <br />
            혹은 이메일로 언제든 연락주세요.
         </p>
         <Form />
         <p className="email">Email : dbcjswjs@gmail.com</p>
      </Wrapper>
   );
};

const Wrapper = styled.div`
   width: 50%;
   height: 100vh;
   background-color: #2c2c2c;
   display: flex;
   flex-direction: column;
   align-items: center;
   h1 {
      font-size: 3.2rem;
      font-weight: 700;
      color: #b8e829;
      margin: 50px 0 20px;
   }
   h1 + p {
      font-size: 1rem;
      max-width: 500px;
      text-align: center;
      line-height: 23px;
      margin-bottom: 50px;
   }
   form {
      max-width: 700px;
      width: 80%;
      display: flex;
      flex-direction: column;
      align-items: center;
      div {
         width: 100%;
         display: flex;
         justify-content: space-between;
         margin-bottom: 15px;
      }
      input,
      textarea {
         background-color: #ececec;
         border-radius: 2px;
         color: #2c2c2c;
         font-size: 1rem;
         font-weight: 700;
         padding: 0 20px;
      }
      input {
         width: 49%;
         height: 50px;
         position: relative;
         transition: 0.3s;
         &.focus {
            border-left: 10px solid red;
         }
         &.unfocus {
            border-left: 0px solid red;
         }
      }
      textarea {
         padding: 20px;
         width: 100%;
         max-width: 100%;
         height: 250px;
         max-height: 250px;
         transition: 0.3s;
         &.focus {
            border-left: 10px solid red;
         }
      }
      input::placeholder,
      textarea::placeholder {
         color: #2c2c2c;
         font-weight: 700;
      }
      button {
         width: 190px;
         height: 50px;
         border-radius: 2px;
         border: 1px solid #b8e829;
         color: #b8e829;
         font-size: 1.3rem;
         font-weight: 700;
         letter-spacing: 1px;
         margin-top: 10vh;
         margin-bottom: 5vh;
         &:hover {
            background-color: #1d1d1d;
         }
      }
   }
`;

export default FormSection;
