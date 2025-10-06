import { useState } from "react"
import styles from "./Dashboard.module.css"
import Header from "../../components/Header/Header"

export default function Dashboard() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    if (email) setSubmitted(true)
  }

  return (
    <section className={styles.section}>
      <Header/>
      <div className={styles.wrap}>
        <h1 className={styles.title}>MusicShop</h1>
        <p className={styles.lead}>
          Our site is currently under construction.<br />
          Leave your email and we’ll notify you when it’s ready.
        </p>

        {!submitted ? (
          <form onSubmit={handleSubmit} className={styles.form}>
            <input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={styles.input}
              required
            />
            <button type="submit" className={styles.btn}>Notify Me</button>
          </form>
        ) : (
          <p className={styles.confirm}>Thanks! We’ll keep you posted.</p>
        )}
      </div>
    </section>
  )
}
