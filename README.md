# Simple Vue joke application

Run `npm install` and then `npm run start:nodemon`

To connect to MongoDB:

At src/connect.ts change your connection credentials.

```
mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@nrnk.zq3cas7.mongodb.net/recipes?retryWrites=true&w=majority
```

add .env file to root directory:

```
DB_USERNAME=username
DB_PASSWORD=password
```

where DB_USERNAME and DB_PASSWORD are your monogDB credentials.

Run frontend: https://github.com/naurisievins/26MD-1-Vue-3-Data-Fetching-State-Management-front
