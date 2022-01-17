const totalRows = 10;
const totalColumns = 10;
let planetMap = [];
let mapToPrint = [];

export default function mapSetUp(kind) {
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
  mapToPrint = planetMap.map((row) => {
    return (
      <div key={Math.random() * Date.now()}>
        {row.map((cell) => {
          return (
            <div
              className={kind === "empty" ? "square coords" : "square"}
              key={Math.random() * Date.now()}
              id={`${cell.x},${cell.y}`}
            >
              <span className="cell-coords">
                {cell.x}, {cell.y}
              </span>
            </div>
          );
        })}
      </div>
    );
  });

  return mapToPrint;
}
