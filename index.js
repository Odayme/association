const experess = requiere("express");
const app = express();
const port = 3000;
X
app.use(express.static(_dirname + "/docs"));

app.get("/", (req, res) => {
    res.sendFile(_dirname + "index.html");
});

app.listen(port, () => {
    console.log(`Exemple app listening at http:localhost:port`);
});
