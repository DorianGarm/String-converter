"use strict";

const inputField = document.getElementById("input");
const outputField = document.getElementById("output");
const convertBtn = document.getElementById("convertButton");
const selector = document.getElementById("select");

const convert = function () {
  if (inputField.value === "") {
    outputField.value = "You have not provided any input...";
  } else if (selector.value === "camelCase") {
    outputField.value = toCamelCase(inputField.value);
  } else if (selector.value === "PascalCase") {
    outputField.value = toPascalCase(inputField.value);
  } else if (selector.value === "snake_case") {
    outputField.value = toSnakeCase(inputField.value);
  } else if (selector.value === "kebab-case") {
    outputField.value = toKebabCase(inputField.value);
  } else if (selector.value === "flat case") {
    outputField.value = toFlatCase(inputField.value);
  } else if (selector.value === "TRAIN-CASE") {
    outputField.value = toTrainCase(inputField.value);
  } else if (selector.value === "TitleCase") {
    outputField.value = toTitleCase(inputField.value);
  } else {
    outputField.value = "You have not selected a formatting style...";
  }
};

const capitalise = (str) => str[0].toUpperCase() + str.slice(1);

function toCamelCase(string) {
  const input = string
    .toLowerCase()
    .replace(/[!?'"@#$%^&*]/g, "")
    .replace(/\n/g, " $placeholder$")
    .split(" ");
  return (output = input
    .map((word, index) => (index === 0 ? word : capitalise(word)))
    .join("")
    .replaceAll("$placeholder$", `\n`));
}

function toPascalCase(string) {
  const input = string
    .toLowerCase()
    .replace(/[!?'"@#$%^&*]/g, "")
    .replace(/\n/g, "$placeholder$ ")
    .split(" ");
  return (output = input.map((word) => capitalise(word)))
    .join("")
    .replaceAll("$placeholder$", `\n`);
}

function toTitleCase(str) {
  const exceptions = [
    "a",
    "an",
    "and",
    "the",
    "but",
    "or",
    "on",
    "in",
    "with",
    "of",
    "to",
  ];
  const titleCase = str
    .toLowerCase()
    .replace(/[!?'"@#$%^&*]/g, "")
    .replace(/\n/g, "$placeholder$ ")
    .split(" ")
    .map((word) => (exceptions.includes(word) ? word : capitalise(word)))
    .join(" ")
    .replaceAll("$placeholder$ ", `\n`);
  const output = titleCase
    .split(`\n`)
    .map((line) => capitalise(line))
    .join(`\n`);
  return output;
}

function toSnakeCase(string) {
  return string
    .toLowerCase()
    .replaceAll(" ", "_")
    .replace(/[!?'"@#$%^&*]/g, "");
}

function toKebabCase(string) {
  return string
    .toLowerCase()
    .replaceAll(" ", "-")
    .replace(/[!?'"@#$%^&*]/g, "");
}

function toFlatCase(string) {
  return string.toLowerCase().replace(/[!?'"@#$%^&*]/g, "");
}

function toTrainCase(string) {
  return string
    .toUpperCase()
    .replaceAll(" ", "-")
    .replace(/[!?'"@#$%^&*]/g, "");
}

convertBtn.addEventListener("click", convert);
