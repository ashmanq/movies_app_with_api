# JavaScript Movies App

This app is a full stack JavaScript application with an Express server and MongoDB database for the back end and Vue.js for the front end.

### The app demonstrates the following:
* A RESTful JSON API
* Use of the Express framework and MongoDB for the back end
* The ability to make requests to an API using the Vue.js framwork

## The app does the following:
* Sets up an Express server to run the API
* Has the server conenct to a MongoDB database
* Creates routes for various API requests i.e. '/api/movies/'
* Performs full CRUD operations with the API
* Displays all movies on the front end
* Allows user to delete movie using the fron end
* Lists more details about a movie when user clicks on details button

## Getting Started

These instructions will get the project up and running on your local machine for development purposes.

### Installing

Install dependencies in both the client and the server folders:

```
cd client
npm install

cd server
npm install
```

Seed the database.  Within the server folder:

```
npm run seeds
```

Run express (leave running in a terminal window).  Within the server folder:

```
npm run server:dev
```

Run Vue development environment (leave running in a terminal window).  Within client folder:

```
npm run serve
```

### Using

The application is running on port 8080 so visit http://localhost:8080/.
