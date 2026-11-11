// ============================================
// QUIZ DATA FOR GET-IT APP
// Categories: Ops, Data
// ============================================

export const quizzes = [
  // ==========================================
  // OPS CATEGORY
  // ==========================================
  
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
        explanation: "A Pod is the smallest deployable unit in Kubernetes. It can contain one or more containers that share storage, network, and specifications for how to run."
      },
      {
        id: 2,
        question: "Which component manages containers in Pods on each node?",
        options: ["API Server", "Controller Manager", "Scheduler", "Kubelet"],
        correctAnswer: "Kubelet",
        explanation: "The Kubelet is an agent that runs on each node and ensures containers are running in a Pod as specified."
      },
      {
        id: 3,
        question: "What is a Deployment in Kubernetes?",
        options: ["A single Pod", "A declarative way to manage Pods and ReplicaSets", "A network service", "A storage volume"],
        correctAnswer: "A declarative way to manage Pods and ReplicaSets",
        explanation: "A Deployment provides declarative updates to Pods and ReplicaSets, enabling rolling updates, rollbacks, and scaling."
      },
      {
        id: 4,
        question: "Which object provides stable IP and DNS for Pods?",
        options: ["Deployment", "Service", "Ingress", "ConfigMap"],
        correctAnswer: "Service",
        explanation: "A Service provides a stable cluster IP address and DNS name for accessing a set of Pods, abstracting away individual Pod IPs."
      },
      {
        id: 5,
        question: "What command scales a Deployment to 5 replicas?",
        options: ["kubectl scale deployment <name> --replicas=5", "kubectl edit deployment <name>", "kubectl create deployment <name> --replicas=5", "kubectl apply deployment <name> -r 5"],
        correctAnswer: "kubectl scale deployment <name> --replicas=5",
        explanation: "The kubectl scale command changes the number of replicas in a Deployment, ReplicaSet, or other scalable resources."
      },
      {
        id: 6,
        question: "Which of these is NOT a Kubernetes object?",
        options: ["Pod", "Node", "Container", "Namespace"],
        correctAnswer: "Container",
        explanation: "Container is a Docker concept. Kubernetes works with Pods (which contain containers), not directly with containers."
      },
      {
        id: 7,
        question: "What is the purpose of a ConfigMap?",
        options: ["Store configuration data as key-value pairs", "Store secrets", "Define network policies", "Schedule cron jobs"],
        correctAnswer: "Store configuration data as key-value pairs",
        explanation: "ConfigMaps store configuration data in key-value pairs, allowing you to decouple configuration from application code."
      },
      {
        id: 8,
        question: "Which controller ensures desired Pod count?",
        options: ["ReplicaSet", "Deployment", "StatefulSet", "DaemonSet"],
        correctAnswer: "ReplicaSet",
        explanation: "A ReplicaSet ensures that a specified number of Pod replicas are running at any given time."
      },
      {
        id: 9,
        question: "What does Ingress provide?",
        options: ["Internal DNS", "External HTTP(S) access to Services", "Load balancing between nodes", "Storage provisioning"],
        correctAnswer: "External HTTP(S) access to Services",
        explanation: "Ingress provides external HTTP(S) access to Services in a cluster, typically with path-based routing and TLS termination."
      },
      {
        id: 10,
        question: "What file format is used for Kubernetes manifests?",
        options: ["JSON", "YAML", "XML", "TOML"],
        correctAnswer: "YAML",
        explanation: "Kubernetes manifests are typically written in YAML format (though JSON is also supported). YAML is more human-readable."
      },
      {
        id: 11,
        question: "What is a Namespace?",
        options: ["Divides cluster resources between users/teams/applications", "Creates separate physical clusters", "Stores configuration data", "Defines network policies"],
        correctAnswer: "Divides cluster resources between users/teams/applications",
        explanation: "Namespaces provide a mechanism to divide cluster resources and can be used for isolation and organization."
      },
      {
        id: 12,
        question: "What is a StatefulSet?",
        options: ["Manages stateful apps with stable, persistent identities for Pods", "Manages stateless apps", "Manages temporary Pods", "Manages network services"],
        correctAnswer: "Manages stateful apps with stable, persistent identities for Pods",
        explanation: "StatefulSets manage the deployment and scaling of Pods and provide guarantees about the ordering and uniqueness of these Pods."
      },
      {
        id: 13,
        question: "What is a DaemonSet?",
        options: ["Runs exactly one Pod per node", "Runs a specified number of Pods", "Runs Pods on specific nodes", "Runs batch jobs"],
        correctAnswer: "Runs exactly one Pod per node",
        explanation: "A DaemonSet ensures that a copy of a Pod runs on all (or some) nodes in the cluster."
      },
      {
        id: 14,
        question: "What lists all Pods in all namespaces?",
        options: ["kubectl get pods", "kubectl get pods --all", "kubectl get pods -A", "kubectl list pods"],
        correctAnswer: "kubectl get pods -A",
        explanation: "The -A or --all-namespaces flag displays resources from all namespaces."
      },
      {
        id: 15,
        question: "What is PersistentVolume (PV)?",
        options: ["Piece of storage provisioned by admin", "Volume tied to specific Pod", "Network-attached storage", "Backup copy"],
        correctAnswer: "Piece of storage provisioned by admin",
        explanation: "A PersistentVolume is a piece of storage in the cluster that has been provisioned by an administrator or dynamically provisioned using Storage Classes."
      },
      {
        id: 16,
        question: "What is PersistentVolumeClaim (PVC)?",
        options: ["Request for storage by a user", "Claim on a PV by a Pod", "Demand for resources from node", "Configuration for volume"],
        correctAnswer: "Request for storage by a user",
        explanation: "A PersistentVolumeClaim is a request for storage by a user. It's similar to a Pod consuming node resources."
      },
      {
        id: 17,
        question: "What is a Job?",
        options: ["Runs Pod that exits after completing work", "Runs long-running service", "Creates ReplicaSet", "Manages network policies"],
        correctAnswer: "Runs Pod that exits after completing work",
        explanation: "A Job creates one or more Pods and ensures that a specified number of them successfully terminate."
      },
      {
        id: 18,
        question: "What is a CronJob?",
        options: ["Job that runs on time-based schedule", "Job that runs continuously", "Job on specific node", "Job with elevated privileges"],
        correctAnswer: "Job that runs on time-based schedule",
        explanation: "A CronJob creates Jobs on a time-based schedule, written in Cron format."
      },
      {
        id: 19,
        question: "What is HorizontalPodAutoscaler (HPA)?",
        options: ["Auto-scales Pods based on CPU/memory", "Auto-restarts failed Pods", "Auto-assigns Pods to nodes", "Auto-updates Pod images"],
        correctAnswer: "Auto-scales Pods based on CPU/memory",
        explanation: "HPA automatically adjusts the number of Pods in a Deployment, ReplicaSet, or StatefulSet based on observed CPU/memory usage."
      },
      {
        id: 20,
        question: "What is NetworkPolicy?",
        options: ["Controls network traffic to/from Pods", "Controls which nodes Pods can run on", "Controls resource limits", "Controls user access"],
        correctAnswer: "Controls network traffic to/from Pods",
        explanation: "NetworkPolicy defines rules for ingress and/or egress traffic from and to the Pods selected by the policy."
      }
    ]
  },
  
  // ==========================================
  // DATA CATEGORY
  // ==========================================
  
  {
    id: 2,
    title: "Data Engineering - Beginner",
    description: "Fundamental concepts for data engineering beginners",
    category: "Data",
    questions: [
      {
        id: 1,
        question: "What does ETL stand for?",
        options: ["Extract, Transform, Load", "Edit, Transfer, Log", "Extract, Transfer, Load", "Edit, Transform, Load"],
        correctAnswer: "Extract, Transform, Load",
        explanation: "ETL is the process of extracting data from sources, transforming it into a consistent format, and loading it into a target system like a data warehouse."
      },
      {
        id: 2,
        question: "What does ELT stand for?",
        options: ["Extract, Load, Transform", "Edit, Load, Transform", "Extract, Load, Transfer", "Execute, Load, Transform"],
        correctAnswer: "Extract, Load, Transform",
        explanation: "ELT loads raw data first, then transforms it within the target system. This approach leverages cloud platform processing power."
      },
      {
        id: 3,
        question: "What is ETL vs ELT key difference?",
        options: ["ETL transforms before loading - ELT transforms after", "ETL uses cloud - ELT uses on-prem", "ETL is faster - ELT is reliable", "ETL is batch - ELT is real-time"],
        correctAnswer: "ETL transforms before loading - ELT transforms after",
        explanation: "The key difference is when transformation happens. ETL transforms during extraction before loading. ELT loads raw data first, then transforms within the target."
      },
      {
        id: 4,
        question: "Primary purpose of a data warehouse?",
        options: ["Store raw unstructured data", "Centralized repository for structured data optimized for querying", "Process real-time streaming data", "Backup database files"],
        correctAnswer: "Centralized repository for structured data optimized for querying",
        explanation: "A data warehouse is a centralized repository that stores integrated data from multiple sources, optimized for analytical querying and reporting."
      },
      {
        id: 5,
        question: "What is a data lake?",
        options: ["Database storing data in tables", "Storage holding raw data in native format", "Real-time processing engine", "Visualization tool"],
        correctAnswer: "Storage holding raw data in native format",
        explanation: "A data lake stores raw data in its native format without requiring a predefined schema, supporting structured, semi-structured, and unstructured data."
      },
      {
        id: 6,
        question: "What is a data lakehouse?",
        options: ["Combination of data lake and warehouse features", "Data lake that serves as house", "Data warehouse storing raw data", "Cloud-only storage"],
        correctAnswer: "Combination of data lake and warehouse features",
        explanation: "A data lakehouse combines the flexibility and low-cost storage of data lakes with the reliability, performance, and ACID transactions of data warehouses."
      },
      {
        id: 7,
        question: "Which is NOT a data warehouse?",
        options: ["Snowflake", "BigQuery", "Kafka", "Redshift"],
        correctAnswer: "Kafka",
        explanation: "Kafka is a distributed event streaming platform, not a data warehouse. Snowflake, BigQuery, and Redshift are data warehouse solutions."
      },
      {
        id: 8,
        question: "Which file format is optimized for columnar storage?",
        options: ["JSON", "CSV", "Parquet", "XML"],
        correctAnswer: "Parquet",
        explanation: "Parquet is a columnar storage file format optimized for use with big data processing frameworks, providing efficient compression and encoding."
      },
      {
        id: 9,
        question: "Who developed Parquet file format?",
        options: ["Twitter and Cloudera", "Microsoft and Cloudera", "Facebook and Twitter", "Google and Microsoft"],
        correctAnswer: "Twitter and Cloudera",
        explanation: "Parquet was initially created by Twitter and Cloudera as an efficient columnar storage format for Hadoop."
      },
      {
        id: 10,
        question: "What is ORC file format?",
        options: ["Microsoft and Cloudera alternative to Parquet", "Facebook for Hadoop", "Google for BigQuery", "Apache for Spark"],
        correctAnswer: "Microsoft and Cloudera alternative to Parquet",
        explanation: "ORC (Optimized Row Columnar) is a columnar file format created by Microsoft and Cloudera as an alternative to Parquet."
      },
      {
        id: 11,
        question: "What does CSV stand for?",
        options: ["Comma-Separated Values", "Column-Separated Values", "Compressed Structured Values", "Code-Specific Variables"],
        correctAnswer: "Comma-Separated Values",
        explanation: "CSV is a simple file format that stores tabular data in plain text, with values separated by commas."
      },
      {
        id: 12,
        question: "Best format for human-readable nested structures?",
        options: ["CSV", "Parquet", "JSON", "Avro"],
        correctAnswer: "JSON",
        explanation: "JSON (JavaScript Object Notation) is human-readable and can represent complex nested structures, though not as space-efficient as binary formats."
      },
      {
        id: 13,
        question: "Purpose of a data pipeline?",
        options: ["Move data only", "Extract, transform, process, and load data", "Store data only", "Create schemas"],
        correctAnswer: "Extract, transform, process, and load data",
        explanation: "A data pipeline moves data from source to target while performing transformations, cleaning, aggregation, and other processing steps."
      },
      {
        id: 14,
        question: "Which is a batch processing framework?",
        options: ["Apache Spark", "Apache Kafka", "Apache Flink", "Node.js"],
        correctAnswer: "Apache Spark",
        explanation: "Apache Spark is a unified analytics engine for large-scale data processing, with batch processing as its primary use case."
      },
      {
        id: 15,
        question: "What does SQL stand for?",
        options: ["Structured Query Language", "Simple Query Language", "System Query Language", "Structured Question Logic"],
        correctAnswer: "Structured Query Language",
        explanation: "SQL is the standard language for defining, manipulating, and querying relational databases."
      },
      {
        id: 16,
        question: "Which SQL clause filters rows BEFORE aggregation?",
        options: ["WHERE", "HAVING", "GROUP BY", "ORDER BY"],
        correctAnswer: "WHERE",
        explanation: "The WHERE clause filters individual rows from the result set before any grouping or aggregation is performed."
      },
      {
        id: 17,
        question: "Which SQL clause filters AFTER aggregation?",
        options: ["WHERE", "HAVING", "GROUP BY", "FILTER"],
        correctAnswer: "HAVING",
        explanation: "The HAVING clause filters groups created by GROUP BY after aggregation has been performed."
      },
      {
        id: 18,
        question: "What does LEFT JOIN return?",
        options: ["All rows from left table and matched right", "Only matching rows", "All rows from both", "All rows from right"],
        correctAnswer: "All rows from left table and matched right",
        explanation: "A LEFT JOIN returns all rows from the left table, with matched rows from the right table, or NULLs if no match."
      },
      {
        id: 19,
        question: "What does INNER JOIN return?",
        options: ["All rows from both", "Only rows with matches in both", "All rows from left", "All rows from right"],
        correctAnswer: "Only rows with matches in both",
        explanation: "An INNER JOIN returns only rows from both tables where the join condition is met."
      },
      {
        id: 20,
        question: "What is data modeling?",
        options: ["Creating visual charts", "Defining structure and relationships of data", "Writing SQL queries", "Building ML models"],
        correctAnswer: "Defining structure and relationships of data",
        explanation: "Data modeling involves defining the structure, relationships, and business rules for data, creating schemas that represent the data domain."
      }
    ]
  },
  
  {
    id: 3,
    title: "Data Engineering - Mid Level",
    description: "Intermediate concepts for experienced data engineers",
    category: "Data",
    questions: [
      {
        id: 1,
        question: "What is data partitioning?",
        options: ["Splitting data into smaller physical files for performance", "Encrypting data", "Compressing data", "Indexing data"],
        correctAnswer: "Splitting data into smaller physical files for performance",
        explanation: "Data partitioning splits large datasets into smaller files based on criteria like date, range, or hash, improving query performance through partition pruning."
      },
      {
        id: 2,
        question: "What is partition pruning?",
        options: ["Skipping non-relevant partitions", "Removing old partitions", "Combining partitions", "Optimizing partition sizes"],
        correctAnswer: "Skipping non-relevant partitions",
        explanation: "Partition pruning automatically skips reading partitions that do not contain relevant data for a query, improving performance."
      },
      {
        id: 3,
        question: "Data lake vs data warehouse - key difference?",
        options: ["Lake: raw, schema-on-read; Warehouse: processed, schema-on-write", "Lake: NoSQL; Warehouse: SQL", "Lake: real-time; Warehouse: batch", "Lake: cloud; Warehouse: on-prem"],
        correctAnswer: "Lake: raw, schema-on-read; Warehouse: processed, schema-on-write",
        explanation: "Data lakes store raw data with schema-on-read; data warehouses store processed, structured data with schema-on-write."
      },
      {
        id: 4,
        question: "What is a staging area?",
        options: ["Temporary hold for raw data before transformation", "Final processed data storage", "Backup storage", "Query execution area"],
        correctAnswer: "Temporary hold for raw data before transformation",
        explanation: "A staging area temporarily holds raw extracted data before it undergoes transformation, cleaning, and integration."
      },
      {
        id: 5,
        question: "What is a dimensional model?",
        options: ["Facts and dimensions for analytics", "3D data visualization", "Real-time data model", "Physical storage model"],
        correctAnswer: "Facts and dimensions for analytics",
        explanation: "Dimensional modeling organizes data into facts (measures) and dimensions (descriptive attributes) for efficient analytical querying."
      },
      {
        id: 6,
        question: "What is OLTP vs OLAP?",
        options: ["OLTP: transactional; OLAP: analytical", "OLTP: NoSQL; OLAP: SQL", "OLTP: batch; OLAP: real-time", "OLTP: read; OLAP: write"],
        correctAnswer: "OLTP: transactional; OLAP: analytical",
        explanation: "OLTP handles transactional workloads (small, fast operations); OLAP handles analytical workloads (complex queries, aggregations)."
      },
      {
        id: 7,
        question: "What is a materialized view?",
        options: ["Stores query results physically", "Virtual table", "Updatable view", "Temporary table"],
        correctAnswer: "Stores query results physically",
        explanation: "A materialized view stores the pre-computed results of a query physically, allowing for faster query performance."
      },
      {
        id: 8,
        question: "What is ELT?",
        options: ["Extract, Load, Transform", "Edit, Load, Transform", "Extract, Load, Transfer", "Execute, Load, Transform"],
        correctAnswer: "Extract, Load, Transform",
        explanation: "ELT loads raw data first into the target system, then performs transformations within that system."
      },
      {
        id: 9,
        question: "What is Apache Airflow used for?",
        options: ["Orchestrating data pipelines", "Data visualization", "Real-time processing", "Data storage"],
        correctAnswer: "Orchestrating data pipelines",
        explanation: "Apache Airflow is a platform for programmatically authoring, scheduling, and monitoring workflows and data pipelines."
      },
      {
        id: 10,
        question: "What is a DAG in Airflow?",
        options: ["Directed Acyclic Graph of tasks", "Data Access Gateway", "Distributed Application Grid", "Database Abstraction Layer"],
        correctAnswer: "Directed Acyclic Graph of tasks",
        explanation: "In Airflow, a DAG is a collection of tasks with dependencies defined between them, represented as a directed acyclic graph."
      },
      {
        id: 11,
        question: "What is data lineage?",
        options: ["History of data transformations", "Physical location of data", "Schema definition", "Encryption keys"],
        correctAnswer: "History of data transformations",
        explanation: "Data lineage tracks the flow of data from source to destination, including all transformations, providing transparency into data origins and movements."
      },
      {
        id: 12,
        question: "What is a data catalog?",
        options: ["Centralized metadata repository", "List of files", "Query history", "Collection of data sources"],
        correctAnswer: "Centralized metadata repository",
        explanation: "A data catalog provides a centralized inventory of data assets with metadata, making them discoverable and understandable."
      },
      {
        id: 13,
        question: "What is SCD?",
        options: ["Dimension that changes infrequently", "Dimension that loads slowly", "Dimension never updated", "Dimension with only numbers"],
        correctAnswer: "Dimension that changes infrequently",
        explanation: "SCD (Slowly Changing Dimension) stores and manages both current and historical data over time as attributes change."
      },
      {
        id: 14,
        question: "What is Type 2 SCD?",
        options: ["Tracks full history with new rows", "Overwrites old values", "Tracks current and previous", "Stores history separately"],
        correctAnswer: "Tracks full history with new rows",
        explanation: "Type 2 SCD tracks full history by creating new rows with effective dates when attributes change, allowing historical analysis."
      },
      {
        id: 15,
        question: "What is data governance?",
        options: ["Ensuring data quality, security, compliance", "Storing data in governed location", "Visualizing data", "Deleting old data"],
        correctAnswer: "Ensuring data quality, security, compliance",
        explanation: "Data governance is the overall management of data availability, usability, integrity, and security, ensuring compliance with policies and regulations."
      },
      {
        id: 16,
        question: "What is data quality?",
        options: ["How well data meets intended use", "Quantity of data", "Speed of processing", "Complexity of data"],
        correctAnswer: "How well data meets intended use",
        explanation: "Data quality is the measure of how well data meets the needs of its intended use, typically measured by dimensions like accuracy, completeness, consistency, timeliness, validity, and uniqueness."
      },
      {
        id: 17,
        question: "What is a data mart?",
        options: ["Subset of data warehouse for specific function", "Type of database", "Processing engine", "Visualization tool"],
        correctAnswer: "Subset of data warehouse for specific function",
        explanation: "A data mart is a subset of a data warehouse designed for a specific business function, team, or department."
      },
      {
        id: 18,
        question: "What is a conformed dimension?",
        options: ["Used consistently across fact tables", "Conforms to specific standard", "Validated dimension", "Read-only dimension"],
        correctAnswer: "Used consistently across fact tables",
        explanation: "A conformed dimension has the same meaning and content when it appears in different fact tables, ensuring consistency."
      },
      {
        id: 19,
        question: "What is a junk dimension?",
        options: ["Random or miscellaneous attributes", "Only numeric values", "Unused dimension", "Null-only dimension"],
        correctAnswer: "Random or miscellaneous attributes",
        explanation: "A junk dimension contains attributes that do not logically belong with other attributes in existing dimensions, like flags or indicators."
      },
      {
        id: 20,
        question: "What is data vault modeling?",
        options: ["Scalable, agile data warehouse architecture", "Simple star schema", "Replace dimensional modeling", "Store only recent data"],
        correctAnswer: "Scalable, agile data warehouse architecture",
        explanation: "Data Vault is a database modeling approach for highly scalable, agile data warehouses with hubs, links, and satellites."
      }
    ]
  },
  
  {
    id: 4,
    title: "Data Streaming",
    description: "Real-time data processing with Kafka, Flink, Spark Streaming",
    category: "Data",
    questions: [
      {
        id: 1,
        question: "What is Apache Kafka?",
        options: ["High-throughput distributed event streaming", "Batch processing framework", "Database management", "Data visualization"],
        correctAnswer: "High-throughput distributed event streaming",
        explanation: "Kafka is a distributed event streaming platform designed for high-throughput, fault-tolerant, low-latency event processing."
      },
      {
        id: 2,
        question: "What is a Kafka topic?",
        options: ["Category or feed to publish events", "Database table", "Processing engine", "Backup location"],
        correctAnswer: "Category or feed to publish events",
        explanation: "A Kafka topic is a category or feed name to which events are published by producers."
      },
      {
        id: 3,
        question: "What is a Kafka partition?",
        options: ["Ordered immutable sequence within topic", "Database shard", "Processing thread", "Backup copy"],
        correctAnswer: "Ordered immutable sequence within topic",
        explanation: "A partition is an ordered, immutable sequence of events within a topic. Each topic is split into partitions for scalability."
      },
      {
        id: 4,
        question: "What is a Kafka broker?",
        options: ["Server storing partitions and serving requests", "Client producing events", "Client consuming events", "Database server"],
        correctAnswer: "Server storing partitions and serving requests",
        explanation: "A Kafka broker is a server that stores topic partitions and serves client requests."
      },
      {
        id: 5,
        question: "What was ZooKeeper's role in traditional Kafka?",
        options: ["Maintain cluster metadata and coordinate brokers", "Store events", "Process events", "Serve requests"],
        correctAnswer: "Maintain cluster metadata and coordinate brokers",
        explanation: "ZooKeeper maintained cluster metadata and coordinated between brokers in traditional Kafka clusters."
      },
      {
        id: 6,
        question: "What is a Kafka producer?",
        options: ["Publishes events to topics", "Reads events from topics", "Server", "Database client"],
        correctAnswer: "Publishes events to topics",
        explanation: "A Kafka producer is a client application that publishes (writes) events to Kafka topics."
      },
      {
        id: 7,
        question: "What is a Kafka consumer?",
        options: ["Subscribes to and reads events", "Publishes events", "Server", "Database client"],
        correctAnswer: "Subscribes to and reads events",
        explanation: "A Kafka consumer is a client application that subscribes to and reads events from Kafka topics."
      },
      {
        id: 8,
        question: "What is a consumer group?",
        options: ["Group of consumers collectively reading from topic", "Group of producers", "Group of brokers", "Group of topics"],
        correctAnswer: "Group of consumers collectively reading from topic",
        explanation: "A consumer group is a group of consumer instances that collectively read from a topic, with each partition read by only one consumer."
      },
      {
        id: 9,
        question: "What are consumer group offsets?",
        options: ["Track reading position in each partition", "Track writing position", "Track replication", "Track health"],
        correctAnswer: "Track reading position in each partition",
        explanation: "Kafka tracks the offset of the last event read by each consumer group for each partition, allowing consumers to resume from where they left off."
      },
      {
        id: 10,
        question: "What is Kafka Connect?",
        options: ["Framework for integrating Kafka with external systems", "Client library", "Monitoring tool", "Testing framework"],
        correctAnswer: "Framework for integrating Kafka with external systems",
        explanation: "Kafka Connect is a framework for building data pipelines that integrate Kafka with external systems using connectors."
      }
    ]
  },
  
  {
    id: 5,
    title: "Data Lake",
    description: "Architecture, storage, and governance for data lakes",
    category: "Data",
    questions: [
      {
        id: 1,
        question: "What is a data lake?",
        options: ["Centralized repo for raw data in native format", "Database with tables", "Processing engine", "Visualization tool"],
        correctAnswer: "Centralized repo for raw data in native format",
        explanation: "A data lake is a centralized repository that holds raw data in its native format, supporting structured, semi-structured, and unstructured data."
      },
      {
        id: 2,
        question: "What is schema-on-read?",
        options: ["Schema applied when reading data", "Schema applied when writing", "Schema during processing", "No schema"],
        correctAnswer: "Schema applied when reading data",
        explanation: "Schema-on-read applies the schema when data is read from the lake, not when it is written, allowing flexible data ingestion."
      },
      {
        id: 3,
        question: "What is schema-on-write?",
        options: ["Schema applied when writing data", "Schema applied when reading", "Schema during processing", "No schema"],
        correctAnswer: "Schema applied when writing data",
        explanation: "Schema-on-write applies schema and data validation when data is written to the system, ensuring data consistency."
      },
      {
        id: 4,
        question: "Data lake vs warehouse - key difference?",
        options: ["Lake-raw, schema-on-read; Warehouse-structured, schema-on-write", "Lake-NoSQL; Warehouse-SQL", "Lake-real-time; Warehouse-batch", "Lake-cloud; Warehouse-on-prem"],
        correctAnswer: "Lake-raw, schema-on-read; Warehouse-structured, schema-on-write",
        explanation: "Data lakes accept data in any format with schema-on-read; data warehouses require structured data with schema-on-write."
      },
      {
        id: 5,
        question: "What is a data lakehouse?",
        options: ["Combines lake and warehouse features", "Lake with house structure", "Warehouse with lake storage", "Hybrid cloud"],
        correctAnswer: "Combines lake and warehouse features",
        explanation: "A data lakehouse combines the flexibility of data lakes with the reliability and performance of data warehouses."
      },
      {
        id: 6,
        question: "What is Delta Lake?",
        options: ["Open-source storage layer with ACID transactions", "Processing framework", "Database", "Visualization tool"],
        correctAnswer: "Open-source storage layer with ACID transactions",
        explanation: "Delta Lake is an open-source storage layer that brings ACID transactions to Apache Spark and big data workloads."
      },
      {
        id: 7,
        question: "What is Apache Iceberg?",
        options: ["Open table format for analytic datasets", "Processing framework", "Database", "Streaming platform"],
        correctAnswer: "Open table format for analytic datasets",
        explanation: "Apache Iceberg is an open table format for huge analytic datasets, providing reliability and simplicity."
      },
      {
        id: 8,
        question: "What is Apache Hudi?",
        options: ["Open-source data lake with upserts, deletes", "Processing framework", "Database", "Streaming platform"],
        correctAnswer: "Open-source data lake with upserts, deletes",
        explanation: "Apache Hudi provides upserts, deletes, and near-real-time ingestion capabilities to data lakes."
      },
      {
        id: 9,
        question: "What are typical data lake zones?",
        options: ["Landing, Raw, Cleaned, Curated, Consumption", "Input, Process, Output", "Hot, Warm, Cold", "Prod, Stage, Dev"],
        correctAnswer: "Landing, Raw, Cleaned, Curated, Consumption",
        explanation: "Typical zones are: Landing (temporary), Raw (persistent raw data), Cleaned (validated), Curated (business-ready), Consumption (optimized for users)."
      },
      {
        id: 10,
        question: "What is a data swamp?",
        options: ["Disorganized data lake hard to use", "High storage costs", "Slow ingestion", "Lack of query capability"],
        correctAnswer: "Disorganized data lake hard to use",
        explanation: "A data swamp is what happens when a data lake lacks proper governance, metadata, and organization, making data hard to find, understand, and use."
      }
    ]
  },
  
  {
    id: 6,
    title: "Apache Spark",
    description: "Big data processing with Spark",
    category: "Data",
    questions: [
      {
        id: 1,
        question: "What is Apache Spark?",
        options: ["Unified analytics engine", "Database", "Streaming platform", "Visualization tool"],
        correctAnswer: "Unified analytics engine",
        explanation: "Apache Spark is a unified analytics engine for large-scale data processing with APIs for Java, Scala, Python, and R."
      },
      {
        id: 2,
        question: "What are Spark main components?",
        options: ["Core, SQL, Streaming, MLlib", "Core, HDFS, YARN, Mesos", "SQL, Streaming, Kafka, Flink", "Core, SQL, Hadoop, Hive"],
        correctAnswer: "Core, SQL, Streaming, MLlib",
        explanation: "Main components: Spark Core (foundation), Spark SQL (structured data), Spark Streaming (real-time), MLlib (machine learning)."
      },
      {
        id: 3,
        question: "What is Spark Core?",
        options: ["Foundation with task dispatching and IO", "SQL engine", "Streaming engine", "ML library"],
        correctAnswer: "Foundation with task dispatching and IO",
        explanation: "Spark Core is the foundation providing distributed task dispatching, scheduling, and basic IO capabilities."
      },
      {
        id: 4,
        question: "What is an RDD?",
        options: ["Resilient Distributed Dataset", "Distributed database", "Streaming data structure", "ML model"],
        correctAnswer: "Resilient Distributed Dataset",
        explanation: "RDD is Spark core data structure: an immutable, fault-tolerant collection of elements that can be processed in parallel."
      },
      {
        id: 5,
        question: "What are the two RDD operation types?",
        options: ["Transformations and Actions", "Map and Reduce", "Filter and Aggregate", "Parallel and Sequential"],
        correctAnswer: "Transformations and Actions",
        explanation: "RDDs support Transformations (create new RDDs) and Actions (compute results). Transformations are lazy; Actions trigger execution."
      },
      {
        id: 6,
        question: "Which is a Transformation?",
        options: ["map", "count", "collect", "reduce"],
        correctAnswer: "map",
        explanation: "map() is a Transformation that applies a function to each element, creating a new RDD."
      },
      {
        id: 7,
        question: "Which is an Action?",
        options: ["count", "map", "filter", "flatMap"],
        correctAnswer: "count",
        explanation: "count() is an Action that returns the number of elements in an RDD, triggering execution of all accumulated Transformations."
      },
      {
        id: 8,
        question: "What is lazy evaluation in Spark?",
        options: ["Transformations not executed until Action called", "Transformations executed immediately", "Actions executed lazily", "Data loaded lazily"],
        correctAnswer: "Transformations not executed until Action called",
        explanation: "Spark uses lazy evaluation: Transformations build a DAG but do not execute until an Action is called, allowing for optimization."
      },
      {
        id: 9,
        question: "What is a DAG in Spark?",
        options: ["Directed Acyclic Graph of operations", "Data structure for RDDs", "Scheduling algorithm", "Partitioning strategy"],
        correctAnswer: "Directed Acyclic Graph of operations",
        explanation: "A DAG represents the sequence of Transformations and Actions to be executed, with nodes as RDDs and edges as operations."
      },
      {
        id: 10,
        question: "What is Spark SQL?",
        options: ["Module for structured data processing", "Database", "Streaming engine", "ML library"],
        correctAnswer: "Module for structured data processing",
        explanation: "Spark SQL provides a DataFrame API and SQL interface for querying structured data from various sources."
      }
    ]
  }
];

export const categories = [...new Set(quizzes.map(q => q.category))];
