import { useNavigate } from "react-router-dom";

interface RecipeState {
  id: number;
  missed?: string[];
}

const useSelect = () => {
  const navigate = useNavigate();
  function select(id: number, missed?: string[]) {
    // console.log(id);
    const state: RecipeState = { id, missed };
    navigate(`/recipe`, { state });
  }

  return { select };
};

export default useSelect;
