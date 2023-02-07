

import chalk from './librerias/node_modules/chalk/source/index.js';
import * as moduloController from './modulos/controller.js'

const sum = moduloController.suma (1,2)

const sum1 = moduloController.suma (4,5)

const mult = moduloController.multiplica (sum, sum1)


console.log(sum)
console.log(sum1)
console.log(chalk.green(mult))


