"server-only";

import { prisma } from "@/lib/prisma";

export async function getAllMedia() {
  const mediaItems = await prisma.media.findMany({
    orderBy: { createdAt: "desc" },
  });

  return mediaItems;
}
