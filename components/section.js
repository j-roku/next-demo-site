
import styles from '../styles/components/section.module.scss';

export default function Section({name,id,children,wrapperSize,outer}) {

  return(
    <section className={`${styles.section} ${styles['section--outer']}`} id={id} data-name={name}>
      <div className={`${styles.section__inner}`} data-size={wrapperSize}>
        <div className={styles.section__content}>
          {children}
        </div>
      </div>
    </section>
  )
}
