const { simulateRoverRoute } = require("./index.js");

test("function simulateRoverRoute to return a string", () => {
    expect(simulateRoverRoute()).not.toBe(undefined);
    expect(typeof simulateRoverRoute() === "string").toBe(true);
});

test("function simulateRoverRoute reproduces the map passed as argument", () => {
    const mock = [
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0]
    ];

    expect(simulateRoverRoute(mock)).toBe('00000\n00000\n00000\n00000\n00000');
});

test("function simulateRoverRoute reproduces the map, adding the position of the rover if passed as argument on the correct position and direction", () => {
    const mock = [
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0]
    ];

    expect(simulateRoverRoute(mock, [2, 2])).toBe('00000\n00000\n00est00\n00000\n00000');
    expect(simulateRoverRoute(mock)).toBe('00000\n00000\n00000\n00000\n00000');
    expect(simulateRoverRoute(mock, [0, 4])).toBe('0000est\n00000\n00000\n00000\n00000');
});


test("function simulateRoverRoute shows the rover in correct position and direction", () => {
    const mock = [
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0]
    ];

    expect(simulateRoverRoute(mock, [2, 2, 0])).toBe('00000\n00000\n00nord00\n00000\n00000');
});

test("function simulateRoverRoute calculates commands", () => {
    const mock = [
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0]
    ];

    /* f: avanti */
    /* l: gira a sinistra */
    /* r: gira a destra */

    expect(simulateRoverRoute(mock, [2, 2, 0], 'ff')).toBe('00nord00\n00000\n00000\n00000\n00000');
})