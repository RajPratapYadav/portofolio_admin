import { useState } from "react";
import Calendar from "react-calendar";
import Modal from 'react-modal';


export const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        query: '',
        file: null,
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: name === 'file' ? files[0] : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your logic to handle form submission here
        console.log('Form data submitted:', formData);
    };

    return (
        <div className="form-container" style={{}}>
            <h2>Contact Form</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                </label>

                <label>
                    Phone No:
                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
                </label>

                <label>
                    Email ID:
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                </label>

                <label>
                    Query:
                    <textarea name="query" value={formData.query} onChange={handleChange} required />
                </label>

                <label>
                    Upload File:
                    <input type="file" name="file" onChange={handleChange} />
                </label>

                <button type="submit">Submit</button>
            </form>
        </div>
    );
};
const TimeItem = ({ item }) => {
    return (<div style={{ display: 'flex', marginTop: 10, flexDirection: 'row', justifyContent: 'space-between', width: '70%', alignSelf: 'center', borderWidth: 1, borderStyle: 'solid', paddingLeft: 10, paddingTop: 5, paddingBottom: 6, paddingRight: 10, borderColor: 'black', borderRadius: 4 }}>
        <text>08:00</text>

        <text>Seats Left:100/150</text>
    </div>)
}
export const ScheduleForm = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        query: '',
        file: null,
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: name === 'file' ? files[0] : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your logic to handle form submission here
        console.log('Form data submitted:', formData);

        openModal();
    };
    const [date, setDate] = useState(new Date());
    const data = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    const handleDateChange = (newDate) => {
        setDate(newDate);
        // You can add your custom logic here when the date changes
    }; return (<div className="flex-container" style={{}}>
        <div className="flex-item" style={{ display: 'flex', flex: 1, flexDirection: 'column' }}>
            <div style={{ flexDirection: 'row', display: 'flex', alignItems: 'center' }}>
                <img style={{ height: 36, width: 36, borderRadius: 18, backgroundColor: 'blue' }} />

                <text style={{ paddingLeft: 10 }}>Consultant Name</text>

            </div>
            <div style={{ width: '100%', textAlign: "left", paddingTop: 20 }}>
                <text style={{ paddingLeft: 10, fontSize: 22, opacity: .7 }}>5 min Quick Demo Call !!!</text>
            </div>
            <div style={{ flexDirection: 'row', paddingLeft: 10, paddingTop: 20, display: 'flex', alignItems: 'center' }}>
                <img style={{ height: 14, width: 14, borderRadius: 7, backgroundColor: 'red' }} />
                <text style={{ paddingLeft: 10 }}>5 Minutes</text>
            </div>
            <div style={{ flexDirection: 'row', paddingLeft: 10, display: 'flex', alignItems: 'center' }}>
                <img style={{ height: 14, width: 14, borderRadius: 7, backgroundColor: 'red' }} />
                <text style={{ paddingLeft: 10 }}>150 seats</text>
            </div>
            <div style={{ flexDirection: 'row', paddingLeft: 10, display: 'flex', alignItems: 'center' }}>
                <img style={{ height: 14, width: 14, borderRadius: 7, backgroundColor: 'red' }} />
                <text style={{ paddingLeft: 10 }}>1.00</text>
            </div>
            <text style={{ paddingLeft: 10, fontSize: 22, alignSelf: 'flex-start', marginTop: 20 }}>Awaiting to see you in!!!</text>

            <text style={{ paddingLeft: 10, fontSize: 16, alignSelf: 'flex-start', marginTop: 6, maxWidth: 300, textAlign: 'left' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ullamcorper sagittis enim feugiat facilisis. Donec pharetra feugiat purus, eu dictum ante dignissim id. Maecenas magna diam, commodo semper leo aliquam, fermentum tempor felis. Aenean ullamcorper varius purus et mollis. Vestibulum sit amet vulputate quam. Donec consectetur, tellus at accumsan sagittis, mi dui hendrerit tortor, nec commodo ipsum dui a metus. Aenean id mi a enim tempus convallis. Donec a volutpat nibh, nec eleifend magna. Pellentesque molestie rutrum consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.!</text>
        </div>
        <div className="flex-item" style={{ display: 'flex', flex: 1, flexDirection: 'column' }}>

            <text style={{ fontSize: 20, paddingBottom: 20 }}>Select Date:</text>
            <Calendar
                onChange={handleDateChange}
                value={date}
                tileClassName={({ date, view }) => {
                    // Custom class for individual date tiles
                    if (view === 'month' && date.getDay() === 0) {
                        return 'sunday-tile'; // Apply 'sunday-tile' class to Sundays
                    }
                    else {
                        return 'other-tile'
                    }
                    // You can add more conditions and classes as needed
                    return '';
                }}

                navigationLabel={({ date, view }) => {
                    // Custom label for month and year navigation buttons
                    return view === 'month' ? `${date.toLocaleDateString('default', { month: 'long' })} ${date.getFullYear()}` : '';
                }}
                calendarClassName="custom-calendar" // Custom class for the entire calendar
            />
            <form onSubmit={handleSubmit} style={{ marginTop: 20 }}>
                <div style={{ justifyContent: 'space-between', flexDirection: 'row', display: 'flex', alignItems: 'center', width: '100%' }}>
                    <text>Name:
                    </text>
                    <input style={{ borderWidth: 1, borderColor: '#c7c7c7', width: '50%', borderRadius: 4, borderStyle: 'solid' }} type="text" name="name" value={formData.name} onChange={handleChange} required />
                </div>

                <div style={{ justifyContent: 'space-between', marginTop: 10, flexDirection: 'row', display: 'flex', alignItems: 'center', width: '100%' }}>
                    <text>Phone No:
                    </text>
                    <input style={{ borderWidth: 1, borderColor: '#c7c7c7', width: '50%', borderRadius: 4, borderStyle: 'solid' }} type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
                </div>

                <div style={{ justifyContent: 'space-between', marginTop: 10, flexDirection: 'row', display: 'flex', alignItems: 'center', width: '100%' }}>
                    <text>Email Id:
                    </text>
                    <input style={{ borderWidth: 1, borderColor: '#c7c7c7', width: '50%', borderRadius: 4, borderStyle: 'solid' }} type="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>

                <label style={{ marginTop: 20, textAlign: 'left' }}>
                    Let me Know Your Query:
                    <textarea style={{ borderWidth: 1, width: '100%', marginTop: 10, borderColor: '#c7c7c7', borderRadius: 4, borderStyle: 'solid' }} name="query" value={formData.query} onChange={handleChange} required />
                </label>

                <div style={{ justifyContent: 'space-between', marginTop: 10, flexDirection: 'row', display: 'flex', alignItems: 'center', width: '100%' }}>
                    <text> Upload:</text>
                    <input type="file" name="file" onChange={handleChange} />
                </div>
                <button style={{ marginTop: 20 }} type="submit">Submit</button>
            </form>
            <Modal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                contentLabel="Large Screen Popup"
                className="large-screen-popup"
            >
                <div style={{alignItems:'center',display:'flex',flexDirection:'column'}}>
                    <h2>Thank You For Booking with me !!!</h2>
                    <p>Raj pratap
                        Awaiting to connect with you kindly note the details below
                        .</p>
                        <div>
                            
                        </div>
                        <div style={{flexDirection:'column',display:'flex',alignItems:'flex-start'}}>
                        <div style={{ flexDirection: 'row', display: 'flex', alignItems: 'center' }}>
                <img style={{ height: 26, width: 26, borderRadius: 18, backgroundColor: 'blue' }} />
                <text style={{ paddingLeft: 10 }}>Consultant Name</text>
            </div>
            
            <div style={{ flexDirection: 'row',marginTop:10, paddingLeft: 10, display: 'flex', alignItems: 'center' }}>
                <text style={{ fontSize:20 }}>15 Minute Meeting</text>
            </div>
            
            <div style={{ flexDirection: 'row', paddingLeft: 10,marginTop:5, display: 'flex', alignItems: 'center' }}>
                <img style={{ height: 14, width: 14, borderRadius: 7, backgroundColor: 'red' }} />
                <text style={{ paddingLeft: 10 }}>Monday 22nd Jan, at 09:00 PM</text>
            </div>
            
            <div style={{ flexDirection: 'row', paddingLeft: 10, display: 'flex', alignItems: 'center' }}>
                <img style={{ height: 14, width: 14, borderRadius: 7, backgroundColor: 'red' }} />
                <text style={{ paddingLeft: 10 }}>Unique ID: xxxxxxxx</text>
            </div>
            
            <div style={{ flexDirection: 'row', paddingLeft: 10, display: 'flex', alignItems: 'center' }}>
                <img style={{ height: 14, width: 14, borderRadius: 7, backgroundColor: 'red' }} />
                <text style={{ paddingLeft: 10 }}>Transaction Id:</text>
            </div>
            
            <div style={{ flexDirection: 'row', paddingLeft: 10, display: 'flex', alignItems: 'center' }}>
                <img style={{ height: 14, width: 14, borderRadius: 7, backgroundColor: 'red' }} />
                <text style={{ paddingLeft: 10 }}>150 seats</text>
            </div>
            </div>
                    <button onClick={closeModal} style={{marginTop:20,marginBottom:20}}>Close</button>
                </div>
            </Modal>
        </div>
        <div className="flex-item" style={{ display: 'flex', flex: 1, flexDirection: 'column' }}>
            <text style={{ fontSize: 20, paddingBottom: 20 }}>Select Time</text>

            <ul style={{
                display: 'flex', flexDirection: 'column',
                listStyleType: 'none', paddingLeft: '5%', paddingLeft: '5%'
            }}>
                {data.map((item, index) => (
                    <li key={index}><TimeItem item={item} /></li>
                ))}
            </ul>

        </div>

    </div>)
}

