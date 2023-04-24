import prisma from "config/database";

async function createPasswordRepository(password: string) {
  return await prisma.password.findMany()
}

export default {
  createPasswordRepository
};
