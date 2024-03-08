const unleash = require('unleash-server');

unleash
    .start({
        db: {
            ssl: false,
            host: 'localhost',
            port: 3307,
            database: 'unleash',
            user: 'bj',
            password: '1234',
            version: '8.3',
            disableMigration: true
        },
        server: {
            port: 4242,
        },
    })
    .then((unleash) => {
        console.log(
            `Unleash started on http://localhost:${unleash.app.get('port')}`,
        );
    });
