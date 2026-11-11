// Import all quiz JSON files
import kubernetes from './kubernetes.json';
import dataEngineeringBeginner from './data-engineering-beginner.json';
import dataEngineeringMidLevel from './data-engineering-mid-level.json';
import dataStreaming from './data-streaming.json';
import dataLake from './data-lake.json';
import apacheSpark from './apache-spark.json';

// Combine all quizzes into an array
export const quizzes = [
  kubernetes,
  dataEngineeringBeginner,
  dataEngineeringMidLevel,
  dataStreaming,
  dataLake,
  apacheSpark
];

// Extract unique categories
export const categories = [...new Set(quizzes.map(q => q.category))];
