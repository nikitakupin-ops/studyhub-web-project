
import styles from './TaskCard.module.css';

function TaskCard({ title, count, children, variant = 'default', id }) {
  return (
    <section
      className={`${styles.card} ${styles[variant] || ''}`}
      id={id}
    >
      <div className={styles['card-header']}>
        <div>
          <h2>{title}</h2>
        </div>

        <span className={styles.count}>{count}</span>
      </div>

      <div className={styles['card-content']}>
        {children}
      </div>
    </section>
  );
}

export default TaskCard;
