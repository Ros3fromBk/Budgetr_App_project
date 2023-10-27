const app = require('./app');
const port = process.env.PORT || 3001;

app.get('/', (req, res) => {
    res.send("Welcome to Rose Made Budgetr App");
})


app.listen(port, () => {
    console.log(`listening on port ${port}`)
})