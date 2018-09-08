var router = require('./router');

var app = router(3412);

var phoneProviders = [
    { name: 'Oi', code: 14, category: 'Celphone', price: 1 },
    { name: 'Vivo', code: 15, category: 'Celphone', price: 2 },
    { name: 'Tim', code: 41, category: 'Celphone', price: 2 },
    { name: 'GVT', code: 25, category: 'Telephone', price: 2 },
    { name: 'Embratel', code: 21, category: 'Telephone', price: 1 }
]

contacts = [
    { name: 'Stephano', phone: '+55 13 99999-6666', phoneProvider: { name: 'Claro' }, color: "lightseagreen" },
    { name: 'Giuseppe', phone: '+55 13 96666-6666', phoneProvider: { name: 'Claro' }, color: "lightsalmon" },
    { name: 'Maria', phone: '+55 13 96666-9999', phoneProvider: { name: 'Claro' }, color: "lightgoldenrodyellow" },
    { name: 'Joao', phone: '+55 13 99999-9999', phoneProvider: { name: 'Claro' }, color: "lightgray" }
];

app.interceptor((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.interceptor((req, res, next) => {
    res.setHeader('Content-Type', 'application/json;charset=UTF-8');
    next();
});

app.get('/phone-providers', (req, res) => {
    res.write(JSON.stringify(phoneProviders));
    res.end();
});

app.get('/contacts', (req, res) => {
    res.write(JSON.stringify(contacts));
    res.end();
});

app.post('/contacts', (req, res) => {
    contacts.push(JSON.parse(req.body));
    res.end();
});

app.options('/contacts', (req, res) => {
    res.end();
});
