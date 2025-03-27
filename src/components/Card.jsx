import styles from './Card.module.css';

function Card({ title, description, onClick }) {
  return (
    <div className={styles.card} onClick={onClick}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default Card;
