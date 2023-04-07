import { getAllProducts, getProductById } from "../src/database";
import { ProductService } from "../src/product-service";


jest.mock("../src/database.js");

test("mock modules getProductById", () => {
  getProductById.mockImplementation((id) => ({ id, name: "Product Mock" }));
  
  const product = ProductService.findById(1);
  expect(product).toEqual({id: 1, name: "Product Mock"});
});

test("mock modules getAllProducts", () => {
  const data = [
    { id: 1, name: "Product Mock" },
    { id: 2, name: "Product Mock" },
    { id: 3, name: "Product Mock" }
  ];
  getAllProducts.mockImplementation(() => data);

  const allProducts = ProductService.findAll();
  expect(allProducts).toEqual(data);
});
