import * as path from "path";
import * as express from "express";
import * as logger from "morgan";
import * as bodyParser from "body-parser";

import todoRouter from "./controllers/todo";

// creates and configures an ExpressJS web server.
class App {

  // ref to Express instance
  public express: express.Application;

  // run configuration methods on the Express instance.
  constructor() {
    this.express = express();
    this.middleware();
    this.routes();
  }

  // configure Express middleware.
  private middleware(): void {
    this.express.use(logger("dev"));
    this.express.use(bodyParser.json());
    this.express.use(bodyParser.urlencoded({ extended: false }));
  }

  // configure API endpoints.
  private routes(): void {
    /* This is just to get up and running, and to make sure what we've got is
     * working so far. This function will change when we start to add more
     * API endpoints */

    this.express.use('/todo', todoRouter);
    this.express.use('/', (req, res) => res.end("ok"));
  }

}

// new App().express.listen(process.env.PORT || 3000);

export default new App().express;