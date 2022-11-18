import {createRouter, createWebHistory} from 'vue-router'
import HomeView from "@/views/HomeView";
import AboutView from "@/views/AboutView";
import ContactsView from "@/views/ContactsView";
import WorksView from "@/views/WorksView";

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView,
    },
    {
        path: '/about',
        name: 'about',
        component: AboutView,
    },
    {
        path: '/works',
        name: 'works',
        component: WorksView,
    },
    {
        path: '/contacts',
        name: 'contacts',
        component: ContactsView,
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
