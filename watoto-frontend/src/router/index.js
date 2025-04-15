import HomeView from '@/views/homeView.vue'
import LoginView from '@/views/loginView.vue'
import SignupView from '@/views/signupView.vue'
import { createRouter, createWebHistory } from 'vue-router'
import DashboardView from '@/views/dashboardView.vue'
import DonationForm from '@/views/donationForm.vue'
import AdminPanel from '@/views/AdminPanel.vue'
import ThankYou from '@/views/ThankYou.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginView
  },
  {
    path: '/signup',
    name: 'Signup',
    component: SignupView
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: DashboardView,
    meta: {
      requiresAuth: true
    }
  },

  {
    path: '/donate',
    name: 'DonationForm',
    component: DonationForm
  },
  {
    path:'/admin',
    name:'admin',
    component:AdminPanel
  },
  {
    path:'/thank-you',
    name:'ThankYou',
    component:ThankYou
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
