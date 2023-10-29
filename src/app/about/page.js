import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function ImgMediaCard() {
    return (
        <main className='flex flex-col min-h-screen items-center gap-6'>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    alt="Foto do CEO"
                    height="140"
                    title='CEO Mateus Pereira'
                    image="https://scontent-gru1-2.xx.fbcdn.net/v/t39.30808-6/395420534_6718622404918825_5581690861007147170_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=8J7X2LMUkmsAX8UhY_V&_nc_ht=scontent-gru1-2.xx&oh=00_AfBpo_CLaEU6TPaur92NUFnvdImg8P1kS_wYQhtHOnWnYA&oe=6541E96C"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Mateus Pereira Rodrigues
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>
        </main>
    );
}