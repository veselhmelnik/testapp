import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import useResponsive from 'hooks/useResponsive';
//components--------------------------------------
import NavSection from 'components/NavSection';
// import navConfig from './NavConfig';
import { navConfig } from 'utils/selectors';
import Logo from 'components/Logo';
//materials---------------------------------------
import { styled } from '@mui/material/styles';
import { Box, Drawer, Stack, Typography } from '@mui/material';
import avatar from 'assets/images/avatar.png'
//-------------------------------------------------
const DRAWER_WIDTH = 280;

const RootStyle = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('lg')]: {
    flexShrink: 0,
    width: DRAWER_WIDTH,
  },
}));
//-------------------------------------------------
DashboardSidebar.propTypes = {
  isOpenSidebar: PropTypes.bool,
  onCloseSidebar: PropTypes.func,
};

export default function DashboardSidebar ({isOpenSidebar, onCloseSidebar}) {
  const {pathname} = useLocation();
  const [dateTime, setDateTime] = useState(new Date());

  const isDesktop = useResponsive('up', 'lg');

  useEffect(() => {
    if (isOpenSidebar) {
      onCloseSidebar();
    }
  }, [pathname]);

  useEffect(() => {
    setInterval(() => setDateTime(new Date(), 10000));
  }, []);

  const renderContent = (
    <>
      <Box sx={{ px: 2.5, py: 3, display: 'inline-flex' }}>
        <Logo />
      </Box>
      <Box sx={{mb: 4, 
                mx: 1.25,
                display: 'flex',
                justifyContent: 'space-between',
                backgroundColor: 'rgba(145, 158, 171, 0.12)',
                borderRadius: '12px',
                p: '16px 10px'}}>
        <div>{dateTime.toLocaleDateString('en-GB')}</div>
        <div className='time'>{dateTime.toLocaleTimeString('en-GB', {hour: 'numeric', minute: 'numeric'})}</div>
      </Box>
      <NavSection navConfig={navConfig}/>
      <Box sx={{ px: 2.5, pb: 2, mt: 10 }}>
        <Stack alignItems="center" spacing={3} sx={{ borderRadius: 2, position: 'relative' }}>
          <Box
            component="img"
            src={avatar}
            sx={{width: 80, position: 'absolute', top: -59 }}
          />
          <Box sx={{textAlign: 'center' }}>
            <Typography gutterBottom variant="h6">
              Nikita DM
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              QA/QC
            </Typography>
          </Box>
        </Stack>
      </Box>
    </>
  )

  return(
    <RootStyle>
      {!isDesktop && (
        <Drawer
          open={isOpenSidebar}
          onClose={onCloseSidebar}
          PaperProps={{
            sx: { width: DRAWER_WIDTH }
          }}
          >
            {renderContent}
        </Drawer>
      )}

      {isDesktop && (
        <Drawer
        open
        variant="persistent"
        PaperProps={{
          sx: {
            width: DRAWER_WIDTH,
            bgcolor: 'background.default',
            borderRightStyle: 'dashed',
          },
        }}
        >
          {renderContent}
        </Drawer>
      )}
    </RootStyle>
  )
}