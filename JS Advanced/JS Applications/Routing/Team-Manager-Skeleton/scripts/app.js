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
    this.get('#/catalog', loadCatalog);
    this.get('#/logout', logOut);
    this.get('#/create', loadCreateForm);

    this.post('#/register', createUser);
    this.post('#/login', login);
    this.post('#/create', createTeam);
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

function loadCatalog(ctx) {
    getSessionInfo(ctx);

    partials['team'] = './templates/catalog/team.hbs';
    get('appdata', 'teams', 'Kinvey')
        .then(x => {
            ctx.teams = x;
            this.loadPartials(partials).then(function () {
                this.partial('./templates/catalog/teamCatalog.hbs')
            });
        })
        .catch(console.error);
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

function loadCreateForm(ctx) {
    getSessionInfo(ctx);
    partials['createForm'] = './templates/create/createForm.hbs'
    this.loadPartials(partials).then(function () {
        this.partial('./templates/create/createPage.hbs')
    });
}

function createUser(ctx) {
    const { username, password, repeatPassword } = ctx.params;
    if (password === repeatPassword && password !== '' && username !== '') {
        post('user', '', 'Basic', { username, password })
            .then(x => ctx.redirect('#/login'))
            .catch(console.error)
    }
}

function createTeam(ctx) {
    const { name, description } = ctx.params;
    if (name !== '' && description !== '') {
        post('appdata', 'teams', 'Kinvey', { name, description })
            .then(x => ctx.redirect('#/catalog'))
            .catch(console.error)
    }
}

function login(ctx) {
    const { username, password } = ctx.params;
    if (username !== '' && password !== '') {
        post('user', 'login', 'Basic', { username, password })
            .then(x => {
                sessionStorage.setItem('username', x.username);
                sessionStorage.setItem('authtoken', x._kmd.authtoken);
                ctx.redirect('#/');
            })
            .catch(console.error)
    }
}

function logOut(ctx) {
    sessionStorage.clear();
    ctx.redirect('#/');
}

app.run();