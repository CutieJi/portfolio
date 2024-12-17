export function RenderContent(){


  // ----------------RENDERING HOME SECTION-------------------//
  const homeDetails = {
    greetTxt: `Hello visitor, I'm`,
    name: 'Rosh Ingel',
    profilePhoto: 'profile.jpg',
    welcomeTxt: 'Welcome to my personal website.',
    fbLink: 'https://facebook.com/rosh.ingelxji',
    tiktokLink: 'https://www.tiktok.com/@icrshxigl?_t=8s11Eq5F9Ae&_r=1',
    instagramLink: 'https://instagram.com/icrshxigl',
    ghubLink: 'https://github.com/CutieJi'
  }

  const homeHTML = `
    <div class="profile-detail">
      <p>${homeDetails.greetTxt}</p>
      <h1 class="my-name gradient-word">${homeDetails.name}</h1>
      <h2 class="display-skills gradient-word"></h2>
      <p>${homeDetails.welcomeTxt}</p>
      <div class="my-social-media-accounts">
        <a
          class="social-media"
          target="_blank"
          href="${homeDetails.ghubLink}">
          <img src="images and icons/icons/github.png" alt="ghub icon" />
        </a>
        <a
          class="social-media"
          target="_blank"
          href="${homeDetails.fbLink}">
          <img src="images and icons/icons/facebook (2).png" alt="fb icon" />
        </a>
        <a
          class="social-media"
          target="_blank"
          href="${homeDetails.tiktokLink}">
          <img src="images and icons/icons/tik-tok.png" alt="tiktok icon" />
        </a>
        <a class="social-media" target="_blank" href="${homeDetails.instagramLink}">
          <img src="images and icons/icons/instagram (1).png" alt="insta icon" />
        </a>
      </div>
    </div>

    <div class="profile-pic">
      <div id="first-layer">
        <img
          id="profile-img"
          src="images and icons/images/${homeDetails.profilePhoto}"
          alt="profile img" />
      </div>
    </div>
  `;
  
  const homeSection = document.querySelector('#home-section').innerHTML = homeHTML;
    




   // ----------------RENDERING ABOUT SECTION-------------------//
   const aboutDetails = {
    myPhoto: 'profile.jpg',
    aboutMeFirstPrgrph: `Hi, I'm Rosh, a passionate web developer dedicated to creating innovative, responsive, and user-friendly websites. I specialize in turning ideas into functional and visually appealing digital experiences, focusing on clean code, modern design, and efficient solutions. Let's build something amazing together!`,
    aboutMeSecondPrgrph: `Beyond Gamer, exploring immersive worlds, tackling challenges, and connecting with others through gaming. For me, gaming is more than just a pastime—it's a way to sharpen my skills, strategize, and have fun along the way.`
   }

   const aboutHTML = `
    <h2 class="section-name about">ABOUT ME <span class="line"></span></h2>
    <div class="container">
      <div>
        <img
          class="profile-pic"
          src="images and icons/images/${aboutDetails.myPhoto}"
          alt="profile img" />
      </div>
      <div class="about-self scroll-reveal">
        <p class="first-paragraph">
          <span>${aboutDetails.aboutMeFirstPrgrph}</span>
        </p>
        <br />
        <p class="second-paragraph">
          <span>${aboutDetails.aboutMeSecondPrgrph}</span>
        </p>
      </div>
    </div>
   `

  const aboutSection = document.querySelector('#about-section').innerHTML = aboutHTML;




    // ----------------RENDERING SKILLS SECTION-------------------//

    const skills = [
      { iconName: "php.png", skillName: "PHP" },
      { iconName: "html.png", skillName: "HTML" },
      { iconName: "mysql.png", skillName: "My SQL" },
      { iconName: "java-script.png", skillName: "JavaScript" },
      { iconName: "CSS.png", skillName: "CSS" },
      { iconName: "Git.png", skillName: "Git" },
      { iconName: "visual-studio.png", skillName: "VScode" },
    ];

    const skillHTML = `
        <h2 class="section-name"><span class="line"></span> SKILLS</h2>
          
          <div class="skills-container d-flex">
          </div>
    `

  const skillSection = document.querySelector('#skills-section').innerHTML = skillHTML;
  
  let skillCard = ''
  skills.forEach(skill => {
   skillCard += `<div class="skill">
    <img src="images and icons/icons/${skill.iconName}" alt="" class="skill-icon">
    <p class="skill-name">${skill.skillName}</p>
  </div>`
  });
  const skillsContainer = document.querySelector('.skills-container').innerHTML = skillCard;




  // ----------------RENDERING CONTACT SECTION-------------------//
  const contactDetails = {
    heading: ' CONNECT WITH ME',
    subheading: 'Let’s Make Something Cool Together',
  }
  const contactHTML = `
    <h2 class="section-name">${contactDetails.heading}</h2>
    <p class="subheading">${contactDetails.subheading}</p>
    <form class="f-flex">
      <div class="input-container">
        <input class="input name" type="text" placeholder="Name" required />
        <input class="input email" type="email" placeholder="Email" required/>
      </div>

      <div class="txt-area-btn-container">
        <textarea name="Message-me" class="input" placeholder="Enter your Messsage"></textarea> 
        <button id="submit-btn">Submit</button>
      </div>
    
    </form>
  `;

  const contactSection = document.querySelector('#contact-section').innerHTML = contactHTML;
}
