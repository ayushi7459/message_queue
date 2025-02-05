const {Queue} = require('bullmq');

const NotifictaionQueue = new Queue('email_queue');

async function addingMessages(){
const response  = await NotifictaionQueue.add(
    'email send from here',
    {   
        name : 'Ayushi',
        email : 'ayushi@gmail.com',
        subject : 'welcome mess',
        
    }
);
console.log('job added to queue',response.id);
}
addingMessages();