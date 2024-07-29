// src/pages/contacts/contacts-page.jsx
import React, { useState, useEffect } from 'react';
import { Typography, Grid, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Skeleton } from '@mui/material';
import MainCard from 'components/MainCard';
import apiService from 'api/apiService';

function ContactsPage() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        setLoading(true);
        const response = await apiService.get('/lead');
        setContacts(response.data.data);
      } catch (error) {
        console.error('Error fetching contacts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchContacts();
  }, []);

  const SkeletonRow = () => (
    <TableRow>
      <TableCell><Skeleton variant="text" /></TableCell>
      <TableCell><Skeleton variant="text" /></TableCell>
      <TableCell><Skeleton variant="text" /></TableCell>
      <TableCell><Skeleton variant="text" /></TableCell>
      <TableCell><Skeleton variant="text" /></TableCell>
      <TableCell><Skeleton variant="text" /></TableCell>
    </TableRow>
  );

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography variant="h5">Contacts</Typography>
        <Button target="_blank" href="https://secure.diligentmarketing.solutions/api/v1/lead">
          API Endpoint
        </Button>
      </Grid>
      <Grid item xs={12}>
        <MainCard>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="contacts table">
              <TableHead>
                <TableRow>
                  <TableCell>Customer</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Mobile Number</TableCell>
                  <TableCell>City</TableCell>
                  <TableCell>Last Active</TableCell>
                  <TableCell>Joined</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {loading
                  ? Array.from(new Array(5)).map((_, index) => <SkeletonRow key={index} />)
                  : contacts.map((contact) => (
                    <TableRow key={contact.id}>
                      <TableCell component="th" scope="row">
                        {contact.name}
                      </TableCell>
                      <TableCell>{contact.email}</TableCell>
                      <TableCell>{contact.mobile || 'N/A'}</TableCell>
                      <TableCell>{contact.city || 'N/A'}</TableCell>
                      <TableCell>{'N/A'}</TableCell>
                      <TableCell>{new Date(contact.created_at).toLocaleString()}</TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
        </MainCard>
      </Grid>
    </Grid>
  );
}

export default ContactsPage;