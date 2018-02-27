import errorHandler from "errorhandler";

import app from "./app";

/**
 * Error Handler. Provides full stack - remove for production
 */
// app.use(errorHandler());

/**
 * Start Express server.
 */
const server = app.listen(process.env.PORT || 3000, () => {
    console.log(
        "  App is running at http://localhost:%d in %s mode"
    );
    console.log("  Press CTRL-C to stop\n");
});

export default server;