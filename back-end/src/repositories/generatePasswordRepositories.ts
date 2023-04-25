import prisma from "config/database";

async function createPasswordRepository(password: string) {
  return await prisma.password.create({data: {password}})
}

export default {
  createPasswordRepository
};
