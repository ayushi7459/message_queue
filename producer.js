const {Queue} = require('bullmq');

const NotifictaionQueue = new Queue('email_queue');

async function addingMessages(){
const reponse  = NotifictaionQueue.add(
    'email send from here',
    {   
        name : 'Ayushi',
        email : 'ayushi@gmail.com',
        subject : 'welcome mess',
        
    }
);
console.log('job added to queue',res.id.data);
}
addingMessages();