const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limit: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    .command('toList', 'print the multiplication table in the console',  opts )
    .command('create', 'generates a file with the multiplication table',  opts )
    .help()
    .argv;

module.exports = {
    argv
}