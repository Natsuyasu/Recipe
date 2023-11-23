#!/usr/bin/env node
const { blurhashFromURL } = require("blurhash-from-url");
const { readFileSync, writeFileSync } = require("fs");
const process = require("process");

const CWD = process.cwd();

function readJSONFile() {
  const data = readFileSync(`${CWD}/src/recipe.json`, "utf8");
  console.log("Backing up recipe.json to recipe.json.bak");
  writeFileSync(`${CWD}/src/recipe.json.bak`, data);
  return JSON.parse(data);
}

const data = readJSONFile();

const promises = data.recipes.map((recipe) => {
  return new Promise((resolve, reject) => {
    blurhashFromURL(recipe.ImgURL)
      .then((output) => {
        recipe.ImgMeta = {
          BlurHash: output.encoded,
          Width: output.width,
          Height: output.height,
        }
        resolve(true)
      })
      .catch((error) => {
        reject({
          id: recipe.id,
          error: error,
        });
      });
    });
})

console.log("Adding blurhash to recipes...");

Promise.allSettled(promises)
  .then((recipes) => {
    recipes.forEach((recipe) => {
      if (recipe.status === "rejected") {
        console.log(recipe);
        console.error(`Failed to blurhash recipe ${recipe.reason.id}: ${recipe.reason.error}`);
      }
    })
    writeFileSync("./src/recipe.json", JSON.stringify(data));
  })
