const Koa = require('koa')

const app = new Koa()

const special = require('./routues/special')
const articles = require('./routes/articles')
const uploads = require('./routes/uploads')
const users = require('./routes/users')
const cors = require('@koa/cors');

app.use(cors());
app.use(special.routes())
app.use(articles.routes())
app.use(users.routes())
app.use(uploads.routes())

module.exports = app;