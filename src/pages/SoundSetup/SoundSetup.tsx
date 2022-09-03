import Typography from "@mui/material/Typography";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { soundSetupSteps } from "../../constants/soundSetupSteps";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";

export const SoundSetup = () => {
  return (
    <>{soundSetupSteps.map((step, i) => (
      <Accordion key={i}>
        <AccordionSummary expandIcon={<ExpandMoreIcon/>} aria-label={`Step ${i + 1}`}>
          <Typography>{`${i + 1}. ${step.title}`}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{step.description}</Typography>
        </AccordionDetails>
      </Accordion>
    ))}</>
  );
};