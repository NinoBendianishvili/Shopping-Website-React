import React, { useState } from 'react';
import '../styles/ContactForm.css'; 
import '../styles/buttons.css';
const ContactForm = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    gender: '',
    about: [],
    satisfied: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox') {
      if (checked) {
        setFormData(prevState => ({
          ...prevState,
          about: [...prevState.about, value]
        }));
      } else {
        setFormData(prevState => ({
          ...prevState,
          about: prevState.about.filter(item => item !== value)
        }));
      }
    } else {
      setFormData(prevState => ({
        ...prevState,
        [name]: value
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    
    setFormData({
      fullname: '',
      email: '',
      gender: '',
      about: [],
      satisfied: '',
      message: ''
    });
    setShowForm(false); 
  };

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const closeForm = () => {
    setShowForm(false);
  };

  return (
    <div>
      <button className="contactbtn" onClick={toggleForm}>Contact Us</button>
      {showForm && (
        <div className="overlay">
          <div className="container">
            <div className="connect-wrapper">
              <button className="close-btn" onClick={closeForm}>X</button> {/* Close button */}
              <h2>Contact Us</h2>
              <p>Fill up the form below to send a message</p>
              <form className="connect-form" onSubmit={handleSubmit}>
                <div className="w-full">
                  <label className="block text-center" htmlFor="fullname">Full Name</label>
                  <input
                    className="w-full"
                    type="text"
                    name="fullname"
                    id="fullname"
                    value={formData.fullname}
                    onChange={handleChange}
                    placeholder="Jack Black"
                    required
                  />
                </div>
                <div className="w-full">
                  <label className="block text-center" htmlFor="email">Email</label>
                  <input
                    className="w-full"
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="example@company.com"
                    required
                  />
                </div>
                <div className="w-full">
                  <h3>Gender</h3>
                  <div ClassName="radio">
                    <input
                      type="radio"
                      name="gender"
                      id="male"
                      value="male"
                      checked={formData.gender === 'male'}
                      onChange={handleChange}
                    />
                    <label htmlFor="male">Male</label>
                    <input
                      type="radio"
                      name="gender"
                      id="female"
                      value="female"
                      checked={formData.gender === 'female'}
                      onChange={handleChange}
                    />
                    <label htmlFor="female">Female</label>
                    <input
                      type="radio"
                      name="gender"
                      id="none"
                      value="none"
                      checked={formData.gender === 'none'}
                      onChange={handleChange}
                    />
                    <label htmlFor="none">None</label>
                  </div>
                </div>
                <div className="w-full">
                  <h3>Where did you find out about us?</h3>
                  <div className="checks">
                    <input
                      type="checkbox"
                      name="about"
                      id="word-of-mouth"
                      value="word-of-mouth"
                      checked={formData.about.includes('word-of-mouth')}
                      onChange={handleChange}
                    />
                    <label htmlFor="word-of-mouth">Word of mouth</label>
                    <input
                      type="checkbox"
                      name="about"
                      id="social-network"
                      value="social-network"
                      checked={formData.about.includes('social-network')}
                      onChange={handleChange}
                    />
                    <label htmlFor="social-network">Social Network</label>
                    <input
                      type="checkbox"
                      name="about"
                      id="tv-add"
                      value="tv-add"
                      checked={formData.about.includes('tv-add')}
                      onChange={handleChange}
                    />
                    <label htmlFor="tv-add">TV Ad</label>
                  </div>
                </div>
                <select
                  className="w-full"
                  name="satisfied"
                  id="satisfied"
                  value={formData.satisfied}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>Select your satisfaction level</option>
                  <option value="good">I'm very satisfied</option>
                  <option value="mid">There are things I would discuss</option>
                  <option value="bad">I'm not satisfied at all</option>
                </select>
                <div className="w-full">
                  <label htmlFor="message">Feel free to leave a message!</label>
                  <textarea
                    className="w-full"
                    name="message"
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    cols="30"
                    rows="6"
                    placeholder="Message..."
                    required
                  ></textarea>
                </div>
                <div className="w-full">
                <label htmlFor="newsletter">Do you want to subscribe to the newsletter?</label>
                    <input
                      type="checkbox"
                      name="about"
                      id="newsletter"
                      value="newsletter"
                      checked={formData.about.includes('newsletter')}
                      onChange={handleChange}
                    />
                    </div>
                <button className="connect-btn" type="submit">Submit</button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactForm;
