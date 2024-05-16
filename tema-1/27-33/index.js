import path from "path";
import fs from "fs";
import https from "https";

// path ejemplo
// console.log(__filename);
// console.log(path.basename(__filename));
// console.log(path.extname(__filename));
// console.log(path.isAbsolute(__filename));
// console.log(path.isAbsolute("./root/lucas"));
// console.log(path.join(__dirname, "lucas.txt"));

// fs
// console.log("1");
// fs.writeFileSync("./archivo-de-prueba.txt", "hola mundo 2");
// console.log("2");
// const archivo = fs.readFile(
//   "./archivo-de-prueba.txt",
//   "utf-8",
//   (error, data) => {
//     if (error) console.error(error);
//     else console.log("data, ", data);
//   }
// );
// console.log(archivo);
// console.log("3");

const url = "https://api.github.com/users";

async function getData() {
  return new Promise((resolve, reject) => {
    https
      .get(url, (response) => {
        let data = "";
        response.on("data", (chunk) => {
          data += chunk;
        });
        response.on("end", () => {
          resolve(JSON.parse(data)); // Resuelve la promesa con los datos parseados
        });
      })
      .on("error", (error) => {
        reject(error); // Rechaza la promesa si hay un error
      });
  });
}

async function fetchData() {
  try {
    const data = await getData();
    console.log("Data", data);
  } catch (error) {
    console.error("Error", error);
  }
}

fetchData();
