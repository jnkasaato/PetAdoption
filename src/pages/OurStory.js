import React from 'react';
import ourstory1 from '../images/ourstory1.png'; 
import ourstory2 from '../images/ourstory2.png'; 
import ourstory3 from '../images/ourstory3.png'; 
import ourstory4 from '../images/ourstory4.png'; 
import ourstory5 from '../images/ourstory5.png'; 
import ourstory6 from '../images/ourstory6.png'; 
import ourstory7 from '../images/ourstory7.png'; 
import ourstory8 from '../images/ourstory8.png'; 
import ourstory9 from '../images/ourstory9.png'; 
import ourstory10 from '../images/ourstory10.png'; 
import ourstory11 from '../images/ourstory11.png'; 
import curtainWhite from '../images/curtain-white.png'; 
import curtainBeige from '../images/curtain-beige.png'; 

import home1 from '../images/home1.png'; 

const OurStory = () => {
  return (
    <div>
      <div id="top"></div>
      <div style={{ position: 'relative' }}>
        <img src={ourstory1} alt="ourstory 1"className="intro-photo"/>
        <img src={curtainWhite} alt="curtain-white" className="bottom-curtain-up" />
        <img src={curtainWhite} alt="curtain-white" className="top-curtain-down" />
      </div>
      <div className = 'ourstory__intro' style={{ position: 'relative' }}>
        <h1>Our Story</h1>
        <h2>Embrace Life. Cherish Hearts. Adore Paws.</h2>
        <h2>Discover the captivating tale of the Hossier family, and witness Hannah Hossier's role in introducing one of the world's most beloved dog breeds.</h2>
        <img src={curtainWhite} alt="curtain-white" className="bottom-curtain-down" />
      </div>

      <div className = 'ourstory__main'>
        <div className = 'ourstory__story1'>
          <div className= 'ourstory__img2'>
            <img src= {ourstory2} alt = 'ourstory 1' style={{ width: '100%', height:'550px', display: 'block', objectFit: 'cover', overflow: 'hidden' }}/>
          </div> 
          <div className= 'ourstory__text2'>
            <h1>MEET THE HOSSIER FAMILY</h1>
            <p>Once upon a wagging tail, in a heartwarming tale of compassion and love, a couple embarked on a paw-some adventure to start their very own dog rescue group. With hearts as big as their love for four-legged friends, they knew they had a mission to fulfill. Hand in paw, they tirelessly searched for abandoned and neglected pups, giving each one a second chance at a forever home. In their cozy home, wagging tails and wet noses became a common sight, filling the air with boundless joy. <br/> <br/>Every day, they witnessed tales of transformation, as scared and lost souls found solace in their care and blossomed into confident, tail-wagging wonders. With wagging tails and hearts full of gratitude, the couple knew they had embarked on a journey that would forever be filled with love, hope, and endless cuddles.</p>
          </div> 
        </div>

        <div className = 'ourstory__story2'>
          <div className= 'ourstory__text2'>
            <h1>EMILY HOSSIER</h1>
            <p>Meet Emily, the nurturing force behind this heartwarming dog rescue group. With a heart that beats for every wagging tail, she exudes an endless well of compassion and tenderness. From a young age, she knew her life's purpose was intertwined with the love and care of animals. Her days are a symphony of paw prints and puppy kisses, as she devotes herself wholeheartedly to the rescue's furry residents. Whether it's nursing an injured pup back to health or patiently training a timid soul to trust again, Emily's unwavering dedication shines through. <br/><br/> In the embrace of her warm heart and gentle hands, the once-forgotten dogs find a safe haven, blooming under her patient guidance. Every wagging tail she encounters becomes a beacon of hope, reminding her that love and second chances can heal even the deepest wounds. Through ups and downs, she faces the challenges with grace and resilience, knowing that every wag, every smile, and every tail thump is a testament to the profound impact of her work. <br/><br/> Emily's journey in this canine haven is a testament to the magic that happens when love finds its way to the most deserving souls.</p>
            </div> 
          <div className= 'ourstory__img2'>
            <img src= {ourstory3} alt = 'ourstory 1' style={{ width: '100%', height:'700px', display: 'block', objectFit: 'cover', overflow: 'hidden' }}/>
          </div> 
        </div>
      </div>

      <div className = 'letter'>
        <h1> Our Story</h1>
        <h2>Meeting Luna</h2>
        <p>Once upon a time, Emily and her partner, Alex, embarked on a life-altering journey when they stumbled upon a trembling, abandoned pup in a dimly lit alley. The pup's soulful eyes tugged at their heartstrings, and without hesitation, they scooped her into their arms, cradling her with infinite tenderness. <br/><br/> Her fur was matted, and her frail body bore the scars of a tough life on the streets. They named her Luna, a beacon of hope under the moonlit sky. With every step they took, their connection deepened, and Luna's trust in humans began to slowly unfold. <br/><br/> Emily spent sleepless nights nursing Luna back to health, her warm touch and soothing voice becoming Luna's lifeline. As the days turned into weeks, Luna's spirit blossomed like a radiant flower, revealing a playful and loving nature that had been hidden beneath her fears.<br/><br/>Together, they embarked on a journey of healing, teaching Luna that she was cherished beyond measure. Through the challenges, they celebrated each milestone - from Luna's first wagging tail to her first bark of joy.<br/><br/>Luna's transformation inspired Emily and Alex to commit their lives to rescuing more souls like her. She became the heartbeat of their dog rescue group, reminding them of the power of love and second chances.<br/><br/>With Luna as their guiding light, they extended their hands to countless other abandoned pups, knowing that each rescue was a step towards brighter tomorrows. The bond forged with Luna on that fateful day will forever be etched in their hearts - the beginning of an extraordinary adventure that would touch the lives of many, one wagging tail at a time.</p>
      </div>
      <div className = 'ourstory__lunaimg'>
        <img src={ourstory4} alt="ourstory 4" style={{ width: '100%', height:'550px', display: 'block', objectFit: 'cover', overflow: 'hidden' }} />
        <img src={ourstory5} alt="ourstory 5" style={{ width: '100%', height:'550px', display: 'block', objectFit: 'cover', overflow: 'hidden' }} />
        <img src={ourstory6} alt="ourstory 6" style={{ width: '100%', height:'550px', display: 'block', objectFit: 'cover', overflow: 'hidden' }} />
        <img src={ourstory7} alt="ourstory 7" style={{ width: '100%', height:'550px', display: 'block', objectFit: 'cover', overflow: 'hidden' }} />
      </div>

      <div className = 'short_interlude' style={{ position: 'relative' }}>
        <h2>Big Dreams</h2>
        <p>In their hearts, Emily and Alex harbor grand dreams of transforming their dog rescue group into a sanctuary of hope and healing, a safe haven for every neglected and abandoned soul. They dream of building a vast network of compassionate volunteers, working hand in paw to touch countless lives and extend love to every corner of their community.  Their big dreams include creating a comprehensive training and rehabilitation program, tailored to each rescued pup's needs, ensuring they find not just a home but a family that cherishes them for life. With unwavering determination, they aspire to bring awareness to animal welfare, advocating for responsible pet ownership and humane treatment for all creatures. Emily and Alex envision a world where no wagging tail goes unnoticed, where every dog, no matter their background, finds the warmth of a loving embrace. Their dream is to inspire others to join their cause, creating a ripple effect of compassion that reaches far beyond their wildest imaginations.</p>
        <img src={curtainWhite} alt="curtain-white" className="bottom-curtain-up" />
        <img src={curtainWhite} alt="curtain-white" className="top-curtain-down" />
      </div>

      <div className = 'ourstory__farm'>
        <div className = 'ourstory__farm-text'>
          <h2>The Farmhouse </h2>
          <p>Nestled amidst rolling hills and blooming meadows, the farmhouse stands as a haven for the rescued animals. Its rustic charm exudes warmth and tranquility, inviting wagging tails and contented purrs. With spacious kennels and cozy nooks, it offers each furry resident a place to call their own. <br/><br/>Surrounded by the unconditional love of the rescue team, the animals find comfort and solace in the farmhouse's warm embrace, knowing they are cherished and treasured. This farmhouse, filled with hope and compassion, is a sanctuary where each rescued soul finds a new beginning and a chance at a joyful life.</p>
        </div>
        <div className = 'ourstory__img9'>
          <img src= {ourstory8} alt = 'ourstory 8' style={{ width: '100%', height:'650px', display: 'block', objectFit: 'cover', overflow: 'hidden' }}/>
        </div>
      </div>

      <div className = 'ourstory__nursery'>
        <div className = 'ourstory__img9'>
          <img src= {ourstory9} alt = 'ourstory 9' style={{ width: '100%', height:'700px', display: 'block', objectFit: 'cover', overflow: 'hidden' }}/>
        </div>
        <div className = 'ourstory__nursery-text'>
          <h2>The Nursery</h2>
          <p>The animal nursery is a place of pure magic, where new life enters the world, filling the air with soft whimpers and tiny chirps. Nestled in a cozy corner of the farmhouse, it welcomes each newborn with open arms and a mother's touch. Here, caring hands tirelessly nurture the tiniest of creatures, providing round-the-clock care and love.<br/><br/>Within the nursery's walls, warm incubators cradle fragile puppies and kittens, offering them a safe space to grow strong. Soft blankets and plush toys offer comfort and companionship as they explore the world. This nursery is a place of hope and new beginnings, where the tiniest paws take their first steps towards a future filled with love and possibility.</p>
        </div>
      </div>
      <div style={{ position: 'relative' }}>
        <div className = 'short_interlude'>
          <div className = 'ourstory__play-text' >
            <h2>Play and Play</h2>
            <p>In their hearts, Emily and Alex harbor grand dreams of transforming their dog rescue group into a sanctuary of hope and healing, a safe haven for every neglected and abandoned soul. They dream of building a vast network of compassionate volunteers, working hand in paw to touch countless lives and extend love to every corner of their community. <br/><br/> Their big dreams include creating a comprehensive training and rehabilitation program, tailored to each rescued pup's needs, ensuring they find not just a home but a family that cherishes them for life. With unwavering determination, they aspire to bring awareness to animal welfare, advocating for responsible pet ownership and humane treatment for all creatures. Emily and Alex envision a world where no wagging tail goes unnoticed, where every dog, no matter their background, finds the warmth of a loving embrace.<br/><br/> Their dream is to inspire others to join their cause, creating a ripple effect of compassion that reaches far beyond their wildest imaginations.</p>
            <img src={curtainWhite} alt="curtain-white" className="top-curtain-down" />
          </div>
        </div>
        <div className = 'ourstory__playimg_10_11'>
          <img src= {ourstory10} alt = 'ourstory 10' style={{ width: '100%', height:'550px', display: 'block', objectFit: 'cover', overflow: 'hidden' }}/>
          <img src= {ourstory11} alt = 'ourstory 11' style={{ width: '100%', height:'550px', display: 'block', objectFit: 'cover', overflow: 'hidden' }}/>
        </div>
      </div>

    </div>
  );
};

export default OurStory;