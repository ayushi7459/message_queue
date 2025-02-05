const { Worker } = require('bullmq');
const IORedis = require('ioredis');

// Create a Redis connection
const connection = new IORedis();

// Simulate a timer
const timerCheck = () => new Promise((res) => setTimeout(res, 1000));

// Initialize the worker with a connection
const misterWorker = new Worker(
    'email_queue',
    async (job) => {
        console.log(`Received message from job ID: ${job.id}`);
        console.log(`Processing message of: ${job.data.email}`);
        await timerCheck();
        console.log(`Data processed for job ID: ${job.id}`);
        console.log("done");
    },
    { connection } // Pass the connection here
);
