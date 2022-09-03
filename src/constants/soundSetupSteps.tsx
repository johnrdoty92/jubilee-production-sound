import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { Step } from "../types/steps";

const turnOnSystem = <Typography variant="body1">
  Turn on the sound system by pressing the power button underneath the streaming computer. Turn on the streaming computer, too, if it&apos;s not already on.
</Typography>;

const downloadAbletonSet = <Stack>
  <Typography variant="body1">Turn on the Ableton laptop. Open Finder, and click <i>Sets</i> on the left.</Typography>
  <Typography variant="body1">If you don’t see <i>Sets</i> you can choose <i>Resources &gt; Worship &gt; Sets.</i></Typography>
  <Typography variant="body1">Find the file labeled with the current date and drag it to the desktop. Double click the folder to unzip it.</Typography>
</Stack>;

export const soundSetupSteps: Step[] = [
  {
    title: `Turn on the sound system`,
    description: turnOnSystem
  },
  {
    title: `Download and unzip the Ableton set`,
    description: downloadAbletonSet,
  },
  {
    title: `Set Ableton file permissions`,
    description: `When it’s done unzipping, right click the new folder and choose “Get Info.” Scroll to the bottom of the window that pops up and check “Sharing & Permissions.” Make sure that the Privilege is set to Read & Write for jubilee (me).`
  },
  {
    title: `Check Ableton's Dante settings`,
    description: `Open the Ableton folder and double click the .als file to start Ableton. In the top left, choose Ableton > Preferences. Choose the Audio tab and make sure that Device Type is set to CoreAudio and Audio Output Device is set to Dante.`
  },
  {
    title: `Check how many track groups there are`,
    description: `Check to see how the tracks have been grouped. Each row will represent one channel on the sound board. Then open Chrome and go to the Routing bookmark. Navigate to the Channels tab. Rename the files to match the groups from Ableton. Then make sure the group number matches the numbers on the routing sheet. (Remember that 01 on Ableton will correspond to Dante-Tracks-ON-01.)`
  },
  {
    title: `Adjust the routing google sheet`,
    description: `Next, look at Planning Center to see who is playing and how many instruments there will be. Make adjustments to the routing sheet as needed.`
  },
  {
    title: `Load the Sunday Service preset`,
    description: `Once all the channels are set on the Routing sheet, go to the sound board. Push VIEW on the Show Control section. Use the rotary knobs to select Sunday Service. Push the left-most rotary knob to choose Go and load the preset.`
  },
  {
    title: `Sync the Google sheet with the sound board`,
    description: `On the streaming computer, click the refresh button in the toolbar. This will sync the sound board with the Routing sheet.`
  },
  {
    title: `Adjust Ableton tracks`,
    description: `Now, go through the Ableton tracks one by one and set gain, EQ, and compression as desired. This is a good place to save your work and settings. Go back to the Show Control section and push VIEW. Use the rotary knobs to save your settings near the bottom under Sunday Temp.`
  },
];