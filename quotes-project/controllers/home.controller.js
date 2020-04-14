const path =  require("path");

function render(file, res){
    return res.sendFile(path.join(__dirname + `/../views/${file}`));
}

class HomeController{
    async index(req, res){
        return render("home.html", res);
    }

    async about(req, res){
        return render("about.html", res);
    }
}

module.exports = new HomeController();