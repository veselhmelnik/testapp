import {useState} from 'react'
import {Outlet} from 'react-router-dom'
//components----------------------------------
import DashboardNavbar from './DashboardNavbar';
import DashboardSidebar from './DashboardSidebar';
//materials------------------------------------
import {styled} from '@mui/material/styles';
//---------------------------------------------
export const APP_BAR_MOBILE = 64;
export const APP_BAR_DESKTOP = 65;

const RootStyle = styled('div')({
  display: 'flex',
  minHeight: '100%',
  overflow: 'hidden'
});

const MainStyle = styled('div')(({ theme }) => ({
  flexGrow: 1,
  overflow: 'auto',
  minHeight: '100%',
  paddingTop: APP_BAR_MOBILE + 24,
  paddingBottom: theme.spacing(10),
  [theme.breakpoints.up('lg')]: {
    paddingTop: APP_BAR_DESKTOP + 24,
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2)
  }
}));

const DashboardLayout = () => {
  const [open, setOpen] = useState(false);
  
  return (
    <RootStyle>
      <DashboardNavbar onOpenSidebar={() => setOpen(true)}/>
      <DashboardSidebar isOpenSidebar={open} onCloseSidebar={() => setOpen(false)}/>
      <MainStyle>
        <Outlet/>
      </MainStyle>
    </RootStyle>
  )
}

export default DashboardLayout