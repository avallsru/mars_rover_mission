# Mars Rover Mision

We are a part of a team that explores Mars with remotely controlled vehicles on the surface.
Here you have the software that controls the rover.

## Technical requirements: 
- Node

## Execute the software

Here you have the commands to execute the software:

- **install dependencies** --> `npm install`

- **Run the app** --> `npm start`
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

- **test** --> `npm run test`

## Examples
For going quicklier, we let you an example for checking different circumstances:
####Setting up the robot
- Direction: `north`
- Initial coords: `{x: 3, y: 2}`
- Initial coords with an obstacle: `{x: 1, y: 2}`

####Commands
- Movement: `ffrfflff`
- Obstacle: *(from the previous point)* `rlffrlf`
- Boundaries: *(from the previous point)* `rfflrfl`

## Design decisions
On the Home page you will find an empty map. It is there just for helping to know where are the obstacles. You can hover it to see the exactly coords of each point (x, y).

After thinking about it, we have programmed the rover that when it changes the direction it also moves one step and changes the direction. So, if you want to turn right and continue on that direction you should use a command line like "rfff", not "rrrr", because the second option would move the robot on circles.