export interface API_Res {
    Pokemons: {
        id: number;
        name: string;
        type: string;
        attack: number;
        defense: number;
        hp: number;
        idAuthor: number;
        image?: string;
        created_ad: string;
        updated_at: string;
    }
}