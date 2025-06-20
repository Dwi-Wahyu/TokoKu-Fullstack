import bcrypt from "bcrypt";
import { PrismaClient } from "./generated/prisma";

const prisma = new PrismaClient();

async function main() {
  const username = "admin";
  const rawPassword = "admin123";

  // Hash password
  const hashedPassword = await bcrypt.hash(rawPassword, 10);

  await prisma.user.create({
    data: {
      name: "Administrator",
      username,
      password: hashedPassword,
      role: "ADMIN",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  });

  console.log("✅ Admin account created.");
}

main()
  .catch((e) => {
    console.error("❌ Error during seeding:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
