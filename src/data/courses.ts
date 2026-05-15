import type { Course } from '../types';

export const coursesData: Course[] = [
    {
        id: 1,
        title: 'JavaScript для початківців',
        subject: 'Web-розробка',
        level: 'Початковий',
        description: 'Основи JavaScript: змінні, функції, події, DOM маніпуляції.',
        duration: 8,
        imageUrl: 'https://picsum.photos/id/1/300/200'
    },
    {
        id: 2,
        title: 'React - сучасний підхід',
        subject: 'Web-розробка',
        level: 'Середній',
        description: 'Компоненти, хуки, state management, роутинг.',
        duration: 10,
        imageUrl: 'https://picsum.photos/id/2/300/200'
    },
    {
        id: 3,
        title: 'CSS Grid та Flexbox',
        subject: 'Web-розробка',
        level: 'Початковий',
        description: 'Сучасна верстка адаптивних сайтів.',
        duration: 4,
        imageUrl: 'https://picsum.photos/id/3/300/200'
    },
    {
        id: 4,
        title: 'TypeScript у проєктах',
        subject: 'Web-розробка',
        level: 'Просунутий',
        description: 'Типізація, інтерфейси, компіляція.',
        duration: 6,
        imageUrl: 'https://picsum.photos/id/4/300/200'
    },
    {
        id: 5,
        title: 'UI/UX дизайн для розробників',
        subject: 'Дизайн',
        level: 'Початковий',
        description: 'Принципи дизайну, прототипування, Figma.',
        duration: 6,
        imageUrl: 'https://picsum.photos/id/5/300/200'
    },
    {
        id: 6,
        title: 'Машинне навчання',
        subject: 'Data Science',
        level: 'Просунутий',
        description: 'Scikit-learn, нейронні мережі, TensorFlow.',
        duration: 14,
        imageUrl: 'https://picsum.photos/id/6/300/200'
    },
    {
        id: 7,
        title: 'Python для Data Science',
        subject: 'Data Science',
        level: 'Початковий',
        description: 'NumPy, Pandas, візуалізація даних.',
        duration: 12,
        imageUrl: 'https://picsum.photos/id/7/300/200'
    },
    {
        id: 8,
        title: 'Node.js та Express',
        subject: 'Web-розробка',
        level: 'Середній',
        description: 'Бекенд розробка, REST API, MongoDB.',
        duration: 8,
        imageUrl: 'https://picsum.photos/id/8/300/200'
    }
];