// This file is now deprecated - quizzes are loaded from YAML files
// See loadQuizzes.js for the new loader

// For backward compatibility, we'll import from the loader
import { quizzes, categories } from './quizzes/loadQuizzes';

export { quizzes, categories };
