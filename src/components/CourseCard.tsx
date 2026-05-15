import styles from './CourseCard.module.css';
import type { Course } from '../types';

interface CourseCardProps {
    course: Course;
    onClick: (id: number) => void;
}

const CourseCard: React.FC<CourseCardProps> = ({ course, onClick }) => {
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

    return (
        <div className={styles.card} onClick={() => onClick(course.id)}>
            <div className={styles.image}>
                <img src={course.imageUrl} alt={course.title} />
            </div>
            <div className={styles.info}>
                <h3>{course.title}</h3>
                <p className={styles.subject}>{course.subject}</p>
                <div className={styles.details}>
                    <span className={`${styles.level} ${getLevelClass(course.level)}`}>
                        {getLevelIcon(course.level)} {course.level}
                    </span>
                    <span className={styles.duration}>⏱️ {course.duration} тижнів</span>
                </div>
                <p className={styles.description}>
                    {course.description.length > 80 
                        ? course.description.slice(0, 80) + '...' 
                        : course.description}
                </p>
            </div>
        </div>
    );
};

export default CourseCard;