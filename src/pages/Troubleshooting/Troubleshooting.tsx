import Box from "@mui/material/Box";
import InputBase from "@mui/material/InputBase";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import SearchIcon from '@mui/icons-material/Search';
import Accordion from "@mui/material/Accordion";
import { troubleShootingItems } from "./troubleShootingItems";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { useState } from "react";
import Fuse from "fuse.js";

const StyledInputContainer = styled(Box)(({theme}) => ({
  display: `flex`,
  alignItems: `center`,
  width: `95%`,
  padding: theme.spacing(1),
  borderRadius: theme.spacing(2),
  backgroundColor: theme.palette.grey[900],
  marginInline: `auto`,
  marginBlock: theme.spacing(1),
  "& .MuiInputBase-root": {width: `100%`},
}));

const fuse = new Fuse(troubleShootingItems, {
  includeScore: true,
  keys: [ `title` ],
  threshold: 0.4,
});

export const Troubleshooting = () => {
  const [ items, setItems ] = useState(troubleShootingItems);

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    if (!e.target.value) {
      setItems(troubleShootingItems);
      return;
    }
    setItems(fuse.search(e.target.value).map(({item}) => item));
  };

  return (
    <Stack mt={1.5} spacing={2}>
      <StyledInputContainer>
        <InputBase onChange={handleChange} placeholder="What kind of problem are you having?"/>
        <SearchIcon/>
      </StyledInputContainer>
      {items.map((step, i) => (
        <Accordion key={i}>
          <AccordionSummary expandIcon={<ExpandMoreIcon/>} aria-label={`item ${i + 1}`}>
            <Typography>{step.title}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{step.description}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Stack>
  );
};