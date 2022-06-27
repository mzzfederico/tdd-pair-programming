const directions = ['nord', 'est', 'sud', 'ovest'];

function getDirection(index) {
  return directions[index] || directions[1];
}

module.exports = {
  getDirection,
  simulateRoverRoute(map = [], initialPosition, commands) {
    const currentMap = map.map(r => r.map(c => c));
    const printMap = (toBePrinted) => toBePrinted.map(row => row.join('')).join("\n");

    if (initialPosition) {
      const y = initialPosition[0];
      const x = initialPosition[1];
      currentMap[y][x] = getDirection(initialPosition[2]);
    }

    return printMap(currentMap);
  }
}