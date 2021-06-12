export const sortAlphabetically = (commands) => {
  return commands.sort((a, b) => {
    return a.name.localeCompare(b.name);
  });
};

export const sortByCategory = (commands, category) => {
  if (category === "all") {
    return commands;
  } else if (category == "premium") {
    return commands.filter((command) => {
      return command.is_premium === true;
    });
  }
  return commands.filter((command) => {
    if (command.cog !== null) {
      return command.cog.toLowerCase() === category;
    }
  });
};

export const sortBySearch = (commands, searchText) => {
  const search = searchText.toLowerCase();
  if (!search) {
    return commands;
  }
  return commands.filter((command) => {
    let base = command.name.includes(search) || command.long_desc.toLowerCase().includes(search);
    if (command.aliases) {
      base += command.aliases.join(", ").includes(search);
    }
    if (command.signature) {
      base += command.signature.includes(search);
    }
    return base;
  });
};
