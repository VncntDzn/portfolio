import Home from 'pages/Home';
import ProjectDetails from 'pages/ProjectDetails';
import NotFound from 'pages/NotFound';

const routes = [
    {
        name: 'Home',
        path: '/',
        component: Home
    },
    {
        name: 'Project Details',
        path: '/project-details/:name',
        component: ProjectDetails
    },
    {
        name: 'NotFound',
        path: '*',
        component: NotFound
    }
]

export default routes;