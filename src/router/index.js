import {createRouter, createWebHistory} from 'vue-router'
import HomeView from "@/views/pages/HomeView";
import AboutView from "@/views/pages/AboutView";
import ContactsView from "@/views/pages/ContactsView";
import WorksView from "@/views/pages/WorksView";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomeView,
    },
    {
        path: '/about',
        name: 'About',
        component: AboutView,
    },
    {
        path: '/works',
        name: 'Works',
        component: WorksView,
    },
    {
        path: '/contacts',
        name: 'Contacts',
        component: ContactsView,
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
