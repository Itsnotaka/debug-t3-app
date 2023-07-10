import type { NextPage } from "next";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  useCommandState,
} from "cmdk";

const Empty = () => {
  const search = useCommandState((state) => state.search);
  return (
    <CommandEmpty>{search ?? `No results found for ${search}`}</CommandEmpty>
  );
};

const Home: NextPage = () => {
  return (
    <Command>
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <Empty />
        <CommandGroup heading="Suggestions">
          <CommandItem>Calendar</CommandItem>
          <CommandItem>Search Emoji</CommandItem>
          <CommandItem>Calculator</CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Settings">
          <CommandItem>Profile</CommandItem>
          <CommandItem>Billing</CommandItem>
          <CommandItem>Settings</CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  );
};

export default Home;
