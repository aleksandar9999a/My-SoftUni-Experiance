import { get, post } from './requester.js';

const partials = {
    header: './templates/common/header.hbs',
    footer: './templates/common/footer.hbs'
};

const app = Sammy('#main', function () {
    this.use('Handlebars', 'hbs');
    this.get('#/', loadHome);
    this.get('#/home', loadHome);
    this.get('#/about', loadAbout);
    this.get('#/login', loadLogin);
    this.get('#/register', loadRegister);

    this.post('#/register', createUser);
    this.post('#/login', login);
});

function getSessionInfo(ctx) {
    ctx.loggedIn = sessionStorage.getItem('authtoken') !== null;
    if (ctx.loggedIn) {
        ctx.username = sessionStorage.getItem('username');
    }
}

function loadHome(ctx) {
    getSessionInfo(ctx);
    this.loadPartials(partials).then(function () {
        this.partial('./templates/home/home.hbs')
    });
}

function loadAbout(ctx) {
    getSessionInfo(ctx);
    this.loadPartials(partials).then(function () {
        this.partial('./templates/about/about.hbs')
    });
}

function loadLogin(ctx) {
    partials['loginForm'] = './templates/login/loginForm.hbs'
    this.loadPartials(partials).then(function () {
        this.partial('./templates/login/loginPage.hbs')
    });
}

function loadRegister(ctx) {
    partials['registerForm'] = './templates/register/registerForm.hbs'
    this.loadPartials(partials).then(function () {
        this.partial('./templates/register/registerPage.hbs')
    });
}

function createUser(ctx) {
    const { username, password, repeatPassword } = ctx.params;
    if (password === repeatPassword && password !== '' && username !== '') {
        post('user', '', { username, password })
            .then(x => ctx.redirect('#/login'))
            .catch(console.error)
    }
}

function login(ctx){
    const { username, password } = ctx.params;
    if (username !== '' && password !== '') {
        post('user', 'login', { username, password })
            .then(x => {
                sessionStorage.setItem('username', x.username);
                sessionStorage.setItem('authtoken', x._kmd.authtoken);
                ctx.redirect('#/');
            })
            .catch(console.error)
    }
}

app.run();