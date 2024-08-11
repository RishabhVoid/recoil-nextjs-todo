import { priorityAtom } from "@/atoms";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Priorities from "@/constants/priority-types";
import capitalize from "@/lib/capitalize";
import { useRecoilState } from "recoil";

const PrioritySelector = () => {
  const [priority, setPriority] = useRecoilState(priorityAtom);

  return (
    <Select
      onValueChange={(value) => {
        setPriority(value);
      }}
    >
      <SelectTrigger className="w-[180px]">
        <SelectValue
          placeholder={capitalize(priority)}
          defaultValue={priority}
        />
      </SelectTrigger>
      <SelectContent>
        {Priorities.map((value, index) => (
          <SelectItem value={value} key={index}>
            {capitalize(value)}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default PrioritySelector;
