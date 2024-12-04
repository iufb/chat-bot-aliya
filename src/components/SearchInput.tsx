import { Button, Flex, TextInput } from "@mantine/core";
import { useState } from "react";

export const SearchInput = ({
  searchData,
  clearSearch,
}: {
  searchData: (search: string) => void;
  clearSearch: () => void;
}) => {
  const [search, setSearch] = useState("");
  return (
    <Flex gap={10} w={"100%"} align={"end"}>
      <TextInput
        flex={1}
        label="Поиск"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Button
        onClick={() => searchData(search)}
        bg={"slate.9"}
        variant="filled"
      >
        Найти
      </Button>
      <Button
        c={"white"}
        onClick={() => {
          setSearch("");
          clearSearch();
        }}
        bg={"slate.9"}
        variant="outline"
      >
        Очистить
      </Button>
    </Flex>
  );
};
