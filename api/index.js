const express = require('express')
const cors = require('cors')
const multer  = require('multer')
const app = express()
const port = 5000
const mock = require("./mock/data.json")
const upload = multer({ dest: 'uploads/'});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/uploads', express.static('uploads'));

app.get('/', (req, res) => {
  res.send('Test response!');
});

app.get('/api/nav', (req, res) => {
  res.json(mock.navigation);
});

app.get('/api/footer', (req, res) => {
  res.json(mock.footer);
});

app.get('/api/socials', (req, res) => {
  res.json(mock.socials);
});

app.get('/api/hero', (req, res) => {
  res.json(mock.hero);
});

app.get('/api/partners', (req, res) => {
  res.json(mock.partners);
});

app.get('/api/arrivals', (req, res) => {
  res.json(mock.arrivals);
});

app.get('/api/shop', (req, res) => {
  res.json(mock.shop);
});

app.get('/api/bestseller', (req, res) => {
  res.json(mock.bestseller);
});

app.get('/api/promotions', (req, res) => {
  res.json(mock.promotions);
});

app.get('/api/iconcards', (req, res) => {
  res.json(mock.iconCards);
});

app.get('/api/newspeed', (req, res) => {
  res.json(mock.newSpeed);
});

app.get('/api/newsletter', (req, res) => {
  res.json(mock.newsLetter);
});

app.get('/api/products/:id', (req, res) => {
  const { id } = req.params;
  const product = mock.singleProduct.find(p => p.id === id );
  
  if(!product) {
    return res.status(404).json({ error: 'Product not found' });
  }

  res.json(product);
});

app.post('/api/contact', upload.single('upload'), (req, res) => {
  const formData = req.body;
  const file = req.file;

  // console.log('Dados recebidos: ', formData);
  // console.log('Arquivo recebido: ', file);
  
  res.status(200).json({ message: 'Formulário recebido com sucesso!', formData, file });
});

app.post('/api/email', (req, res) => {
  const formData = req.body;

  console.log('Dados recebidos: ', formData);
  
  res.status(200).json({ message: 'E-mail enviado com sucesso!', formData });
});

app.post('/api/login', (req, res) => {
  const { email, password } = req.body;

  if(email === 'user@user.com' && password === '123456') {
    return res.json({
      token: 'fake-auth-token',
      user: {
        id: 1,
        name: 'Joaquim Trindade',
        email,
        imageId: 1,
        src: 'http://localhost:5000/uploads/joaquim-trindade.avif',
        alt: 'Perfil'
      }
    });
  }

  res.status(401).json({ error: 'Invalid credentials. Please check your email and password.' });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});