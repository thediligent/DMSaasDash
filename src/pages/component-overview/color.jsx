import PropTypes from 'prop-types';
// material-ui
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// project import
import MainCard from 'components/MainCard';
import ComponentWrapper from './ComponentWrapper';
import ComponentSkeleton from './ComponentSkeleton';

function ColorBox({ bgcolor, title, data, dark, main }) {
  return (
    <Card sx={{ '&.MuiPaper-root': { borderRadius: '0px' } }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          py: 2.5,
          bgcolor,
          color: dark ? 'grey.800' : '#ffffff',
          border: main ? '1px dashed' : '1px solid transparent'
        }}
      >
        {title && (
          <Grid container justifyContent="space-around" alignItems="center">
            <Grid item>
              {data && (
                <Stack spacing={0.75} alignItems="center">
                  <Typography variant="subtitle2">{data.label}</Typography>
                  <Typography variant="subtitle1">{data.color}</Typography>
                </Stack>
              )}
            </Grid>
            <Grid item>
              <Typography variant="subtitle1" color="inherit">
                {title}
              </Typography>
            </Grid>
          </Grid>
        )}
      </Box>
    </Card>
  );
}

// ===============================|| COMPONENT - COLOR ||=============================== //

export default function ComponentColor() {
  return (
    <ComponentSkeleton>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
          <MainCard title="Primary Color">
            <Stack>
              <ColorBox bgcolor="#EEF2FF" data={{ label: 'Purple-1', color: '#EEF2FF' }} title="primary.lighter" dark />
              <ColorBox bgcolor="#E0E7FF" data={{ label: 'Purple-2', color: '#E0E7FF' }} title="primary[100]" dark />
              <ColorBox bgcolor="#C7D2FE" data={{ label: 'Purple-3', color: '#C7D2FE' }} title="primary[200]" dark />
              <ColorBox bgcolor="#A5B4FC" data={{ label: 'Purple-4', color: '#A5B4FC' }} title="primary.light" dark />
              <ColorBox bgcolor="#8297ff" data={{ label: 'Purple-5', color: '#8297ff' }} title="primary[400]" />
              <ColorBox bgcolor="#6366F1" data={{ label: 'Purple-6', color: '#6366F1' }} title="primary.main" main />
              <ColorBox bgcolor="#4F46E5" data={{ label: 'Purple-7', color: '#4F46E5' }} title="primary.dark" />
              <ColorBox bgcolor="#4338CA" data={{ label: 'Purple-8', color: '#4338CA' }} title="primary[700]" />
              <ColorBox bgcolor="#3730A3" data={{ label: 'Purple-9', color: '#3730A3' }} title="primary.darker" />
              <ColorBox bgcolor="#312E81" data={{ label: 'Purple-10', color: '#312E81' }} title="primary.900" />
            </Stack>
          </MainCard>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <MainCard title="Secondary Color">
            <Stack>
              <ColorBox bgcolor="#8e90c9" data={{ label: 'Grey-1', color: '#8e90c9' }} title="secondary.lighter" />
              <ColorBox bgcolor="#6e70ab" data={{ label: 'Grey-2', color: '#6e70ab' }} title="secondary[100]" />
              <ColorBox bgcolor="#6163a0" data={{ label: 'Grey-3', color: '#6163a0' }} title="secondary[200]" />
              <ColorBox bgcolor="#565893" data={{ label: 'Grey-4', color: '#565893' }} title="secondary.light" />
              <ColorBox bgcolor="#303269" data={{ label: 'Grey-5', color: '#303269' }} title="secondary[400]" />
              <ColorBox bgcolor="#1E204C" data={{ label: 'Grey-6', color: '#1E204C' }} title="secondary.main" main />
              <ColorBox bgcolor="#0c0e38" data={{ label: 'Grey-7', color: '#0c0e38' }} title="secondary.600" />
              <ColorBox bgcolor="#04052d" data={{ label: 'Grey-8', color: '#04052d' }} title="secondary.dark" />
              <ColorBox bgcolor="#050621" data={{ label: 'Grey-9', color: '#050621' }} title="secondary[800]" />
              <ColorBox bgcolor="#06071c" data={{ label: 'Grey-10', color: '#06071c' }} title="secondary.darker" />
            </Stack>
          </MainCard>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <MainCard title="Other Color">
            <Stack>
              <ColorBox bgcolor="#F3F6FFAA" data={{ label: 'Grey-A1', color: '#F3F6FFAA' }} title="secondary.A100" dark />
              <ColorBox bgcolor="#F3F6FF66" data={{ label: 'Grey-A2', color: '#F3F6FF66' }} title="secondary.A200" />
              <ColorBox bgcolor="#FDFDFF" data={{ label: 'Grey-A3', color: '#FDFDFF' }} title="secondary.A300" dark />
            </Stack>
          </MainCard>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <MainCard title="Success Color">
            <Stack>
              <ColorBox bgcolor="success.lighter" data={{ label: 'Green-1', color: '#f6ffed' }} title="success.lighter" />
              <ColorBox bgcolor="success.light" data={{ label: 'Green-4', color: '#95de64' }} title="success.light" dark />
              <ColorBox bgcolor="success.main" data={{ label: 'Green-6', color: '#52c41a' }} title="success.main" main />
              <ColorBox bgcolor="success.dark" data={{ label: 'Green-8', color: '#237804' }} title="success.dark" />
              <ColorBox bgcolor="success.darker" data={{ label: 'Green-10', color: '#092b00' }} title="success.darker" />
            </Stack>
          </MainCard>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <MainCard title="Error Color">
            <Stack>
              <ColorBox bgcolor="error.lighter" data={{ label: 'Red-1', color: '#fff1f0' }} title="error.lighter" />
              <ColorBox bgcolor="error.light" data={{ label: 'Red-4', color: '#ff7875' }} title="error.light" dark />
              <ColorBox bgcolor="error.main" data={{ label: 'Red-6', color: '#f5222d' }} title="error.main" main />
              <ColorBox bgcolor="error.dark" data={{ label: 'Red-8', color: '#a8071a' }} title="error.dark" />
              <ColorBox bgcolor="error.darker" data={{ label: 'Red-10', color: '#5c0011' }} title="error.darker" />
            </Stack>
          </MainCard>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <MainCard title="Warning Color">
            <Stack>
              <ColorBox bgcolor="warning.lighter" data={{ label: 'Gold-1', color: '#ffbe0d33' }} title="warning.lighter" />
              <ColorBox bgcolor="warning.light" data={{ label: 'Gold-4', color: '#ffd666' }} title="warning.light" dark />
              <ColorBox bgcolor="warning.main" data={{ label: 'Gold-6', color: '#faad14' }} title="warning.main" main />
              <ColorBox bgcolor="warning.dark" data={{ label: 'Gold-8', color: '#ad6800' }} title="warning.dark" />
              <ColorBox bgcolor="warning.darker" data={{ label: 'Gold-10', color: '#613400' }} title="warning.darker" />
            </Stack>
          </MainCard>
        </Grid>
      </Grid>
    </ComponentSkeleton>
  );
}

ColorBox.propTypes = {
  bgcolor: PropTypes.string,
  title: PropTypes.string,
  data: PropTypes.object,
  dark: PropTypes.bool,
  main: PropTypes.bool
};
