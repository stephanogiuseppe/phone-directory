var http = require('http');

var createRouter = (port) => {

    var api = {};
    var routes = {};
    var methods = ['GET', 'POST', 'OPTIONS'];
    var interceptors = [];

    methods.map((method) => {
        routes[method] = {};
        api[method.toLocaleLowerCase()] = (path, fn) => {
            routes[method][path] = fn;
        };
    });

    api.interceptor = (interceptor) => {
        interceptors.push(interceptor);
    };

    var executeInterceptors = (number, req, res) => {
        var interceptor = interceptors[number];
        if (!interceptor) return;
        interceptor(req, res, () => {
            executeInterceptors(++number, req, res);
        });
    };

    var handleBody = (req, res, next) => {
        var body = [];

        req.on('data', (chunk) => {
            body.push(chunk);
        });

        req.on('end', () => {
            req.body = Buffer.concat(body).toString();
            next();
        });
    };

    http.createServer((req, res) => {

        console.log(req.url);

        handleBody(req, res, () => {
            executeInterceptors(0, req, res);
    
            if (!routes[req.method][req.url]) {
                res.statusCode = 404;
                return res.end();
            }
            routes[req.method][req.url](req, res);
        });

    }).listen(port);

    return api;
};

module.exports = createRouter;