import { redirect } from "next/navigation";

const Home = () => {
  // Redireciona para /menu diretamente no servidor
  redirect("/menu");
};

export default Home;
