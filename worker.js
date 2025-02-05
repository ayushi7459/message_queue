const { Worker } = require('bullmq');
const IORedis = require('ioredis');

// Connect to Redis running in Docker
const connection = new IORedis({
    host: 'localhost',  // Replace with the Docker container IP if not on localhost
    port: 6379,         // Default Redis port
    maxRetriesPerRequest: null
});

// Simulate a timer
const timerCheck = () => new Promise((res) => setTimeout(res, 1000));

// Initialize the worker with the connection
const misterWorker = new Worker(
    'email_queue',
    async (job) => {
        console.log(`Received message from job ID: ${job.id}`);
        console.log(`Processing message of: ${job.data.email}`);
        await timerCheck();
        console.log(`Data processed for job ID: ${job.id}`);
        console.log("done");
    },
    { connection } // Pass the connection to the worker
);
