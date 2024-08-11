import { RecoilState, useRecoilState } from "recoil";
import { Input } from "./ui/input";
import { queryAtom } from "@/atoms";

const SearchBar = () => {
  const [query, setQuery] = useRecoilState(queryAtom);

  return (
    <Input
      placeholder="Search here..."
      className="text-lg"
      value={query}
      onChange={(e) => {
        setQuery(e.target.value);
      }}
    />
  );
};

export default SearchBar;
