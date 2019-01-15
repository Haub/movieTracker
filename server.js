const express = require('express')
const bodyParser = require('body-parser')
const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const database = require('knex')(config)
const app = express()
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json())
app.use(express.static('public'));


app.set('port', process.env.PORT || 3000);
app.locals.title = 'users';

  app.get('/api/users', (request, response) => {
    database('users').select()
        .then(user => {
            response.status(200).json(user)
        })
        .catch(error => {
            response.status(500).json({ error: error.message });
        })
  })

  app.post('/api/users/new', (request, response) => {
    const user = request.body
  
    for(let requiredParam of ['name', 'email', 'password']) {
        if(!user[requiredParam]) {
            response.status(422).json({error: error.message})
        }
    }
  
    database('users').insert(user, 'id')
        .then(userIds => {
            response.status(201).json({id: userIds[0]})
        })
        .catch(error => {
            response.status(500).json({error: error.message})
        })
  })

  app.post('/api/users', (request, response) => {
    const user = request.body
  
    for(let requiredParam of ['email', 'password']) {
        if(!user[requiredParam]) {
            response.status(422).json({error: error.message})
        }
    }
  
    database('users').where('email', user.email)
        .select()
        .then(userIds => {
            response.status(201).json(userIds[0])
        })
        .catch(error => {
            response.status(500).json({error: error.message})
        })
  })

  app.post('/api/users/favorites/new', (request, response) => {
    const favorite = request.body
  
    for(let requiredParam of ['movie_id', 'user_id', 'title', 'poster_path', 'release_date', 'vote_average', 'overview']) {
        if(!favorite[requiredParam]) {
            response.status(422).json({error: error.message})
        }
    }
  
    database('favorites').insert(favorite, 'id')
        .then(favorites => {
            response.status(201).json(favorites)
        })
        .catch(error => {
            response.status(500).json({error: error.message})
        })
  })

  app.get('/api/users/:id/favorites', (request, response) => {
    const { id } = request.params
    
    database('favorites').where('user_id', id).select()
        .then(favorite => response.status(200).json(favorite))
        .catch(error => response.status(500).json(`Error fetching favorite: ${error.message}`))
  })
  
  app.delete('/api/users/:id/favorites/:movie_id', (request, response) => {
    const { id, movie_id } = request.params
    
    database('favorites').where('id', movie_id).del()
    .then(favorite => {
      response.status(201).json(id)
    })
    .catch(error => {
      response.status(500).json({error: error.message})
    })
  })


    app.use(function (request, response, next) {
        response.status(404).sendFile(__dirname + '/public/404.html')
      })
      
    app.listen(app.get('port'), () => {
        console.log(`${app.locals.title} is running on ${app.get('port')}.`);
    });

    module.exports = app