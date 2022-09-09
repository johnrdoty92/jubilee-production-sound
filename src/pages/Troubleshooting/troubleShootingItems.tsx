import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { Step } from "../../types/steps";
import Reverb from "../../assets/images/Reverb.webp";
import { Image } from "../../components/Image";

export const troubleShootingItems: Step[] = [
  {
    title: `Band members can't hear anything in their in-ear monitors?`,
    description: <Stack spacing={1}>
      <Typography variant="body1">First make sure the monitor pack is turned all the way up. Then ask the player to use their app to bring the volume of their instrument all the way up, while pushing the other instruments down.</Typography>
      <Typography variant="body1">If that still doesn&apos;t work, try turning up the gain on their channel. Do this only when there are no other options. Be sure to communicate changes with the live stream sound tech.</Typography>
      <Typography variant="body1">If the players are not getting any signal at all, click on the purple refresh icon in the toolbar on the live stream computer.</Typography>
    </Stack>
  },
  {
    title: `Getting lots of feedback / 하울링?`,
    description: <Stack spacing={1}>
      <Typography variant="body1">On the live stream computer, double check that the speakers are using the right settings in the Jupiter app.</Typography>
      <Typography variant="body1">Make sure that each vocal mic is not being sent to both the vocal buses AND the main speakers.</Typography>
    </Stack>,
  },
  {
    title: `Need more or less reverb?`,
    description: <Stack spacing={1}>
      <Typography variant="body1">Press <i>SEL</i> above the channel you want to change the reverb for. Then push <i>FADER FLIP</i> and one of the <i>Bus</i> buttons on the right. Find the bus for reverb and raise or lower the fader to add more or less reverb. Don&apos;t forget to turn the <i>FADER FLIP</i> button back off when finished!</Typography>
      <Image alt="reverb" src={Reverb}/>
    </Stack>,
  },
  {
    title: `Ableton won't save the project file?`,
    description: <Typography variant="body1">If Ableton is not saving properly, right the click the folder that holds the project file and check the permissions. Refer to the Sound setup steps for more details.</Typography>,
  },
  {
    title: `Can't hear anything from Ableton?`,
    description: <Stack spacing={1}>
      <Typography variant="body1">If you aren&apos;t getting any signal in the speakers, click <i>Ableton &gt; Preferences</i> and then the <i>Audio</i> tab. Make sure the output device is set to Dante</Typography>
      <Typography variant="body1">Also make sure that there aren&apos; any tracks being soloed. Click the <i>S</i> to the right of the track to toggle it on or off.</Typography>
    </Stack>,
  },
  // {
  //     title: ,
  //     description: ,
  // },
];