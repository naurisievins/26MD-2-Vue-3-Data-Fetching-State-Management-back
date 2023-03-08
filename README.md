# MD24-1-Angular-Forms-and-HTTP-back

### Simple animal application where you can add animals

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
