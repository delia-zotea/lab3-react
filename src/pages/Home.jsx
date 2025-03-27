import recipes from '@/data/recipes.json';
import styles from './Home.module.css';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      {recipes.map((recipe) => (
        <div 
          key={recipe.id} 
          className={styles.card}
          onClick={() => navigate(`/recipe/${recipe.id}`)}
        >
          <div className={styles.cardContent}>
            <h3 className={styles.cardTitle}>{recipe.title}</h3>
            <p>{recipe.description}</p>
            <img 
              src={recipe.image} 
              alt={recipe.title} 
              className={styles.cardImage} 
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Home;
