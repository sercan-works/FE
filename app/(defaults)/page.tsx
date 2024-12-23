import ComponentsDashboard from '@/components/charts';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: 'Dashboard',
};

const Dashboard = () => {
    return <div>
        <ComponentsDashboard />
    </div>;
};

export default Dashboard;
