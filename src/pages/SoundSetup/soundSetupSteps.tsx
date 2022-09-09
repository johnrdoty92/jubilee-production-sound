import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { Image } from "../../components/Image";
import { Step } from "../../types/steps";
import SoundSystemOn from "../../assets/images/1SoundSystemPower.webp";
import FinderSet from "../../assets/images/2FinderSets.webp";
import CheckPermissions from "../../assets/images/3CheckPermissions.webp";
import CheckTrackGroups from "../../assets/images/5aCheckTrackGroups.webp";
import CheckSelectedTracks from "../../assets/images/5bCheckSelectedTracks.webp";
import GroupAbletonTracks from "../../assets/images/5cGroupAbletonTracks.webp";
import RoutingSheet from "../../assets/images/6aRoutingSheet.webp";
import RoutingSheetNames from "../../assets/images/6bRoutingSheetNames.webp";
import SetTerminals from "../../assets/images/6cSetTerminals.webp";
import ShowControl from "../../assets/images/7aShowControl.webp";
import SavePreset from "../../assets/images/7bSavePreset.webp";


const turnOnSystem = <Stack spacing={1}>
  <Typography variant="body1">
    Turn on the sound system by pressing the power button underneath the streaming computer. Turn on the streaming computer, too, if it&apos;s not already on.
  </Typography>
  <Image alt="sound system on" src={SoundSystemOn}/>
</Stack>;

const downloadAbletonSet = <Stack spacing={1}>
  <Typography variant="body1">Turn on the Ableton laptop. Open Finder, and click <i>Sets</i> on the left.</Typography>
  <Image alt="finder" src={FinderSet}/>
  <Typography variant="body1">If you don’t see <i>Sets</i> you can choose <i>Resources &gt; Worship &gt; Sets.</i></Typography>
  <Typography variant="body1">Find the file labeled with the current date and drag it to the Desktop. Double click the file to unzip it.</Typography>
</Stack>;

const abletonPermissions = <Stack spacing={1}>
  <Typography variant="body1">When it&apos;s done, right click the newly unzipped folder and choose <i>Get Info</i>.</Typography>
  <Typography variant="body1">Scroll to the bottom of the pop up and check <i>Sharing &amp; Permissions</i>. Make sure that the Privilege is set to <i>Read &amp; Write</i> for <i>jubilee (Me)</i>.</Typography>
  <Image alt="check permissions" src={CheckPermissions}/>
</Stack>;

const abletonDante = <Typography variant="body1">Open the folder and double click the <i>.als</i> file to start Ableton. From the top left, choose <i>Ableton &gt; Preferences</i>. Choose the <i>Audio</i> tab and make sure that <i>Device Type</i> is set to <i>CoreAudio</i> and that <i>Audio Output Device</i> is set to the Dante option in the dropdown.</Typography>;

const grouping = <Stack spacing={1}>
  <Typography variant="body1">When Ableton opens up, look to the column on the right and you&apos;ll see some grey tracks. These are groups for all the tracks.</Typography>
  <Image alt="ableton tracks" src={CheckTrackGroups}/>
  <Typography variant="body1">If they all say <i>Out 1</i>, <i>Out 2</i>, etc, you&apos;ll need to assign each track to the right group. If they are already named you can skip to the next step.</Typography>
  <Typography variant="body1">To start assigning tracks to groups, first change the names by double clicking the name (e.g., <i>Out 1</i>). Try to use meaningful names like <i>EG1</i>, <i>AUX1</i>, etc. Coordinate with the worship leader to see how many band members will be playing, and how many spots are left on the sound board for track groups.</Typography>
  <Typography variant="body1">Then, for each song, look at all the numbered yellow-orange boxes on the right. These are the enabled tracks that the worship leader plans to use.</Typography>
  <Image alt="enabled buttons" src={CheckSelectedTracks}/>
  <Typography variant="body1">To make sure they are being sent to the right group, click the small arrow next to the track name and set the bottom option to the groups you named earlier.</Typography>
  <Image alt="ableton groups" src={GroupAbletonTracks}/>
</Stack>;

const routingSheet = <Stack spacing={1}>
  <Typography variant="body1">Once all the tracks have been grouped properly, open Chrome and go to the <i>Routing</i> bookmark. Navigate to the <i>Channels</i> tab.</Typography>
  <Image alt="google sheet" src={RoutingSheet}/>
  <Typography variant="body1"> Change the cells in the <i>Name</i> column to match the groups on Ableton. Don&apos;t forget to change the <i>Terminal</i> column, too! The Dante input should match the group number on Ableton.</Typography>
  <Image alt="sheet names" src={RoutingSheetNames}/>
  <Typography variant="body1"> In the example below, <i>EG1</i> is the first group on Ableton, so on the routing sheet, it is set to <i>Dante-Tracks-IN-01</i></Typography>.
  <Image alt="set terminals" src={SetTerminals}/>
</Stack>;

const loadSundayPreset = <Stack spacing={1}>
  <Typography variant="body1">After all the channels are set on the Routing sheet, go to the sound board. Push VIEW on the Show Control section.</Typography>
  <Image alt="show control" src={ShowControl}/>
  <Typography variant="body1">Turn the rotary knobs to select <i>Sunday Service</i>, or a preset if you&apos;ve saved one.</Typography>
  <Typography variant="body1">Push the left-most rotary knob like a button to choose <i>Go</i> and load the preset.</Typography>
  <Image alt="show control" src={SavePreset}/>
</Stack>;

const sync = <Typography variant="body1">On the streaming computer, click the <i>blue refresh icon</i> in the toolbar. This will sync the sound board with the Routing sheet.</Typography>;

const adjustAbletonTracks = <Typography variant="body1">Now, go through the Ableton tracks one by one to get familiar with them. Feel free to add EQ and compression, if needed. This is a good place to save your work and settings. Go back to the <i>Show Control</i> section and push <i>VIEW</i>. Use the rotary knobs to save the settings to a temporary location, being careful not to overwrite the main Sunday Service template.</Typography>;

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
    description: abletonPermissions,
  },
  {
    title: `Check Ableton's Dante settings`,
    description: abletonDante,
  },
  {
    title: `Group the Ableton tracks`,
    description: grouping,
  },
  {
    title: `Adjust the Routing Google sheet`,
    description: routingSheet
  },
  {
    title: `Load the Sunday Service preset`,
    description: loadSundayPreset,
  },
  {
    title: `Sync the Google sheet with the sound board`,
    description: sync,
  },
  {
    title: `Adjust Ableton tracks`,
    description: adjustAbletonTracks,
  },
];