import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { Step } from "../../types/steps";
import Reverb from "../../assets/images/Reverb.webp";
import PitchShift from "../../assets/images/AbletonPitchShift.webp";
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
  {
    title: `Need to change the key of a song on Ableton?`,
    description: <Stack spacing={1}>
      <Typography variant="body1">If you need to change the key of a song, you&apos;ll need to warp the tracks in Ableton. Go through all the tracks and see which ones need pitch shifting. (Typically, percussion tracks won&apos;t need to be changed, but check to make sure there are no musical elements within the track).</Typography>
      <Typography variant="body1">Select the individual audio clips by holding <i>Shift</i> and clicking on them. Then, if you don&apos; already see the large audio waveform at the bottom, you can click the tiny on in the bottom right corner.</Typography>
      <Typography variant="body1">You should see a panel on the bottom left. Make sure <i>Warp</i> is enabled. (If it&apos;s not yellow, click it once). Then, from the drop down directly beneath the <i>Warp</i> button, choose <i>Complex Pro</i>. Finally, take a look at the dial labelled <i>Pitch</i> to the right. You can double click it and enter a number to move to the right key.</Typography>
      <Typography variant="body1">Remember that each number you raise or lower by corresponds to a half-step. For example, if you are in the key of <i>B</i>, and you want to go to <i>C</i>, that&apos;s one half-step (C &gt; B), so you should type in <i>1</i>. As another example, if you want to go from <i>A</i> down to <i>F</i>, that will be 4 half-steps (A &gt; G# &gt; G &gt; F# &gt; F), so type in <i>-4</i></Typography>
      <Image alt="pitch-shift" src={PitchShift}/>
    </Stack>
  }
  // {
  //     title: ,
  //     description: ,
  // },
];