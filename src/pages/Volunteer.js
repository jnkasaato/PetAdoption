import React from 'react';
import curtainWhite from '../images/curtain-white.png'; 
import curtainBeige from '../images/curtain-beige.png'; 
import volunteer1 from '../images/volunteer1.png'; 
import volunteer2 from '../images/volunteer2.png'; 
import volunteer3 from '../images/volunteer3.png'; 
import volunteer4 from '../images/volunteer4.png'; 
import volunteer5 from '../images/volunteer5.png'; 

const Volunteer = () => {
  return (
    <div>
      <div id="top"></div>
      <div style={{ position: 'relative' }}>
        <img src={volunteer1} alt="ourstory 1"className="intro-photo"/>
        <img src={curtainWhite} alt="curtain-white" className="bottom-curtain-up" />
        <img src={curtainWhite} alt="curtain-white" className="top-curtain-down" />
      </div>
      <div className="letter">
        <h1> Make a Difference</h1>
        <h2>Become a Foster Home </h2>
        <p>Becoming a foster home for a cat or dog is a truly rewarding experience that can change lives. By opening your heart and home to these furry companions, you play a crucial role in their journey to finding their forever homes. Fostering provides a safe and loving environment for animals in transition, whether they've been rescued from shelters or are recovering from medical issues. It's an opportunity to make a direct impact on their well-being, nurturing them back to health, building their confidence, and helping them learn trust again.<br/><br/>As a foster parent, you'll witness incredible transformations, from timidness to tail-wagging enthusiasm, from uncertainty to playful curiosity. You'll provide vital socialization, teaching valuable life skills that make them more adoptable. Fostering is also a chance to learn about different breeds, personalities, and the unique needs of each animal, making you a better advocate for them. <br/><br/>Foster homes offer a bridge from their past to their future, showing them love, patience, and the joy of being part of a family. You'll experience the joy of seeing them blossom, knowing you've been instrumental in their second chance at a happy life. The time and effort you invest will have a lasting impact not only on the animals you care for but also on the families who will adopt them, forever grateful for the strong foundation you've provided.<br/><br/> By becoming a foster home, you join a compassionate community dedicated to making a difference, giving these animals the love and care they deserve. It's a journey of compassion, hope, and love—a journey that truly enriches your life as much as it does theirs. Whether you're a seasoned pet owner or new to the world of animal care, fostering is an opportunity to make an immeasurable impact on these innocent lives, turning a temporary commitment into a lifetime of friendship and memories. Join us in the noble mission of fostering, and together, we can change the lives of countless animals, one loving home at a time.</p>
      </div>
      <div className = 'volunteer__intro'>
        <h1>Kindess is Triumphant</h1>
        <h2>Fostering a pet is not just a temporary commitment; it's an act of kindness that forever changes their story, turning challenges into triumphs and creating a bond that transforms both their life and yours.</h2>
      </div>
      
      <div className= 'double-blue'>       
        <div className= 'home__img2'>
          <img src= {volunteer2} alt = 'home 2' style={{ width: '500px', height:'500px', display: 'block', objectFit: 'cover', overflow: 'hidden' }}/>
        </div> 
        <div className= 'home__text2'>
          <h2>Join our team</h2>
          <p>
            Join our team and become part of a rewarding journey where you can make a meaningful difference in the lives of our furry friends. We're excited to welcome you to our compassionate community, where every act of kindness has a lasting impact. <br/><br/>Our adoptable cats find their temporary home at the PetSmart adoption center in Cambridge, and we're looking for dedicated volunteers like you to create a haven of care and comfort for them.
          </p>
        </div>
      </div>
      
      <div className= 'double-beige'>
        <div className= 'home__text3'>
          <h2> Cat Care </h2>
          <p>
            As a volunteer, you'll be a vital part of our team, ensuring our feline companions have fresh food and water, clean spaces to relax, and engaging playtime that brings joy to their day. <br/><br/>We offer flexible opportunities, both during the day and in the evenings, making it convenient for you to lend a helping hand. Please note that all volunteers in the PetSmart Adoption centers must be 18 years or older, ensuring a safe and responsible environment for our beloved cats.
          </p>
        </div>
        <div className= 'home__img3'>
          <img src= {volunteer3} alt = 'home 3' style={{ width: '500px', height:'500px', display: 'block', objectFit: 'cover', overflow: 'hidden' }}/>
        </div> 
      </div>
      
      <div className= 'double-blue'>       
        <div className= 'home__img2'>
          <img src= {volunteer4} alt = 'home 2' style={{ width: '500px', height:'700px', display: 'block', objectFit: 'cover', overflow: 'hidden' }}/>
        </div> 
        <div className= 'home__text2'>
          <h2>Pet Transport</h2>
          <p>
            Do you have a passion for helping animals and want to make a direct impact on their well-being? We're seeking compassionate individuals to join our pet transport team, an essential role that ensures our furry friends receive the care they need. As a pet transport volunteer, you become a lifeline for these animals, facilitating their journeys to and from the veterinary clinic for spay and neuter procedures. <br/><br/>Your role as a pet transport volunteer extends beyond driving – it's about being a part of a crucial step in their path to a healthier and happier life. You'll provide comfort during their trips, helping to alleviate any stress they might feel. Your presence ensures they arrive safely, receive the necessary medical attention, and return to our shelter with the love and care they deserve.
          </p>
        </div>
      </div>
      
      <div className= 'double-beige'>
        <div className= 'home__text3'>
          <h2> Photography</h2>
          <p>
            Are you a photography enthusiast with a keen eye for capturing the heart and soul of our furry friends? Your passion and skills can make a monumental difference in our efforts to find loving homes for our adoptable animals. High-quality, professional-looking photos are an invaluable tool in showcasing the personality and charm of each pet, helping them stand out and catch the eye of potential adopters.<br/><br/>As a volunteer photographer, you become an essential storyteller, capturing the unique qualities that make each pet special. Your images are more than just pictures; they're windows into the vibrant personalities, the innocence, and the promise of a wonderful life that these animals hold.
          </p>
        </div>
        <div className= 'home__img3'>
          <img src= {volunteer5} alt = 'home 3' style={{ width: '500px', height:'600px', display: 'block', objectFit: 'cover', overflow: 'hidden' }}/>
        </div> 
      </div>
    </div>
  );
};

export default Volunteer;