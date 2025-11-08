const express = require('express');
const session = require('express-session');
const path = require('path');

const publicoRoutes = require('./src/routes/publicoRoutes');
const privadoRoutes = require('./src/routes/privadoRoutes');

const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(session({
  secret: 'supermercado-secreto-2024',
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: 3600000 }
}));

app.use('/', publicoRoutes);
app.use('/', privadoRoutes);

app.use((req, res) => {
  res.status(404).render('erro', { 
    mensagem: 'Página não encontrada',
    usuario: req.session ? req.session.usuario : null 
  });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
