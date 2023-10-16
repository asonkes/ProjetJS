// router.js
import { createRouter, createWebHistory } from 'vue-router'

import ServicePage from './pages/ServicePage.vue'
import RealisationPage from './pages/RealisationPage.vue'
import ContactPage from './pages/ContactPage.vue'
import EspaceProPage from './pages/EspaceProPage.vue'

const routes = [
    {
        path: "/",
        component: ServicePage,
        name: "Services"
    },
    {
        path: "/realisations",
        component: RealisationPage,
        name: "Réalisations"
    },
    {
        path: "/contact",
        component: ContactPage,
        name: "Contact"
    },
    {
        path: "/espace-pro",
        component: EspaceProPage,
        name: "Espace Pro"
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router