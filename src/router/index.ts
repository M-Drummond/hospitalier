import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/beds',
      name: 'beds',
      component: () => import('../views/BedsView.vue')
    },
    {
      path: '/patients',
      name: 'patients',
      component: () => import('../views/PatientsView.vue')
    },
    {
      path: '/patient/:slug',
      name: 'View Patient',
      component: () => import('../views/SinglePatientView.vue')
    },
    {
      path: '/unassigned',
      name: 'View Unassigned Patients',
      component: () => import('../views/UnassignedPatientsView.vue')
    }
  ]
})

export default router
