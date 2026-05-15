import { Link } from 'react-router-dom';
import styles from './HomePage.module.css';

const HomePage: React.FC = () => {
    return (
        <div className={styles.home}>
            <section className={styles.hero}>
                <h2>Ласкаво просимо на Освітній портал!</h2>
                <p>Обирай курси, які підходять саме тобі, та розвивайся разом з нами.</p>
                <Link to="/courses" className={styles.ctaButton}>
                    Перейти до курсів
                </Link>
            </section>
            
            <section className={styles.features}>
                <h3>Чому обирають нас?</h3>
                <div className={styles.featuresGrid}>
                    <div className={styles.featureCard}>
                        <div className={styles.featureIcon}>📚</div>
                        <h4>8+ курсів</h4>
                        <p>Широкий вибір напрямків навчання</p>
                    </div>
                    <div className={styles.featureCard}>
                        <div className={styles.featureIcon}>👨‍🏫</div>
                        <h4>Досвідчені викладачі</h4>
                        <p>Практики з реального бізнесу</p>
                    </div>
                    <div className={styles.featureCard}>
                        <div className={styles.featureIcon}>🎓</div>
                        <h4>Сертифікати</h4>
                        <p>Підтвердження знань після навчання</p>
                    </div>
                    <div className={styles.featureCard}>
                        <div className={styles.featureIcon}>💻</div>
                        <h4>Онлайн-формат</h4>
                        <p>Навчайся з будь-якої точки світу</p>
                    </div>
                </div>
            </section>
            
            <section className={styles.stats}>
                <div className={styles.statItem}>
                    <span className={styles.statNumber}>10,000+</span>
                    <span className={styles.statLabel}>Студентів</span>
                </div>
                <div className={styles.statItem}>
                    <span className={styles.statNumber}>50+</span>
                    <span className={styles.statLabel}>Курсів</span>
                </div>
                <div className={styles.statItem}>
                    <span className={styles.statNumber}>98%</span>
                    <span className={styles.statLabel}>Задоволених</span>
                </div>
            </section>
        </div>
    );
};

export default HomePage;