import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';
import UnitIcon from '@site/src/components/UnitIcon';


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

function LearningCard({number, icon, title, children, link, accent}) {
  return (
    <Link
      to={link}
      className={`${styles.learningCard} ${styles[accent]}`}>

      <div className={styles.cardTop}>
        <span className={styles.cardNumber}>{number}</span>
        <span className={styles.cardIcon}>
          <UnitIcon type={icon} />
        </span>
      </div>

      <Heading as="h3">{title}</Heading>

      <p>{children}</p>

      <span className={styles.cardLink}>
        Explorar unidad →
      </span>
    </Link>
  );
}

function LearningSection() {
  return (
    <section id="contenidos" className={styles.learningSection}>
      <div className="container">

        <div className={styles.sectionHeading}>
          <span>ESTE CURSO</span>

          <Heading as="h2">
            6 retos. Un curso para crear.
          </Heading>

          <p>
            Aprende tecnología resolviendo problemas, creando contenidos
            y desarrollando tus propios proyectos.
          </p>
        </div>

        <div className={styles.cardGrid}>

          <LearningCard
            number="01"
            icon="computer"
            title="Mi ordenador por dentro"
            link="/docs/01-ordenador/"
            accent="purple">
            Descubre cómo funciona un ordenador y aprende a elegir
            el equipo adecuado.
          </LearningCard>

          <LearningCard
            number="02"
            icon="cloud"
            title="Mi entorno digital"
            link="/docs/02-entorno-digital/"
            accent="cyan">
            Organiza archivos, trabaja en la nube y domina las
            herramientas digitales del día a día.
          </LearningCard>

          <LearningCard
            number="03"
            icon="media"
            title="Crea contenido"
            link="/docs/03-contenido-digital/"
            accent="pink">
            Diseña imágenes, audio y vídeo para comunicar tus ideas
            de forma creativa.
          </LearningCard>

          <LearningCard
            number="04"
            icon="security"
            title="Seguridad en Internet"
            link="/docs/04-seguridad/"
            accent="lime">
            Protege tus cuentas, tu privacidad y tu identidad
            cuando utilizas Internet.
          </LearningCard>

          <LearningCard
            number="05"
            icon="network"
            title="Internet y redes"
            link="/docs/05-internet-redes/"
            accent="blue">
            Descubre cómo se conectan los dispositivos y cómo
            funciona Internet.
          </LearningCard>

          <LearningCard
            number="06"
            icon="app"
            title="Crea tu primera app"
            link="/docs/06-primera-app/"
            accent="orange">
            Diseña y programa una aplicación capaz de resolver
            un problema real.
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