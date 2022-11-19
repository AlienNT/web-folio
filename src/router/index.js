import {createRouter, createWebHistory} from 'vue-router'
import HomeView from "@/views/HomeView";
import AboutView from "@/views/AboutView";
import ContactsView from "@/views/ContactsView";
import WorksView from "@/views/WorksView";

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
