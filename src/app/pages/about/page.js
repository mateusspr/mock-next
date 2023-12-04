import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Link from 'next/link';
import YouTubeIcon from '@mui/icons-material/YouTube';

export default function About() {
    return (
        <main className='flex container flex-col min-h-screen items-center gap-10'>
            <Card sx={{ maxWidth: 345,  }}>
                <CardMedia
                    component="img"
                    alt="Foto do CEO"
                    height="140"
                    title='CEO Mateus Pereira'
                    image="https://i.ibb.co/SQdt8D9/Eu.jpg"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Mateus Pereira Rodrigues
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Desenvolverdo Fullstack há mais de 2 anos e meio, apaixonado por tecnologia e conhecimento em geral. Adoro ensinar e passar meus conhecimentos já adquiridos. Veja mais no meu canal! <Link href={"https://www.youtube.com/channel/UCNAiwsbuvi7kQ2eYoXtzPRA"} target='_blank'><strong>Click aqui!</strong></Link> Ou acesse mais informações, nos ícone logo abaixo. 
                    </Typography>
                </CardContent>
                <CardActions className='flex  justify-center  '>
                    <Link href={"https://www.linkedin.com/in/mateuspereira-developer/"} target='_blank'>
                    <LinkedInIcon fontSize='medium'/>
                    </Link>
                    <Link href={"https://www.youtube.com/channel/UCNAiwsbuvi7kQ2eYoXtzPRA"} target='_blank' >
                        <YouTubeIcon fontSize='medium' />
                    </Link>
                </CardActions>
            </Card>
        </main>
    );
}