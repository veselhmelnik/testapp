import { useRef, useState } from "react";
import {Link as RouterLink} from "react-router-dom";
//components-------------------------------------
import MenuPopover from "components/MenuPopover";
//materials--------------------------------------
import { Avatar, Box, Divider, IconButton, MenuItem, Stack, Typography} from "@mui/material";
import { alpha } from "@mui/material/styles";
import avatar from 'assets/images/avatar.png'
import { MENU_OPTIONS } from "utils/selectors";
//---------------------------------------------
const AccountPopover = () => {
    const anchorRef = useRef(null);

    const [open, setOpen] = useState(null);

    const handleOpen = (event) => {
        setOpen(event.currentTarget);
      };
    
      const handleClose = () => {
        setOpen(null);
      };

  return (
    <>
        <IconButton
        ref={anchorRef}
        onClick={handleOpen}
        sx={{
            p: 0,
            ...(open && {
              '&:before': {
                zIndex: 1,
                content: "''",
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                position: 'absolute',
                bgcolor: (theme) => alpha(theme.palette.grey[900], 0.8),
              },
            }),
          }}>
            <Avatar src={avatar} alt="avatar"/>
        </IconButton>
        
        <MenuPopover
        open={Boolean(open)}
        anchorEl={open}
        onClose={handleClose}
        sx={{
          p: 0,
          mt: 1.5,
          ml: 0.75,
          '& .MuiMenuItem-root': {
            typography: 'body2',
            borderRadius: 0.75,
          },
        }}
        >
          <Box sx={{ my: 1.5, px: 2.5 }}>
            <Typography>
              Nikita DM
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }} noWrap>
              hmelniknikita@gmail.com
            </Typography>
          </Box>
            <Divider sx={{ borderStyle: 'dashed' }}/> 

            <Stack sx={{ p: 1 }}>
              {MENU_OPTIONS.map((option) => (
                <MenuItem key={option.label} to={option.linkTo} component={RouterLink} onClick={handleClose}>
                  {option.label}
                </MenuItem>
              ))}
            </Stack>

            <Divider sx={{ borderStyle: 'dashed' }} />

            <MenuItem onClick={handleClose} sx={{ m: 1 }}>
            Logout
            </MenuItem>
            
        </MenuPopover>
    </>
  )
}
export default AccountPopover