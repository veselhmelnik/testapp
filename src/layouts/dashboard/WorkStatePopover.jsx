import { useState, useRef } from "react";
//components--------------------------------------
import MenuPopover from "components/MenuPopover";
import { WORK_STATES } from "utils/selectors";
//materials---------------------------------------
import { IconButton, Stack, MenuItem, Box } from "@mui/material";
import { alpha } from '@mui/material/styles';
//------------------------------------------------
const WorkStatePopover = () => {
  const anchorRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [workState, setWorkState] = useState(0);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = (e) => {
    setOpen(false);
    if(e._targetInst === null) {
      setWorkState(workState)
    }
    else {
      setWorkState(e)
    }
  };

  return (
    <>
      <IconButton
        ref={anchorRef}
        onClick={handleOpen}
        sx={{
        padding: 0,
        width: 50,
        height: 50,
        ...(open && {
          bgcolor: (theme) => alpha(theme.palette.primary.main, theme.palette.action.focusOpacity),
        }),
      }}
      >
        <img src={WORK_STATES[workState].icon} alt={WORK_STATES[workState].label} />
      </IconButton>
      <MenuPopover
        
        open={open}
        onClose={handleClose}
        anchorEl={anchorRef.current}
        sx={{
          mt: 1.5,
          ml: 0.75,
          width: 180,
          '& .MuiMenuItem-root': { px: 1, typography: 'body2', borderRadius: 0.75 },
        }}
        >
          <Stack spacing={0.75}>
            {WORK_STATES.map((option) => (
            <MenuItem  key={option.value} selected={option.value === WORK_STATES[0].value} onClick={() => handleClose(option.id)}>
              <Box component="img" alt={option.label} src={option.icon} sx={{ width: 28, mr: 2 }} />

              {option.label}

            </MenuItem>
            ))}
          </Stack>
      </MenuPopover>
    </>
  )
}

export default WorkStatePopover