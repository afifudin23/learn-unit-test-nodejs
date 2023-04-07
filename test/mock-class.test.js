import { UserRepository } from "../src/user-repository";
import { UserService } from "../src/user-service";

jest.mock("../src/user-repository.js");

const repository = new UserRepository();
const service = new UserService(repository);

test("test mock class save", () => {
  const user = {id: 1, name: "Afif"};
  service.save(user);
  expect(repository.save).toHaveBeenCalled();
  expect(repository.save).toHaveBeenCalledWith(user);
});

test("test mock class findById", () => {
  const userById = {id: 1, name: "Afif"};
  repository.findById.mockReturnValueOnce(userById);

  expect(service.findById(1)).toEqual(userById);
  expect(repository.findById).toHaveBeenCalled();
  expect(repository.findById).toHaveBeenCalledWith(1);
});

test("test mock class findAll", () => {
  const allUsers = [
    {id: 1, name: "Afif"},
    {id: 2, name: "Rara"},
    {id: 3, name: "AraLove"},
  ];

  repository.findAll.mockReturnValueOnce(allUsers);

  expect(service.findAll()).toEqual(allUsers);
  expect(repository.findAll).toHaveBeenCalled();
  expect(repository.findAll).toHaveBeenCalledTimes(1)
});
