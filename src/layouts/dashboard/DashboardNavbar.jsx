//components---------------------------------------
import Iconify from "components/Iconify";
import WorkStatePopover from "./WorkStatePopover";
import AccountPopover from "./AccountPopover";
//materials----------------------------------------
import { alpha, styled } from "@mui/material/styles";
import { AppBar, Box, Stack, Toolbar, IconButton } from "@mui/material";
//-------------------------------------------------
const DRAWER_WIDTH = 280;
const APPBAR_MOBILE = 64;
const APPBAR_DESKTOP = 75;

const RootStyle = styled(AppBar)(({ theme }) => ({
  boxShadow: 'none',
  backdropFilter: 'blur(6px)',
  WebkitBackdropFilter: 'blur(6px)', // Fix on Mobile
  backgroundColor: alpha(theme.palette.background.default, 0.72),
  [theme.breakpoints.up('lg')]: {
    width: `calc(100% - ${DRAWER_WIDTH + 1}px)`,
  },
}));

const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
  minHeight: APPBAR_MOBILE,
  [theme.breakpoints.up('lg')]: {
    minHeight: APPBAR_DESKTOP,
    padding: theme.spacing(0, 9),
  },
}));
//---------------------------------------------------------------------------
const DashboardNavbar = ({onOpenSidebar}) => {
  return (
    <RootStyle>
        <ToolbarStyle>
            <IconButton onClick={onOpenSidebar} sx={{ mr: 1, color: 'text.primary', display: { lg: 'none' } }}>
                <Iconify icon="eva:menu-2-fill" />
            </IconButton>
            <Box sx={{ flexGrow: 1 }}/>
            <Stack direction="row" alignItems="center" spacing={{ xs: 0.5, sm: 1.5 }}>
                <WorkStatePopover/>
                <AccountPopover/>
            </Stack>
        </ToolbarStyle>
    </RootStyle>
  )
}

export default DashboardNavbar