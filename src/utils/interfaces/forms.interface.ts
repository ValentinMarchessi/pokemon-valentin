export interface PokeformI {
  hidden: boolean;
  req: "POST" | "PUT";
  fields: {
    id?: number;
    name: string;
    image: string;
    attack: number;
    defense: number;
  };
}