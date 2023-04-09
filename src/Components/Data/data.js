import { AiOutlineLinkedin } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { FiPhone } from "react-icons/fi";

const carouselImages = [
  {
    id: 1,
    name: "Image1",
    source:
      "https://cdn.pixabay.com/photo/2020/05/18/16/17/social-media-5187243_960_720.png",
  },
  {
    id: 2,
    name: "Image2",
    source:
      "https://cdn.pixabay.com/photo/2019/06/19/07/13/email-4284157_960_720.png",
  },
  {
    id: 3,
    name: "Image3",
    source:
      "https://cdn.pixabay.com/photo/2019/04/20/04/51/social-media-4140959_960_720.jpg",
  },
  {
    id: 4,
    name: "Image4",
    source:
      "https://cdn.pixabay.com/photo/2016/08/20/06/15/statistic-1606951_960_720.png",
  },
  {
    id: 5,
    name: "Image5",
    source:
      "https://cdn.pixabay.com/photo/2019/05/26/06/05/digital-marketing-4229637_960_720.jpg",
  },
];

const aboutUs = [
  {
    id: 1,
    title: "About us",
    description: `Tarak Global Enterprises was established in 2020 as a consultancy and
        project management firm. We undertake projects for market research,
        market intelligence studies, marketing, business growth, feasibility
        studies and for setting up new factories or divisions.Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
        Enim provident voluptatibus nemo voluptates veniam maiores consequuntur repudiandae molestiae inventore, id reprehenderit ad, sed 
        libero incidunt dicta maxime recusandae assumenda minima.`,
    image: "../Assets/img/team.jpeg",
  },
  {
    id: 2,
    title: "Our team",
    description: `We have handled projects for radiography machines, welding
    consumables, metal fabrication, steel grinding media, dry wall cutting
    machines and high Nickel alloys . Currently we are representing Taisei
    International Corporation, Japan in India for both imports and exports
    of metals. Our CEO has four decades of leadership experience in
    various industries like ship building, welding machines, welding
    consumables, alloy castings and fabrication. A metallurgical engineer
    with post graduation in management, he has also completed a global
    strategic management program and attended many international business
    summits. He comes with extensive international business exposure
    acquired through work experience in the Middle East, China, as well as
    many countries in Africa, Europe and around the world. We have a
    committed team of marketing and technical professionals to assist him.
    We also have a pool of freelancers to choose from based on the
    specific skills needed for projects undertaken.`,
    image: "../Assets/img/ourteam2.jpeg",
  },
  {
    id: 3,
    title: "Summary of Activities",
    description: `We have handled projects for radiography machines, welding
    consumables, metal fabrication, steel grinding media, dry wall cutting
    machines and high Nickel alloys . Currently we are representing Taisei
    International Corporation, Japan in India for both imports and exports
    of metals. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim provident 
    voluptatibus nemo voluptates veniam maiores consequuntur repudiandae molestiae inventore, id reprehenderit ad, 
    sed libero incidunt dicta maxime recusandae assumenda minima.`,
    image: "../Assets/img/ourteam2.jpeg",
  },
];

const services = [
  {
    id: 1,
    title: "Marketing ( to develop new territories or new brands )",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, facilis dolorum veniam fugit esse deserunt voluptatibus totam mollitia, corporis dolorem et! Laudantium corporis magnam praesentium veniam odit sed esse fuga.",
  },
  {
    id: 2,
    title: "Market potential analysis",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, facilis dolorum veniam fugit esse deserunt voluptatibus totam mollitia, corporis dolorem et! Laudantium corporis magnam praesentium veniam odit sed esse fuga.",
  },
  {
    id: 1,
    title: "Liaisoning with government agencies for new projects.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, facilis dolorum veniam fugit esse deserunt voluptatibus totam mollitia, corporis dolorem et! Laudantium corporis magnam praesentium veniam odit sed esse fuga.",
  },
  {
    id: 1,
    title: "Manpower selection",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, facilis dolorum veniam fugit esse deserunt voluptatibus totam mollitia, corporis dolorem et! Laudantium corporis magnam praesentium veniam odit sed esse fuga.",
  },
  {
    id: 1,
    title: "Customer approvals",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, facilis dolorum veniam fugit esse deserunt voluptatibus totam mollitia, corporis dolorem et! Laudantium corporis magnam praesentium veniam odit sed esse fuga.",
  },
  {
    id: 1,
    title: "Test marketing",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, facilis dolorum veniam fugit esse deserunt voluptatibus totam mollitia, corporis dolorem et! Laudantium corporis magnam praesentium veniam odit sed esse fuga.",
  },
];
const contactInformation = [
  {
    id: 1,
    icon: <AiOutlineLinkedin size={40} color="#7733FF" />,
    title: "TARAK Global Enterprises",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro molestias qui veritatis consectetur",
  },
  {
    id: 2,
    icon: <AiOutlineLinkedin size={40} color="#7733FF" />,
    title: "Ramesh Achuthan Thayyil",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro molestias qui veritatis consectetur",
  },
  {
    id: 3,
    icon: <FiPhone size={40} color="#7733FF" />,
    title: "+918605373028 | +919623074249",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro molestias qui veritatis consectetur",
  },
  {
    id: 4,
    icon: <AiOutlineMail size={40} color="#7733FF" />,
    title: "tarakglobal@gmail.com",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro molestias qui veritatis consectetur",
  },
  {
    id: 5,
    icon: <AiOutlineMail size={40} color="#7733FF" />,
    title: "thayyilramesh9@gmail.com",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro molestias qui veritatis consectetur",
  },
];
export { carouselImages, aboutUs, services, contactInformation };
