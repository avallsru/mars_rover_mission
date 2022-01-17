export const alerts = {
  coords: {
    id: "coords-alert",
    status: "error",
    title: "Error!",
    description: "Just numbers between 0 and 9 are allowed",
  },
  obstacleCoords: {
    id: "obstacle-coords",
    status: "error",
    title: "Ops!",
    description: "Please, introduce coords that don't have an obstacle",
  },
  commands: {
    id: "commands-alert",
    status: "error",
    title: "Error!",
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
  direction: {
    id: "direction-alert",
    status: "error",
    title: "Be careful!",
    description: "Use just n/s/e/w to define the direction",
  },
};
