import React, { useState } from 'react';
import Navbar from './Navbar';

const EnvironmentalAlerts = () => {
    const [alerts] = useState([
        {
            id: 1,
            type: 'Air Quality Alert',
            severity: 'High',
            message: 'Poor air quality detected in your area. AQI levels above 150.',
            date: '2024-03-01'
        },
        {
            id: 2,
            type: 'Temperature Warning',
            severity: 'Medium',
            message: 'Unusually high temperatures expected this week.',
            date: '2024-03-01'
        },
        {
            id: 3,
            type: 'Rainfall Alert',
            severity: 'Low',
            message: 'Light rainfall expected in the next 24 hours.',
            date: '2024-03-01'
        }
    ]);

    return (
        <div>
            <Navbar />
            <div className="alerts-container">
                <div className="alerts-header">
                    <h1>Environmental Alerts</h1>
                    <p>Stay informed about environmental conditions in your area</p>
                </div>
                <div className="alerts-list">
                    {alerts.map(alert => (
                        <div key={alert.id} className={`alert-card ${alert.severity.toLowerCase()}`}>
                            <div className="alert-type">{alert.type}</div>
                            <div className="alert-severity">Severity: {alert.severity}</div>
                            <div className="alert-message">{alert.message}</div>
                            <div className="alert-date">Date: {alert.date}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default EnvironmentalAlerts;