const environment = require('dotenv');
const Redis = require('ioredis');

environment.config();

let client, subscriber;

client = new Redis(process.env.REDIS_URL, {
    maxRetriesPerRequest: null,
    enableReadyCheck: false
});
subscriber = new Redis(process.env.REDIS_URL, {
    maxRetriesPerRequest: null,
    enableReadyCheck: false
});

const RedisOptions = {
    createClient: function(type){
        switch(type){
            case 'client':
                return client;
            case 'subscriber':
                return subscriber;
            default:
                return new Redis(process.env.REDIS_URL, {
                    maxRetriesPerRequest: null,
                    enableReadyCheck: false
                });
        }
    }
}

module.exports = RedisOptions;