import { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id: number;
      username: string;
      nama: string;
      role: string;
      avatar: string;
    };
  }

  interface User {
    id: number;
    username: string;
    nama: string;
    role: string;
    avatar: string | null;
  }
}
