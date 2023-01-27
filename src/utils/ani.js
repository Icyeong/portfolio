import gsap from 'gsap';
import { Power4 } from 'gsap/all';

const create_aniball = (faceButton, faceContainer) => {
   let containerCoords = faceButton;
   let mouseCoords = containerCoords.getBoundingClientRect();

   faceButton.addEventListener('mousemove', function (e) {
      const mouseX = e.pageX - containerCoords.offsetLeft;
      const mouseY = e.pageY - containerCoords.offsetTop;

      gsap.to(faceButton, {
         duration: 0.3,
         x: ((mouseX - mouseCoords.width / 2) / mouseCoords.width) * 50,
         y: ((mouseY - mouseCoords.height / 2) / mouseCoords.height) * 50,
         ease: Power4.easeOut
      });
   });

   faceButton.addEventListener('mousemove', function (e) {
      const mouseX = e.pageX - containerCoords.offsetLeft;
      const mouseY = e.pageY - containerCoords.offsetTop;

      gsap.to(faceContainer, {
         duration: 0.3,
         x: ((mouseX - mouseCoords.width / 2) / mouseCoords.width) * 15,
         y: ((mouseY - mouseCoords.height / 2) / mouseCoords.height) * 15,
         ease: Power4.easeOut
      });
   });

   faceButton.addEventListener('mouseenter', function () {
      gsap.to(faceButton, { duration: 0.3, scale: 0.975 });
   });

   faceButton.addEventListener('mouseleave', function () {
      gsap.to(faceButton, { duration: 0.3, x: 0, y: 0, scale: 1 });

      gsap.to(faceContainer, { duration: 0.3, x: 0, y: 0, scale: 1 });
   });
};

export default create_aniball;
