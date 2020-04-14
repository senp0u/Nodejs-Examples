const path =  require("path");
const DB_PATH = path.join(__dirname + "/../data/db.json");
const fs = require("fs");
let db = require(DB_PATH);


function render(file, res){
    return res.sendFile(path.join(__dirname + `/../views/${file}`));
}

class QuotesController{
    async index(req, res){
        return render("quotes.html",res); 
    }

    async get(req, res){
        return res.send(db);
    }

    async add(req, res){
        const { body: quote } = req;
        const lastQoute = db[db.length -1];
        quote.id = lastQoute + 1;
        db.push(quote);
        fs.writeFileSync(DB_PATH,JSON.stringify(db));
        return res.status(201).send();
    }

}

module.exports = new QuotesController();