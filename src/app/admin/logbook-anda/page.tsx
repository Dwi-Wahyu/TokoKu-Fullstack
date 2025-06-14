import LogbookCard from "@/app/_components/LogbookCard";
import UnauthorizedPage from "@/app/_components/UnauthorizedPage";
import {
  getDataLogbookPengguna,
  getLogbookPengguna,
} from "@/app/_lib/queries/logbookQueries";
import { auth } from "@/config/auth";

export default async function logbookAnda() {
  const session = await auth();

  if (!session?.user) {
    return <UnauthorizedPage />;
  }

  const logbook = await getLogbookPengguna(session.user.id);

  return <LogbookCard id={session.user.id} logbookPath={logbook?.path} />;
}
