<template>
  <div class="auth-container">
    <div class="auth-card">
      <h1 class="title">Create Account</h1>
      <p class="subtitle">Sign up to start donating</p>

      <div class="form">
        <form @submit.prevent="handleSignup">
          <div class="input-group">
            <label for="name">Full Name</label>
            <input
              id="name"
              v-model="name"
              type="text"
              placeholder="Enter your full name"
              required
            />
          </div>

          <div class="input-group">
            <label for="email">Email</label>
            <input
              id="email"
              v-model="email"
              type="email"
              placeholder="Enter your email"
              required
            />
            <div class="hint" v-if="!isEmailValid && email">
              Please enter a valid email address
            </div>
          </div>

          <div class="input-group">
            <label for="password">Password</label>
            <input
              id="password"
              v-model="password"
              type="password"
              placeholder="Enter your password"
              required
              minlength="8"
            />
            <div class="hint" v-if="password.length > 0 && password.length < 8">
              Password must be at least 8 characters long
            </div>
          </div>

          <button
            type="submit"
            class="auth-btn"
            :disabled="isLoading || !isFormValid"
          >
            {{ isLoading ? 'Creating account...' : 'Sign Up' }}
          </button>
        </form>

        <p v-if="message" :class="messageClass">{{ message }}</p>
      </div>

      <div class="extra-links">
        <p>
          Already have an account?
          <router-link to="/login">Login</router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { signup } from '@/services/auth'

const name = ref('')
const email = ref('')
const password = ref('')
const message = ref('')
const messageType = ref('')
const isLoading = ref(false)
const router = useRouter()

const isEmailValid = computed(() => {
  if (!email.value) return true
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email.value)
})

const isFormValid = computed(() => {
  return (
    name.value.trim() &&
    email.value.trim() &&
    password.value.trim() &&
    isEmailValid.value &&
    password.value.length >= 8
  )
})

const messageClass = computed(() =>
  messageType.value === 'success' ? 'success-message' : 'error-message'
)

const handleSignup = async () => {
  message.value = ''
  messageType.value = ''

  if (!isFormValid.value) {
    message.value = 'Please fill all fields correctly'
    messageType.value = 'error'
    return
  }

  isLoading.value = true
  try {
    const response = await signup({
      name: name.value,
      email: email.value,
      password: password.value
    })

    if (response.token) {
      localStorage.setItem('token', response.token)
      localStorage.setItem('user', JSON.stringify(response.data.user))
      message.value = 'Account created successfully!'
      messageType.value = 'success'
      
      // Redirect after a short delay
      setTimeout(() => {
        router.push('/')
      }, 1000)
    }
  } catch (error) {
    message.value = error.message || 'Signup failed. Please try again.'
    messageType.value = 'error'
  } finally {
    isLoading.value = false
  }
}
</script>

<style scoped>
.auth-container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--lightBrown);
  padding: 20px;
}

.auth-card {
  background-color: var(--white);
  padding: 40px;
  border-radius: 16px;
  box-shadow: 0 6px 14px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
}

.title {
  text-align: center;
  color: var(--darkBrown);
  margin-bottom: 10px;
}

.subtitle {
  text-align: center;
  color: #666;
  margin-bottom: 30px;
}

.form {
  margin-bottom: 20px;
}

.input-group {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 8px;
  color: var(--darkBrown);
  font-weight: 500;
}

input {
  width: 100%;
  padding: 12px;
  border: 1px solid var(--midbrown);
  border-radius: 8px;
  background-color: var(--lightestBrown);
  font-size: 1rem;
}

.hint {
  font-size: 0.8rem;
  color: #d9534f;
  margin-top: 4px;
}

.auth-btn {
  width: 100%;
  padding: 14px;
  background-color: var(--midbrown);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;
}

.auth-btn:hover {
  background-color: #c9302c;
}

.auth-btn:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.extra-links {
  text-align: center;
  margin-top: 20px;
}

.extra-links a {
  color: var(--midbrown);
  text-decoration: none;
}

.extra-links a:hover {
  text-decoration: underline;
}

.success-message {
  color: #28a745;
  text-align: center;
  margin-top: 10px;
}

.error-message {
  color: #d9534f;
  text-align: center;
  margin-top: 10px;
}

:root {
  --darkBrown: #8c5c38;
  --lightBrown: #e5d4c0;
  --midbrown: #a47148;
  --lightestBrown: #fefaf0;
  --white: #ffffff;
}
</style> 