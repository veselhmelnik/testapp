//components----------------------------------
import Page from 'components/Page';
import EditForm from './EditForm';
//materials-----------------------------------
import { Container, Grid } from '@mui/material';
//--------------------------------------------

const DashboardApp = () => {
  return (
    <Page title="Dashboard">
      <Container maxWidth="xl">
        <Grid container spacing={1}>
          <Grid item xs={12} md={12} lg={12} xl={8}>
            <EditForm/>
          </Grid>
        </Grid>
      </Container>
    </Page>
  )
}

export default DashboardApp