"use client";
import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
    title: z.string().trim().min(1,{
        message: "Digite um produto para buscar...",
    })
})

const Search = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: { 
            title: "",
        }
    })
    const router = useRouter()

    //Preciso criar a pesquisa depois
    const handleSubmit = (data: z.infer<typeof formSchema>) => {
        router.push(`/`)
    }

    return (  );
}
 
export default Search;