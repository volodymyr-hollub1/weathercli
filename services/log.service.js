import chalk from "chalk";
import dedent from "dedent-js";

const printError = error => {
    console.log(chalk.bgRed(' ERROR ') + ' ' + error);
};

const printSuccess = message => {
    console.log(chalk.bgGreen(' Success ') + ' ' + message);
};

const printHelp = () => {
    console.log(
        dedent`${chalk.bgCyan(' HELP ')}
         Without parameters - show weather
         -h [Help] show the manual
         -s [City] set the city
         -t [Token] set the token
        `
    );
};

const printWeather = res => {
    console.log(
        dedent`${chalk.bgYellow('Weather')}
            Temperature: ${res.main.temp}
            Description: ${res.weather[0].description}
        `
    );
};

export { printError, printSuccess, printHelp, printWeather };