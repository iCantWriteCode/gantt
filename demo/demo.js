import Gantt from '/src/index.js';

// Initial tasks
const tasks = [
    {
        id: 'task1',
        name: 'Project Planning',
        start: getDate(-3),
        end: getDate(3),
        row: 0, // First row
    },
    {
        id: 'task2',
        name: 'Design Phase',
        start: getDate(4),
        end: getDate(7),
        dependencies: 'task1',
        row: 0, // First row
    },
    {
        id: 'task3',
        name: 'Development',
        start: getDate(6),
        end: getDate(12),
        dependencies: 'task2',
        row: 4, // First row
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
