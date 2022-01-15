const totalRows = 10;
const totalColumns = 10;
let planetMap = [];
let mapToReturn = [];

export default function mapSetUp() {
  planetMap = [];
  for (let indexColumn = 0; indexColumn < totalColumns; indexColumn++) {
    let row = [];
    for (let indexRow = totalRows - 1; indexRow >= 0; indexRow--) {
      let mapPlace = {
        x: indexColumn,
        y: indexRow,
        coord: [indexColumn, indexRow],
      };
      row.push(mapPlace);
    }
    planetMap.push(row);
  }

  mapToReturn = planetMap.map((row) => {
    return (
      <div key={Math.random() * Date.now()}>
        {row.map((cell) => {
          return (
            <div
              className="square"
              key={cell.coords}
              id={`${cell.x},${cell.y}`}
            />
          );
        })}
      </div>
    );
  });

  return mapToReturn;
}
