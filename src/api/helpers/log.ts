import { configure, getLogger } from "log4js";

configure({
  appenders: {
    out: { type: "stdout" },
    multi: {
      type: "multiFile",
      base: "./src/api/logs/",
      property: "categoryName",
      extension: ".log",
      maxLogSize: 1024,
      backup: 3,
      compress: true,
    },
  },
  categories: {
    default: {
      appenders: ["out", "multi"],
      level: "debug",
    },
  },
});

const logger = getLogger();

export { logger };
