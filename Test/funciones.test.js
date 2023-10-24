const { sumar, resta, mult, div } = require("../Funciones.js");

describe("*** VALIDAR SUMAS ***", () => {
  test("1 + 1 = 2", () => {
    expect(sumar(1, 1)).toEqual(2);
  });
  test("1 + 1 = 2", () => {
    expect(sumar(1, 1)).toEqual(3);
  });
  test("10 + 20 = 30", () => {
    expect(sumar(10, 20)).toEqual(30);
  });
});

describe("*** VALIDAR RESTAS ***", () => {
  test("10 - 2 = 8", () => {
    expect(resta(10, 2)).toEqual(8);
  });
  test("10 - 9 = 8", () => {
    expect(resta(10, 9)).toEqual(8);
  });

  test("87 - 523 = 436", () => {
    expect(resta(87, 523)).toEqual(436);
  });

  test("87 - 523 = -436", () => {
    expect(resta(87, 523)).toEqual(-436);
  });
});

describe("*** VALIDAR MULTIPLICACIONES ***", () => {
  test("2 * 4 = 8", () => {
    expect(mult(2, 4)).toEqual(8);
  });
  test("4 * 4 = 8", () => {
    expect(mult(4, 4)).toEqual(8);
  });
  test("1000 * 8.5 = 8500", () => {
    expect(mult(1000, 8.5)).toEqual(8500);
  });
  test("1000 * 85 = 8500", () => {
    expect(mult(1000, 8.5)).toEqual(8500);
  });

  test("1000 * 100 = 8500", () => {
    expect(mult(1000, 8.5)).toEqual(8.5);
  });
});

describe("*** VALIDAR DIVISIONES ***", () => {
  test("20 / 2 = 10", () => {
    expect(div(20, 2)).toEqual(10);
  });

  test("20 / 5 = 10", () => {
    expect(div(20, 5)).toEqual(10);
  });

  test("20 / -2 = 10", () => {
    expect(div(20, 5)).toEqual(30);
  });

  test("20 / 0 = 0", () => {
    expect(div(99, 0).toEqual(0));
  });

  test("20 / 0 = 0", () => {
    try {
      expect(div(20, 0)).toEqual(0);
    } catch (error) {
      alert("No se puede dividir entre 0");
    }
  });
});
