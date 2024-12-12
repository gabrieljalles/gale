
interface MenuPageProps{
    searchParams:{
        title?: string
    }
}

const MenuPage = async ({searchParams}: MenuPageProps) => {
    
    const menuItens = await db.MenuItens.findMany({
        
    })
    
    return (  );
}
 
export default MenuPage;