import { Box, Button, ButtonGroup, IconButton, InputBase, Menu, MenuItem, Stack, Typography } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import useFoldableMenu from "../hooks/useFoldableMenu";
import styled from "styled-components";
import React, { useCallback, useState } from "react";

const FormBlock = styled.form`
`;

function SearchBar({ value, onChange, onSubmit }: { value: string, onChange: React.ChangeEventHandler<HTMLInputElement>, onSubmit: React.FormEventHandler<HTMLFormElement> }) {
  return (
    <FormBlock onSubmit={onSubmit}>
      <Box 
        width={{ xs: "100%", sm: "300px" }}
        borderRadius={5}
        border="solid"
        borderColor="text.secondary"
        mr={{ xs: 0, sm: 2 }}
        mb={{ xs: 2, sm: 0 }}
      >
        <Stack direction="row">
          <IconButton disabled>
            <SearchIcon/>
          </IconButton>
          <InputBase sx={{ flexGrow: 1 }} value={value} onChange={onChange} placeholder="Search..."/>
        </Stack>
      </Box>
    </FormBlock>
  );
}

interface SearchBoxProps {
  searchEvent: (str: string, sortMode: SortMode) => void;
  onSort?: (sortMode: SortMode) => void;
}

export default function SearchBox({ searchEvent, onSort }: SearchBoxProps) {
  const [anchorEl, handleClick, handleClose] = useFoldableMenu();
  const [input, setInput] = useState("");
  const [sortMode, setSortMode] = useState<SortMode>("REG_DESC");

  const onChange: React.ChangeEventHandler<HTMLInputElement> = useCallback(e => {
    setInput(e.target.value);
  }, []);

  const onSubmit: React.FormEventHandler<HTMLFormElement> = useCallback(e => {
    e.preventDefault();
    searchEvent(input, sortMode);
    console.log("submit");
  }, [searchEvent, input, sortMode]);

  const onChangeSort = useCallback((mode: SortMode) => {
    handleClose();
    setSortMode(mode);
    if (onSort) onSort(mode);
  }, [handleClose, onSort]);

  const getSortMode = () => {
    switch (sortMode) {
      case "NAME_ASC":
        return "이름↑";
      case "NAME_DESC":
        return "이름↓";
      case "PUB_ASC":
        return "출간일↑";
      case "PUB_DESC":
        return "출간일↓";
      case "REG_ASC":
        return "등록일↑";
      case "REG_DESC":
        return "등록일↓";
    }
  };
  
  return (
    <Box px={{ xs: 0, lg: 4 }} mt={3}>
      <Stack flexDirection={{ sx: "column", sm: "row" }} justifyContent={{ xs: "space-between", lg: "end" }} alignItems={{ xs: "end", md: "initial" }}>
        <SearchBar value={input} onChange={onChange} onSubmit={onSubmit} />
        {
          onSort !=null ?
          <ButtonGroup>
            <Button onClick={handleClick} sx={{ color: "text.secondary" }}>정렬</Button>
            <Menu anchorEl={anchorEl} open={anchorEl !== null} onClose={handleClose}>
              <MenuItem onClick={() => onChangeSort("NAME_ASC")}>이름↑</MenuItem>
              <MenuItem onClick={() => onChangeSort("NAME_DESC")}>이름↓</MenuItem>
              <MenuItem onClick={() => onChangeSort("PUB_ASC")}>출간일↑</MenuItem>
              <MenuItem onClick={() => onChangeSort("PUB_DESC")}>출간일↓</MenuItem>
              <MenuItem onClick={() => onChangeSort("REG_ASC")}>등록일↑</MenuItem>
              <MenuItem onClick={() => onChangeSort("REG_DESC")}>등록일↓</MenuItem>
            </Menu>
          </ButtonGroup> :
          null
        }
      </Stack>
      <Typography>{getSortMode()}</Typography>
    </Box>
  );
}