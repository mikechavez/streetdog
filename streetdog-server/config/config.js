const config = {
  port: process.env.PORT || 8081,
  db: process.env.MONGOLAB_URI || "mongodb://localhost/streetdog",
  test_port: 2001,
  test_db: "mongodb://localhost/streetdog-test"
}
module.exports = config;
