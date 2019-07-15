const { argv } = require('./config/yargs')
const { createFile, listTable } =  require('./multiply/multiply')
let command = argv._[0]

switch (command) {
    case 'toList':
        listTable(argv.base, argv.limit)
        break;
    case 'create':
        createFile (argv.base, argv.limit)
            .then(archivo => console.log(`File created ${archivo}`))
            .catch( e => console.log(e))
        break;
    default:
        console.log('unrecognized command')
        break;
}



