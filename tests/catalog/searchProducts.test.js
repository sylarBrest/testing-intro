const products = require('../../src/data/products');
const { searchProducts } = require('../../src/catalog');

const myMap = (items) => items.map((item) => item.id);

describe('searchProducts', () => {
  test("'Наушники' возвращает товар с ID 1", () => {
    expect(myMap(searchProducts(products, 'Наушники'))).toEqual([1]);
  });
  test("'Чистый код' возвращает товар с ID 6", () => {
    expect(myMap(searchProducts(products, 'Чистый код'))).toEqual([6]);
  });
  test("'Настольная лампа' возвращает товар с ID 4", () => {
    expect(myMap(searchProducts(products, 'Настольная лампа'))).toEqual([4]);
  });
  test.todo("'javascript' возвращает товар с ID 3");
  test.todo("'ЧЕХОЛ' возвращает товар с ID 5");
  test.todo("'наушники' возвращает товар с ID 1");
  test.todo('пустая строка возвращает товары с ID [1, 2, 3, 4, 5, 6]');
  test.todo('строка из пробелов возвращает товары с ID [1, 2, 3, 4, 5, 6]');
  test.todo("'\\t\\n' возвращает товары с ID [1, 2, 3, 4, 5, 6]");
});
