"use client";
import {
  Card,
  CardContent,
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
  const [votes, setVotes] = useState(
    selections.reduce((acc, item) => {
      acc[item] = 0;
      return acc;
    }, {})
  );

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmit(true);

    const newVotes = votes;
    const set = newVotes[value] + 1;
    newVotes[value] = set;

    console.log(newVotes);

    setVotes(newVotes);
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
              <div>
                <h1 className="mt-2 text-xl font-bold">Anda sudah memilih!</h1>

                <h1 className="text-lg mt-4">Result: </h1>
                {Object.entries(votes).map(([item, value]) => (
                  <h1 key={item}>
                    {item} : <span className="text-red-500">{value}</span>{" "}
                    memilih
                  </h1>
                ))}
              </div>
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
