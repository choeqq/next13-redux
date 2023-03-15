import PokemonTable from "./PokemonTable";
import { store } from "@/store";

function SSRPokemonTable() {
  return <PokemonTable pokemons={store.getState().search.startupPokemon} />;
}

export default SSRPokemonTable;
