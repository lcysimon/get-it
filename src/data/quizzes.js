// Re-export from index.js to maintain backward compatibility
// This allows existing imports from './data/quizzes.js' to continue working

export { quizzes, categories } from './quizzes/index.js';
