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
            this.loadPartials(partials).then(function(){
                this.partial('./templates/about/about.hbs')
            });
        })
    });

    function addHeaderInfo(ctx){
        ctx.loggedIn = true;
        ctx.username = 'Alexandar';
    }

    function loadHome(ctx) {
        addHeaderInfo(ctx);
        this.loadPartials(partials).then(function(){
            this.partial('./templates/home/home.hbs')
        });
    }

    app.run();
})()

// sessionStorage.getItem('authtoken') !== null