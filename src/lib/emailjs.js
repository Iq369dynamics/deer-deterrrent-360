import emailjs from '@emailjs/browser'

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID ?? 'template_41ph1pj'
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

const PLAN_LABELS = {
  small: 'Small Vehicles — $45',
  medium: 'Medium Vehicles — $65',
  large: 'Large Vehicles — $85',
  unsure: 'Not Sure Yet',
}

export function isEmailJsConfigured() {
  return Boolean(SERVICE_ID && PUBLIC_KEY && TEMPLATE_ID)
}

export function getPlanLabel(planValue) {
  return PLAN_LABELS[planValue] ?? planValue
}

/**
 * Sends signup data to EmailJS. Template variables match EmailJS template:
 * first_name, last_name, name, email, state, phone, package, time
 */
export async function sendSignupEmail({ firstName, lastName, email, state, phone, plan }) {
  if (!isEmailJsConfigured()) {
    throw new Error(
      'EmailJS is not configured. Add VITE_EMAILJS_SERVICE_ID and VITE_EMAILJS_PUBLIC_KEY to your .env file.',
    )
  }

  const trimmedFirst = firstName.trim()
  const trimmedLast = lastName.trim()
  const trimmedEmail = email.trim()
  const trimmedPhone = phone?.trim() || 'Not provided'
  const packageLabel = getPlanLabel(plan)

  const templateParams = {
    first_name: trimmedFirst,
    last_name: trimmedLast,
    name: `${trimmedFirst} ${trimmedLast}`,
    email: trimmedEmail,
    state,
    phone: trimmedPhone,
    package: packageLabel,
    time: new Date().toLocaleString('en-US', {
      dateStyle: 'medium',
      timeStyle: 'short',
    }),
  }

  return emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, { publicKey: PUBLIC_KEY })
}
