import { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { coursesData } from '../data/courses';
import CourseCard from '../components/CourseCard';
import CourseFilter from '../components/CourseFilter';
import type { Course } from '../types';
import styles from './CoursesPage.module.css';

const CoursesPage: React.FC = () => {
    const navigate = useNavigate();
    
    // Стан для фільтрів (useState згідно варіанту)
    const [query, setQuery] = useState<string>('');
    const [level, setLevel] = useState<string>('all');
    
    // Стан для відфільтрованих курсів
    const [filteredCourses, setFilteredCourses] = useState<Course[]>(coursesData);
    
    // useEffect: фільтрація курсів при зміні query або level (згідно варіанту)
    useEffect(() => {
        let result = coursesData;
        
        // Фільтрація за рівнем
        if (level !== 'all') {
            result = result.filter(course => course.level === level);
        }
        
        // Фільтрація за пошуковим запитом
        if (query.trim() !== '') {
            const searchTerm = query.toLowerCase().trim();
            result = result.filter(course =>
                course.title.toLowerCase().includes(searchTerm) ||
                course.subject.toLowerCase().includes(searchTerm) ||
                course.description.toLowerCase().includes(searchTerm)
            );
        }
        
        setFilteredCourses(result);
    }, [query, level]); // Залежності: query та level
    
    const handleCourseClick = (id: number) => {
        navigate(`/course/${id}`);
    };
    
    return (
        <div className={styles.coursesPage}>
            <h2>Каталог курсів</h2>
            
            <CourseFilter
                query={query}
                level={level}
                onQueryChange={setQuery}
                onLevelChange={setLevel}
                resultCount={filteredCourses.length}
            />
            
            {filteredCourses.length === 0 ? (
                <div className={styles.noResults}>
                    😕 За вашим запитом нічого не знайдено
                </div>
            ) : (
                <div className={styles.coursesGrid}>
                    {filteredCourses.map(course => (
                        <CourseCard
                            key={course.id}
                            course={course}
                            onClick={handleCourseClick}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default CoursesPage;