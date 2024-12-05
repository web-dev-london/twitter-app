// app/SessionProviderConsumer.tsx
import SessionProviderWrapper from "./SessionProviderWrapper";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/auth/next-auth";

export default async function SessionProviderConsumer({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  return (
    <SessionProviderWrapper session={session}>
      {children}
    </SessionProviderWrapper>
  );
}
