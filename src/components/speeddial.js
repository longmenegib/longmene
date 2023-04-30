import * as React from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';
import { Facebook, LinkedIn, Person, Twitter, WhatsApp } from '@mui/icons-material';

const actions = [
  { icon: <Facebook />, name: 'Facebbok' },
  { icon: <LinkedIn />, name: 'LinkedIn' },
  { icon: <WhatsApp />, name: 'Whatsapp' },
  { icon: <Twitter />, name: 'Twitter' },
];

export default function Dial() {
  return (
    // <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1 }}>
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: 'absolute', bottom: 10, right: 16, zIndex: 1000 }}
        icon={<Person />}
        FabProps={{
            sx: {
              bgcolor: 'white',
              color: '#ffc701',
              '&:hover': {
                bgcolor: '#ffc701',
                color: '#fff'
              }
            }
          }}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            className="action-dial"
          />
        ))}
      </SpeedDial>
    // </Box>
  );
}
