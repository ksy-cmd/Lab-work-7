import { useParams, useNavigate } from 'react-router-dom';
import { coursesData } from '../data/courses';
import styles from './CourseDetailPage.module.css';

const CourseDetailPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    
    const courseId = Number(id);
    const course = coursesData.find(c => c.id === courseId);
    
    const getLevelClass = (level: string): string => {
        switch (level) {
            case 'Початковий': return styles.levelBeginner;
            case 'Середній': return styles.levelIntermediate;
            default: return styles.levelAdvanced;
        }
    };
    
    const getLevelIcon = (level: string): string => {
        switch (level) {
            case 'Початковий': return '🌱';
            case 'Середній': return '📚';
            default: return '🏆';
        }
    };
    
    if (!course) {
        return (
            <div className={styles.notFound}>
                <h2>Курс не знайдено</h2>
                <p>На жаль, курс з таким ID не існує.</p>
                <button onClick={() => navigate('/courses')} className={styles.backButton}>
                    Повернутися до каталогу
                </button>
            </div>
        );
    }
    
    return (
        <div className={styles.detailPage}>
            <button onClick={() => navigate('/courses')} className={styles.backButton}>
                ← Назад до курсів
            </button>
            
            <div className={styles.detailCard}>
                <div className={styles.detailImage}>
                    <img src={course.imageUrl} alt={course.title} />
                </div>
                <div className={styles.detailInfo}>
                    <h2>{course.title}</h2>
                    <p className={styles.subject}>{course.subject}</p>
                    <div className={styles.details}>
                        <span className={`${styles.level} ${getLevelClass(course.level)}`}>
                            {getLevelIcon(course.level)} {course.level}
                        </span>
                        <span className={styles.duration}>⏱️ {course.duration} тижнів</span>
                    </div>
                    <p className={styles.description}>{course.description}</p>
                </div>
            </div>
            
            <div className={styles.whatYouLearn}>
                <h3>Що ви вивчите:</h3>
                <ul>
                    <li>Практичні навички роботи з {course.title}</li>
                    <li>Сучасні підходи та методології</li>
                    <li>Реальні проекти для портфоліо</li>
                    <li>Підготовку до сертифікації</li>
                </ul>
            </div>
        </div>
    );
};

export default CourseDetailPage;