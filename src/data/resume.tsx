import { Icons } from "@/components/icons";
import { Description } from "@radix-ui/react-dialog";
import { url } from "inspector";
import { HomeIcon, NotebookIcon, ThumbsDown, VideoIcon, FolderIcon, icons } from "lucide-react";
import { title } from "process";

export const DATA = {
  name: "Ari Dalimunthe",
  initials: "AD",
  url: "https://github.com/ariedalimunthe",
  location: "Padangsidimpuan, Indonesia",
  locationLink: "https://www.google.com/maps/place/padangsidimpuan",
  description:
    "A Full Stack Developer, a man who turn a cup of 🍵 coffee into beautiful code!",
  summary: "Hello! I'm a developer from Padangsidimpuan, Indonesia. I enjoy programming and exploring technology. Currently working on my own projects. Open to work, freelance, or **collaborate**.\n\n Great analysis and multitasking skills. Constantly interested in problem solving, reviewing colleagues code and refactoring and optimising existing code. Always ready to learn new **technology**, update existing knowledge or work harder. Proud member of Open-Source Community.",

  avatarUrl: "/hi.png",
  skills: [
    "HTML",
    "CSS",
    "Bootstrap",
    "Jquery",
    "PHP",
    "JavaScript",
    "git",
    "Codeigniter",
    "RestAPI",
  ],
  videos: [
    {
      title: "Track Your Coding time for free",
      description: "Learn how to track your code time with complete analytics and insights.",
      thumbnail: "/video1.avif",
      url: "https://youtu.be/tBatfQjWxCg?si=sy2vZbCHoIYNME-3",
      date: "2024-05-15"
    },
    {
      title: "Fix multi-cursor in VS Code",
      description: "Simple trick to fix multi-cursor in VS Code.",
      thumbnail: "/video2.avif",
      url: "https://youtu.be/E9h7M6ZK_tA?si=ykzV7ARU4VMnbBRo",
      date: "2024-07-01"
    },
    {
     title: "Twitter(X)'s monetization (Hindi)",
     description: "Is the policy broken? Let's find out.",
     thumbnail: "/video3.avif",
     url: "https://youtu.be/Z3h1jt6jKLY?si=blL4l4FNco9WW9FT",
     date: "2024-11-04"
    },
    {
      title:"How to fix any kind of ban in twitter (Hindi)",
      description: "Learn how to fix any kind of ban in twitter.",
      thumbnail: "/video4.avif",
      url:"https://youtu.be/P7JRFrcXlQU",
      date: "2024-12-24"
    },
  ],
   movies: [
    {
      title: "Shawshank Redemption (1994)",
      description: "A banker convicted of uxoricide forms a friendship over a quarter century with a hardened convict, while maintaining his innocence and trying to remain hopeful through simple compassion.",
      thumbnail: "/shawshank.webp",
      url: "https://youtu.be/watch?v=PLl99DlL6b4",
      date: "1994",
      ratings : 9.1
    },
    {
      title: "Interstellar (2014)",
      description: "When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.",
      thumbnail: "/interstellar.webp",
      url: "https://youtu.be/watch?v=2LqzF5WauAw",
      date: "2014",
      ratings : 8.7
     },
      {
      title: "Oppenheimer (2023)",
      description: "A dramatization of the life story of J. Robert Oppenheimer, the physicist who had a large hand in the development of the atomic bombs that brought an end to World War II.",
      thumbnail: "/oppenheimer.jpg",
      url: "https://youtu.be/watch?v=2CXFpWTxS3M",
      date: "2014",
      ratings : 8.5
    },
    {
      title: "Inception (2010)",
      description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster.",
      thumbnail: "/Inception.webp",
      url: "https://youtu.be/watch?v=YoHD9XEInc0",
      date: "2010",
      ratings : 8.3
    },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
    { href: "/movies", icon: VideoIcon, label: "Movies" },
    { href: "/projects", icon: FolderIcon, label: "Projects" },
    { href: "/gadgets", icon: Icons.shop, label: "Gadgets" },
  ],
  contact: {
    email: "aridalimunthe11@gmail.com",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/ariedalimunthe",
        icon: Icons.github,
        navbar: true,
      },
      Disqus: {
        name: "Disqus",
         url: "https://disqus.com/by/ariedalimunthe/",
        icon: Icons.disqus,
        navbar: true,
      },
      Facebook: {
        name: "Facebook",
         url: "https://www.facebook.com/ariedalimunthe77/",
        icon: Icons.facebook,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/ariedalimunthe",
        icon: Icons.x,

        navbar: true,
      },
     buyMeACoffee: {
        name: "buyMeACoffee",
        url: "https://trakteer.id/ari_dalimunthe/tip",
        icon: Icons.buyMeACoffee,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:aridalimunthe11@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
      Steam: {
        name: "Steam",
         url: "https://steamcommunity.com/id/ariedalimunthe/",
        icon: Icons.steam,
        navbar: true,
      },
      Spotify: {
        name: "Spotify",
         url: "https://open.spotify.com/playlist/5yJx9xGKLxOGHVdmrhyNDX",
        icon: Icons.spotify,
        navbar: true,
      },
    },
  },

  // not mine
  // work: [
  //   {
  //     company: "Atomic Finance",
  //     href: "https://atomic.finance",
  //     badges: [],
  //     location: "Remote",
  //     title: "Bitcoin Protocol Engineer",
  //     logoUrl: "/atomic.png",
  //     start: "May 2021",
  //     end: "Oct 2022",
  //     description:
  //       "Implemented the Bitcoin discreet log contract (DLC) protocol specifications as an open source Typescript SDK. Dockerized all microservices and setup production kubernetes cluster. Architected a data lake using AWS S3 and Athena for historical backtesting of bitcoin trading strategies. Built a mobile app using react native and typescript.",
  //   },
  //   {
  //     company: "Shopify",
  //     badges: [],
  //     href: "https://shopify.com",
  //     location: "Remote",
  //     title: "Software Engineer",
  //     logoUrl: "/shopify.svg",
  //     start: "January 2021",
  //     end: "April 2021",
  //     description:
  //       "Implemented a custom Kubernetes controller in Go to automate the deployment of MySQL and ProxySQL custom resources in order to enable 2,000+ internal developers to instantly deploy their app databases to production. Wrote several scripts in Go to automate MySQL database failovers while maintaining master-slave replication topologies and keeping Zookeeper nodes consistent with changes.",
  //   },
  //   {
  //     company: "Nvidia",
  //     href: "https://nvidia.com/",
  //     badges: [],
  //     location: "Santa Clara, CA",
  //     title: "Software Engineer",
  //     logoUrl: "/nvidia.png",
  //     start: "January 2020",
  //     end: "April 2020",
  //     description:
  //       "Architected and wrote the entire MVP of the GeForce Now Cloud Gaming internal admin and A/B testing dashboard using React, Redux, TypeScript, and Python.",
  //   },
  //   {
  //     company: "Splunk",
  //     href: "https://splunk.com",
  //     badges: [],
  //     location: "San Jose, CA",
  //     title: "Software Engineer",
  //     logoUrl: "/splunk.svg",
  //     start: "January 2019",
  //     end: "April 2019",
  //     description:
  //       "Co-developed a prototype iOS app with another intern in Swift for the new Splunk Phantom security orchestration product (later publicly demoed and launched at .conf annual conference in Las Vegas). Implemented a realtime service for the iOS app in Django (Python) and C++; serialized data using protobufs transmitted over gRPC resulting in an approximate 500% increase in data throughput.",
  //   },
  //   {
  //     company: "Lime",
  //     href: "https://li.me/",
  //     badges: [],
  //     location: "San Francisco, CA",
  //     title: "Software Engineer",
  //     logoUrl: "/lime.svg",
  //     start: "January 2018",
  //     end: "April 2018",
  //     description:
  //       "Proposed and implemented an internal ruby API for sending/receiving commands to scooters over LTE networks. Developed a fully automated bike firmware update system to handle asynchronous firmware updates of over 100,000+ scooters worldwide, and provide progress reports in real-time using React, Ruby on Rails, PostgreSQL and AWS EC2 saving hundreds of developer hours.",
  //   },
  //   {
  //     company: "Mitre Media",
  //     href: "https://mitremedia.com/",
  //     badges: [],
  //     location: "Toronto, ON",
  //     title: "Software Engineer",
  //     logoUrl: "/mitremedia.png",
  //     start: "May 2017",
  //     end: "August 2017",
  //     description:
  //       "Designed and implemented a robust password encryption and browser cookie storage system in Ruby on Rails. Leveraged the Yahoo finance API to develop the dividend.com equity screener",
  //   },
  // ],
  education: [
    {
      school: "University of Logistics and International Business (ULBI)",
      href: "https://ulbi.ac.id/",
      degree: "B, Graduate Degree :Informatics Engineering is an engineering discipline that combines Information Technology (IT) with engineering concepts",
      logoUrl: "/ulbi.png",
      start: "2014",
      end: "2017",
    },
 
  ],
  projects: [
    {
      title: "Coming Soon",
      href: "#!",
      dates: "November 2025 - Desember 2025",
      active: true,
      description:
        "Some Projects",
      technologies: [
        "PHP 8.3.24",
        "Codeigniter 4",
        "JWT Web App",
        "CSS",
        "Mysql",
      ],
      links: [
        {
          type: "Website",
          href: "#!",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "#1",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/comingsoon.jpg",
     
    },
    
    
  ],
  hackathons: [
    {
      title: "Smart India Hackathon",
      dates: "March 23rd - 25th, 2022",
      location: "Bhubaneswar, India",
      description:
        "Developed a learing portal with some free education content with the best paid contents too, the project was called as 'EducationX'.",
      image:
        "/smart-india-hackathon.webp",
      mlh: "https://github.com/Synchrotek/E-LearningX",
      links: [],
    },
    {
      title: "Smart India Hackathon",
      dates: "December 19th - 23rd, 2023",
      location: "Bhubaneswar, India",
      description:
        "Developed A collaborative coding web platform that enables Multiuser collboration on a coding project in real-time with features of group chat, to-do lists.",
      image:
        "/logo.webp",
      mlh: "https://nexuslink01v.netlify.app/",
      links: [],
    },
  ],
} as const;
