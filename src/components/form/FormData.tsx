import React,{ReactElement} from "react";
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  TextField,
  Checkbox,
  Button,
  FormGroup,
  FormControlLabel,
  Divider,
} from "@mui/material";
import Chip from '@mui/material/Chip';
import Autocomplete from '@mui/material/Autocomplete';
// import { top100Films } from "../../data/TopFIlms";
import { useFormik } from "formik";
import * as yup from "yup";
import { useState } from 'react';

const validationSchema = yup.object({
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string()
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
});

export function FormData({setLogin}:{setLogin:any;}): ReactElement {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      setLogin(true);
      //   const res = signInWithEmailPassword(
      //     formik.values.email,
      //     formik.values.password
      //   );
      // console.log(res);
    },
  });

  const [users, setUsers] = useState<any | void>(null);


  console.log(users)
  return (
    <Container maxWidth="sm">
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        sx={{ height: "100vh" }}
      >
        <Grid item xs={12}>
          <Card
            sx={{
              borderRadius: "1rem",
              maxWidth: "350px",
              my: 1,
              mx: "auto",
            }}
          >
            <CardContent sx={{ p: 5, mb: 4 }}>
              <form onSubmit={formik.handleSubmit}>
                <Typography
                  variant="h5"
                  fontWeight="bold"
                  align="center"
                  gutterBottom
                  mb={2}
                >
                  Sign in
                </Typography>

                <TextField
                  label="Email address"
                  id="email"
                  size="small"
                  name="email"
                  margin="dense"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                  fullWidth
                />
                <TextField
                  label="Password"
                  id="password"
                  type="password"
                  name="password"
                  size="small"
                  fullWidth
                  margin="normal"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.password && Boolean(formik.errors.password)
                  }
                  helperText={formik.touched.password && formik.errors.password}
                  sx={{ marginBottom: "1rem" }}
                />
{/* 
                <Autocomplete
                  multiple
                  id="tags-outlined"
                  options={users}
                  getOptionLabel={(option) => JSON.stringify(users.phone)}
                  // defaultValue={[top100Films[13]]}
                  filterSelectedOptions
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="filterSelectedOptions"
                      placeholder="Select film"
                    />
                  )}
                  sx={{marginBottom:'1rem'}}
                /> */}

                <Button
                  variant="contained"
                  sx={{ fontSize: 13, fontWeight: 600 }}
                  size="large"
                  fullWidth
                  type="submit"
                >
                  Login
                </Button>
                {/* <hr style={{ margin: "1rem 0" }} /> */}
                {/* <Divider sx={{ my: 3 }} /> */}
              </form>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};
