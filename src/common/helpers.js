const sortAlphabetically = (commands) => {
  return commands.sort((a, b) => {
    return a.name.localeCompare(b.name);
  });
};

export const sortBySearch = (commands, keyword, filter) => {
  if (filter !== 'all') {
    return commands.filter((command) => {
      if (command.cog !== null) {
        return command.cog.toLowerCase().includes(filter);
      }
    });
  }

  const search = keyword.toLowerCase();
  if (!search) {
    return sortAlphabetically(commands);
  }
  return commands.filter((command) => {
    let base = command.name.includes(search) || command.long_desc.toLowerCase().includes(search);
    if (command.aliases) {
      base += command.aliases.join(', ').includes(search);
    }
    if (command.signature) {
      base += command.signature.includes(search);
    }
    return base;
  });
};

export const getCategories = (commands) => {
  // By default we want to show all the available commands
  let categories = ['All'];

  commands.forEach((command) => {
    if (command.cog !== null) {
      categories.push(command.cog);
    }
  });

  categories.sort((a, b) => {
    return a.localeCompare(b);
  });

  // remove all duplicates
  return [...new Set(categories)];
};

export const defaultState = () => {
  return {
    loading: true,
    error: false,
  };
};
