import React, { useState } from 'react';
import HealthMetric from '../healthMetrics/HealthMetric';
import './clientDashboard.scss';

const ClientDashboard = () => {
    const [userId] = useState('recZNs8pQo2rSsw0T');
    const [checkinList] = useState([]);

    return (
        <div className='client-dashboard'>
            <HealthMetric checkinList={checkinList} userId={userId} />
        </div>
    );
};

export default ClientDashboard;
