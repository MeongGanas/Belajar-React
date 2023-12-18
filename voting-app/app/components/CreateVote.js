"use client";
import { use, useState } from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  TextField,
  DialogContent,
  IconButton,
} from "@mui/material";

import { Add } from "@mui/icons-material";
import { Remove } from "@mui/icons-material";

export default function CreateVote({ handleMake }) {
  const [open, setOpen] = useState(false);
  const [totalPilihan, setTotalPilihan] = useState(1);

  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [selections, setSelections] = useState([]);
  const [category, setCategory] = useState("");

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleInc = () => {
    setTotalPilihan(totalPilihan + 1);
  };
  const handleDec = () => {
    totalPilihan > 1 ? setTotalPilihan(totalPilihan - 1) : "";
  };

  const handlePilihan = (e, index) => {
    const nextPilihan = [...selections];
    nextPilihan[index] = e.target.value;
    setSelections(nextPilihan);
  };

  const handleMakePolling = () => {
    handleMake(title, subtitle, selections, category);
    handleClose();
  };

  const renderPilihan = () => {
    const items = Array.from({ length: totalPilihan }, (_, index) => (
      <TextField
        id="title"
        label={`Pilihan ke ${index + 1}`}
        key={index}
        variant="outlined"
        sx={{ mt: 3 }}
        fullWidth
        onChange={(e) => handlePilihan(e, index)}
      />
    ));
    return items;
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleOpen}>
        Buat Polling
      </Button>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="create_poll_dialog"
      >
        <DialogTitle>Buat Polling Anda</DialogTitle>

        <DialogContent>
          <TextField
            id="title"
            label="Judul Polling"
            variant="outlined"
            fullWidth
            sx={{ mt: 3 }}
            onChange={(e) => setTitle(e.target.value)}
          />
          <TextField
            id="subtitle"
            label="Subtitle Polling"
            variant="outlined"
            sx={{ mt: 3 }}
            fullWidth
            onChange={(e) => setSubtitle(e.target.value)}
          />

          {renderPilihan()}

          <IconButton aria-label="plus" onClick={handleInc} sx={{ mt: 2 }}>
            <Add />
          </IconButton>
          <IconButton aria-label="minus" onClick={handleDec} sx={{ mt: 2 }}>
            <Remove />
          </IconButton>

          <TextField
            id="category"
            label="Kategori"
            variant="outlined"
            sx={{ mt: 3 }}
            fullWidth
            onChange={(e) => setCategory(e.target.value)}
          />

          <div className="mt-5">
            <Button
              variant="contained"
              sx={{ mr: 3 }}
              onClick={handleMakePolling}
            >
              Buat
            </Button>
            <Button variant="text" onClick={handleClose}>
              Kembali
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
