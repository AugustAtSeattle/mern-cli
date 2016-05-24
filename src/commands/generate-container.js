import program from 'commander';
import Generate from '../tasks/generate';

program
    .action(() => {
        new Generate().run(['container', ...program.args]);
    })
    .parse(process.argv);

if (!program.args.length) {
    program.help();
}
