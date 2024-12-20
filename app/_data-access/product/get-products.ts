"server - only";

import { MenuItens } from "@prisma/client";

import { db } from "../../../lib/prisma";

export const getProducts = async (
  searchParams: { title?: string; category?: string } = {}
): Promise<MenuItens[]> => {
  const { title, category } = searchParams;

  return db.menuItens.findMany({
    where: {
      ...(title && {
        name: {
          contains: title,
          mode: "insensitive",
        },
      }),
      ...(category && {
        category: {
          equals: category,
        },
      }),
    },
    orderBy: [
      {
        available: "desc"
      },
      {
        createdAt: "desc",
      },
    ],
  });
};
