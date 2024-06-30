import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import PersonIcon from "@mui/icons-material/Person";
import { blue } from "@mui/material/colors";
import { getProfiles, Profile } from "../Lookups/Profiles/Profiles";
import { useEffect, useState } from "react";

export interface UserDialogProps {
  open: boolean;
  onClose: (value: string | null) => void;
}

export default function UserDialog(props: UserDialogProps) {
  const { onClose, open } = props;

  const [profiles, setProfiles] = useState<Profile[]>([]);

  useEffect(() => {
    const getProfilesData = async () => {
      const profile = await getProfiles();

      setProfiles(profile);
    };

    if (!profiles.length) {
      getProfilesData();
    }
  }, []);

  const handleClose = () => {
    onClose(null);
  };

  const handleListItemClick = (value: string) => {
    onClose(value);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Select User</DialogTitle>
      <List sx={{ pt: 0 }}>
        {profiles.map((profile, index) => (
          <ListItem disableGutters key={`${profile.id}-${index}`}>
            <ListItemButton
              onClick={() => handleListItemClick(profile.user_id)}
            >
              <ListItemAvatar>
                <Avatar
                  sx={{ bgcolor: blue[100], color: blue[600] }}
                  src={profile.profile_image_url}
                >
                  <PersonIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={profile.name || "Unknown"} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Dialog>
  );
}
