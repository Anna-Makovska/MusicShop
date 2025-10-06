import styles from './WhyUs.module.css'

const items = [
  { id:'w1', title:'Authentic Pressings', text:'Original editions and high-quality remastering for true collectors.' },
  { id:'w2', title:'Audiophile QC', text:'Multi-stage inspection for noise, balance, and flawless geometry.' },
  { id:'w3', title:'Secure Packaging', text:'Rigid mailers, corner protectors, and bubble wrap for safe delivery.' },
  { id:'w4', title:'48h Shipping', text:'Fast nationwide delivery within 48 hours.' },
  { id:'w5', title:'Easy Returns', text:'No-questions-asked returns within 14 days.' },
  { id:'w6', title:'Loyalty Perks', text:'Earn points, get pre-orders, and access exclusive insider offers.' }
]

export default function WhyUs() {
  return (
    <section id="why" className={styles.section}>
      <div className={styles.bg} aria-hidden="true" />
      <div className={styles.head}>
        <h2 className={styles.title}>Why Choose Us</h2>
        <p className={styles.lead}>Premium curation, engineered delivery, human support</p>
      </div>
      <div className={styles.grid}>
        {items.map(it => (
          <article key={it.id} className={styles.card}>
            <span className={styles.icon} />
            <h3 className={styles.name}>{it.title}</h3>
            <p className={styles.text}>{it.text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
