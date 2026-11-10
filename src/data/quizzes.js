export const quizzes = [
  // Ops Category
  {
    id: 1,
    title: "Kubernetes",
    description: "Test your knowledge of Kubernetes fundamentals and best practices",
    category: "Ops",
    questions: [
      {
        id: 1,
        question: "What is the smallest deployable unit in Kubernetes?",
        options: ["Pod", "Container", "Node", "Cluster"],
        correctAnswer: "Pod",
        explanation: "A Pod is the smallest deployable unit in Kubernetes. It can contain one or more containers that share storage and network."
      },
      {
        id: 2,
        question: "Which component manages the actual state of the cluster?",
        options: ["API Server", "Controller Manager", "Scheduler", "Kubelet"],
        correctAnswer: "Kubelet",
        explanation: "The Kubelet is an agent that runs on each node and ensures containers are running in a Pod. It communicates with the control plane."
      },
      {
        id: 3,
        question: "What is a Deployment in Kubernetes?",
        options: [
          "A single Pod",
          "A declarative way to manage Pods and ReplicaSets",
          "A network service",
          "A storage volume"
        ],
        correctAnswer: "A declarative way to manage Pods and ReplicaSets",
        explanation: "A Deployment provides declarative updates to Pods and ReplicaSets, allowing for rolling updates, rollbacks, and scaling."
      },
      {
        id: 4,
        question: "Which Kubernetes object provides a stable IP and DNS name for a set of Pods?",
        options: ["Deployment", "Service", "Ingress", "ConfigMap"],
        correctAnswer: "Service",
        explanation: "A Service provides a stable IP address and DNS name for accessing a set of Pods, abstracting away the individual Pod IPs."
      },
      {
        id: 5,
        question: "What command would you use to scale a Deployment to 5 replicas?",
        options: [
          "kubectl scale deployment <name> --replicas=5",
          "kubectl edit deployment <name>",
          "kubectl create deployment <name> --replicas=5",
          "kubectl apply deployment <name> -r 5"
        ],
        correctAnswer: "kubectl scale deployment <name> --replicas=5",
        explanation: "The kubectl scale command is used to change the number of replicas in a Deployment, ReplicaSet, or other scalable resources."
      },
      {
        id: 6,
        question: "Which of these is NOT a valid Kubernetes object?",
        options: ["Pod", "Node", "Cluster", "Container"],
        correctAnswer: "Container",
        explanation: "Container is not a Kubernetes object - it's a Docker concept. Kubernetes works with Pods (which contain containers)."
      },
      {
        id: 7,
        question: "What is the purpose of a ConfigMap?",
        options: [
          "To store configuration data as key-value pairs",
          "To manage secrets",
          "To define network policies",
          "To schedule cron jobs"
        ],
        correctAnswer: "To store configuration data as key-value pairs",
        explanation: "ConfigMaps store configuration data in key-value pairs, allowing you to decouple configuration from application code."
      },
      {
        id: 8,
        question: "Which Kubernetes controller ensures the desired number of Pods are running?",
        options: ["ReplicaSet", "Deployment", "StatefulSet", "DaemonSet"],
        correctAnswer: "ReplicaSet",
        explanation: "A ReplicaSet ensures that a specified number of Pod replicas are running at any given time. Deployment manages ReplicaSets."
      },
      {
        id: 9,
        question: "What does Ingress provide in Kubernetes?",
        options: [
          "Internal DNS for services",
          "External HTTP(S) access to services",
          "Load balancing between nodes",
          "Storage provisioning"
        ],
        correctAnswer: "External HTTP(S) access to services",
        explanation: "Ingress provides external HTTP(S) access to services in a cluster, typically with path-based routing and TLS termination."
      },
      {
        id: 10,
        question: "Which file format is used for Kubernetes manifests?",
        options: ["JSON", "YAML", "XML", "TOML"],
        correctAnswer: "YAML",
        explanation: "Kubernetes manifests are typically written in YAML format (though JSON is also supported). YAML is more human-readable."
      }
    ]
  },
  
  // Data Category - Beginner
  {
    id: 2,
    title: "Data Engineering - Beginner",
    description: "Fundamental concepts for data engineering beginners",
    category: "Data",
    questions: [
      {
        id: 1,
        question: "What does ETL stand for in data engineering?",
        options: ["Extract, Transform, Load", "Edit, Transfer, Log", "Extract, Transfer, Load", "Edit, Transform, Load"],
        correctAnswer: "Extract, Transform, Load",
        explanation: "ETL (Extract, Transform, Load) is the process of extracting data from various sources, transforming it into a consistent format, and loading it into a target database or data warehouse."
      },
      {
        id: 2,
        question: "What is the primary purpose of a data warehouse?",
        options: [
          "Store raw unstructured data",
          "Provide a centralized repository for structured data optimized for querying",
          "Process real-time streaming data",
          "Backup database files"
        ],
        correctAnswer: "Provide a centralized repository for structured data optimized for querying",
        explanation: "A data warehouse is a centralized repository that stores integrated data from multiple sources, optimized for analytical querying and reporting."
      },
      {
        id: 3,
        question: "Which of these is NOT a data warehouse solution?",
        options: ["Snowflake", "BigQuery", "Kafka", "Redshift"],
        correctAnswer: "Kafka",
        explanation: "Kafka is a distributed event streaming platform, not a data warehouse. Snowflake, BigQuery, and Redshift are all data warehouse solutions."
      },
      {
        id: 4,
        question: "What is a data lake?",
        options: [
          "A database that stores data in tables",
          "A storage system that holds raw data in its native format",
          "A real-time processing engine",
          "A visualization tool"
        ],
        correctAnswer: "A storage system that holds raw data in its native format",
        explanation: "A data lake stores raw data in its native format (structured, semi-structured, or unstructured) without requiring a predefined schema."
      },
      {
        id: 5,
        question: "What does CSV stand for?",
        options: ["Comma-Separated Values", "Column-Separated Values", "Compressed Structured Values", "Code-Specific Variables"],
        correctAnswer: "Comma-Separated Values",
        explanation: "CSV (Comma-Separated Values) is a simple file format that stores tabular data in plain text, with values separated by commas."
      },
      {
        id: 6,
        question: "Which file format is optimized for columnar storage?",
        options: ["JSON", "CSV", "Parquet", "XML"],
        correctAnswer: "Parquet",
        explanation: "Parquet is a columnar storage file format optimized for use with big data processing frameworks, providing efficient compression and encoding."
      },
      {
        id: 7,
        question: "What is the purpose of a data pipeline?",
        options: [
          "Only move data from one place to another",
          "Transform and process data as it moves from source to destination",
          "Store data for long-term archival only",
          "Create database schemas"
        ],
        correctAnswer: "Transform and process data as it moves from source to destination",
        explanation: "A data pipeline moves data from source to destination while performing transformations, cleaning, aggregation, and other processing steps."
      },
      {
        id: 8,
        question: "What does SQL stand for?",
        options: ["Structured Query Language", "Simple Query Language", "System Query Language", "Structured Question Logic"],
        correctAnswer: "Structured Query Language",
        explanation: "SQL (Structured Query Language) is the standard language for managing and manipulating relational databases."
      },
      {
        id: 9,
        question: "Which of these is a NoSQL database?",
        options: ["PostgreSQL", "MongoDB", "MySQL", "Oracle"],
        correctAnswer: "MongoDB",
        explanation: "MongoDB is a NoSQL document database. PostgreSQL, MySQL, and Oracle are all relational (SQL) databases."
      },
      {
        id: 10,
        question: "What is data modeling?",
        options: [
          "Creating visual charts from data",
          "Defining the structure and relationships of data",
          "Writing SQL queries to extract data",
          "Building machine learning models"
        ],
        correctAnswer: "Defining the structure and relationships of data",
        explanation: "Data modeling involves defining the structure, relationships, and business rules for data, creating schemas that represent the data domain."
      }
    ]
  },
  
  // Data Category - Mid-level
  {
    id: 3,
    title: "Data Engineering - Mid Level",
    description: "Intermediate concepts for experienced data engineers",
    category: "Data",
    questions: [
      {
        id: 1,
        question: "What is data partitioning and why is it used?",
        options: [
          "Splitting data into smaller physical files for performance",
          "Encrypting data for security",
          "Compressing data to save space",
          "Indexing data for faster queries"
        ],
        correctAnswer: "Splitting data into smaller physical files for performance",
        explanation: "Data partitioning splits large datasets into smaller, more manageable physical files based on criteria like date, range, or hash, improving query performance and data management."
      },
      {
        id: 2,
        question: "What is the difference between a data lake and a data warehouse?",
        options: [
          "Data lakes store raw data; data warehouses store processed, structured data",
          "Data lakes are for real-time processing; data warehouses are for batch",
          "Data lakes use SQL; data warehouses use NoSQL",
          "Data lakes are cheaper than data warehouses"
        ],
        correctAnswer: "Data lakes store raw data; data warehouses store processed, structured data",
        explanation: "Data lakes store raw data in its native format without schema requirements, while data warehouses store processed, structured data optimized for analytics and reporting."
      },
      {
        id: 3,
        question: "What is a staging area in a data warehouse?",
        options: [
          "Where final processed data is stored",
          "Where raw data is temporarily held before transformation",
          "Where backups are stored",
          "Where user queries are executed"
        ],
        correctAnswer: "Where raw data is temporarily held before transformation",
        explanation: "A staging area (or landing zone) temporarily holds raw extracted data before it undergoes transformation, cleaning, and integration processes."
      },
      {
        id: 4,
        question: "Which technology is best for real-time stream processing?",
        options: ["Apache Hadoop", "Apache Spark (batch mode)", "Apache Kafka Streams", "Apache Hive"],
        correctAnswer: "Apache Kafka Streams",
        explanation: "Apache Kafka Streams is specifically designed for real-time stream processing, allowing data to be processed as it arrives. Hadoop and Spark (batch) are for batch processing."
      },
      {
        id: 5,
        question: "What is a dimensional model in data warehousing?",
        options: [
          "A model with dimensions and facts for analytical queries",
          "A 3D visualization of data",
          "A model for real-time data",
          "A physical storage model"
        ],
        correctAnswer: "A model with dimensions and facts for analytical queries",
        explanation: "A dimensional model (star schema, snowflake schema) organizes data into facts (measures) and dimensions (descriptive attributes) for efficient analytical querying."
      },
      {
        id: 6,
        question: "What does ELT stand for and how is it different from ETL?",
        options: [
          "Extract, Load, Transform - loads raw data first, transforms in the target",
          "Edit, Load, Transform - same as ETL",
          "Extract, Load, Transfer - moves data between systems",
          "Execute, Load, Transform - cloud-only process"
        ],
        correctAnswer: "Extract, Load, Transform - loads raw data first, transforms in the target",
        explanation: "ELT (Extract, Load, Transform) loads raw data into the target system first, then performs transformations there. ETL transforms data before loading. ELT is common with cloud data warehouses."
      },
      {
        id: 7,
        question: "What is Apache Airflow used for?",
        options: [
          "Data visualization",
          "Orchestrating data pipelines and workflows",
          "Real-time data processing",
          "Data storage"
        ],
        correctAnswer: "Orchestrating data pipelines and workflows",
        explanation: "Apache Airflow is a platform for programmatically authoring, scheduling, and monitoring workflows and data pipelines."
      },
      {
        id: 8,
        question: "What is data lineage?",
        options: [
          "The history of data transformations from source to destination",
          "The physical location of data files",
          "The schema of a database",
          "The encryption keys for data"
        ],
        correctAnswer: "The history of data transformations from source to destination",
        explanation: "Data lineage tracks the flow of data through various transformations, providing visibility into where data comes from and how it's been transformed."
      },
      {
        id: 9,
        question: "What is a slowly changing dimension (SCD)?",
        options: [
          "A dimension that changes infrequently over time",
          "A dimension that loads slowly",
          "A dimension that is never updated",
          "A dimension that only contains numeric values"
        ],
        correctAnswer: "A dimension that changes infrequently over time",
        explanation: "A slowly changing dimension (SCD) is a dimension in a data warehouse that stores and manages both current and historical data over time, with types like Type 1, Type 2, and Type 3."
      },
      {
        id: 10,
        question: "What is data governance?",
        options: [
          "The process of ensuring data quality, security, and compliance",
          "The storage of data in a governed location",
          "The visualization of data for executives",
          "The deletion of old data"
        ],
        correctAnswer: "The process of ensuring data quality, security, and compliance",
        explanation: "Data governance is the overall management of the availability, usability, integrity, and security of data used in an organization, ensuring compliance with policies and regulations."
      }
    ]
  }
];

export const categories = [...new Set(quizzes.map(q => q.category))];
