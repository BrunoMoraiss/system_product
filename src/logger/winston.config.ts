import * as winston from 'winston';

import 'winston-daily-rotate-file';

const transports = [
  new winston.transports.DailyRotateFile({
    filename:
      '/var/logs/uni_testemunhos_back//termos-autorizacao-back-%DATE%.log',
    datePattern: 'YYYY-MM-DD',
    zippedArchive: true,
    maxSize: '20m',
    maxFiles: '7d',
    format: winston.format.combine(
      winston.format.timestamp(),
      winston.format.json(),
    ),
  }),
];

export const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports,
});
