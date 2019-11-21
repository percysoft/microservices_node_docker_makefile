const gateway = require("fast-gateway");
const helmet = require("helmet");

const validateToken = (req, res, next) => {

};

const server = gateway({
  middlewares: [helmet()],
  routes: [
    {
      prefix: "/percy",
      target: `http://microservice:3000`
    }
  ]
});

server
  .start(3200)
  .then(() => console.log('Gateway is running on port 3200'))
  .catch(err => {
    console.log(err);
    process.exit(1);
  });
