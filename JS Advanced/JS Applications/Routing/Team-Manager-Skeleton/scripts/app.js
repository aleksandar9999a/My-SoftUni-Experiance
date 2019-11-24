(() => {
    const partials = {
        header: './templates/common/header.hbs',
        footer: './templates/common/footer.hbs'
    };

    const app = Sammy('#main', function () {
        this.use('Handlebars', 'hbs');

        this.get('#/', loadHome);
        this.get('#/home', loadHome);

        this.get('#/about', function (ctx) {
            addHeaderInfo(ctx);
            this.loadPartials(partials).then(function () {
                this.partial('./templates/about/about.hbs')
            });
        })

        this.get('#/login', function (ctx) {
            partials['loginForm'] = './templates/login/loginForm.hbs'
            this.loadPartials(partials).then(function () {
                this.partial('./templates/login/loginPage.hbs')
            });
        })

        this.get('#/register', function (ctx) {
            partials['registerForm'] = './templates/register/registerForm.hbs'
            this.loadPartials(partials).then(function () {
                this.partial('./templates/register/registerPage.hbs')
            });
        })
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

    app.run();
})()

// sessionStorage.getItem('authtoken') !== null