import { useNavigate, Link } from "react-router-dom"
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"
import styles from "./Login.module.css"
import Header from "../../components/Header/Header"

export default function Login({ onLogin }) {
  const navigate = useNavigate()

  const schema = Yup.object({
    email: Yup.string()
      .email("Invalid email")
      .required("Email is required"),
    password: Yup.string()
      .min(8, "Minimum 8 characters")
      .required("Password is required")
  })

  return (
    <main className={styles.wrap}>
      <section className={styles.card}>
        <Header/>
        <h1 className={styles.title}>Sign In</h1>
        <p className={styles.lead}>Welcome back to MusicShop</p>

        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={schema}
          onSubmit={(values) => {
            onLogin?.(values)
            navigate("/app", { replace: true })
          }}
        >
          {({ isSubmitting, isValid }) => (
            <Form className={styles.form}>
              <label className={styles.label}>
                <span>Email</span>
                <Field
                  type="email"
                  name="email"
                  className={styles.input}
                  autoComplete="email"
                />
                <ErrorMessage
                  name="email"
                  component="small"
                  className={styles.err}
                />
              </label>

              <label className={styles.label}>
                <span>Password</span>
                <Field
                  type="password"
                  name="password"
                  className={styles.input}
                  autoComplete="current-password"
                />
                <ErrorMessage
                  name="password"
                  component="small"
                  className={styles.err}
                />
              </label>

              <button
                type="submit"
                className={styles.btn}
                disabled={isSubmitting || !isValid}
              >
                Log in
              </button>
            </Form>
          )}
        </Formik>

        <p className={styles.meta}>
          No account? <Link to="/register" className={styles.link}>Sign up</Link>
        </p>
      </section>
    </main>
  )
}
