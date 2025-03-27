import styles from './About.module.css';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div className={styles.aboutContainer}>
      <header className={styles.header}>
        <div className={styles.headerText}>
          <h1>Despre un stil de viață sănătos și alimentație</h1>
          <p>
            Un stil de viață sănătos este esențial pentru o viață lungă și fericită. Alimentația joacă un rol
            esențial în menținerea sănătății și prevenirea multor boli. Este important să consumăm o varietate
            de alimente sănătoase care oferă toți nutrienții necesari organismului nostru.
          </p>
        </div>
      </header>

      <section className={styles.tableSection}>
        <h2>Tipuri de alimente esențiale pentru o dietă echilibrată</h2>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Aliment</th>
              <th>Beneficii</th>
              <th>Exemple</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Fructe și legume</td>
              <td>Surse excelente de vitamine și minerale</td>
              <td>Mere, morcovi, spanac</td>
            </tr>
            <tr>
              <td>Proteine</td>
              <td>Construiesc și repară țesuturile</td>
              <td>Pui, pește, leguminoase</td>
            </tr>
            <tr>
              <td>Cereale integrale</td>
              <td>Surse de fibre și carbohidrați</td>
              <td>Ovăz, quinoa, orez brun</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className={styles.links}>
        <h3>Rețete sănătoase recomandate:</h3>
        <ul>
          <li>
            <Link to="/recipe/1">Clătite pufoase cu ingrediente sănătoase</Link>
          </li>
          <li>
            <Link to="/recipe/2">Paste Carbonara cu ingrediente naturale</Link>
          </li>
          <li>
            <Link to="/recipe/3">Salată de quinoa cu legume</Link>
          </li>
        </ul>
      </section>

      <footer className={styles.footer}>
        <p>
          Descoperă mai multe despre alimentația sănătoasă pe{' '}
          <a href="https://www.eatright.org/" target="_blank" rel="noopener noreferrer">
            Eat Right
          </a>
        </p>
      </footer>
    </div>
  );
}

export default About;
