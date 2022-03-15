#!user/bin/env node
import { getArgs } from "./helpers/args.js";
import { getWeather } from "./services/api.service.js";
import { printError, printHelp, printSuccess, printWeather } from './services/log.service.js';
import { saveKeyValue, TOKEN_DICTIONARY } from "./services/storage.service.js";

const saveToken = async (arg) => {
    if (!arg.length) {
        printError(TOKEN_DICTIONARY.token + ' has not given');
        return;
    }

    try {
        await saveKeyValue(TOKEN_DICTIONARY.token, arg);
        printSuccess(TOKEN_DICTIONARY.token + ' has saved!');
    } catch (e) {
        printError(e.message);
    }
};

const getForecast = async (city) => {
    try {
        const weather = await getWeather(city);
        printWeather(weather);
    } catch (e) {
        if (e?.response?.status == 404) {
            printError('Not found city');
        } else if (e?.response?.status == 401) {
            printError('Not found token');
        } else {
            printError(e.message);
        }
    }
   
};

const initCli = () => {
    const args = getArgs(process.argv);
    
    if (args.h) {
        printHelp();
    }

    if (args.s) {
        //get city
    }

    if (args.t) {
        return saveToken(args.t);
    }

    getForecast('London');
};

initCli();