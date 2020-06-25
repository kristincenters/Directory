const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3001;
// Configure body parsing for AJAX requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets
if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'));
}
app.use(express.static(path.join(__dirname, 'client', 'build')));
// Routes
app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});
// Start the API server
app.listen(PORT, () =>
	console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
);
