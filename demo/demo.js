import Gantt from '/src/index.js';

const tasks = [
    {
        id: 'task1',
        name: 'Project Planning',
        start: getDate(-3),
        end: getDate(3),
        row: 0,
    },
    {
        id: 'task2',
        name: 'Design Phase',
        start: getDate(4),
        end: getDate(7),
        dependencies: 'task1',
        row: 0,
    },
    {
        id: 'task3',
        name: 'Development',
        start: getDate(6),
        end: getDate(12),
        dependencies: 'task2',
        row: 4,
    },
    {
        id: 'task4',
        name: 'Testing',
        start: getDate(8),
        end: getDate(10),
        row: 0, // Sharing row 0 with task1 and task2
    },
];

// Initialize gantt
new Gantt('#gantt', tasks, {
    infinite_padding: false,
    move_dependencies: false,
});

// Helper function to get date for tasks
function getDate(daysFromNow) {
    const date = new Date();
    date.setDate(date.getDate() + daysFromNow);
    return date.toISOString().split('T')[0]; // Returns YYYY-MM-DD format
}
