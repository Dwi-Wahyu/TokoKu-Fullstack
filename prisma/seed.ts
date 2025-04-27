// prisma/seed.ts
import { faker } from "@faker-js/faker/locale/id_ID"; // Untuk data Indonesia
import { prisma } from "@/lib/prisma";

async function main() {
  // Hapus data existing jika perlu
  await prisma.tugas.deleteMany();

  // Generate 20 tugas random
  const tugasData = Array.from({ length: 20 }, (_, i) => ({
    judul: `Tugas ${i + 1}: ${faker.lorem.words(3)}`,
    deskripsi: faker.lorem.paragraph(),
    deadline: faker.date.future({ years: 1 }), // Deadline dalam 30 hari ke depan
  }));

  // Insert ke database
  for (const data of tugasData) {
    await prisma.tugas.create({
      data,
    });
  }

  console.log("Seeding completed!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
