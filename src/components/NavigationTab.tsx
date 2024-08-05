import { List, ListItemButton, ListItemText } from "@mui/material";

interface Props {
  value: number;
  setValue: (value: number) => void;
}

export default function NavigationTab(props: Props) {
  const { setValue } = props;

  return (
    <List component="div" disablePadding>
      <ListItemButton onClick={() => setValue(0)}>
        <ListItemText primary="About me" />
      </ListItemButton>
      <ListItemButton onClick={() => setValue(1)}>
        <ListItemText primary="Learning" />
      </ListItemButton>
      <ListItemButton onClick={() => setValue(2)}>
        <ListItemText primary="Experience" />
      </ListItemButton>
      <ListItemButton onClick={() => setValue(3)}>
        <ListItemText primary="Contact" />
      </ListItemButton>
    </List>
  );
}
