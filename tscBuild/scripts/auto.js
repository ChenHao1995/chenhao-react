var program = require("commander");
var inquirer = require("inquirer");
program
    .version("0.2.0", "-v, --version")
    .command("test <dir>")
    // .option("-r, --recursive", "chenhao commander")
    .action(function (cmd, env) {
    inquirer
        .prompt([
        {
            type: "input",
            name: "请随意输入",
            message: "hahahah"
        }
    ])
        .then(function (answers) {
        console.log("你的输入：" + JSON.stringify(answers));
        console.log(cmd);
        console.log("-----------------------------------");
        console.log(env);
    });
});
program.parse(process.argv);
// console.log("-----------------------------------");
// console.log(process.argv);
// console.log(program.args);
