import { useEffect, useState } from 'react'
import dd360Logo from '../assets/dd360-logo.jpg'
import { isEmailJsConfigured, sendSignupEmail } from '../lib/emailjs'
import './SignupPopup.css'

const US_STATES = [
  'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut',
  'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa',
  'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan',
  'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire',
  'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio',
  'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota',
  'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia',
  'Wisconsin', 'Wyoming',
]

const PLANS = [
  {
    id: 's1',
    value: 'small',
    title: 'Small Vehicles — $45',
    price: 'Compact cars & sedans',
    detail: 'Standard detection range · Mobile app · Real-time alerts',
  },
  {
    id: 's2',
    value: 'medium',
    title: 'Medium Vehicles — $65',
    price: 'SUVs & mid-size vehicles',
    detail: 'Extended range · Advanced app · Social & road reporting',
  },
  {
    id: 's3',
    value: 'large',
    title: 'Large Vehicles — $85',
    price: 'Trucks & large SUVs',
    detail: 'Maximum range · Premium app · Real-time data & statistics',
  },
  {
    id: 's4',
    value: 'unsure',
    title: 'Not Sure Yet',
    price: 'Help me choose',
    detail: 'Our team will recommend the right package for your vehicle',
  },
]

export function SignupPopup({ open, onClose }) {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [state, setState] = useState('')
  const [phone, setPhone] = useState('')
  const [plan, setPlan] = useState('')
  const [errors, setErrors] = useState({})
  const [svcError, setSvcError] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')

  const [isMounted, setIsMounted] = useState(open)
  const [isClosing, setIsClosing] = useState(false)

  useEffect(() => {
    if (!isMounted) return
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMounted])

  useEffect(() => {
    if (!open) return
    const onKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open, onClose])

  useEffect(() => {
    if (open) {
      setIsMounted(true)
      setIsClosing(false)

      // Reset when opening to keep behavior consistent.
      setFirstName('')
      setLastName('')
      setEmail('')
      setState('')
      setPhone('')
      setPlan('')
      setErrors({})
      setSvcError(false)
      setSubmitted(false)
      setIsSubmitting(false)
      setSubmitError('')
      return
    }

    if (!open && isMounted) {
      setIsClosing(true)
      const t = window.setTimeout(() => {
        setIsMounted(false)
        setIsClosing(false)
      }, 320)
      return () => window.clearTimeout(t)
    }
  }, [open])

  if (!isMounted) return null

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) onClose()
  }

  const formatPhone = (value) => {
    const digits = value.replace(/\D/g, '')
    if (digits.length >= 6) {
      return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6, 10)}`
    }
    if (digits.length >= 3) {
      return `(${digits.slice(0, 3)}) ${digits.slice(3)}`
    }
    return digits
  }

  const validate = () => {
    const nextErrors = {}
    if (!firstName.trim()) nextErrors.fName = true
    if (!lastName.trim()) nextErrors.lName = true
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) nextErrors.email = true
    if (!state) nextErrors.state = true
    const planMissing = !plan
    setErrors(nextErrors)
    setSvcError(planMissing)
    return Object.keys(nextErrors).length === 0 && !planMissing
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validate()) return

    if (!isEmailJsConfigured()) {
      setSubmitError(
        'Email service is not configured yet. Please add your EmailJS keys to the .env file and restart the dev server.',
      )
      return
    }

    setIsSubmitting(true)
    setSubmitError('')

    try {
      await sendSignupEmail({
        firstName,
        lastName,
        email,
        state,
        phone,
        plan,
      })
      setSubmitted(true)
    } catch (err) {
      console.error('EmailJS signup error:', err)
      setSubmitError(
        'We could not send your signup right now. Please try again in a moment or contact support.',
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div
      className={`signup-overlay ${open && !isClosing ? 'is-open' : 'is-closing'}`}
      role="dialog"
      aria-modal="true"
      aria-labelledby="signup-title"
      onClick={handleOverlayClick}
    >
      <div className={`signup-popup ${open && !isClosing ? 'is-open' : 'is-closing'}`}>
        <button
          type="button"
          className="signup-close-btn"
          onClick={onClose}
          title="Close"
          aria-label="Close signup"
        >
          ✕
        </button>

        {!submitted ? (
          <>
            <div className="signup-header">
              <div className="signup-logo-row">
                <div className="signup-logo-circle">
                  <img src={dd360Logo} alt="DD360" />
                </div>
                <div className="signup-brand-block">
                  <span className="signup-brand-name">Deer Deterrent 360°</span>
                  <span className="signup-brand-sub">Road Safety App & Vehicle Patch System</span>
                  <div className="signup-launch-badge">
                    <span className="signup-badge-dot" />
                    Launching July 4th, 2025
                  </div>
                </div>
              </div>

              <div className="signup-stat-row">
                <div className="signup-stat-pill">
                  <b>1.5M+</b>
                  Deer-vehicle accidents/yr in the US
                </div>
                <div className="signup-stat-pill">
                  <b>$4,000+</b>
                  Average repair cost per collision
                </div>
                <div className="signup-stat-pill">
                  <b>Real-Time</b>
                  Alert system — day & night
                </div>
              </div>

              <h1 id="signup-title">
                Stop Deer Collisions
                <em>Before They Happen.</em>
              </h1>
              <p className="signup-subhead">
                DD360 combines a <b>vehicle patch sensor</b> with a <b>smart mobile app</b> to detect
                deer near the road and alert you in real time — giving you the seconds you need
                to slow down and stay safe. Sign up before July 4th and the
                <b> first 1,000 drivers</b> get a chance to secure
                <b> one full year of free Single Coverage</b>.
              </p>

              <div className="signup-urgency-row">
                <div className="signup-track">
                  <div className="signup-fill" />
                </div>
                <span className="signup-spots-txt">
                  <b>342</b> of 1,000 spots claimed
                </span>
              </div>
            </div>

            <form className="signup-form-body" onSubmit={handleSubmit} noValidate>
              <div className="signup-row2">
                <div className="signup-field">
                  <label htmlFor="fName">
                    First Name <span className="signup-req">*</span>
                  </label>
                  <input
                    type="text"
                    id="fName"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="Jane"
                    autoComplete="given-name"
                    className={errors.fName ? 'err' : ''}
                  />
                </div>
                <div className="signup-field">
                  <label htmlFor="lName">
                    Last Name <span className="signup-req">*</span>
                  </label>
                  <input
                    type="text"
                    id="lName"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Smith"
                    autoComplete="family-name"
                    className={errors.lName ? 'err' : ''}
                  />
                </div>
              </div>

              <div className="signup-field">
                <label htmlFor="email">
                  Email Address <span className="signup-req">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="jane@example.com"
                  autoComplete="email"
                  className={errors.email ? 'err' : ''}
                />
              </div>

              <div className="signup-row2">
                <div className="signup-field">
                  <label htmlFor="state">
                    State of Residence <span className="signup-req">*</span>
                  </label>
                  <select
                    id="state"
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                    className={errors.state ? 'err' : ''}
                  >
                    <option value="" disabled>
                      Select your state…
                    </option>
                    {US_STATES.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="signup-field">
                  <label htmlFor="phone">
                    Phone <span className="signup-opt">(optional)</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={phone}
                    onChange={(e) => setPhone(formatPhone(e.target.value))}
                    placeholder="(555) 000-0000"
                    autoComplete="tel"
                  />
                </div>
              </div>

              <div className="signup-field">
                <label>
                  Protection Package <span className="signup-req">*</span>
                </label>
                <div className={`signup-svc-grid${svcError ? ' svc-err' : ''}`}>
                  {PLANS.map((p) => (
                    <div key={p.id} className="signup-svc">
                      <input
                        type="radio"
                        name="svc"
                        id={p.id}
                        value={p.value}
                        checked={plan === p.value}
                        onChange={() => {
                          setPlan(p.value)
                          setSvcError(false)
                        }}
                      />
                      <label htmlFor={p.id}>
                        {p.title}
                        <span className="plan-price">{p.price}</span>
                        <small>{p.detail}</small>
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {submitError ? (
                <p className="signup-submit-error" role="alert">
                  {submitError}
                </p>
              ) : null}

              <button type="submit" className="signup-cta" disabled={isSubmitting}>
                {isSubmitting ? 'Sending…' : '🚨\u00a0 Claim My Free Early Access Spot'}
              </button>
            </form>

            <p className="signup-foot">
              By signing up you agree to our{' '}
              <a href="https://www.dd360.tech" target="_blank" rel="noopener noreferrer">
                Terms of Service
              </a>{' '}
              and{' '}
              <a href="https://www.dd360.tech" target="_blank" rel="noopener noreferrer">
                Privacy Policy
              </a>
              . Free first-year coverage offer applies to the Small Vehicles package ($45 value).
              Limited to the first 1,000 sign-ups before July 4th, 2025. One entry per person.
              Package pricing: Small $45 · Medium $65 · Large $85.
            </p>
          </>
        ) : (
          <div className="signup-success">
            <div className="signup-success-logo">
              <img src={dd360Logo} alt="DD360" />
            </div>
            <h2>You&apos;re Protected. 🦌</h2>
            <p>
              Your early access spot is reserved. If you&apos;re among the first 1,000 sign-ups,
              you&apos;ll receive{' '}
              <strong style={{ color: '#f5c842' }}>one full year of free DD360 coverage</strong> —
              the app and vehicle patch that keeps deer off your road.
            </p>
            <p className="note">
              A confirmation email is on its way. We&apos;ll be in touch before July 4th launch day.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
