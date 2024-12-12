interface QuickSearchOptionProps {
  imageUrl: string;
  title: string;
  alt: string;
}

export const quickSearchOptions: QuickSearchOptionProps[] = [
  {
    imageUrl: "/cerveja.svg",
    title: "Cervejas",
    alt: "Todos os tipos de cervejas",
  },
  {
    imageUrl: "/tabacaria.svg",
    title: "Tabacaria",
    alt: "Produtos voltados para Tabacaria",
  },
  {
    imageUrl: "/destilados.svg",
    title: "Destilados",
    alt: "Destilados como vodka e outros drinks",
  },
  {
    imageUrl: "/nao-alcoolicos.svg",
    title: "Não alcoólicos",
    alt: "Refrigerantes e energéticos",
  },
  {
    imageUrl: "/combos.svg",
    title: "Combos",
    alt: "Combos de produtos",
  },
  {
    imageUrl: "/vinhos.svg",
    title: "Vinhos & Fermentados",
    alt: "Procure por vinhos e fermentados",
  },
  {
    imageUrl: "/gelo.svg",
    title: "Outros",
    alt: "Outros, de gelo até outras coisas...",
  },
];
