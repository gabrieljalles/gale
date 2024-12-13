const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

//Como rodar o seed:

async function seedDatabase() {
  try {
    const products = [
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
        price: 6.5,
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
        price: 6.5,
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
        price: 6.5,
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
        price: 5.39,
        size: "473ml",
        available: true,
        subCategory: "Drinks",
      },
      {
        name: "Coca-Cola 2L",
        imageUrl:
          "https://utfs.io/f/oK9fzCAtRnIfupEZgZfIUwz3xXef1mJFjBEOZ05svKcdM8Ri",
        category: "Não alcoólicos",
        description: "",
        price: 5.39,
        size: "473ml",
        available: false,
        subCategory: "Refrigerante",
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
