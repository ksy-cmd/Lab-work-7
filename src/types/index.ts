// TypeScript-інтерфейс моделі даних (згідно варіанту 5)
export interface Course {
    id: number;
    title: string;
    subject: string;      // предмет/категорія
    level: string;        // 'Початковий', 'Середній', 'Просунутий'
    description: string;  // ДОДАТКОВЕ ПОЛЕ
    duration: number;     // ДОДАТКОВЕ ПОЛЕ (тривалість у тижнях)
    imageUrl: string;
}

// Тип для фільтрів
export interface CourseFilters {
    query: string;
    level: string;
}