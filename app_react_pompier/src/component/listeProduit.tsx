import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';

export default function ListeProduit() {
    const [open, setOpen] = React.useState(true);

    const handleClick = () => {
    setOpen(!open);
    };

    return (
        <List
        sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
            <ListSubheader component="div" id="nested-list-subheader">
            Mes commandes
            </ListSubheader>
        }
        >
        <ListItemButton onClick={handleClick}>
            <ListItemText primary="Commande du 28-07-22 - Etat : Livré" />
            {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>

        <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                <HorizontalRuleIcon />
                </ListItemIcon>
                <ListItemText primary="Produit" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                <HorizontalRuleIcon />
                </ListItemIcon>
                <ListItemText primary="Produit" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                <HorizontalRuleIcon />
                </ListItemIcon>
                <ListItemText primary="Produit" />
            </ListItemButton>
            </List>
        </Collapse>
        </List>
    );
}