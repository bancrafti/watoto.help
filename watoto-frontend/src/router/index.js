import HomeView from '@/views/homeView.vue'
import LoginView from '@/views/loginView.vue'
import SignupView from '@/views/signupView.vue'
import { createRouter, createWebHistory } from 'vue-router'
import DashboardView from '@/views/dashboardView.vue'
import DonationForm from '@/views/donationForm.vue'
import AdminPanel from '@/views/AdminPanel.vue'
import ThankYou from '@/views/ThankYou.vue'
import ForgotPassword from '@/views/ForgotPassword.vue'

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
    path: '/forgot-password',
    name: 'ForgotPassword',
    component: ForgotPassword
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
    component: DonationForm,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/admin',
    name: 'admin',
    component: AdminPanel,
    meta: {
      requiresAuth: true,
      requiresAdmin: true
    }
  },
  {
    path: '/thank-you',
    name: 'ThankYou',
    component: ThankYou
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// Navigation guard
router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token')
  const user = JSON.parse(localStorage.getItem('user') || '{}')

  if (to.meta.requiresAuth && !token) {
    next('/login')
  } else if (to.meta.requiresAdmin && user.role !== 'admin') {
    next('/')
  } else {
    next()
  }
})

export default router
