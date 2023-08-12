import React from 'react';
import adopt1 from '../images/adopt1.png'; 
import adopt2 from '../images/adopt2.png'; 
import curtainBeige from '../images/curtain-beige.png'; 
import curtainGrey from '../images/curtain-grey.png'; 
import curtainWhite from '../images/curtain-white.png'; 

const HowToAdopt = () => {
  return (
    <div className="how-to-adopt">
      <div id="top"></div>
      <div style={{ position: 'relative' }}>
        <img src={adopt1} alt="ourstory 1"className="intro-photo"/>
        <img src={curtainWhite} alt="curtain-white" className="bottom-curtain-up" />
        <img src={curtainWhite} alt="curtain-white" className="top-curtain-down" />
      </div>
      <div className="adopt__container">
        <div className="adopt__steps">
          <h2>Steps to Adoption</h2>
          <section>
            <h1>1. Explore Available Pets</h1>
            <p>
              Welcome to our vibrant community of furry companions, each with a unique story and an abundance of love to share. Whether you're searching for a playful puppy, a dignified senior, or a charismatic cat, you'll find a diverse selection of animals eager to become a part of your family. Our available pets come in all shapes, sizes, and personalities, ranging from the spirited and adventurous to the gentle and cuddly. Take your time browsing through their profiles, getting to know their individual quirks and delightful traits. Feel free to reach out to our dedicated team for guidance—whether you're seeking a running partner, a cozy lap companion, or a loyal friend for your children, we're here to help you find the perfect match. Join us on this exciting journey of discovering the ideal four-legged addition to your home, and open the door to a lifetime of happiness and cherished memories.
            </p>
          </section>
          <section>
            <h1>2. Meet and Greet</h1>
            <p>
              The "Meet and Greet" is a crucial step in the adoption process, providing a wonderful opportunity for you and your potential furry companion to connect on a personal level. During this special interaction, you'll have the chance to observe the pet's unique personality, their demeanor, and their response to your presence. It's a time to establish that heartwarming connection that goes beyond a mere online profile. Our experienced staff will be there to guide you through the process, ensuring that both you and the pet feel comfortable and safe. You'll be able to ask questions, engage in play, and see how well you bond with your potential new family member. This step is not just about finding a pet; it's about finding a true friend who fits into your lifestyle and brings joy to your home.
            </p>
          </section>
          <section>
            <h1>3. Adoption Application</h1>
            <p>
              Our adoption application is a crucial step in ensuring the well-being of our beloved animals and finding the most suitable homes for them. This thorough yet straightforward application helps us understand your lifestyle, experience with pets, and commitment to providing a loving environment. Your responses give us valuable insights into your readiness to welcome a furry companion into your family.
            </p>
          </section>
          <section>
            <h1>4. Home Check</h1>
            <p>
              Our team will conduct a home visit to ensure that your living space is safe and suitable for your new furry companion. We want to ensure that our animals are entering a loving environment where they'll thrive.
            </p>
          </section>
          <section>
            <h1>5. Finalize the Adoption</h1>
            <p>
              Congratulations! Once all steps are successfully completed, it's time to finalize the adoption. Pay the adoption fee, sign the necessary paperwork, and get ready to welcome your new family member. We're here to support you on this beautiful journey.
            </p>
          </section>
        </div>
      </div>
      <div className= 'make-a-friend' style={{ position: 'relative' }}>
        <h2 style={{position:'absolute', textAlign:'center', color: '#ffffff',padding:'420px  50px 50px 50px'}}>It always leads to family</h2>
        <img src={adopt2} alt="adopt 2" style={{ width: '100%', height:'550px', display: 'block', objectFit: 'cover', overflow: 'hidden' }} />
        <img src={curtainWhite} alt="curtain-white" className="top-curtain-down" />
        
      </div>
    </div>
  );
};

export default HowToAdopt;
