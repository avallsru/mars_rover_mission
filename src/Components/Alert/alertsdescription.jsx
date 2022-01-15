export const alerts = {
  coords: {
    id: "coords-alert",
    status: "error",
    title: "It's not correct!",
    description: "Introduce a number between 0 and 9",
  },
  commands: {
    id: "commands-alert",
    status: "error",
    title: "It's not correct!",
    description: `Just "f", "l", "r" are accepted`,
  },
  obstacle: {
    id: "obstacle-alert",
    status: "warning",
    title: "Ops!",
    description:
      " It seems you've found an obstacle before finishing your command line",
  },
  boundaries: {
    id: "boundaries-alert",
    status: "warning",
    title: "Ops!",
    description:
      " It seems you've tried to go outside the map before finishing your command line",
  },
};
