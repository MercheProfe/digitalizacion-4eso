import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  return (
    <header className={styles.hero}>
      <div className="container">
        <div className={styles.heroContent}>

          <div className={styles.heroText}>
            <span className={styles.courseLabel}>
              DIGITALIZACIÓN · 4.º ESO
            </span>

            <Heading as="h1" className={styles.heroTitle}>
              Entiende el mundo digital.
              <span> Crea dentro de él.</span>
            </Heading>

            <p className={styles.heroSubtitle}>
              Tecnología, creatividad y pensamiento crítico para aprender
              haciendo.
            </p>

            <div className={styles.heroButtons}>
              <Link
                className="button button--primary button--lg"
                to="/docs/intro">
                Empezar
              </Link>

              <a
                className="button button--secondary button--lg"
                href="#contenidos">
                Ver contenidos
              </a>
            </div>
          </div>

          <div className={styles.heroVisual}>
            <div className={styles.codeWindow}>
              <div className={styles.windowHeader}>
                <span></span>
                <span></span>
                <span></span>
              </div>

              <div className={styles.codeContent}>
                <p>&gt; conectar()</p>
                <p>&gt; crear()</p>
                <p>&gt; aprender()</p>
                <p className={styles.codeSuccess}>
                  ✓ sistema preparado
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </header>
  );
}

function LearningCard({number, title, children}) {
  return (
    <article className={styles.learningCard}>
      <span className={styles.cardNumber}>{number}</span>
      <Heading as="h3">{title}</Heading>
      <p>{children}</p>
    </article>
  );
}

function LearningSection() {
  return (
    <section id="contenidos" className={styles.learningSection}>
      <div className="container">

        <div className={styles.sectionHeading}>
          <span>ESTE CURSO</span>
          <Heading as="h2">Vamos a aprender haciendo</Heading>
          <p>
            Exploraremos cómo funciona la tecnología que utilizamos cada día
            y aprenderemos a utilizarla de forma creativa, segura y responsable.
          </p>
        </div>

        <div className={styles.cardGrid}>
          <LearningCard number="01" title="Comprende">
            Descubre cómo funcionan los dispositivos, las redes y los
            servicios digitales.
          </LearningCard>

          <LearningCard number="02" title="Crea">
            Diseña contenidos y soluciones digitales utilizando diferentes
            herramientas.
          </LearningCard>

          <LearningCard number="03" title="Protégete">
            Aprende a desenvolverte en Internet de forma segura y responsable.
          </LearningCard>

          <LearningCard number="04" title="Experimenta">
            Resuelve retos y proyectos aplicando lo aprendido.
          </LearningCard>
        </div>

      </div>
    </section>
  );
}

export default function Home() {
  return (
    <Layout
      title="Digitalización 4º ESO"
      description="Apuntes y recursos de Digitalización para 4º ESO">

      <HomepageHeader />

      <main>
        <LearningSection />
      </main>

    </Layout>
  );
}