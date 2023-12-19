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

  const [formData, setFormData] = useState({
    title: { value: "", error: false },
    subtitle: { value: "", error: false },
    selections: { value: [], error: false },
    category: { value: "", error: false },
  });

  const [error, setError] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setError(false);
    setFormData({
      title: { value: "", error: false },
      subtitle: { value: "", error: false },
      selections: { value: [], error: false },
      category: { value: "", error: false },
    });
  };

  const handleInc = () => {
    setTotalPilihan(totalPilihan + 1);
  };
  const handleDec = () => {
    totalPilihan > 1 ? setTotalPilihan(totalPilihan - 1) : "";
  };

  const handlePilihan = (e, index) => {
    const nextPilihan = [...formData.selections.value];
    nextPilihan[index] = e.target.value;
    setFormData((prevData) => ({
      ...prevData,
      selections: { value: nextPilihan, error: false },
    }));
  };

  const handleMakePolling = () => {
    const { title, subtitle, selections, category } = formData;

    const isTitleValid = title.value.length > 0;
    const isSubtitleValid = subtitle.value.length > 0;
    const isSelectionsValid = selections.value.length > 0;
    const isCategoryValid = category.value.length > 0;

    if (
      isTitleValid &&
      isSubtitleValid &&
      isSelectionsValid &&
      isCategoryValid
    ) {
      handleMake(title.value, subtitle.value, selections.value, category.value);
      handleClose();
    } else {
      setFormData((prevData) => ({
        ...prevData,
        title: { ...prevData.title, error: !isTitleValid },
        subtitle: { ...prevData.subtitle, error: !isSubtitleValid },
        selections: { ...prevData.selections, error: !isSelectionsValid },
        category: { ...prevData.category, error: !isCategoryValid },
      }));
    }
  };

  const renderPilihan = () => {
    const items = Array.from({ length: totalPilihan }, (_, index) => (
      <TextField
        id="title"
        label={`Pilihan ke ${index + 1}`}
        required
        key={index}
        variant="outlined"
        error={formData.selections.error}
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
            required
            fullWidth
            error={formData.title.error}
            sx={{ mt: 3 }}
            onChange={(e) =>
              setFormData((prevData) => ({
                ...prevData,
                title: { value: e.target.value, error: false },
              }))
            }
          />
          <TextField
            id="subtitle"
            label="Subtitle Polling"
            required
            variant="outlined"
            sx={{ mt: 3 }}
            error={formData.subtitle.error}
            fullWidth
            onChange={(e) =>
              setFormData((prevData) => ({
                ...prevData,
                subtitle: { value: e.target.value, error: false },
              }))
            }
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
            required
            variant="outlined"
            sx={{ mt: 3 }}
            fullWidth
            error={formData.category.error}
            onChange={(e) =>
              setFormData((prevData) => ({
                ...prevData,
                category: { value: e.target.value, error: false },
              }))
            }
          />

          {error ? (
            <h1 className="text-red-700 mt-5">
              Anda harus mengisi semua inputan!
            </h1>
          ) : (
            ""
          )}

          <div className="mt-5">
            <Button
              variant="contained"
              sx={{ mr: 1 }}
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
