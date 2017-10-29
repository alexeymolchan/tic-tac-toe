export const getHorizontalRows = (items, rowsCount) => {
  return items.reduce((acc, next, i) => {
    const ix = Math.floor(i / rowsCount);
    if (!acc[ix]) {
      acc[ix] = [];
    }
    
    acc[ix].push(next);
    
    return acc;
  }, []);
};

export const getVerticalRows = (rows) => {
  return rows
    .map((row, rowIndex, initial) => row
      .map((rowItem, rowItemIndex) => initial[rowItemIndex][rowIndex]));
};

export const getDiagonals = (rows) => {
  const leftDiagonal =  rows.reduce((acc, next, i, arr) => {
    acc.push(rows[i][i]);
    return acc;
  }, []);
  
  const rightDiagonal = rows.reduce((acc, next, i, arr) => {
    acc.push(rows[i][rows.length - 1 - i]);
    return acc;
  }, []);
  
  return [leftDiagonal, rightDiagonal];
};

export const checkRowsForFinish = (rows) => rows.some(row => row.every((rowItem, i, arr) => rowItem && rowItem === arr[0]));

export const checkEmptyFields = (fields) => fields.some(field => field === null);

export const isGameFinished = (items, rowsCount) => {
  const horizontalRows = getHorizontalRows(items, rowsCount);
  const verticalRows = getVerticalRows(horizontalRows);
  const diagonals = getDiagonals(horizontalRows);
  
  const isHorizontalRowsFinished = checkRowsForFinish(horizontalRows);
  const isVerticalRowsFinished = checkRowsForFinish(verticalRows);
  const isDiagonalsFinished = checkRowsForFinish(diagonals);
  
  return isHorizontalRowsFinished || isVerticalRowsFinished || isDiagonalsFinished;
};

export const createFields = (size) => {
  return Array.from({length: size * size}, x => null);
};