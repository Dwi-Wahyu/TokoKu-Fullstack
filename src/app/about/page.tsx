import { prisma } from "@/lib/prisma";

export default async function AboutPage() {
  const users = await prisma.user.findMany();

  return (
    <div>
      <h1>About Page</h1>

      {users.map((user) => (
        <div key={user.id}>
          <h1>{user.name}</h1>
        </div>
      ))}
    </div>
  );
}
