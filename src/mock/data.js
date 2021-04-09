import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Sangheon', // e.g: 'Name | Developer'
  lang: 'ko', // e.g: en, es, fr, jp
  description: 'I\'m Front-end Developer', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Sangheon Kim',
  subtitle: 'I\'m a Front-end Developer.',
  cta: 'View more',
};

// ABOUT DATA
// export const aboutData = {
//   img: 'me.png',
//   paragraphOne: '상상하고 표현하는 것을 좋아하며 특별히 생각을 구현해내는 활동들을 좋아합니다. Web Design 분야에 매력을 느낀 이유도 그것입니다.',
//   paragraphTwo: '생각한 디자인을 화면으로 표현하고, 그것을 WEB으로 보여지게 만드는 작업은 세상에 없던 무언가를 만들어낸다는 뿌듯함을 줍니다. 이러한 결과물이 있기 위해서는 협력하는 분들과의 충분한 소통, 그리고 툴의 사용력이 뒷받침 되어야 한다고 생각합니다. ',
//   paragraphThree: '이상을 현실로 만들기 위해서는 충분한 노력이 필요하다고 판단되기에, 오늘도 끊임없이 공부하는 중입니다.',
//   resume: '', // if no resume, the button will not show up
// };
export const aboutData = {
  img: 'me.png',
  paragraphOne: 'I like to imagine and express, and I especially like activities that implement thoughts. That\'s why I was attracted to the field of Web Development.',
  paragraphTwo: 'The work of expressing and making it look like WEB gives us a sense of pride that it creates something that is not in the world. In order to have these results, I think we need to have sufficient communication with our collaborators and the ability to use the tools. ',
  paragraphThree: 'I\'m constantly studying today because I think it takes enough effort to make this ideal a reality.',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project_shi.jpg',
    title: 'Samsung Heavy Industries',
    info: 'This is the first project that I worked on with the intention of working on a project that is faithful to the basics.',
    // 기본에 충실한 프로젝트를 진행하자는 마음으로 진행한 첫 프로젝트입니다.
    info2: 'It is a project that has worked 100% directly from planning to design and coding, and has changed the narrow and small layout of the existing homepage and the atmosphere of the site that feels old to bright and scalable.',
    // 기획부터 디자인, 코딩까지 100% 직접 작업한 프로젝트 로 기존 홈페이지의 좁고 작은 레이아웃과 올드한 느낌이 드는 사이트 분위기를 밝고 확장성 있게 변경하였습니다.
    url: 'http://sangheon.co.kr/project/shi/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project_sul.jpg',
    title: 'Sulwhasoo',
    info: 'As the first collaborative project, I worked with 100% hard-coding, and there were many difficult requirements to code, but we communicated enough with each other for the best results.', 
    // 처음으로 협업하여 만든 프로젝트로서 하드코딩 100%로 작업하였고, 코딩하기 어려운 요구사항들이 많이 있었지만 최고의 결과를 위해 서로 충분히 대화하며 진행하였습니다.
    info2: 'I tried to express the image of droplets falling in the snow by giving each letter transition and delay differently on the main banner.',
    // 메인 배너에 글자마다 transition과 delay를 서로 다르게 주어 마치 눈속에서 떨어지는 물방울의 이미지를 표현하고자 노력했습니다.
    url: 'http://sangheon.co.kr/project/sulwhasoo/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project_dayoff.jpg',
    title: 'DAYOFF',
    info: 'This is a business homepage to promote the use of corporate salaries, four major insurance, labor, tax, legal and personal vacations.', 
    // 기업의 급여,4대보험,노무,세무,법무 및 개인 휴가 사용 촉진을 위한 비지니스 홈페이지입니다.
    info2: 'Email validation and data transfer are available with a number of animation effects.', 
    // 여러가지 애니메이션 효과와 함께 Email 유효성 검사 및 Data 전송 기능이 있습니다. 
    url: 'https://github.com/sangheonkimme/dayoff-ejs',
    repo: 'https://github.com/sangheonkimme/dayoff-ejs', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: 'Send Email',
  email: 'sangheon1646@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    // {
    //   id: nanoid(),
    //   name: 'codepen',
    //   url: '',
    // },
    {
      id: nanoid(),
      name: 'linkedin',
      url: '',
    },
    {
      id: nanoid(),
      name: 'github',
      url: '',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
