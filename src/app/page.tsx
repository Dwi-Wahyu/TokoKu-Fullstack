import { auth } from "@/config/auth";
import { redirect } from "next/navigation";
import { getUsers } from "./_lib/queries/pengguna-queries";
import { Skeleton } from "@/components/ui/skeleton";
import { Suspense } from "react";

export default async function Masuk() {
  // const session = await auth();

  // if (session) {
  //   const now = new Date();
  //   const expires = new Date(session.expires);

  //   if (now < expires) {
  //     redirect("/admin/dashboard");
  //   }
  // }

  const users = await getUsers();

  return (
    <div className="p-10">
      <h1 className="font-semibold mb-3 text-xl">Daftar User</h1>

      <Suspense fallback={<ListUserSkeleton />}>
        {users.map((user) => (
          <div key={user.id}> - {user.name}</div>
        ))}
      </Suspense>
    </div>
  );
}

function ListUserSkeleton() {
  return (
    <div className="flex flex-col gap-3">
      <Skeleton className="w-40 h-10" />
      <Skeleton className="w-32 h-10" />
      <Skeleton className="w-28 h-10" />
      <Skeleton className="w-56 h-10" />
      <Skeleton className="w-12 h-10" />
    </div>
  );
}
