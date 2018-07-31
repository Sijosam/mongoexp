//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/User', (err, client) => {
  if(err){
    return console.log('Unable to connect');
  }
  console.log('Connected to MongoDb');

const db = client.db('User')

   db.collection('User').find({
     name:'Sijo'
   }).toArray().then((docs) => {
    console.log('User');
    console.log(JSON.stringify(docs, undefined,2));
   }, (err) => {
     console.log('unable to fetch the docs');
   });

   db.collection('User').find().count().then((count) => {
       console.log(`Todos count: ${count}`);
     }, (err) => {
       console.log('Unable to fetch todos', err);
     });


  client.close();
});
