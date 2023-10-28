import React from 'react';
import Link from "next/link";
import { Button } from '@nextui-org/react';

function Dashboard() {
    return (
        <div className='flex min-h-screen flex-col items-center gap-6'>
            <h1>Dashboard</h1>
            <div>
                
                <Link href={"/"}>
                    <Button>Volte para Home</Button>
                </Link>
            </div>
        </div>

    );
}

export default Dashboard;