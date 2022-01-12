#!/usr/bin/env node
const chalk = require("chalk");
const boxen = require("boxen");
const { Command } = require("commander");
const program = new Command();

program.option("-n, --name <name>", "Your name");
program.version("0.0.1", "-v, --vers", "output the current version");
program.parse(process.argv);

const options = program.opts();

const greeting = chalk.magenta.bold(
  `Hello ${options.name || "Strecher"}!!\nReady to become a unicorn?`
);
const boxenOptions = {
  padding: 1,
  margin: 1,
  borderStyle: "round",
  borderColor: "#2b2e3f",
  backgroundColor: "#2b2e3f",
};
const msgBox = boxen(greeting, boxenOptions);

console.log(msgBox);
