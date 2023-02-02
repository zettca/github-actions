console.log("Hello from Deno 👋");

console.log("Args:", Deno.args);
console.log("PWD:", Deno.env.get("PWD"));
console.log("SECRET:", Deno.env.get("SECRET"));

const [path] = Deno.args;

if (!path) Deno.exit(1);

console.log("Files:");

console.log(Deno.cwd());
console.log("README", await Deno.readTextFile("./README.md"));

for await (const dirEntry of Deno.readDir(path)) {
  console.log(dirEntry);
}
