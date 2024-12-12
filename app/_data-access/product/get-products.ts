"server - only";

import { MenuItens } from "@prisma/client";

import { db } from "../../../lib/prisma";

export const getProducts = async (title?: string): Promise<MenuItens[]> => {
  return db.menuItens.findMany({
    where: title
      ? {
          name: {
            contains: title,
            mode: "insensitive",
          },
        }
      : undefined,
    orderBy: {
      createdAt: "desc",
    },
  });
};
