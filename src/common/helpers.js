export const sortAlphabetically = (commands) => {
  return commands.sort((a, b) => {
    return a.name.localeCompare(b.name);
  });
};

export const sortByType = (commands, type) => {
  if (type === "app commands") {
    return commands.filter((command) => {
      return command.type === "App Command";
    });
  } else if (type == "context menus") {
    return commands.filter((command) => {
      return command.type === "Context Menu";
    });
  }
};

export const sortByCategory = (commands, category) => {
  if (category === "all") {
    return commands;
  } else if (category === "premium") {
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
    return command.name.includes(search) || command.description.toLowerCase().includes(search);
  });
};
