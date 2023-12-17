"use client";
import { FormControl, InputLabel, Box, Select, MenuItem } from "@mui/material";
import { useState } from "react";

export default function Filter({ data, handleCategory }) {
  const uniqueCategories = [
    "All",
    ...new Set(
      data.map(
        (item) => item.category.charAt(0).toUpperCase() + item.category.slice(1)
      )
    ),
  ];
  const [category, setCategory] = useState("All");

  const handleChange = (event) => {
    const val = event.target.value;
    setCategory(val);
    handleCategory(val);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel>Category</InputLabel>
        <Select
          labelId="select-category"
          value={category}
          label="category"
          onChange={handleChange}
        >
          {uniqueCategories.map((category) => (
            <MenuItem key={category} value={category}>
              {category}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
