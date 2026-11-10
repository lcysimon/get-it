export const quizzes = [
  {
    id: 1,
    title: "Spark Basics",
    description: "Test your knowledge of Apache Spark fundamentals",
    category: "Data Engineering",
    questions: [
      {
        id: 1,
        question: "Which one of these 4 methods is an ACTION in Spark?",
        options: ["count()", "filter()", "groupBy()", "join()"],
        correctAnswer: "count()",
        explanation: "In Spark, transformations (filter, groupBy, join) are lazy and build the execution plan. Actions (count, collect, show) trigger actual computation and return results."
      },
      {
        id: 2,
        question: "What is the result of applying map() followed by filter() in Spark?",
        options: [
          "A new RDD with both operations applied",
          "An error because filter must come first",
          "Nothing until an action is called",
          "The operations are applied immediately"
        ],
        correctAnswer: "Nothing until an action is called",
        explanation: "Spark uses lazy evaluation. Transformations like map and filter are only executed when an action (like count or collect) is called."
      },
      {
        id: 3,
        question: "Which Spark component is responsible for executing tasks on worker nodes?",
        options: ["Driver", "Executor", "Cluster Manager", "SparkContext"],
        correctAnswer: "Executor",
        explanation: "Executors are the processes that run on worker nodes and execute the tasks assigned by the Driver."
      },
      {
        id: 4,
        question: "What does the persist() method do in Spark?",
        options: [
          "Saves the RDD to disk immediately",
          "Caches the RDD in memory for future reuse",
          "Deletes the RDD from memory",
          "Marks the RDD for checkpointing"
        ],
        correctAnswer: "Caches the RDD in memory for future reuse",
        explanation: "The persist() method (or cache()) keeps the RDD in memory so it can be reused across multiple actions without recomputing."
      },
      {
        id: 5,
        question: "Which storage level is used by default when you call cache() in Spark?",
        options: ["MEMORY_ONLY", "MEMORY_AND_DISK", "DISK_ONLY", "MEMORY_ONLY_SER"],
        correctAnswer: "MEMORY_ONLY",
        explanation: "The cache() method uses MEMORY_ONLY storage level by default, which stores RDDs as deserialized Java objects in memory."
      }
    ]
  },
  {
    id: 2,
    title: "Python for Data Engineers",
    description: "Python fundamentals for data engineering",
    category: "Data Engineering",
    questions: [
      {
        id: 1,
        question: "What does this Python code output?\n\nwith open('file.txt', 'r') as f:\n    print(f.read())",
        options: [
          "The contents of file.txt",
          "A file object",
          "An error because file is not closed",
          "Nothing"
        ],
        correctAnswer: "The contents of file.txt",
        explanation: "The 'with' statement automatically closes the file after the block executes, and read() returns the file contents."
      },
      {
        id: 2,
        question: "Which method is used to read a CSV file in pandas?",
        options: ["pd.read_csv()", "pd.load_csv()", "pd.import_csv()", "pd.open_csv()"],
        correctAnswer: "pd.read_csv()",
        explanation: "pandas uses pd.read_csv() to read CSV files into a DataFrame."
      }
    ]
  },
  {
    id: 3,
    title: "SQL Fundamentals",
    description: "Basic SQL knowledge for interviews",
    category: "Data Engineering",
    questions: [
      {
        id: 1,
        question: "Which SQL clause is used to filter rows before grouping?",
        options: ["WHERE", "HAVING", "FILTER", "GROUP BY"],
        correctAnswer: "WHERE",
        explanation: "The WHERE clause filters rows before aggregation, while HAVING filters after grouping."
      },
      {
        id: 2,
        question: "What does a LEFT JOIN return?",
        options: [
          "All rows from the left table and matched rows from the right",
          "Only rows with matches in both tables",
          "All rows from both tables",
          "All rows from the right table and matched rows from the left"
        ],
        correctAnswer: "All rows from the left table and matched rows from the right",
        explanation: "A LEFT JOIN returns all rows from the left table, with NULL values for non-matching rows from the right table."
      }
    ]
  }
];

export const categories = [...new Set(quizzes.map(q => q.category))];
