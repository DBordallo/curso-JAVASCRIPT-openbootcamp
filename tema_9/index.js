const winston = require('winston');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  defaultMeta: { service: 'user-service' },
  transports: [
    //
    // - Write all logs with importance level of `error` or less to `error.log`
    // - Write all logs with importance level of `info` or less to `combined.log`
    //
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' }),
  ],
});

logger.error("Esto es un error")




const number = 50;
    if (typeof 50 === number)
    return 2 * 50

try {
    number = 50;

} catch(err) {
    console.error("Aquí hay un error", err);
}


console.log(number)

