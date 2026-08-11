export type Member = {
  name: string;
  role: string;
  year: string;
  major: string;
  image: string;
  linkedin: string | null;
};

export const executiveBoard: Member[] = [
  { name: "Nikhil Rajgopal", role: "President", year: "Junior", major: "Data Science, Economics", image: "/images/nikhil-rajgopal-headshot.jpeg", linkedin: "http://www.linkedin.com/in/nikhil-rajgopal-7051b51b6" },
  { name: "Chiara Rignot", role: "External VP", year: "Junior", major: "Data Science, Philosophy", image: "/images/chiara-rignot-headshot.jpg", linkedin: "https://www.linkedin.com/in/chiara-rignot1/" },
  { name: "Casey Colson", role: "Co-Internal VP", year: "Junior", major: "Statistics", image: "/images/casey-colson-headshot.JPEG", linkedin: "https://www.linkedin.com/in/caseycolson/" },
  { name: "Vrushtee Shah", role: "Co-Internal VP", year: "Junior", major: "Data Science, Legal Studies", image: "/images/vrushtee-shah-headshot.jpg", linkedin: "https://www.linkedin.com/in/vrushteeshah13/" },
  { name: "Dennis Vengerov", role: "Co-VP of Projects", year: "Junior", major: "Data Science, Computer Science", image: "/images/dennis-vengerov-headshot.jpg", linkedin: "https://www.linkedin.com/in/dennis-vengerov-a78376294/" },
  { name: "Akshay Anand", role: "Co-VP of Projects", year: "Junior", major: "Computer Science", image: "/images/akshay-anand-headshot.jpeg", linkedin: "https://www.linkedin.com/in/akshay-anand-968b27230/" },
  { name: "Cathryn Chang", role: "VP of Operations", year: "Junior", major: "Computer Science, Data Science", image: "/images/cathryn-chang-headshot.jpg", linkedin: "https://www.linkedin.com/in/cathryn-chang/" },
  { name: "Julia Shvartsman", role: "VP of Professional Development", year: "Junior", major: "Data Science", image: "/images/julia-shvartsman-headshot.jpeg", linkedin: "https://www.linkedin.com/in/julia-shvartsman-4a89692ab/" },
  { name: "Hasset Mekuria", role: "Co-Dir. of Jr Consultants", year: "Junior", major: "Data Science, Political Science", image: "/images/hasset-mekuria-headshot.jpeg", linkedin: "https://www.linkedin.com/in/hasset-mekuria-2189b8271" },
  { name: "Himani Balaga", role: "Co-Dir. of Jr Consultants", year: "Junior", major: "Data Science", image: "/images/himani-balaga-headshot.png", linkedin: "https://www.linkedin.com/in/himani-balaga/" },
  { name: "Kira Pan", role: "Dir. of Marketing", year: "Junior", major: "Cognitive Science", image: "/images/kira-pan-headshot-2.JPG", linkedin: "https://www.linkedin.com/in/kira-z-pan" },
  { name: "Alexander Zhao", role: "Jr VP of Operations", year: "Sophomore", major: "Statistics, Data Science", image: "/images/alexander-zhao-headshot.jpg", linkedin: "https://www.linkedin.com/in/alexander-zhao-/" },
  { name: "Rohan Dash", role: "Jr External VP", year: "Sophomore", major: "Data Science", image: "/images/rohan-dash-headshot.jpg", linkedin: "https://www.linkedin.com/in/rohan-dash-6b83312b1" },
  { name: "Jonathan Wagner", role: "Co-Jr Internal VP", year: "Sophomore", major: "Political Economy, Data Science", image: "/images/jonathan-wagner-headshot.jpg", linkedin: "https://www.linkedin.com/in/jonathan-a-wagner" },
  { name: "Krishna Narayanasamy", role: "Co-Jr Internal VP", year: "Sophomore", major: "Data Science", image: "/images/krishna-narayanasamy-headshot.jpg", linkedin: "http://www.linkedin.com/in/krishna-narayanasamy" },
];

export const consultants: Member[] = [
  { name: "Himani Balaga", role: "Project Manager", year: "Junior", major: "Data Science", image: "/images/himani-balaga-headshot.png", linkedin: "https://www.linkedin.com/in/himani-balaga/" },
  { name: "Arjun Kelkar", role: "Project Manager", year: "Junior", major: "Data Science, Economics", image: "/images/arjun-kelkar-headshot.png", linkedin: "https://www.linkedin.com/in/arjun-kelkar-924598350/" },
  { name: "Viktor Gonzalez", role: "Project Manager", year: "Junior", major: "Data Science", image: "/images/viktor-gonzalez-headshot.png", linkedin: "https://www.linkedin.com/in/viktor-gonzalez-ab974a343/" },
  { name: "Nikhil Rajgopal", role: "Project Manager", year: "Junior", major: "Data Science, Economics", image: "/images/nikhil-rajgopal-headshot.jpeg", linkedin: "http://www.linkedin.com/in/nikhil-rajgopal-7051b51b6" },
  { name: "Dhruv Hebbar", role: "Project Manager", year: "Junior", major: "Data Science, Economics", image: "/images/dhruv-hebbar-headshot.jpeg", linkedin: "https://www.linkedin.com/in/dhruvhebbar" },
  { name: "Oscar Araujo", role: "Project Manager", year: "Senior", major: "Data Science, Economics", image: "/images/oscar-araujo-headshot.jpeg", linkedin: "https://www.linkedin.com/in/oscara-raujo" },
  { name: "Julia Shvartsman", role: "Consultant", year: "Junior", major: "Data Science", image: "/images/julia-shvartsman-headshot.jpeg", linkedin: "https://www.linkedin.com/in/julia-shvartsman-4a89692ab/" },
  { name: "Kathy Yun", role: "Consultant", year: "Junior", major: "Data Science", image: "/images/kathy-yun-headshot.JPG", linkedin: "https://www.linkedin.com/in/kathy-yun-2b4128314/" },
  { name: "Yash Chitambar", role: "Consultant", year: "Junior", major: "Computer Science, Data Science", image: "/images/yash-chitambar-headshot.jpeg", linkedin: "https://www.linkedin.com/in/yash-chitambar-b3139829a/" },
  { name: "Shaivi Shah", role: "Consultant", year: "Senior", major: "Data Science", image: "/images/shaivi-shah-headshot.jpeg", linkedin: "https://www.linkedin.com/in/shaivi-shah-6b9b30305/" },
  { name: "Rayan Sudeora", role: "Consultant", year: "Senior", major: "Data Science, Cognitive Science", image: "/images/rayan-sudeora-headshot.png", linkedin: "https://www.linkedin.com/in/rayansudeora/" },
  { name: "Vrushtee Shah", role: "Consultant", year: "Junior", major: "Data Science, Legal Studies", image: "/images/vrushtee-shah-headshot.jpg", linkedin: "https://www.linkedin.com/in/vrushteeshah13/" },
  { name: "Hasset Mekuria", role: "Consultant", year: "Junior", major: "Data Science, Political Science", image: "/images/hasset-mekuria-headshot.jpeg", linkedin: "http://www.linkedin.com/in/hasset-mekuria-2189b8271" },
  { name: "Kira Pan", role: "Consultant", year: "Junior", major: "Cognitive Science", image: "/images/kira-pan-headshot-2.JPG", linkedin: "https://www.linkedin.com/in/kira-z-pan" },
  { name: "Casey Colson", role: "Consultant", year: "Junior", major: "Statistics", image: "/images/casey-colson-headshot.JPEG", linkedin: "https://www.linkedin.com/in/caseycolson/" },
  { name: "Avyukth Harish", role: "Consultant", year: "Junior", major: "Data Science", image: "/images/avyukth-harish-headshot.jpg", linkedin: "http://linkedin.com/in/avy-harish" },
  { name: "Alexander Zhao", role: "Consultant", year: "Sophomore", major: "Statistics, Data Science", image: "/images/alexander-zhao-headshot.jpg", linkedin: "https://www.linkedin.com/in/alexander-zhao-/" },
  { name: "Anthony Kobzar", role: "Consultant", year: "Junior", major: "Applied Math, Data Science", image: "/images/anthony-kobzar-headshot.jpg", linkedin: "https://www.linkedin.com/in/anthony-kobzar-182889252/" },
  { name: "Jayden Burton", role: "Consultant", year: "Junior", major: "Data Science", image: "/images/jayden-burton-headshot.jpg", linkedin: "https://www.linkedin.com/in/jaydenburton/" },
  { name: "Chiara Rignot", role: "Consultant", year: "Junior", major: "Data Science, Philosophy", image: "/images/chiara-rignot-headshot.jpg", linkedin: "https://www.linkedin.com/in/chiara-rignot1/" },
  { name: "Paulo Trento", role: "Consultant", year: "Junior", major: "Applied Math, Data Science", image: "/images/paulo-trento-headshot.jpg", linkedin: "https://www.linkedin.com/in/paulo-trento-469175382/" },
  { name: "Rohan Dash", role: "Consultant", year: "Sophomore", major: "Data Science", image: "/images/rohan-dash-headshot.jpg", linkedin: "https://www.linkedin.com/in/rohan-dash-6b83312b1" },
  { name: "Krishna Narayanasamy", role: "Consultant", year: "Sophomore", major: "Data Science", image: "/images/krishna-narayanasamy-headshot.jpg", linkedin: "http://www.linkedin.com/in/krishna-narayanasamy" },
  { name: "Diya Pendyala", role: "Consultant", year: "Junior", major: "Data Science, Comp Bio", image: "/images/diya-pendyala-headshot.jpg", linkedin: null },
  { name: "Cole Dickerson", role: "Consultant", year: "Junior", major: "Data Science", image: "/images/cole-dickerson-headshot.jpg", linkedin: "https://www.linkedin.com/in/cole-dickerson-43b499324/" },
  { name: "Ria Voodi", role: "Consultant", year: "Junior", major: "Data Science, Economics", image: "/images/ria-voodi-headshot.jpeg", linkedin: "https://www.linkedin.com/in/riavoodi/" },
  { name: "Cathryn Chang", role: "Consultant", year: "Junior", major: "Computer Science, Data Science", image: "/images/cathryn-chang-headshot.jpg", linkedin: "https://www.linkedin.com/in/cathryn-chang/" },
  { name: "Akshay Anand", role: "Consultant", year: "Junior", major: "Computer Science", image: "/images/akshay-anand-headshot.jpeg", linkedin: "https://www.linkedin.com/in/akshay-anand-968b27230/" },
  { name: "Dennis Vengerov", role: "Consultant", year: "Junior", major: "Data Science, Computer Science", image: "/images/dennis-vengerov-headshot.jpg", linkedin: "https://www.linkedin.com/in/dennis-vengerov-a78376294/" },
];

export const seniorAdvisors: Member[] = [
  { name: "Hannah Chung", role: "Senior Advisor", year: "Senior", major: "Statistics", image: "/images/hannah-chung-headshot.jpeg", linkedin: "https://www.linkedin.com/in/hannah-c-8714121b2/" },
  { name: "Ethan Wei", role: "Senior Advisor", year: "Senior", major: "Data Science, Statistics", image: "/images/ethan-wei-headshot.jpeg", linkedin: "https://www.linkedin.com/in/ethan-wei-b24345235/" },
  { name: "Divya Madgula", role: "Senior Advisor", year: "Senior", major: "Applied Math, Data Science", image: "/images/divya-madgula-headshot.png", linkedin: "https://www.linkedin.com/in/divya-madgula/" },
  { name: "Arav Sachdeva", role: "Senior Advisor", year: "Senior", major: "Computer Science, Data Science", image: "/images/arav-sachdeva-headshot.jpeg", linkedin: "https://www.linkedin.com/in/aravs/" },
  { name: "Neil Thomas", role: "Senior Advisor", year: "Junior", major: "EECS, Pure Math", image: "/images/neil-thomas-headshot.jpeg", linkedin: "https://www.linkedin.com/in/neiltthomas" },
];
