import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { TailSpin } from 'react-loader-spinner';
import '../Contact.css'; // Ensure you import the CSS file

const validationSchema = Yup.object({
  messageTitle: Yup.string().required('Required'),
  message: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email address').required('Required'),
  guestName: Yup.string().required('Required'),
  phone: Yup.string()
});

function Contact() {
  const [loading, setLoading] = useState(false);
  const formik = useFormik({
    initialValues: {
      messageTitle: '',
      message: '',
      email: '',
      guestName: '',
      phone: ''
    },
    validationSchema,
    onSubmit: async (values, { setSubmitting, setStatus }) => {
      setLoading(true);
      try {
        const response = await axios.post('https://api.tahaelsayed.click/v1/contactme', values);
        setStatus({ success: 'Contact form submitted successfully' });
      } catch (error) {
        setStatus({ error: 'Failed to submit contact form' });
      } finally {
        setLoading(false);
        setSubmitting(false);
      }
    }
  });

  return (
    <section id="contact">
      <h2>Contact Me</h2>
      {loading && (
        <div className="loading-overlay">
          <TailSpin height="50" width="50" color="white" ariaLabel="loading" />
        </div>
      )}
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="messageTitle">Message Title</label>
        <input
          id="messageTitle"
          name="messageTitle"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.messageTitle}
        />
        {formik.touched.messageTitle && formik.errors.messageTitle ? (
          <div>{formik.errors.messageTitle}</div>
        ) : null}

        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.message}
        />
        {formik.touched.message && formik.errors.message ? (
          <div>{formik.errors.message}</div>
        ) : null}

        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? (
          <div>{formik.errors.email}</div>
        ) : null}

        <label htmlFor="guestName">Guest Name</label>
        <input
          id="guestName"
          name="guestName"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.guestName}
        />
        {formik.touched.guestName && formik.errors.guestName ? (
          <div>{formik.errors.guestName}</div>
        ) : null}

        <label htmlFor="phone">Phone (Optional)</label>
        <input
          id="phone"
          name="phone"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.phone}
        />
        {formik.touched.phone && formik.errors.phone ? (
          <div>{formik.errors.phone}</div>
        ) : null}

        <button type="submit" disabled={formik.isSubmitting || loading}>
          Submit
        </button>

        {formik.status && formik.status.success && (
          <div style={{ color: 'green' }}>{formik.status.success}</div>
        )}
        {formik.status && formik.status.error && (
          <div style={{ color: 'red' }}>{formik.status.error}</div>
        )}
      </form>
    </section>
  );
}

export default Contact;
