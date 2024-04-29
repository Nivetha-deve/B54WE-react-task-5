import { BrowserRouter, Route, Routes } from "react-router-dom"
import All from "./All";
import FSD from "./FSD";
import Career from "./Career";
import DataScience from "./DataScience";
import CyberSecurity from "./CyberSecurity";
import { Link } from "react-router-dom";
import Styles from "./Page.module.css";

function App() {
  const Alldata = [
    {
      image: "https://www.guvi.in/blog/wp-content/uploads/2024/04/Feature-Image-768x298.webp",
      title:"Exploring Serverless Architecture: Important Benefits and Challenges [2024]",
      description:`As a full-stack developer or a backend developer, how many things can you handle at the same time?
       You already have so much on your plate and in addition to that, if you have to maintain the servers in which your data is getting stored,then that’s an additional headache.
      But what if there's an option for you to omit the process of looking after the servers? You heard it right!
       With serverless architecture, you necessarily don't have to worry about servers anymore.` ,
      date:"Apr 24, 2024",
    },
    {
      image:"https://www.guvi.in/blog/wp-content/uploads/2024/03/feature_image-26-768x298.webp",
      title:"Backend Developers in 2024: The Greatest Challenges",
      description:`In 2024, backend developers face an evolving landscape filled with both opportunities and challenges.
       As the backbone of digital services, their work impacts the efficiency, scalability, and security of applications worldwide. This blog post explains backend developers’ greatest challenges — from mastering new technologies and optimizing performance to ensuring data privacy and integrating AI.
      With the tech world moving at breakneck speed, staying ahead is more important and challenging than ever. `,
      date:"Mar 29, 2024",
    },
    {
      image:"https://www.guvi.in/blog/wp-content/uploads/2021/10/Non-tech-to-Tech-How-difficult-is-that.png",
      title:"Is Switching Careers From Non-Tech To Tech Challenging?",
      description:`Yes! It is challenging! But it is real and happening everywhere and is worth taking this challenge.
       That is to say that professionals transitioning from other non-IT fields into core IT development seemed to be immensely high. 
       Tech is somehow influencing professionals from every domain to give it a never-getting back chance whatsoever. Professionals are hugely shifting by adopting new Full stack developer skills, for example, and are making their big-time hits! 
      One thing that we found strikingly interesting is -almost all professional developers enjoy coding as a hobby.`,
      date:"Apr 04, 2024",
    },
    {
      image:"https://www.guvi.in/blog/wp-content/uploads/2022/12/cybersecuity-.gif",
      title:"What is Cybersecurity? Importance and its uses & the growing challenges in 2023!",
      description:`Look around today, you will witness that we are more reliant on technology and devices than ever before. 
      Benefits of this trend range from getting rid of Yellowbook, and having near-instant access to information on the internet o the modern conveniences provided by smart home automation technology and concepts like IoT devices. 
      With so many great things coming from technology, it’s highly likely that some potential threats lurk behind every device & platform. `,
      date:"Oct 04, 2023",
    },
    {
      image:"https://www.guvi.in/blog/wp-content/uploads/2022/07/4.-Is-30-really-too-old-to-start-a-career-as-a-developer_-768x402.png",
      title:"Is 30 Really Too Old To Start A Career As A Developer?",
      description:`As an EdTech, helping students make their grand entry into ravishing tech careers, we often receive queries asking, “Is 30 really too old to start a career as a developer?
      And mostly our Experts go worried like this, “Oh NO NO NO! Who said that???“
      In fact, it turns out a LOT of developers got their first tech job in their 30s, 40s, and 50s. Yes! While there are exemplary figures like Mark Zuckerberg, Bill Gates, Daphne Koller, etc., who started their programming journey too early in their life.`,
      date:"Mar 26, 2024",
    },
    {
      image:"https://www.guvi.in/blog/wp-content/uploads/2024/01/Feature-image-Top-Machine-Learning-Project-Ideas-For-All-Levels-with-Source-Code.webp",
      title:"Top 9 Machine Learning Project Ideas For All Levels [with Source Code]",
      description:`Machine learning is a dynamic field that continues to shape the future of technology and innovation. 
      From predictive analytics to AI-powered chatbots, machine learning projects have the power to solve real-world problems and unlock new potential.
      In this article, we will explore 9 machine learning project ideas across different levels of expertise.
       These projects are carefully curated to cover a wide range of applications, from structured data analysis to image recognition and natural language processing.`,
      date:"Mar 22, 2024",
    },
    {
      image:"https://www.guvi.in/blog/wp-content/uploads/2024/01/Feature-image-Integrating-Augmented-Reality-AR-into-User-Interfaces-Challenges-and-Solutions.webp",
      title:"Integrating Augmented Reality (AR) into User Interfaces: Challenges and Solutions",
      description:`Augmented Reality (AR) is a tool that adds digital images and information to the real world around us.
      It’s becoming a big part of how we use our phones and computers. However, adding AR to apps and websites can be tricky. 
      There are things to think about like making sure it works on different devices, making it easy and fun to use, keeping the app running smoothly without draining the battery, and making sure it’s safe and follows the rules. `,
      date:"Apr 16, 2024",
    },
    {
      image:"https://www.guvi.in/blog/wp-content/uploads/2022/08/Python-librarie.jpg",
      title:"Popular 6 Python libraries for Parallel Processing",
      description:`Heard of ‘Parallel Processing’ lately? Well, I guess you accidentally bumped into the Data Engineering world then. It is since the word ‘Parallel Processing’ 
      is most often heard in the Data Engineering industry and here you’ll come across the top 6 python libraries for parallel processing.
      While Parallel processing is also referred to as Parallel Computing. Let’s understand what it basically means.`,
      date:"Mar 25, 2024",
    },
    {
      image:"https://www.guvi.in/blog/wp-content/uploads/2022/02/Event-binding-on-dynamically-created-elements.jpg",
      title:"Event Binding On Dynamically Created Elements",
      description:`Event binding on dynamically created elements is one of the most searched queries by JS users. Being a javascript user, you all might have heard about the event in JS.
      But do you actually know that JavaScript has provided various event handlers to make your work easier?
      Onclick, OnChange, OnDblClick, and more are some of the event handlers. Apart from this, with the help of event binding, you can actually add any event handler for performing a particular event.`,
      date:"Apr 16, 2024",
    },
  ];

  const FSDdata = [
    {
      image:"https://www.guvi.in/blog/wp-content/uploads/2021/05/react-768x402.jpg",
      title:"6 Essential Prerequisites For Learning ReactJS",
      description:`If you did, learning ReactJS is the best decision! Making beautiful, sensitive, and quick web applications requires a lot of effort. ReactJS has a lot to offer in UI development.
      Now, the very first thought that might as well come to your mind is- What are the prerequisites for ReactJS?
      Well, ReactJS is a very powerful front-end framework based on JavaScript. And, it’s a wonderful creation by Facebook Inc. that solves many issues related to the front-end. 
      Firstly, it follows a component-based design.`,
      date:"Mar 25, 2024", 
    },
    {
      image:"https://www.guvi.in/blog/wp-content/uploads/2023/03/1.jpg",
      title:"Best Web Development Roadmap for Beginners 2024",
      description:`Web Development is a booming, high-paying, and indeed promising career in the IT industry, into which every techie wants to dive deeply. 
      Isn’t it? Do you also want to step into the world of web development? Are you a complete beginner? If yes, you’ve come to the right place to start your career as a web developer.
      Wondering where you could find the complete roadmap for web development as a beginner. 
      Worry not, this blog is purely based on a complete roadmap for web development for beginners where you’ll be taught from scratch.`,
      date:"Apr 16, 2024",
    },
    {
      image:"https://www.guvi.in/blog/wp-content/uploads/2024/02/Top-11-CSS-Frameworks-for-Front-End-Developers-feature-768x402.png",
      title:"Top 11 CSS Frameworks for Front-End Developers: A Comprehensive Guide",
      description:`In the world of web development, Cascading Style Sheets (CSS) play a crucial role in controlling the appearance and layout of web pages.
       With CSS, developers can specify a wide range of visual styles, including fonts, colors, margins, borders, and more.
      Over the years, CSS frameworks have emerged as powerful tools to streamline the front-end development process, providing developers with pre-written and standardized CSS code.`,
      date:"Mar 19, 2024",
    },
    {
      image:"https://www.guvi.in/blog/wp-content/uploads/2023/02/1_6rDcIgFJQldloIERiUSmzw-768x317.png",
      title:"How does Apache work? A detailed introduction to Apache",
      description:`Apache is the most widely used web server in the world, powering over 40% of all websites on the internet. 
      It is an open-source, cross-platform web server that is maintained by the Apache Software Foundation. Apache is a cross-platform server, which means it can run on various operating systems such as Windows, Linux, and macOS.
      Apache is known for its robustness, security, and scalability, and it is the de facto standard for web servers. 
      In this article, we will take a closer look at how does apache works including its architecture, components, and processes.`,
      date:"Mar 26, 2024",
    },
    {
      image:"https://www.guvi.in/blog/wp-content/uploads/2023/03/backend-skills.jpg",
      title:"Top 7 Back-End Developer Skills You Should Know",
      description:`Web developers are the one who creates web applications. It is split into two – Front-end developers, who look after the interface of the website,
      i.e., the look and feel of the website, and the Back-end developers, who look after the back-end of the website which handles the data, storage, and functioning of the website.
      According to several reports, back-end developers (who act as the backbone of the application) are generally huge in demand than front-end developers.`,
      date:"Mar 25, 2024",
    },
    {
      image:"https://www.guvi.in/blog/wp-content/uploads/2023/02/DBMS1.png",
      title:"10 Best Database Management Systems For Software Developers",
      description:`In this digitized world, where data is an asset to businesses, it has become very important for organizations to store, access, and manipulate them whenever required. 
      Along with the storage of data, security is also a very important concern. This is where the database management system, generally referred to as DBMS comes into the picture.
      Let’s understand what is a database management system first. A database management system is a system that stores data in a database so that the user can perform operations on it whenever required. 
      It is a software system that allows users to define, create, maintain. `,
      date:"Mar 22, 2024",
    },
    {
      image:"https://www.guvi.in/blog/wp-content/uploads/2023/07/html-css-collage-concept-with-person-768x512.jpg",
      title:"Top 10 Full-Stack Developer Frameworks in 2024",
      description:`In the ever-evolving world of technology, the demand for full stack developers is at an all-time high. 
      As businesses continue to embrace online platforms and advanced technologies, they require professionals who can handle every aspect of web development, from design and front-end development to back-end coding and database management.
      To stay ahead of the curve and become one of the most sought-after developers in the industry, it is crucial to stay updated on the latest frameworks and technologies.`,
      date:"Apr 16, 2024",
    },
    {
      image:"https://www.guvi.in/blog/wp-content/uploads/2022/12/Fetch-Data-using-API-in-React.Js-768x432.png",
      title:"Use ReactJS to Fetch and Display Data from API – 5 Simple Steps",
      description:`In this blog, we’ll learn how to fetch and display data from APIs and use it in a ReactJS app.
      There are multiple ways to fetch data in a React application, and we’ll walk you through those methods. With the help of APIs, 
      we can fetch the data from servers and display it in our application. Let’s first understand what an API is.
      API stands for “Application Programming Interface”, which is a method of communication between different applications. ReactJS is an open-source JavaScript-based library developed by Facebook used to create web applications’ user interfaces.`,
      date:"Mar 21, 2024",
    },
  ];

  const DataSciencedata = [
    {
      image:"https://www.guvi.in/blog/wp-content/uploads/2023/07/Real-World-Data-Science-Examples-768x402.webp",
      title:"12 Real-World Data Science Examples: Power Of Data Science",
      description:`Have you ever wondered how some of the world’s most successful companies seem to know exactly what you need,
       even before you do? Or how your favorite streaming service recommends the perfect movie or how companies accurately predict customer behavior to offer personalized experiences?
       These all are Data Science examples and the answers to these lies in this article
      These all are due to the transformative power of Data Science – a revolutionary field that has permeated every aspect of our lives, shaping industries and driving innovation.`,
      date:"Mar 25, 2024",
    },
    {
      image:"https://www.guvi.in/blog/wp-content/uploads/2023/07/image-4-768x433.png",
      title:"Roles and Responsibilities of a Data Scientist",
      description:`Data science is a rapidly growing field that has become essential for businesses to thrive in the digital age. As organizations wrestle with large volumes of data, the need for skilled professionals who can extract valuable insights has skyrocketed.
      This is where data scientists come into play. In this comprehensive guide, we will explore the job description, roles, and responsibilities of a data scientist, as well as the skills required to excel in this field. 
      So, if you are considering a career as a data scientist or want to learn more about this exciting profession, read on!`,
      date:"Apr 16, 2024",
    },
    {
      image:"https://www.guvi.in/blog/wp-content/uploads/2022/06/Your-paragraph-text-768x384.png",
      title:"Data Science vs Data Analytics | Best Career Choice in 2024",
      description:`Our modern world relies heavily on data, which brings changes in many aspects of business, research & economy. For this reason, there is a huge demand for professionals in data science & data analytics with a job growth of 22% increase(as predicted by the Bureau of Labor Statistics). 
      Since both of these fields feature data-driven job roles, it is quite common to get confused between the two. In this case, this read can help you understand the major difference between Data Analytics & Data Science.
       Further, enabling you to make an informed decision in choosing your career path.`,
      date:"Apr 16, 2024",
    },
    {
      image:"https://www.guvi.in/blog/wp-content/uploads/2023/08/Everything-about-Data-Scientist-Salary-in-India-2023-768x402.png",
      title:"Everything about Data Scientist Salary in India | 2024",
      description:`Are you curious about the highly sought-after field of data science and the potential it holds for your career?
      Data science has experienced exponential growth in recent years, making it one of the most promising career paths in the country. Whether you are a fresher or an experienced professional, understanding the Data Scientist salary landscape is crucial for making informed career decisions. 
      In this comprehensive guide, we will explore the fascinating world of data scientist salaries in India.`,
      date:"Apr 02, 2024",
    },
    {
      image:"https://www.guvi.in/blog/wp-content/uploads/2023/08/data-science-webinars-and-workshops-768x402.webp",
      title:"Data Science Webinars and Workshops",
      description:`In today’s world, it’s becoming increasingly important to be knowledgeable in the field of data science. With data being such an integral part of nearly every industry, staying up to date on the latest trends and techniques is crucial.
       So how can you keep your skills sharp and stay ahead of the curve? 
      One great way is by attending data science webinars and workshops.
       These interactive virtual events are designed to give you the knowledge and tools to tackle real-world data challenges.`,
      date:"Apr 15, 2024",
    },
    {
      image:"https://www.guvi.in/blog/wp-content/uploads/2023/07/best-data-science-frameworks-768x402.webp",
      title:"10 Best Data Science Frameworks in 2024",
      description:`Does data scientists fascinate you? If yes, you must definitely know about data science frameworks. 
      These frameworks are used by data scientists to ease their work pressure by using them in projects. Data science has become an integral part of many industries, driving innovation and providing valuable insights. 
      As the field continues to evolve, data scientists rely on various frameworks and tools to organize, analyze, and interpret data efficiently.
      There are tons of frameworks for Data Science, and each has its benefits and drawbacks, so it’s important to choose the right one for your needs.`,
      date:"Dec 13, 2023",
    },
  ];

  const CyberSecuritydata = [
    {
      image:"https://www.guvi.in/blog/wp-content/uploads/2022/12/Yellow-Blue-Illustration-Business-Blog-Banner-768x432.png",
      title:"Cybersecurity Vs Ethical Hacking: Top 10 Differences",
      description:`Cybersecurity & Ethical hacking and have been key in making sure that your data online is secure, users are authenticated & your data and privacy concerns are all kept safe.
      Is there a difference between cybersecurity and ethical hacking, if yes what is the difference? Let’s find out!
      First off, we will understand what Cybersecurity is and how it is related to your online activities. We will consider numerous points and have an in-depth comparison, to find out the difference between Cybersecurity and Ethical Hacking.`,
      date:"Apr 16, 2024"
    },
    {
      image:"https://www.guvi.in/blog/wp-content/uploads/2022/11/Teal-Illustration-Digital-Business-Blog-Banner-1-768x432.png",
      title:"8 Different Types of Cybersecurity and Threats Involved",
      description:`Cybersecurity refers to the protection of devices, processes, infrastructure, and assets of the organization from cyberattacks, data theft, breaches, unauthorized access, etc. 
      With the advent of technology and the increasing interconnectedness of organizational systems and networks, effective cybersecurity management and strategy are necessary for organizations of all sizes and types accordingly. 
      Investments are flowing into this field and the market is projected to be a staggering 403 billion US dollars by 2027. `,
      date:"Sep 08, 2023",
    },
    {
      image:"https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-What-Is-Hacking_-Types-of-Hacking-More.webp",
      title:"What Is Hacking? Types of Hacking & More",
      description:`Have you ever wondered what hacking is all about? It’s a big deal in today’s tech-heavy world, and it can be both fascinating and scary. In this blog, we’re going to explore hacking in simple terms so that you can understand it better. 
      We’ll look at the different kinds of hacking that exist. 
      For example, there are hackers who try to steal your passwords and others who fight to protect your information. Some hackers even have strong beliefs and use their skills to support their causes.
       It’s a bit like a digital battlefield out there.`,
      date:"Mar 25, 2024 ",
    },
    {
      image:"https://www.guvi.in/blog/wp-content/uploads/2020/11/cyber-security-1170x480.png",
      title:"How Is Cyber Security Important To Our Lives?",
      description:`Cybersecurity is an exact solution that is sought either by a billionaire with a massive business or an innovator with a small start-up or even an individual who risks personal data online. Let’s see more.`,
      date:"Apr 02, 2024"
    },
    {
      image:"https://www.guvi.in/blog/wp-content/uploads/2021/03/Blog-9-768x402.png",
      title:"The Cybersecurity Surge: 5 Must-Have Cybersecurity Certifications!",
      description:`There is something fascinating about a lone hacker in black hoodies using a single system and their skills to take down big corporations and their crony capitalism. 
      The anecdote of a hacker has cultivated an ethos of individuality, corporate freedom, and distinct craftiness that can’t be denied. 
      Also, the same archetype is visible in a number of pop-cultural references whether the famous TV series- Mr. Robot or real-life adaptations of Snowden and Julian Assange.`,
      date:"Mar 25, 2024",
    },
    {
      image:"https://www.guvi.in/blog/wp-content/uploads/2021/03/The-Ultimate-%E2%80%A8Cybersecurity-Roadmap-for-Beginners-768x366.webp",
      title:"The Ultimate Cybersecurity Roadmap for Beginners",
      description:`Cybersecurity jobs are also one of the most handsomely paying jobs in recent times. Furthermore, the annual growth rate of cybersecurity jobs as identified by LinkedIn is 30%.
     Well, this digital era survives more on social media. The increase in cybercrimes has the least amount of surprise attached! We find ourselves more comfortable sharing personal details on electronic gadgets. 
     Banking credentials and important documents look more secure as softcopies on our laptops than handy. 
     However, we can barely give a blind face to the increasing cybersecurity threats.`,
      date:"Mar 23, 2024",
    },
  ];

  const Careerdata = [
    {
     image:"https://www.guvi.in/blog/wp-content/uploads/2022/08/6.-TCS-Xplore-Python-Coding-Questions-768x402.png",
     title:"Top 9 TCS Xplore Python Coding Questions [DeCode with GUVI]",
     description:`TCS Xplore is a learner-centric program with a 120-hour progressive induction curriculum. Find the most important TCS Xplore Python Coding questions here.
     A tech career in India’s IT trendsetter Tata Consultancy Services (TCS), is one of the top aspirations of most Indian techies. If you are still exploring TCS, let me tell you that TCS was India’s first listed company to hit a $100 billion m-cap. So, rightly called the crown jewel of Indian IT. 
     Whether you are a seasoned IT Expert or a beginner just trying to discover your identity on the ever-green IT planet.`,
     date:"Mar 25, 2024",
    },
    {
     image: "https://www.guvi.in/blog/wp-content/uploads/2023/04/image-18.png",
     title:"Crack the TCS IPA Exam: Top Questions and Exclusive Tips for Success!",
     description:`As Engineering graduates, we are all extremely eager to land a job at TCS, one of India’s largest IT companies. No shocker there, working at TCS doesn’t just add immense value to your resume but also to your 
     newly budding wallet. Latest reports state that salaries at TCS India touch around Rs.28L per annum given that you get in and do it with precision.
     Cracking the TCS IPA exam is the key to achieving your TCS career goals.`,
     date:"Oct 06, 2023",
    },
    {
      image: "https://www.guvi.in/blog/wp-content/uploads/2015/02/blog-2-e1626109662385.png",
      title:"Top 30 Mini Project Ideas For College Students [UPDATED]",
      description:`Finding the right mini project for your UG & PG assignments is a tough battle, isn’t it? As a beginner just starting out in tech, you might feel overwhelmed by the project submissions and deadlines, but we’re here to make that easy for you.
      This comprehensive guide with Mini-Project Ideas for college students will become your go-to handbook for all your project deadlines. 
      This blog lists 30 tailored ideas for your college mini project, ranging from beginner to pro-level projects.
      We’ve designed it in a way that the time and effort involved in project creation will be minimal. `,
      date:"Mar 25, 2024",
    },
  ];
 return (
    <>
      <BrowserRouter>
         <nav className={Styles["main-container"]}>
              <Link to="/">All</Link>
              <Link to="/fullstack">Full Stack Development</Link>
              <Link to="/datascience">Data Science</Link>
              <Link to="/cybersecurity">Cyber Security</Link>
              <Link to="/career">Career</Link>
        </nav>  

      <Routes>
        <Route path="/" element={<All Alldata={Alldata} />} />
        <Route path="/fullstack" element={<FSD FSDdata={FSDdata} />} />
        <Route path="/dataScience" element={<DataScience DataSciencedata={DataSciencedata} />} />
        <Route path="/CyberSecurity" element={<CyberSecurity CyberSecuritydata={CyberSecuritydata} />}/>
        <Route path="/Career" element={<Career Careerdata={Careerdata} />}/>
      </Routes>
      </BrowserRouter>
    </> 
 );       
}

export default App;

   