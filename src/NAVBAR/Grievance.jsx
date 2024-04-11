import React, { useState } from 'react';

function Grievance() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        location: '',
        comments: '',
        phone: '',
        email: '',
        file: null
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:3000/api/grievance', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            if (response.ok) {
                console.log('Grievance submitted successfully');
                // Clear form data after submission
                setFormData({
                    firstName: '',
                    lastName: '',
                    location: '',
                    comments: '',
                    phone: '',
                    email: '',
                    file: null
                });
            } else {
                console.error('Failed to submit grievance');
            }
        } catch (err) {
            console.error('Server Error:', err);
        }
    };

    const handleChange = (e) => {
        if (e.target.type === 'file') {
            setFormData({
                ...formData,
                file: e.target.files[0]
            });
        } else {
            setFormData({
                ...formData,
                [e.target.name]: e.target.value
            });
        }
    };

    const uploadFile = () => {
        // Implement your file upload logic here if needed
    };

    return (
        <>
            <div className='grie-title'>File A Grievance</div>
            <div className='grievance'>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="firstName">First Name:</label>
                    <input type='text' name='firstName' value={formData.firstName} onChange={handleChange} placeholder="Enter your First Name" />

                    <label htmlFor="lastName">Last Name:</label>
                    <input type='text' name='lastName' value={formData.lastName} onChange={handleChange} placeholder="Enter your Last Name" />

                    <label htmlFor="location">Location:</label>
                    <input type='text' name='location' value={formData.location} onChange={handleChange} placeholder="Enter your Location" />

                    <label htmlFor="comments">Comments:</label>
                    <input type='text' name='comments' value={formData.comments} onChange={handleChange} placeholder="Enter your Comments" />

                    <label htmlFor="phone">Phone No:</label>
                    <input type='text' name='phone' value={formData.phone} onChange={handleChange} placeholder="Enter your Phone Number" />

                    <label htmlFor="email">E-mail:</label>
                    <input type='email' name='email' value={formData.email} onChange={handleChange} placeholder="Enter your E-mail Address" />

                    <div className="inputfile-box">
                        <input type="file" id="file" className="inputfile" onChange={handleChange} />
                        <label htmlFor="file">
                            <span id="file-name" className="file-box"></span>
                            <span className="file-button">
                                <i className="fa fa-upload" aria-hidden="true"></i>
                                Select File
                            </span>
                        </label>
                    </div>

                    <button type='submit' className='btnsub'>SUBMIT</button>
                </form>
            </div>
        </>
    );
}

export default Grievance;
