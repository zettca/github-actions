console.log("Hello from Deno 👋");

console.log("Args:", Deno.args);
console.log("PWD:", Deno.env.get("PWD"));
console.log("SECRET:", Deno.env.get("SECRET"));

console.log("Files:");

for await (const dirEntry of Deno.readDir("/")) {
  console.log(dirEntry.name);
}
