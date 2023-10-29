import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

export default function ImageAvatars() {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar alt="Remy Sharp" src="https://scontent-gru1-2.xx.fbcdn.net/v/t39.30808-6/395420534_6718622404918825_5581690861007147170_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=8J7X2LMUkmsAX8UhY_V&_nc_ht=scontent-gru1-2.xx&oh=00_AfBpo_CLaEU6TPaur92NUFnvdImg8P1kS_wYQhtHOnWnYA&oe=6541E96C" />
      <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
      <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
    </Stack>
  );
}