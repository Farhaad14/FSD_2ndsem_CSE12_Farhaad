import React, { useState } from 'react';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    course: '',
    mobile: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    alert('Registration Successful!');
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '60vh',
    minHeight: '85vh',
    marginTop: '25px',
    margin: 'auto',
    padding: '25px',
    border: '3px solid',
    borderColor: "#470cde",
    borderRadius: '10px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    backgroundColor: '#ffffff',
    
  };

  const inputStyle = {
    marginBottom: '15px',
    padding: '12px',
    fontSize: '14px',
    borderRadius: '6px',
    border: '1px solid #ccc',
    width: '100%',
    boxSizing: 'border-box',
    outline: 'none'
  };

  const labelStyle = {
    marginBottom: '6px',
    fontWeight: 'bold',
    color: '#444',
    fontSize: '14px'
  };

  const buttonStyle = {
    padding: '12px 15px',
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#fff',
    backgroundColor: '#007bff',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    marginTop: '10px',
    transition: 'background-color 0.3s'
  };

  return (
    <div style={{padding: '15px'}}>
      <form style={formStyle} onSubmit={handleSubmit}>
      <h2 style={{ textAlign: 'center', marginBottom: '25px', color: '#333' }}>Student Registration</h2>
        
        <label style={labelStyle}>Name</label>
        <input 
          type="text" 
          name="name" 
          placeholder="Enter your name"
          value={formData.name} 
          onChange={handleChange} 
          style={inputStyle} 
          required 
        />

        <label style={labelStyle}>Email</label>
        <input 
          type="email" 
          name="email" 
          placeholder="Enter your email"
          value={formData.email} 
          onChange={handleChange} 
          style={inputStyle} 
          required 
        />

        <label style={labelStyle}>Password</label>
        <input 
          type="password" 
          name="password" 
          placeholder="Enter your password"
          value={formData.password} 
          onChange={handleChange} 
          style={inputStyle} 
          required 
        />

        <label style={labelStyle}>Course</label>
        <select 
          name="course" 
          value={formData.course} 
          onChange={handleChange} 
          style={inputStyle} 
          required
        >
          <option value="" disabled>Select a course</option>
          <option value="Computer Science">Computer Science</option>
          <option value="Information Technology">Information Technology</option>
          <option value="Electronics">Electronics</option>
          <option value="Mechanical">Mechanical</option>
          <option value="Civil">Civil</option>
        </select>

        <label style={labelStyle}>Mobile No</label>
        <input 
          type="tel" 
          name="mobile" 
          placeholder="Enter your mobile number"
          value={formData.mobile} 
          onChange={handleChange} 
          style={inputStyle} 
          pattern="[0-9]{10}"
          title="Please enter a valid 10-digit mobile number"
          required 
        />

        <button 
          type="submit" 
          style={buttonStyle}
          onMouseOver={(e) => e.target.style.backgroundColor = '#0056b3'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#007bff'}
        >
          Register
        </button>
      </form>
    </div>
  );
}

export default App;
