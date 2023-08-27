'use client'
import React from 'react';
import ReactDOM from 'react-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Button, TextField } from '@mui/material';

const validationSchema = yup.object({
  name: yup
    .string()
    .required('name is required'),
  title: yup
    .string()
    .required('title is required'),
  post: yup
    .string()
    .min(8, 'Password should be of minimum 8 characters length')
    .required('post message is required'),
});

const CreatePosts = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      title: '',
      post: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          id="name"
          name="name"
          label="Name"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
        />
        <TextField
          fullWidth
          id="title"
          name="title"
          label="Title"
          value={formik.values.title}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.title && Boolean(formik.errors.title)}
          helperText={formik.touched.title && formik.errors.title}
        />
        <TextField
          fullWidth
          id="post"
          name="post"
          label="post"
          type="post"
          value={formik.values.post}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.post && Boolean(formik.errors.post)}
          helperText={formik.touched.post && formik.errors.post}
        />
        <Button color="primary" variant="outlined" fullWidth type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
};
export default CreatePosts;
