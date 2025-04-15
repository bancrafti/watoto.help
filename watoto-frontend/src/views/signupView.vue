<!-- Signup.vue -->
<template>
  <div class="auth-container">
    <div class="auth-card">
      <h1 class="title">Create Account</h1>
      <p class="subtitle">Join our donation platform</p>

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
              Please enter a valid email
            </div>
          </div>

          <div class="input-group">
            <label for="password">Password</label>
            <input
              id="password"
              v-model="password"
              type="password"
              placeholder="Create a password (min 8 chars)"
              required
              minlength="8"
            />
          </div>

          <div class="input-group">
            <label for="confirmPassword">Confirm Password</label>
            <input
              id="confirmPassword"
              v-model="confirmPassword"
              type="password"
              placeholder="Confirm your password"
              required
            />
            <div class="hint" v-if="!passwordsMatch && confirmPassword">
              Passwords don't match
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
          <router-link to="/login">Log In</router-link>
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
const confirmPassword = ref('')
const message = ref('')
const messageType = ref('')
const isLoading = ref(false)
const router = useRouter()

const isEmailValid = computed(() =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)
)

const passwordsMatch = computed(() =>
  password.value === confirmPassword.value
)

const isFormValid = computed(() =>
  name.value.trim() &&
  email.value.trim() &&
  password.value.trim() &&
  confirmPassword.value.trim() &&
  isEmailValid.value &&
  passwordsMatch.value &&
  password.value.length >= 8
)

const messageClass = computed(() =>
  messageType.value === 'success' ? 'success-message' : 'error-message'
)

const handleSignup = async () => {
  message.value = ''
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

    // Store user data in localStorage right after successful signup
    if (response && response.data) {
      localStorage.setItem('token', response.data.token)
      localStorage.setItem('user', JSON.stringify(response.data.user))
      message.value = 'Account created! Redirecting to dashboard...'
      messageType.value = 'success'
      setTimeout(() => router.push('/dashboard'), 1500)
    } else {
      message.value = 'Account created! Redirecting to login...'
      messageType.value = 'success'
      setTimeout(() => router.push('/login'), 1500)
    }
  } catch (err) {
    message.value = err.response?.data?.message || 'Registration failed'
    messageType.value = 'error'
  } finally {
    isLoading.value = false
  }
}
</script>

<style scoped>
.auth-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: var(--lightBrown);
  padding: 2rem;
}

.auth-card {
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  padding: 2.5rem;
  width: 100%;
  max-width: 400px;
  border: 1px solid rgba(255, 255, 255, 0.3);
}

.title {
  font-size: 2rem;
  color: var(--darkBrown);
  margin-bottom: 0.5rem;
}

.subtitle {
  color: var(--midBrown);
  margin-bottom: 2rem;
}

.input-group {
  margin-bottom: 1.5rem;
}

label {
  display: block;
  color: var(--darkBrown);
  margin-bottom: 0.5rem;
  font-weight: 500;
}

input {
  width: 100%;
  padding: 0.875rem;
  border: 1px solid var(--midBrown);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.8);
  transition: all 0.3s ease;
}

input:focus {
  outline: none;
  border-color: var(--darkBrown);
  box-shadow: 0 0 0 3px rgba(107, 79, 74, 0.1);
}

.hint {
  font-size: 0.875rem;
  color: #e53e3e;
  margin-top: 0.25rem;
}

.auth-btn {
  width: 100%;
  padding: 1rem;
  background: var(--darkBrown);
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 1rem;
}

.auth-btn:hover:not(:disabled) {
  background: #000000;
  transform: translateY(-1px);
}

.auth-btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.extra-links {
  margin-top: 1.5rem;
  text-align: center;
}

.extra-links a {
  color: var(--midBrown);
  text-decoration: none;
  font-weight: 500;
}

.extra-links a:hover {
  text-decoration: underline;
}

.success-message {
  color: #38a169;
  margin-top: 1rem;
}

.error-message {
  color: #e53e3e;
  margin-top: 1rem;
}
</style>
