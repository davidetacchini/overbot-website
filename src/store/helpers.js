// To review

export const getBySearch = (commands, keyword) => {
  const search = keyword.trim().toLowerCase();
  if (!search.length) {
    return sortAlphabetically(commands);
  }
  return commands.filter((command) => {
    let base =
      command.description.toLowerCase().includes(search) ||
      command.name.toLowerCase().includes(search);
    if (command.aliases) {
      base = base + command.aliases.includes(search);
    }
    if (command.signature) {
      base = base + command.signature.includes(search);
    }
    return base;
  });
};

const sortAlphabetically = (commands) => {
  return commands.sort((a, b) => {
    return a.name.localeCompare(b.name);
  });
};
