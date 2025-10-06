import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"
import { Link, useNavigate } from "react-router-dom"
import styles from "./Register.module.css"
import Header from "../../components/Header/Header"

export default function Register() {
  const navigate = useNavigate()

  const schema = Yup.object({
    name: Yup.string()
      .min(2, "Name is too short")
      .required("Name is required"),
    email: Yup.string()
      .email("Invalid email")
      .required("Email is required"),
    password: Yup.string()
      .min(8, "Minimum 8 characters")
      .matches(/[A-Za-z]/, "Must contain at least one letter")
      .matches(/[0-9]/, "Must contain at least one number")
      .required("Password is required")
  })

  return (
    <main className={styles.wrap}>
      <section className={styles.card}>
        <Header/>
        <h1 className={styles.title}>Create account</h1>
        <p className={styles.lead}>Join the MusicShop community</p>

        <Formik
          initialValues={{ name: "", email: "", password: "" }}
          validationSchema={schema}
          onSubmit={(values) => {
            console.log("Registered:", values)
            navigate("/login")
          }}
        >
          {({ isSubmitting, isValid }) => (
            <Form className={styles.form}>
              <label className={styles.label}>
                <span>Name</span>
                <Field type="text" name="name" className={styles.input} autoComplete="name" />
                <ErrorMessage name="name" component="small" className={styles.err} />
              </label>

              <label className={styles.label}>
                <span>Email</span>
                <Field type="email" name="email" className={styles.input} autoComplete="email" />
                <ErrorMessage name="email" component="small" className={styles.err} />
              </label>

              <label className={styles.label}>
                <span>Password</span>
                <Field type="password" name="password" className={styles.input} autoComplete="new-password" />
                <ErrorMessage name="password" component="small" className={styles.err} />
              </label>

              <button
                type="submit"
                className={styles.btn}
                disabled={isSubmitting || !isValid}
              >
                Sign up
              </button>
            </Form>
          )}
        </Formik>

        <p className={styles.meta}>
          Already have an account? <Link to="/login" className={styles.link}>Log in</Link>
        </p>
      </section>
    </main>
  )
}
