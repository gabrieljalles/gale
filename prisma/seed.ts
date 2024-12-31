const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

//Como rodar o seed: npx prisma db seed

async function seedDatabase() {
  try {
    const products = [
      {
        name: "Gelo - 5kg ",
        imageUrl:
          "https://utfs.io/f/oK9fzCAtRnIfXYJTBqKVclKkod89RqAWH2mybQtChgJeIvED",
        category: "Outros",
        description: "",
        price: 10,
        size: "5kg",
        available: true,
        subCategory: "gelo",
      },
      {
        name: "Smirnoff Ice 275ml ",
        imageUrl:
          "https://utfs.io/f/oK9fzCAtRnIfDilBIwWGORFvfJrNWxbBokZ5SQTCtmyHswz6",
        category: "Destilados",
        description: "",
        price: 9.19,
        size: "275ml",
        available: true,
        subCategory: "Ice",
      },
      {
        name: "Amstel ultra 269ml - Sem glúten ",
        imageUrl:
          "https://utfs.io/f/oK9fzCAtRnIf1v83ZzUhzOoRgfSwjAKCULZqV4urHd9F1EYn",
        category: "Cervejas",
        description: "Sem glúten",
        price: 4.65,
        size: "269ml",
        available: true,
        subCategory: "Sem gluten",
      },
      {
        name: "Amstel 350ml",
        imageUrl:
          "https://utfs.io/f/oK9fzCAtRnIfCkYImadOnRv8qt3ENQ0WUfdFx6VbmirlZgeu",
        category: "Cervejas",
        description: "",
        price: 3.75,
        size: "350ml",
        available: true,
        subCategory: "lata",
      },
      {
        name: "Antartica 300ml",
        imageUrl:
          "https://utfs.io/f/oK9fzCAtRnIfYRGmwjDNbPXjK6cB4rtl1d9Esv2L7hGnIiM3",
        category: "Cervejas",
        description: "",
        price: 2.49,
        size: "300ml",
        available: true,
        subCategory: "Barrigudinha",
      },
      {
        name: "Brahma 300ml",
        imageUrl:
          "https://utfs.io/f/oK9fzCAtRnIfDH3HuQWGORFvfJrNWxbBokZ5SQTCtmyHswz6",
        category: "Cervejas",
        description: "",
        price: 2.49,
        size: "300ml",
        available: true,
        subCategory: "Barrigudinha",
      },
      {
        name: "Skol 300ml",
        imageUrl:
          "https://utfs.io/f/oK9fzCAtRnIfE0Ol64Ky5CmqA4zfHNVYhbjGskML9iaZ0DIl",
        category: "Cervejas",
        description: "",
        price: 2.49,
        size: "300ml",
        available: true,
        subCategory: "Barrigudinha",
      },
      {
        name: "Skol 350ml",
        imageUrl:
          "https://utfs.io/f/oK9fzCAtRnIfAO8qqfrP8Jb1xlV57E2GkvuwMLtc6aeRFQj4",
        category: "Cervejas",
        description: "",
        price: 3.49,
        size: "350ml",
        available: true,
        subCategory: "Lata",
      },
      {
        name: "BeatsTropical 269ml",
        imageUrl:
          "https://utfs.io/f/oK9fzCAtRnIfSgBQO95OgLMIBSNZ1v7qfm62GeVu8oRKTcF0",
        category: "Fermentados",
        description: "",
        price: 7,
        size: "269ml",
        available: true,
        subCategory: "Drinks",
      },
      {
        name: "Antartica 350ml",
        imageUrl:
          "https://utfs.io/f/oK9fzCAtRnIfgBJMgLOuFMmzCRrBYfdINw2J8e54o61DLHbX",
        category: "Cervejas",
        description: "",
        price: 3.39,
        size: "350ml",
        available: true,
        subCategory: "Lata",
      },
      {
        name: "BeatsSense 269ml",
        imageUrl:
          "https://utfs.io/f/oK9fzCAtRnIfTQfiBdocMamPA9vHby86UN7it4JBeYZx0Fhp",
        category: "Fermentados",
        description: "",
        price: 7,
        size: "269ml",
        available: true,
        subCategory: "Drinks",
      },
      {
        name: "Budweiser 300ml",
        imageUrl:
          "https://utfs.io/f/oK9fzCAtRnIfY70zH5gDNbPXjK6cB4rtl1d9Esv2L7hGnIiM",
        category: "Cervejas",
        description: "",
        price: 2.79,
        size: "300ml",
        available: true,
        subCategory: "Barrigudinha",
      },
      {
        name: "Brahma 350ml",
        imageUrl:
          "https://utfs.io/f/oK9fzCAtRnIfqONfd8VcnbxQwC4hILAXmZ6iSy1Wu9evDEHF",
        category: "Cervejas",
        description: "",
        price: 3.39,
        size: "350ml",
        available: true,
        subCategory: "Lata",
      },
      {
        name: "Budweiser 473ml",
        imageUrl:
          "https://utfs.io/f/oK9fzCAtRnIf6bqASbjuY7pk0n8hcUdBwRW41Gvrq6eZQEjF",
        category: "Cervejas",
        description: "",
        price: 4.99,
        size: "473ml",
        available: true,
        subCategory: "Latão",
      },
      {
        name: "BeatsGt 269ml",
        imageUrl:
          "https://utfs.io/f/oK9fzCAtRnIfjbGa0sHFoWBiM1TtXcqQUmIDN9ZeAjHgz4wR",
        category: "Destilados",
        description: "",
        price: 7,
        size: "269ml",
        available: true,
        subCategory: "Drinks",
      },
      {
        name: "Original 300ml",
        imageUrl:
          "https://utfs.io/f/oK9fzCAtRnIfxxSPk8ZEzSiRfNUvuw5a6lxk01tDIqcPOAMm",
        category: "Cervejas",
        description: "",
        price: 3.19,
        size: "300ml",
        available: true,
        subCategory: "Barrigudinha",
      },
      {
        name: "Original 473ml",
        imageUrl:
          "https://utfs.io/f/oK9fzCAtRnIf780Zfz1MbRLaHWp3XVFPnUkisAlDJhr40mS8",
        category: "Cervejas",
        description: "",
        price: 5.39,
        size: "473ml",
        available: true,
        subCategory: "Latão",
      },
      {
        name: "BeatsRedmix 269ml",
        imageUrl:
          "https://utfs.io/f/oK9fzCAtRnIfwFYNksh7SaLsdRCAD0k3VTHe1XIPc6UjiEB9",
        category: "Destilados",
        description: "",
        price: 7,
        size: "269ml",
        available: true,
        subCategory: "Drinks",
      },
      {
        name: "Coca-Cola 2L",
        imageUrl:
          "https://utfs.io/f/oK9fzCAtRnIfupEZgZfIUwz3xXef1mJFjBEOZ05svKcdM8Ri",
        category: "Não alcoólicos",
        description: "",
        price: 10.99,
        size: "473ml",
        available: true,
        subCategory: "Refrigerante",
      },
      {
        name: "Monster tradicional 473ml",
        imageUrl:
          "https://utfs.io/f/oK9fzCAtRnIfq8jQrbVcnbxQwC4hILAXmZ6iSy1Wu9evDEHF",
        category: "Não alcoólicos",
        description: "",
        price: 9.99,
        size: "473ml",
        available: false,
        subCategory: "Energético",
      },
      {
        name: "Heineken shot 250ml",
        imageUrl:
          "https://utfs.io/f/oK9fzCAtRnIfWUKQ36m7V9aZuRjmeKvyx78pzXUkPlwtfNo5",
        category: "Cervejas",
        description: "",
        price: 5.25,
        size: "250ml",
        available: false,
        subCategory: "Energético",
      },
      {
        name: "Heineken 350ml",
        imageUrl:
          "https://utfs.io/f/oK9fzCAtRnIfYhWw8ZDNbPXjK6cB4rtl1d9Esv2L7hGnIiM3",
        category: "Cervejas",
        description: "",
        price: 5.75,
        size: "350ml",
        available: false,
        subCategory: "Lata",
      },
      {
        name: "Heineken 600ml",
        imageUrl:
          "https://utfs.io/f/oK9fzCAtRnIf5xpkLhXMB0Xr3xNtufO8bmvLqKY7ohZdsipE",
        category: "Cervejas",
        description: "",
        price: 9.99,
        size: "350ml",
        available: false,
        subCategory: "Lata",
      },
      {
        name: "Paulistinha tradicional - Unidade",
        imageUrl:
          "https://utfs.io/f/oK9fzCAtRnIfUjRwOn35GaYnRLZtxwlOzCmf2dryQ7EvkBu4",
        category: "Tabacaria",
        description: "",
        price: 2,
        size: "1un",
        available: false,
        subCategory: "Palheiro",
      },
      {
        name: "Paulistinha ouro - Unidade",
        imageUrl:
          "https://utfs.io/f/oK9fzCAtRnIfH5AWQ2YtkSAUVc64qsF8Lpr0YNeWxMIzghlK",
        category: "Tabacaria",
        description: "",
        price: 2.5,
        size: "1un",
        available: false,
        subCategory: "Palheiro",
      },
      {
        name: "Paulistinha tradicional - Maço",
        imageUrl:
          "https://utfs.io/f/oK9fzCAtRnIfUjRwOn35GaYnRLZtxwlOzCmf2dryQ7EvkBu4",
        category: "Tabacaria",
        description: "",
        price: 28,
        size: "1 maço",
        available: false,
        subCategory: "Palheiro",
      },
      {
        name: "Paulistinha ouro - Maço",
        imageUrl:
          "https://utfs.io/f/oK9fzCAtRnIfH5AWQ2YtkSAUVc64qsF8Lpr0YNeWxMIzghlK",
        category: "Tabacaria",
        description: "",
        price: 30,
        size: "1 maço",
        available: false,
        subCategory: "Palheiro",
      },
      {
        name: " Água com gás 500ml",
        imageUrl:
          "https://utfs.io/f/oK9fzCAtRnIfJukRATC9gSYHrpMkaq1X3Oc40dBDy8TWQJRK",
        category: "Não alcoólicos",
        description: "",
        price: 2.5,
        size: "500ml",
        available: false,
        subCategory: "água",
      },
      {
        name: " Água tônica 350ml",
        imageUrl:
          "https://utfs.io/f/oK9fzCAtRnIfNJN9HWllrpIT8LMF0B5vyKmh2RV7YzCEesDN",
        category: "Não alcoólicos",
        description: "",
        price: 3,
        size: "500ml",
        available: false,
        subCategory: "água",
      },
      {
        name: "Vinho Mioranza 750ml",
        imageUrl:
          "https://utfs.io/f/oK9fzCAtRnIfgBt83EmuFMmzCRrBYfdINw2J8e54o61DLHbX",
        category: "Vinhos",
        description: "",
        price: 30,
        size: "750ml",
        available: false,
        subCategory: "suave",
      },
      {
        name: "Vinho Pergola 750ml",
        imageUrl:
          "https://utfs.io/f/oK9fzCAtRnIfx9AAIwZEzSiRfNUvuw5a6lxk01tDIqcPOAMm",
        category: "Vinhos",
        description: "",
        price: 30,
        size: "750ml",
        available: false,
        subCategory: "suave",
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
