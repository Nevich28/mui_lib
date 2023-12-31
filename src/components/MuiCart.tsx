import { Box, Card, CardContent, Typography, CardActions, Button, CardMedia } from '@mui/material';

export const MuiCart = () => {
    return (
        <Box width="300px">
            <Card>
                <CardMedia
                    component="img"
                    height="140"
                    image="https://source.unsplash.com/random"
                    alt="unsplash img"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        React
                    </Typography>
                    <Typography gutterBottom variant="body2" color="text.secondary" component="div">
                        React is a JavaScript library for building user interface.
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn more</Button>
                </CardActions>
            </Card>
        </Box>
    );
};
