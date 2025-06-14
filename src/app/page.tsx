import { auth } from "@/config/auth";
import { redirect } from "next/navigation";
import LoginForm from "./_components/LoginForm";
import { useIsMobile } from "@/hooks/use-mobile";
import LoginPage from "./_components/LoginPage";

export default async function Masuk() {
  const session = await auth();

  if (session) {
    const now = new Date();
    const expires = new Date(session.expires);

    if (now < expires) {
      redirect("/admin/dashboard");
    }
  }

  return <LoginPage />;
}
