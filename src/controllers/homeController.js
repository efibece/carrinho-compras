
class HomeController {
    exibirHome(req, res) {
        res.render('home');
    }

    exibirSobre(req, res) {
        res.render('sobre');
    }

    exibirContato(req, res) {
        res.render('contato');
    }
}

module.exports = new HomeController();
