import Anime from 'assets/projects/web/Anime.png';
import Portfolio from 'assets/projects/web/Portfolio.png';
import RTL from 'assets/projects/web/RTL.png';
import Traderly from 'assets/projects/web/Traderly.png';


const webProjects = [
    {
        id: 1,
        name: 'Traderly',
        url: 'https://traderly.vercel.app/',
        image: Traderly,
        description: 'A journal website for traders.',
        dev_date: 'June 2021 - July 2021',
        tech_stack: ['Material-UI', 'ReactJs', 'NextJs', 'Redux-toolkit', 'Firestore']
    },
    {
        id: 2,
        name: 'Portfolio',
        url: 'http://vpdizon.vercel.app/',
        image: Portfolio,
        description: 'My personal website',
        dev_date: 'June 2021 - June 2021',
        tech_stack: ['Material-UI', 'ReactJs']
    },
    {
        id: 3,
        name: 'RTL',
        url: 'https://rtl-react.vercel.app/',
        image: RTL,
        description: 'Practice for React-Testing Library',
        dev_date: 'June 2021',
        tech_stack: ['Material-UI', 'ReactJs', 'RTL', 'Firestore']
    },
     {
        id: 4,
        name: 'Anime!',
        url: 'https://anime-vpdizon.vercel.app/',
        image: Anime,
        description: 'Practice for Redux-toolkit',
        dev_date: 'Deceomber 2020',
        tech_stack: ['SCSS', 'ReactJs', 'Redux-toolkit']
    },
];

export default webProjects;
