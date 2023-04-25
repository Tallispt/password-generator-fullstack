// import "dotenv/config";
import generateRandomString from "../utils/generateRandomString";
import generatePasswordRepositories from "repositories/generatePasswordRepositories";

async function createPassword(length: number): Promise<string> {
  if (length > 25 || length <= 0)
    throw new Error(
      "You cannot create a password longer than 25 characters or less than 0"
    );

  const newRandomString = generateRandomString.execute(length);

  const createdPassword = await generatePasswordRepositories.createPasswordRepository(newRandomString)
  return newRandomString
}

export default {
  createPassword,
};
