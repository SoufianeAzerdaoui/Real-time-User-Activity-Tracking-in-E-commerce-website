import * as React from 'react';
import Button from '@mui/material/Button';
import DailogItem from './DailogItem'

export default function HandleDailog() {
  const [open, setOpen] = React.useState(false);
  const [hrt, setHeart] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const info = {
    title: "Fashion Titanium Steel Colorfast Thick Chain Cuban Chain Necklace-Silver BY ELITE WORLD",
    category: "Men",
    old_price: "49.99 Dhs",
    new_price: "37.49 Dhs",
    Disponible: "Disponible",
    desc: "livraison à partir de 9.00 Dhs vers CASABLANCA - Anfa",
  }
// {title, category, old_price, new_price, Disponible, desc}
  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open alert dialog
      </Button>
      {open && <DailogItem open={open} hrt={hrt} setHeart={setHeart} setOpen={setOpen} info={info} />}
    </React.Fragment>
  );
}