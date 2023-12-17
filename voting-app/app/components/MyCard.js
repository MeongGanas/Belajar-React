"use client";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
  FormControl,
  FormLabel,
  FormHelperText,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import { useState } from "react";

export default function MyCard({ title, subtitle, selections }) {
  const [value, setValue] = useState(null);
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmit(true);
  };

  return (
    <Card sx={{ maxWidth: 500, minWidth: 300 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component={"div"}>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {subtitle}
        </Typography>

        <form className="mt-5" onSubmit={handleSubmit}>
          <FormControl disabled={isSubmit}>
            <FormLabel>Pilihan</FormLabel>
            <RadioGroup
              aria-label="pilihan"
              name="pilihan"
              value={value}
              onChange={handleChange}
            >
              {selections.map((item, index) => (
                <FormControlLabel
                  key={index}
                  value={item}
                  control={<Radio />}
                  label={item}
                ></FormControlLabel>
              ))}
            </RadioGroup>
            <FormHelperText sx={{ ml: 0 }}>
              Pilih sesuai keinginan hati anda
            </FormHelperText>
            {isSubmit ? (
              <h1 className="mt-2">Anda sudah memilih!</h1>
            ) : (
              <Button variant="contained" sx={{ mt: 2 }} type="submit">
                Submit
              </Button>
            )}
          </FormControl>
        </form>
      </CardContent>
    </Card>
  );
}
