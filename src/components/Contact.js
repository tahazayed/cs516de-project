import React, { useState } from 'react';
import axios from 'axios';

function Contact() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    messageTitle: '',
    message: '',
    email: '',
    guestName: '',
    phone: '',
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.messageTitle) newErrors.messageTitle = 'Message Title is required';
    if (!formData.message) newErrors.message = 'Message is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.guestName) newErrors.guestName = 'Guest Name is required';
    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.email && !emailRegex.test(formData.email)) newErrors.email = 'Invalid email address';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!validateForm()) return;

    setLoading(true);

    try {
      const response = await axios.post('https://api.tahaelsayed.click/v1/contactme', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 200) {
        setFormData({
          messageTitle: '',
          message: '',
          email: '',
          guestName: '',
          phone: '',
        });
        alert('Message sent successfully!');
      } else {
        alert('Failed to send message.');
      }
    } catch (error) {
      alert('An error occurred while sending the message.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="section" id="contact">
      <div className="cc-contact-information">
        <div className="container">
          <div className="cc-contact">
            <div className="row">
              <div className="col-md-9">
                <div className="card mb-0" data-aos="zoom-in">
                  <div className="h4 text-center title">Contact Me</div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="card-body">
                        <form onSubmit={handleSubmit}>
                          <div className="p pb-3">
                            <strong>Feel free to contact me </strong>
                          </div>
                          <div className="row mb-3">
                            <div className="col">
                              <div className="input-group">
                                <span className="input-group-addon">
                                  <i className="fa fa-file-text"></i>
                                </span>
                                <input
                                  className="form-control"
                                  type="text"
                                  name="messageTitle"
                                  placeholder="Message Title"
                                  value={formData.messageTitle}
                                  onChange={handleChange}
                                  required
                                />
                                {errors.messageTitle && <div className="text-danger">{errors.messageTitle}</div>}
                              </div>
                            </div>
                          </div>
                          <div className="row mb-3">
                            <div className="col">
                              <div className="form-group">
                                <textarea
                                  className="form-control"
                                  name="message"
                                  placeholder="Your Message"
                                  value={formData.message}
                                  onChange={handleChange}
                                  required
                                ></textarea>
                                {errors.message && <div className="text-danger">{errors.message}</div>}
                              </div>
                            </div>
                          </div>
                          <div className="row mb-3">
                            <div className="col">
                              <div className="input-group">
                                <span className="input-group-addon">
                                  <i className="fa fa-envelope"></i>
                                </span>
                                <input
                                  className="form-control"
                                  type="email"
                                  name="email"
                                  placeholder="E-mail"
                                  value={formData.email}
                                  onChange={handleChange}
                                  required
                                />
                                {errors.email && <div className="text-danger">{errors.email}</div>}
                              </div>
                            </div>
                          </div>
                          <div className="row mb-3">
                            <div className="col">
                              <div className="input-group">
                                <span className="input-group-addon">
                                  <i className="fa fa-user-circle"></i>
                                </span>
                                <input
                                  className="form-control"
                                  type="text"
                                  name="guestName"
                                  placeholder="Guest Name"
                                  value={formData.guestName}
                                  onChange={handleChange}
                                  required
                                />
                                {errors.guestName && <div className="text-danger">{errors.guestName}</div>}
                              </div>
                            </div>
                          </div>
                          <div className="row mb-3">
                            <div className="col">
                              <div className="input-group">
                                <span className="input-group-addon">
                                  <i className="fa fa-phone"></i>
                                </span>
                                <input
                                  className="form-control"
                                  type="text"
                                  name="phone"
                                  placeholder="Phone (Optional)"
                                  value={formData.phone}
                                  onChange={handleChange}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col">
                              <button className="btn btn-primary" type="submit" disabled={loading}>
                                {loading ? 'Sending...' : 'Send'}
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="card-body">
                        <p className="mb-0">
                          <strong>Address</strong>
                        </p>
                        <p className="pb-2">Florence, Kentucky, U.S.A</p>
                        <p className="mb-0">
                          <strong>Phone</strong>
                        </p>
                        <p className="pb-2">+1 641-233-9470</p>
                        <p className="mb-0">
                          <strong>Email</strong>
                        </p>
                        <p>taha.elsayed04@outlook.com</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;