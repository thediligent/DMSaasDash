// material-ui
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// project import
import MainCard from 'components/MainCard';

// assets
import avatar from 'assets/images/users/avatar-group.png';
import AnimateButton from 'components/@extended/AnimateButton';

// ==============================|| DRAWER CONTENT - NAVIGATION CARD ||============================== //

export default function AppSelector() {
  return (
    <MainCard sx={{ bgcolor: 'grey.50', m: 2 }}>
      <Stack alignItems="left" spacing={1.5}>
        <AnimateButton>
          <Button component={Link} target="_blank" href="https://diligentmarketing.solutions" variant="contained" color="primary" size="small" fullWidth>
            Apps
          </Button>
        </AnimateButton>
      </Stack>
    </MainCard>
  );
}
