import { Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CoursesPage from './pages/CoursesPage';
import CourseDetailPage from './pages/CourseDetailPage';
import styles from './App.module.css';

function App() {
    return (
        <div className={styles.app}>
            <header className={styles.header}>
                <h1>Освітній портал</h1>
                <p>Сучасні знання для вашого розвитку</p>
                <nav className={styles.nav}>
                    <Link to="/" className={styles.navLink}>Головна</Link>
                    <Link to="/courses" className={styles.navLink}>Курси</Link>
                </nav>
            </header>
            
            <main className={styles.main}>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/courses" element={<CoursesPage />} />
                    <Route path="/course/:id" element={<CourseDetailPage />} />
                    <Route path="*" element={<HomePage />} />
                </Routes>
            </main>
            
            <footer className={styles.footer}>
                <p>&copy; 2026 Освітній портал. Усі права захищено.</p>
            </footer>
        </div>
    );
}

export default App;