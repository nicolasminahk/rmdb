import { Box, Grid, Typography } from '@mui/material'
// import { Box } from '@mui/system'
// import axios from 'axios'
// import React, { useEffect } from 'react'
// import { useState } from 'react'
// import { useParams } from 'react-router-dom'
// import user from "../../../server/models/user";
// import { addFav } from '../state/user'
import Cards from '../common/Cards'
import { useSelector } from 'react-redux'

export const Usuario = () => {
    const user = useSelector((state) => state.user)
    console.log(user)
    console.log(user.user.favorites)

    return (
        <>
            <Box display={'flex'} alignItems={'center'} flexDirection={'column'}>
                <Box>
                    <Typography variant="overline" sx={{ fontSize: '20px' }}>
                        Tus Favoritos
                    </Typography>
                </Box>

                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Typography>{user.nombre}</Typography>
                    <Grid container>
                        {user.user.favorites.map((movies, id) => (
                            <Grid
                                item
                                md={4}
                                spacing={{ xs: 2 }}
                                columnSpacing={4}
                                flexDirection={'column'}
                                alignContent={'stretch'}
                                alignItems={'normal'}
                                sx={{ gridTemplateAreas: 'header', backgroundColor: 'whitesmoke' }}
                            >
                                <Cards movies={movies} key={id} />
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Box>
        </>
    )
}
