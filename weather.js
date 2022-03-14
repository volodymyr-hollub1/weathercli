#!user/bin/env node
import { getArgs } from "./helpers/args.js";


const initCli = () => {
    const args = getArgs(process.argv);
    
    if (args.h) {
        //get help
    }

    if (args.s) {
        //get city
    }

    if (args.t) {
        //get token
    }
};

initCli();