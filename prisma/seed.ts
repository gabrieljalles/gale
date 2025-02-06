const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

//Como rodar o seed: npx prisma db seed

async function seedDatabase() {
  try {
    const products = [
      {
        name: "Heineken ZERO Álcool 330ml",
        description: "zero álcool",
        category: "Cervejas",
        subCategory: "shot",
        size: "330ml",
        price: 7.25,
        imageUrl:
          "https://utfs.io/f/oK9fzCAtRnIfAtffS3P8Jb1xlV57E2GkvuwMLtc6aeRFQj4W",
        available: true,
      },
      {
        name: "Isqueiro Fire",
        description: "",
        category: "Tabacaria",
        subCategory: "fogo",
        size: "1un",
        price: 3.5,
        imageUrl:
          "https://utfs.io/f/oK9fzCAtRnIfUyaW4RH35GaYnRLZtxwlOzCmf2dryQ7EvkBu",
        available: true,
      },
      {
        name: "Budweiser ZERO Álcool 330ml",
        description: "zero Álcool",
        category: "Cervejas",
        subCategory: "shot",
        size: "330ml",
        price: 5.5,
        imageUrl:
          "https://utfs.io/f/oK9fzCAtRnIfvTG4IG6TYGN8CzhAymD7rk6WUBPLuViRnpZl",
        available: true,
      },
      {
        name: "Halls preto",
        description: "",
        category: "Balas e doces",
        subCategory: "bala",
        size: "1 un",
        price: 3,
        imageUrl:
          "https://utfs.io/f/oK9fzCAtRnIf7k0Jkb1MbRLaHWp3XVFPnUkisAlDJhr40mS8",
        available: true,
      },
      {
        name: "Trident menta",
        description: "",
        category: "Balas e doces",
        subCategory: "bala",
        size: "1 un",
        price: 3,
        imageUrl:
          "https://utfs.io/f/oK9fzCAtRnIfbok5nowSvaFZKHXL4P3xop0Y7mJ29Mn6TiUz",
        available: true,
      },
      {
        name: "Fini tubes Morango 15g",
        description: "",
        category: "Balas e doces",
        subCategory: "bala",
        size: "15g",
        price: 2.5,
        imageUrl:
          "https://utfs.io/f/oK9fzCAtRnIfGQeF6jVsHVZSbB9zl2pQOLW7CkUumiTaDF68",
        available: true,
      },
      {
        name: "Fini Banana - 15g",
        description: "",
        category: "Balas e doces",
        subCategory: "bala",
        size: "15g",
        price: 2.5,
        imageUrl:
          "https://utfs.io/f/oK9fzCAtRnIfB8HEDhtgcZoIk2x4FEAyf7peJYNiHVMnvlKm",
        available: true,
      },
      {
        name: "Fini dentadura - 15g",
        description: "",
        category: "Balas e doces",
        subCategory: "bala",
        size: "15g",
        price: 2.5,
        imageUrl:
          "https://utfs.io/f/oK9fzCAtRnIfVLDPngBUOwsqIgZbmD25cTY3W9ox0vyjCrH1",
        available: true,
      },
      {
        name: "Sonho de valsa",
        description: "",
        category: "Balas e doces",
        subCategory: "bala",
        size: "1un",
        price: 2,
        imageUrl:
          "https://utfs.io/f/oK9fzCAtRnIfbcTbUwSvaFZKHXL4P3xop0Y7mJ29Mn6TiUz5",
        available: true,
      },
      {
        name: "Ouro branco",
        description: "",
        category: "Balas e doces",
        subCategory: "bala",
        size: "1un",
        price: 2,
        imageUrl:
          "https://utfs.io/f/oK9fzCAtRnIfclMVBQ9LNTCgGaJj5crDhp49osqzQVOUZdEb",
        available: true,
      },
      {
        name: "Heineken shot 250ml",
        description: "",
        category: "Cervejas",
        subCategory: "Shot",
        size: "250ml",
        price: 5.5,
        imageUrl:
          "https://utfs.io/f/oK9fzCAtRnIfWUKQ36m7V9aZuRjmeKvyx78pzXUkPlwtfNo5",
        available: true,
      },
      {
        name: "Paulistinha ouro - Unidade",
        description: "",
        category: "Tabacaria",
        subCategory: "Palheiro",
        size: "1un",
        price: 2.75,
        imageUrl:
          "https://utfs.io/f/oK9fzCAtRnIfH5AWQ2YtkSAUVc64qsF8Lpr0YNeWxMIzghlK",
        available: true,
      },
      {
        name: "Paulistinha tradicional - Maço",
        description: "",
        category: "Tabacaria",
        subCategory: "Palheiro",
        size: "1 maço",
        price: 30,
        imageUrl:
          "https://utfs.io/f/oK9fzCAtRnIfUjRwOn35GaYnRLZtxwlOzCmf2dryQ7EvkBu4",
        available: true,
      },
      {
        name: "Budweiser 473ml",
        description: "",
        category: "Cervejas",
        subCategory: "Latão",
        size: "473ml",
        price: 5,
        imageUrl:
          "https://utfs.io/f/oK9fzCAtRnIf6bqASbjuY7pk0n8hcUdBwRW41Gvrq6eZQEjF",
        available: true,
      },
      {
        name: "Smirnoff Ice 275ml ",
        description: "",
        category: "Destilados",
        subCategory: "Ice",
        size: "275ml",
        price: 9.2,
        imageUrl:
          "https://utfs.io/f/oK9fzCAtRnIfDilBIwWGORFvfJrNWxbBokZ5SQTCtmyHswz6",
        available: true,
      },
      {
        name: "Monster tradicional ZERO 473ml",
        description: "Zero",
        category: "Não alcoólicos",
        subCategory: "Energético",
        size: "473ml",
        price: 10,
        imageUrl:
          "https://utfs.io/f/oK9fzCAtRnIfjFBPkfHFoWBiM1TtXcqQUmIDN9ZeAjHgz4wR",
        available: true,
      },
      {
        name: "Original 300ml",
        description: "",
        category: "Cervejas",
        subCategory: "Barrigudinha",
        size: "300ml",
        price: 3.2,
        imageUrl:
          "https://utfs.io/f/oK9fzCAtRnIfxxSPk8ZEzSiRfNUvuw5a6lxk01tDIqcPOAMm",
        available: true,
      },
      {
        name: "Brahma 300ml",
        description: "",
        category: "Cervejas",
        subCategory: "Barrigudinha",
        size: "300ml",
        price: 2.6,
        imageUrl:
          "https://utfs.io/f/oK9fzCAtRnIfDH3HuQWGORFvfJrNWxbBokZ5SQTCtmyHswz6",
        available: true,
      },
      {
        name: "Paulistinha tradicional - Unidade",
        description: "",
        category: "Tabacaria",
        subCategory: "Palheiro",
        size: "1un",
        price: 2.3,
        imageUrl:
          "https://utfs.io/f/oK9fzCAtRnIfUjRwOn35GaYnRLZtxwlOzCmf2dryQ7EvkBu4",
        available: true,
      },
      {
        name: "Antartica 300ml",
        description: "",
        category: "Cervejas",
        subCategory: "Barrigudinha",
        size: "300ml",
        price: 2.6,
        imageUrl:
          "https://utfs.io/f/oK9fzCAtRnIfYRGmwjDNbPXjK6cB4rtl1d9Esv2L7hGnIiM3",
        available: true,
      },
      {
        name: "BeatsRedmix 269ml",
        description: "",
        category: "Destilados",
        subCategory: "Drinks",
        size: "473ml",
        price: 7,
        imageUrl:
          "https://utfs.io/f/oK9fzCAtRnIfwFYNksh7SaLsdRCAD0k3VTHe1XIPc6UjiEB9",
        available: true,
      },
      {
        name: "Carvão de churrasco 5kg",
        description: "",
        category: "Outros",
        subCategory: "Churrasco",
        size: "5kg",
        price: 25,
        imageUrl:
          "https://utfs.io/f/oK9fzCAtRnIflnpdVt4OvLhCcbe7I1QDGA5V2jKl4HfSRmPg",
        available: false,
      },
      {
        name: "Original 473ml",
        description: "",
        category: "Cervejas",
        subCategory: "Latão",
        size: "473ml",
        price: 5.4,
        imageUrl:
          "https://utfs.io/f/oK9fzCAtRnIf780Zfz1MbRLaHWp3XVFPnUkisAlDJhr40mS8",
        available: true,
      },
      {
        name: "Heineken 600ml",
        description: "",
        category: "Cervejas",
        subCategory: "Garrafa de vidro",
        size: "350ml",
        price: 10,
        imageUrl:
          "https://utfs.io/f/oK9fzCAtRnIf5xpkLhXMB0Xr3xNtufO8bmvLqKY7ohZdsipE",
        available: true,
      },
      {
        name: "Suco Del Valle Pessego 1L",
        description: "",
        category: "Não alcoólicos",
        subCategory: "Sucos",
        size: "1L",
        price: 8,
        imageUrl:
          "https://utfs.io/f/oK9fzCAtRnIfAclN2jP8Jb1xlV57E2GkvuwMLtc6aeRFQj4W",
        available: true,
      },
      {
        name: "Budweiser 300ml",
        description: "",
        category: "Cervejas",
        subCategory: "Barrigudinha",
        size: "300ml",
        price: 2.9,
        imageUrl:
          "https://utfs.io/f/oK9fzCAtRnIfY70zH5gDNbPXjK6cB4rtl1d9Esv2L7hGnIiM",
        available: true,
      },
      {
        name: "Carvão de churrasco 2,5kg",
        description: "",
        category: "Outros",
        subCategory: "Churrasco",
        size: "2.5kg",
        price: 15,
        imageUrl:
          "https://utfs.io/f/oK9fzCAtRnIflnpdVt4OvLhCcbe7I1QDGA5V2jKl4HfSRmPg",
        available: false,
      },
      {
        name: "Suco Del Valle Maracuja 1L",
        description: "",
        category: "Não alcoólicos",
        subCategory: "Sucos",
        size: "1L",
        price: 8,
        imageUrl:
          "https://utfs.io/f/oK9fzCAtRnIfBCC6DmstgcZoIk2x4FEAyf7peJYNiHVMnvlK",
        available: true,
      },
      {
        name: "BeatsTropical 269ml",
        description: "",
        category: "Fermentados",
        subCategory: "Drinks",
        size: "269ml",
        price: 7,
        imageUrl:
          "https://utfs.io/f/oK9fzCAtRnIfSgBQO95OgLMIBSNZ1v7qfm62GeVu8oRKTcF0",
        available: true,
      },
      {
        name: "Gelo - 5kg ",
        description: "",
        category: "Outros",
        subCategory: "gelo",
        size: "5kg",
        price: 7.9,
        imageUrl:
          "https://utfs.io/f/oK9fzCAtRnIfXYJTBqKVclKkod89RqAWH2mybQtChgJeIvED",
        available: true,
      },
      {
        name: "Gelo - 2,5kg ",
        description: "",
        category: "Outros",
        subCategory: "gelo",
        size: "5kg",
        price: 5.2,
        imageUrl:
          "https://utfs.io/f/oK9fzCAtRnIfXYJTBqKVclKkod89RqAWH2mybQtChgJeIvED",
        available: true,
      },
      {
        name: "Suco Del Valle Caju 1L",
        description: "",
        category: "Não alcoólicos",
        subCategory: "Sucos",
        size: "1L",
        price: 8,
        imageUrl:
          "https://utfs.io/f/oK9fzCAtRnIf0qleGGSPhoGWpmcBZR5OAqSXjyUuisItewdl",
        available: true,
      },
      {
        name: "BeatsSense 269ml",
        description: "",
        category: "Fermentados",
        subCategory: "Drinks",
        size: "269ml",
        price: 7,
        imageUrl:
          "https://utfs.io/f/oK9fzCAtRnIfTQfiBdocMamPA9vHby86UN7it4JBeYZx0Fhp",
        available: true,
      },
      {
        name: "Skol 300ml",
        description: "",
        category: "Cervejas",
        subCategory: "Barrigudinha",
        size: "300ml",
        price: 2.6,
        imageUrl:
          "https://utfs.io/f/oK9fzCAtRnIfE0Ol64Ky5CmqA4zfHNVYhbjGskML9iaZ0DIl",
        available: true,
      },
      {
        name: "Heineken 350ml",
        description: "",
        category: "Cervejas",
        subCategory: "Lata",
        size: "350ml",
        price: 5.8,
        imageUrl:
          "https://utfs.io/f/oK9fzCAtRnIfYhWw8ZDNbPXjK6cB4rtl1d9Esv2L7hGnIiM3",
        available: true,
      },
      {
        name: "Suco Del Valle Abacaxi 1L",
        description: "",
        category: "Não alcoólicos",
        subCategory: "Sucos",
        size: "1L",
        price: 8,
        imageUrl:
          "https://utfs.io/f/oK9fzCAtRnIfwd3a9Qh7SaLsdRCAD0k3VTHe1XIPc6UjiEB9",
        available: true,
      },
      {
        name: "Paulistinha ouro - Maço",
        description: "",
        category: "Tabacaria",
        subCategory: "Palheiro",
        size: "1 maço",
        price: 32,
        imageUrl:
          "https://utfs.io/f/oK9fzCAtRnIfH5AWQ2YtkSAUVc64qsF8Lpr0YNeWxMIzghlK",
        available: true,
      },
      {
        name: "Amstel 350ml",
        description: "",
        category: "Cervejas",
        subCategory: "lata",
        size: "350ml",
        price: 3.75,
        imageUrl:
          "https://utfs.io/f/oK9fzCAtRnIfCkYImadOnRv8qt3ENQ0WUfdFx6VbmirlZgeu",
        available: true,
      },
      {
        name: "Vinho Pergola 750ml",
        description: "",
        category: "Vinhos",
        subCategory: "suave",
        size: "750ml",
        price: 30,
        imageUrl:
          "https://utfs.io/f/oK9fzCAtRnIfx9AAIwZEzSiRfNUvuw5a6lxk01tDIqcPOAMm",
        available: false,
      },
      {
        name: "Brahma 600ml",
        description: "",
        category: "Cervejas",
        subCategory: "Garrafa",
        size: "600ml",
        price: 7.5,
        imageUrl:
          "https://utfs.io/f/oK9fzCAtRnIfRvy8EfZ9iCDn9KkUElTFRMwWLAPQahBN2Z0c",
        available: true,
      },
      {
        name: "Monster tradicional 473ml",
        description: "",
        category: "Não alcoólicos",
        subCategory: "Energético",
        size: "473ml",
        price: 10,
        imageUrl:
          "https://utfs.io/f/oK9fzCAtRnIfq8jQrbVcnbxQwC4hILAXmZ6iSy1Wu9evDEHF",
        available: true,
      },
      {
        name: "Ice 51 Limão 275ml",
        description: "",
        category: "Destilados",
        subCategory: "Ice",
        size: "275ml",
        price: 8.2,
        imageUrl:
          "https://utfs.io/f/oK9fzCAtRnIf73TQlCj1MbRLaHWp3XVFPnUkisAlDJhr40mS",
        available: true,
      },
      {
        name: "Monster Ultra 473ml",
        description: "",
        category: "Não alcoólicos",
        subCategory: "Energético",
        size: "473ml",
        price: 10,
        imageUrl:
          "https://utfs.io/f/oK9fzCAtRnIfiBI9NG0fLpX6sIzmF4udQHMYENw90PR7AOGl",
        available: true,
      },
      {
        name: "Amstel ultra 269ml - Sem glúten ",
        description: "Sem glúten",
        category: "Cervejas",
        subCategory: "Sem gluten",
        size: "269ml",
        price: 4.65,
        imageUrl:
          "https://utfs.io/f/oK9fzCAtRnIf1v83ZzUhzOoRgfSwjAKCULZqV4urHd9F1EYn",
        available: true,
      },
      {
        name: "Brahma 350ml",
        description: "",
        category: "Cervejas",
        subCategory: "Lata",
        size: "350ml",
        price: 3.55,
        imageUrl:
          "https://utfs.io/f/oK9fzCAtRnIfqONfd8VcnbxQwC4hILAXmZ6iSy1Wu9evDEHF",
        available: true,
      },
      {
        name: "Skol 350ml",
        description: "",
        category: "Cervejas",
        subCategory: "Lata",
        size: "350ml",
        price: 3.55,
        imageUrl:
          "https://utfs.io/f/oK9fzCAtRnIfAO8qqfrP8Jb1xlV57E2GkvuwMLtc6aeRFQj4",
        available: true,
      },
      {
        name: " Água tônica 350ml",
        description: "",
        category: "Não alcoólicos",
        subCategory: "água",
        size: "350ml",
        price: 3,
        imageUrl:
          "https://utfs.io/f/oK9fzCAtRnIfNJN9HWllrpIT8LMF0B5vyKmh2RV7YzCEesDN",
        available: true,
      },
      {
        name: "BeatsGt 269ml",
        description: "",
        category: "Destilados",
        subCategory: "Drinks",
        size: "269ml",
        price: 7,
        imageUrl:
          "https://utfs.io/f/oK9fzCAtRnIfjbGa0sHFoWBiM1TtXcqQUmIDN9ZeAjHgz4wR",
        available: true,
      },
      {
        name: "Vinho Mioranza 750ml",
        description: "",
        category: "Vinhos",
        subCategory: "suave",
        size: "750ml",
        price: 30,
        imageUrl:
          "https://utfs.io/f/oK9fzCAtRnIfgBt83EmuFMmzCRrBYfdINw2J8e54o61DLHbX",
        available: false,
      },
      {
        name: "Coca-Cola 2L",
        description: "",
        category: "Não alcoólicos",
        subCategory: "Refrigerante",
        size: "473ml",
        price: 11,
        imageUrl:
          "https://utfs.io/f/oK9fzCAtRnIfupEZgZfIUwz3xXef1mJFjBEOZ05svKcdM8Ri",
        available: true,
      },
      {
        name: "Antartica 350ml",
        description: "",
        category: "Cervejas",
        subCategory: "Lata",
        size: "350ml",
        price: 3.5,
        imageUrl:
          "https://utfs.io/f/oK9fzCAtRnIfgBJMgLOuFMmzCRrBYfdINw2J8e54o61DLHbX",
        available: true,
      },
      {
        name: " Água com gás 500ml",
        description: "",
        category: "Não alcoólicos",
        subCategory: "água",
        size: "500ml",
        price: 3,
        imageUrl:
          "https://utfs.io/f/oK9fzCAtRnIfJukRATC9gSYHrpMkaq1X3Oc40dBDy8TWQJRK",
        available: true,
      },
    ];

    for (const product of products) {
      await prisma.MenuItens.create({
        data: {
          name: product.name,
          imageUrl: product.imageUrl,
          category: product.category,
          description: product.description,
          price: product.price,
          size: product.size,
          available: product.available,
          subCategory: product.subCategory,
        },
      });
    }
    console.log("");
    console.log("Banco populado com sucesso!");
  } catch (error) {
    console.error("Erro ao popular o banco de dados:", error);
  } finally {
    await prisma.$disconnect();
  }
}

seedDatabase();
