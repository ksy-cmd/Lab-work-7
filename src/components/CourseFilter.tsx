import styles from './CourseFilter.module.css';

interface CourseFilterProps {
    query: string;
    level: string;
    onQueryChange: (value: string) => void;
    onLevelChange: (value: string) => void;
    resultCount: number;
}

const CourseFilter: React.FC<CourseFilterProps> = ({
    query,
    level,
    onQueryChange,
    onLevelChange,
    resultCount
}) => {
    return (
        <div className={styles.filter}>
            <div className={styles.group}>
                <label>Рівень:</label>
                <select 
                    value={level} 
                    onChange={(e) => onLevelChange(e.target.value)}
                    className={styles.select}
                >
                    <option value="all">Всі рівні</option>
                    <option value="Початковий">Початковий</option>
                    <option value="Середній">Середній</option>
                    <option value="Просунутий">Просунутий</option>
                </select>
            </div>
            
            <div className={styles.group}>
                <label>Пошук:</label>
                <input
                    type="text"
                    value={query}
                    onChange={(e) => onQueryChange(e.target.value)}
                    placeholder="Назва курсу..."
                    className={styles.input}
                />
            </div>
            
            <div className={styles.stats}>
                Знайдено курсів: {resultCount}
            </div>
        </div>
    );
};

export default CourseFilter;