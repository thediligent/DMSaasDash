import React, { useState, useEffect } from 'react';
import { Box, Typography, TextField, Button, Avatar, Grid, Select, MenuItem } from '@mui/material';
import authService from '../../../api/authService';

const PersonalProfile = () => {
  const [user, setUser] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    employee_id: '',
    joining_date: '',
    department: { id: '' },
    designations: { id: '' }
  });

  useEffect(() => {
    const userData = authService.getCurrentUser();
    setUser(userData);
    setFormData({
      name: userData.name || '',
      email: userData.email || '',
      employee_id: userData.employee_detail?.employee_id || '',
      joining_date: userData.employee_detail?.joining_date || '',
      department: { id: userData.employee_detail?.department_id || '' },
      designations: { id: userData.employee_detail?.designation_id || '' }
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: name === 'department' || name === 'designations' ? { id: value } : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const updatedUser = await authService.updateEmployeeProfile(user.id, formData);
      setUser(updatedUser);
      // Show success message
    } catch (error) {
      console.error('Error updating user data:', error);
      // Show error message
    }
  };

  if (!user) return <Typography>Loading...</Typography>;

  return (
    <Box sx={{ maxWidth: 600, margin: 'auto', padding: 3 }}>
      <Typography variant="h4" gutterBottom>
        User Profile
      </Typography>
      <Avatar src={user.image_url} alt={user.name} sx={{ width: 100, height: 100, margin: 'auto', marginBottom: 2 }} />
      <Grid container spacing={2}>
        <Grid item xs={12}>
          {user ? user.roles[0]?.display_name || 'No role' : 'Loading...'}
        </Grid>
        <Grid item xs={12}>
          {user ? user.roles[1]?.display_name || 'No Secondary Role' : 'Loading...'}
        </Grid>
        <Grid item xs={12}>
          {user ? user.employee_detail.address || 'No Address' : 'Loading...'}
        </Grid>
      </Grid>
      <Grid container spacing={4}>
        <Grid item xs={12}></Grid>
        <Grid item xs={12}></Grid>
      </Grid>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField fullWidth label="Name" name="name" value={formData.name} onChange={handleChange} />
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth label="Email" name="email" value={formData.email} onChange={handleChange} type="email" />
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth label="Employee ID" name="employee_id" value={formData.employee_id} aria-readonly />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Joining Date"
              name="joining_date"
              type="date"
              value={formData.joining_date}
              onChange={handleChange}
              InputLabelProps={{
                shrink: true
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <Select fullWidth label="Department" name="department" value={formData.department.id} onChange={handleChange}>
              {/* Populate with actual department options */}
              <MenuItem value={1}>Department 1</MenuItem>
              <MenuItem value={2}>Department 2</MenuItem>
            </Select>
          </Grid>
          <Grid item xs={12}>
            <Select fullWidth label="Designation" name="designations" value={formData.designations.id} onChange={handleChange}>
              {/* Populate with actual designation options */}
              <MenuItem value={1}>Designation 1</MenuItem>
              <MenuItem value={2}>Designation 2</MenuItem>
            </Select>
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary">
              Update Profile
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default PersonalProfile;
