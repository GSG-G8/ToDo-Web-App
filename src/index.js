const app = require('./app');

// eslint-disable-next-line no-console
app.listen(app.get('PORT'), () => console.log(`Server is listening on port: http://localhost:${app.get('PORT')}`));
