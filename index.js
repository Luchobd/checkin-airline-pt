const app = require("./app");
const sequelize = require("./src/core/database/db.js");

const PORT = process.env.PORT || 3000;

app.listen(PORT, function () {
  console.log(`http://localhost:${PORT}`);

  sequelize
    .sync({ force: false })
    .then(async () => {
      console.log("database connection");
    })
    .catch((error) => {
      console.log("err", error);
    });
});