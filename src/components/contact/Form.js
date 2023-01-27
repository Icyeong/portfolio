import { init, send } from 'emailjs-com';
import { useEffect, useState } from 'react';

const Form = () => {
   const [name, setName] = useState('');
   const [email, setEmail] = useState('');
   const [message, setMessage] = useState('');
   const [nameCheck, setNameCheck] = useState(false);
   const [emailCheck, setEmailCheck] = useState(false);
   const [messageCheck, setMessageCheck] = useState(false);

   const handleSubmit = e => {
      e.preventDefault();

      setNameCheck(false);
      setEmailCheck(false);
      setMessageCheck(false);

      if (name.trim() === '') {
         setNameCheck(true);
      }
      if (email.trim() === '') {
         setEmailCheck(true);
      }
      if (message.trim() === '') {
         setMessageCheck(true);
      }
      if (name.trim() === '' || email.trim() === '' || message.trim() === '') return;

      send('service_ad8dciv', 'template_akn5rff', { name, email, message }).then(
         res => {
            if (res.status === 200) {
               alert('성공적으로 전송 되었습니다.');
               setName('');
               setEmail('');
               setMessage('');
            }
         },
         err => console.log(err.text)
      );
   };

   useEffect(() => {
      init('B7v2Dy4xEfZluscsT');
   }, []);

   return (
      <form>
         <div>
            <input
               type="text"
               name="name"
               placeholder="Name"
               className={nameCheck ? 'focus' : 'unfocus'}
               value={name}
               onChange={e => setName(e.target.value)}
            />
            <input
               type="email"
               name="email"
               placeholder="Email"
               className={emailCheck ? 'focus' : 'unfocus'}
               value={email}
               onChange={e => setEmail(e.target.value)}
            />
         </div>
         <textarea
            name="message"
            placeholder="Message"
            className={messageCheck ? 'focus' : 'unfocus'}
            value={message}
            onChange={e => setMessage(e.target.value)}></textarea>

         <button onClick={handleSubmit}>SEND</button>
      </form>
   );
};

export default Form;
