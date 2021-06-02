const path = require("path");
const express = require("express");
const session = require("express-session");
const routes = require("./controllers/routes");
const exphbs = require("express-handlebars");

const sequelize = require("./config/connection");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
console.log("connected to DB");

// Setting the server to run on hosting service or local machine
const app = express();
const PORT = process.env.PORT || 3001;

// add handlebars and engine
const hbs = exphbs.create({});
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

// Configure the session
const sess = {
  secret: "Super secret secret",
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () =>
    console.log(`Now listening on http://localhost:${PORT}`)
  );
  // app.get("/", (req, res) => {
  //   res.sendFile("index.html");
  // });
});
