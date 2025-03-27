import { useParams, Link } from 'react-router-dom';
import recipes from '@/data/recipes.json';
import styles from './Recipe.module.css';

function Recipe() {
  const { id } = useParams();
  const recipe = recipes.find((r) => r.id.toString() === id);

  if (!recipe) return (
    <div className={styles.notFound}>
      <h2>Rețeta nu a fost găsită!</h2>
      <Link to="/" className={styles.backButton}>Înapoi la rețete</Link>
    </div>
  );

  return (
    <div className={styles.recipe}>
      <div className={styles.recipeHeader}>
        <h1>{recipe.title}</h1>
        <img src={recipe.image} alt={recipe.title} className={styles.recipeImage} />
      </div>
      <p>{recipe.description}</p>

      <div className={styles.recipeDetails}>
        <h3>Ingrediente:</h3>
        <ul>
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>

        <h3>Mod de preparare:</h3>
        <p>{recipe.instructions}</p>
      </div>

      <Link to="/" className={styles.backButton}>Înapoi la rețete</Link>
    </div>
  );
}

export default Recipe;
