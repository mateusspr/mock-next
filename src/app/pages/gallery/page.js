import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

function srcset(image, size, rows = 1, cols = 1) {
    return {
        src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
        srcSet: `${image}?w=${size * cols}&h=${size * rows
            }&fit=crop&auto=format&dpr=2 2x`,
    };
}

export default function Gallery() {
    return (

        <div className='flex flex-col min-h-screen items-center gap-6'>
            <h1>Meus melhores momentos</h1>
            <ImageList
                sx={{ width: 500, height: 450 }}
                variant="quilted"
                cols={4}
                rowHeight={121}
            >
                {itemData.map((item) => (
                    <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
                        <img
                            {...srcset(item.img, 121, item.rows, item.cols)}
                            alt={item.title}
                            loading="lazy"
                        />
                    </ImageListItem>
                ))}
            </ImageList>
            <div>
                <p>Momentos com minha melhor companhia, e um pouco de mim mesmo. São dias de muita alegria e risos!</p>
            </div>
        </div>
    );
}

const itemData = [
    {
        img: 'https://i.ibb.co/ww08rLz/heryca-png-1686344239-3121604193874144898-59290730017.jpg',
        title: 'Mateus e sua esposa',
        rows: 2,
        cols: 2,
    },
    {
        img: 'https://i.ibb.co/N98hv8B/pink.jpg',
        title: 'Ensaio fotográfico',
        rows: 2,
        cols: 2,
    },
    {
        img: 'https://i.ibb.co/MkJDhbB/mateuss-prodrigues-1670295032-2986973678806387571-1112144729.jpg',
        title: 'Nós em gramado',
        cols: 2,
        rows: 5
    },
    {
        img: 'https://i.ibb.co/s6TGP13/Casamento.jpg',
        title: 'Dia do casamento',
        rows: 2,
        cols: 2,
    },
    {
        img: 'https://i.ibb.co/XSrJQ8z/nevou.jpg',
        title: 'Cabelo platinado',
        rows: 3,
        cols: 2,
    },
];