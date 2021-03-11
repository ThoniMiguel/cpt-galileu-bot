module.exports = {
  name: "spam",
  description: "spam msgs",
  execute(msg, args) {
    console.log(`${args[0]} ${args[1]} ${args[2]}`);
  },
};
