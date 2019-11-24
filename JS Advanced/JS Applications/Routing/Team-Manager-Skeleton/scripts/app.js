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
});

function addHeaderInfo(ctx) {
    ctx.loggedIn = false;
    ctx.username = 'Alexandar';
}

function loadHome(ctx) {
    addHeaderInfo(ctx);
    this.loadPartials(partials).then(function () {
        this.partial('./templates/home/home.hbs')
    });
}

function loadAbout(ctx) {
    addHeaderInfo(ctx);
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

app.run();