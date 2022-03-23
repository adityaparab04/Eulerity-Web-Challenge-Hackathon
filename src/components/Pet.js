import React, {useState, useEffect} from "react";
import axios from "axios";
import { Link, useParams } from 'react-router-dom';
import '../App.css';
import {
    Card,
    CardContent,
    CardMedia,
    CardHeader,
    Typography,
    makeStyles
} from '@material-ui/core';

const useStyles = makeStyles({
    card: {
        maxWidth: 450,
        height: 'auto',
        marginTop: 20,
        marginLeft: 'auto',
        marginRight: 'auto',
        borderRadius: 5,
        border: '1px solid',
        boxShadow: '0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)',
    },
    titleHead: {
        borderBottom: '1px solid #ed1d24',
    },
    grid: {
        flexWrap: 'wrap',
        flexGrow: 1,
        flexDirection: 'row',
    },
    media: {
        height: '100%',
        width: '100%'
    }
});

const Pet = () => {
    
    const [ petData, setPetData ] = useState(undefined);
    const [ loading, setLoading ] = useState(true);
    const classes = useStyles();
    const { title } = useParams();

    useEffect(() => {
        const fetchData = async function fetchData(){
            try{
                let { data } = await axios.get('http://eulerity-hackathon.appspot.com/pets');
                data = data.filter((val) => {
                    if(val.title.toLowerCase().includes(title.toLowerCase())){
                        return val;
                    }
                });
                console.log(data[0]);
                setPetData(data[0]);
                setLoading(false);
            }catch(e){
                console.log(e);
            }
        }; fetchData();
    },[title]);

    if(loading){
        return(
            <h2>Loading...</h2>
        )
    }else{
        return(
            <Card className={classes.card} variant='outlined'>
                <CardHeader className={classes.titleHead} title={petData.title} />
                <CardMedia 
                            className={classes.media}
                            component='img'
                            image={
                                petData.url
                            }
                            title='pet image'
                />
                <CardContent>
                <Typography
                className={classes.titleHead}
                gutterBottom
                variant='h6'
                component='h3'
                >
                </Typography>
                <Typography variant='body2' color='textSecondary' component='p'>
                    {petData.description}
                </Typography>
                <br/>
                <Typography>
                    <Link to='/pets' className="petLink">Back to all Pets...</Link>
                </Typography>
                </CardContent>
            </Card>
        )
    }
}

export default Pet;