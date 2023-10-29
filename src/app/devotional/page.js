import { Button } from '@nextui-org/react';
import Link from 'next/link';
import React from 'react';


function Devotional() {
  return <>
        <main className='container'>
            <div className='flex min-h-screen flex-col items-center gap-6'>
                <h1>Devocionais</h1>
                <Link href={"/"}>
                    <Button>
                        Voltar para Home
                    </Button>
                </Link>
            </div>
        </main>
  </>;
}

export default Devotional;