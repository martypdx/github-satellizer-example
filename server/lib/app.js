const express = require('express');
const app = express();

/* middleware */
const morgan = require('morgan');
const redirectHttp = require('./redirect-http')();
const cors = require('cors')();
const checkDb = require('./check-connection')();
const errorHandler = require('./error-handler')();
const ensureAuth = require('./auth/ensure-auth')();

app.use(morgan('dev'));
// Redirect http to https in production
if(process.env.NODE_ENV === 'production') {
    app.use(redirectHttp);
}
app.use(cors);
app.use(express.static('./public'));

/* routes */
const auth = require('./routes/auth');
const album = require('./routes/albums');
const images = require('./routes/images');
app.use(checkDb);
app.use('/auth', auth);
app.use('/api/albums', ensureAuth, album);
app.use('/api/images', ensureAuth, images);

/* error handler */
app.use(errorHandler);

module.exports = app;