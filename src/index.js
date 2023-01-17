const sharp = require("sharp");
const fs = require("fs");
const inputDir = "./src/images";
const outputDir = "./src/output";

fs.readdirSync(inputDir).forEach((file) => {
  let extension = file.split(".")[1];

  sharp(`${inputDir}/${file}`)
    .resize(450)
    .toFile(`${outputDir}/${file}-small.${extension}`);

  sharp(`${inputDir}/${file}`)
    .resize(731)
    .toFile(`${outputDir}/${file}-medium.${extension}`);

  sharp(`${inputDir}/${file}`)
    .resize(1200)
    .toFile(`${outputDir}/${file}-large.${extension}`);
});
