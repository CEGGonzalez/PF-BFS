const server = require("./src/server.js");
const { conn } = require("./src/db.js");
const PORT = process.env.DB_PORT || 3001;

/* conn.sync().then(() => {
	server.listen(3001, () => {
		console.log(`%Server listening at ${port}`);
	});
}); */

conn.sync({ force: true }).then(() => {
	server.listen(PORT, () => {
	  console.log(`%Server listening at ${PORT}`);
	});
  });