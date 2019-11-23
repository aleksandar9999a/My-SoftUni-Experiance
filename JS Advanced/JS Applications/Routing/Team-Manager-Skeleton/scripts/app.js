(() => {
    const partials = {
        header: './templates/common/header.hbs',
        footer: './templates/common/footer.hbs'
    };

    const app = Sammy('#main', function () {
        this.use('Handlebars', 'hbs');

        this.get('index.html', function (ctx) {
            this.loadPartials(partials).then(function(){
                this.partial('./templates/home/home.hbs')
            });
        })

        this.get('/', function (ctx) {
            this.loadPartials(partials).then(function(){
                this.partial('./templates/home/home.hbs')
            });
        })
    });

    app.run();
})()