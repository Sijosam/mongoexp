//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if(err){
    return console.log('Unable to connect');
  }
  console.log('Connected to MongoDb');

  const db = client.db('TodoApp')

  db.collection('Todos').insertOne({
        text:'Something to do after change',
        completed:false
  }, (err,result) => {
    if(err){
      return console.log('Unable to insert Todo',err);
    }
    console.log(JSON.stringify(result.ops,undefined,2));
  });
//   const db = client.db('User')
//
//   db.collection('User').insertOne({
//         name:'Sijo Sam ',
//         age:22,
//         location:'Kakkanad,Ernakulam'
//   }, (err,result) => {
//     if(err){
//       return console.log('Unable to insert Todo',err);
//     }
//     console.log(result.ops[0]._id.getTimestamp());
//   })
  client.close();
});
