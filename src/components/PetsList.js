import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import '../App.css';
import SearchPets from './SearchPets';
import {
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Grid,
    Typography,
    makeStyles
} from '@material-ui/core';

const useStyles = makeStyles({
    card: {
        maxWidth: 'auto',
        height: 'auto',
        marginLeft: 'auto',
        marginRight: 'auto',
        borderRadius: 5,
        border: '1px solid',
        boxShadow: '0 19px 38px rgba(0,0,0,0.30)',
        '&:hover': {
            transform: "scale3d(1.04, 1.04, 1)",
            boxShadow: '0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);',
        }
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

const PetsList = () => {

    const [loading, setLoading] = useState(true);
    const [searchData, setSearchData] = useState(undefined);
    const [petsData, setPetsData] = useState(undefined);
    const [searchTerm, setSearchTerm] = useState('');
    const classes = useStyles();
    let card = null;

    useEffect(() => {
        const fetchData = async function fetchData(){
            try{
                const { data } = await axios.get('http://eulerity-hackathon.appspot.com/pets');
                console.log(data);
                setPetsData(data);
                setLoading(false);
            }catch(e){
                console.log(e);
            }
        }; fetchData();
    },[]);

    useEffect(() => {
        const fetchData = async function fetchData(){
            try{
                const { data } = await axios.get('http://eulerity-hackathon.appspot.com/pets');
                setSearchData(data.filter((val) => {
                    if(val.title.toLowerCase().includes(searchTerm.toLowerCase()) || val.description.toLowerCase().includes(searchTerm.toLowerCase())){
                        return val;
                    }
                    else  return undefined;
                }));
                console.log(searchData);
                setLoading(false);
            }catch(e){
                console.log(e);
            }
        }
        if (searchTerm) {
            console.log('searchTerm is set');
            fetchData();
        }
    },[searchTerm]);

    const searchValue = async (value) => {
        setSearchTerm(value);
    };

    const buildCard = (pet) => {
        return(
            <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={pet.title}>
                <Card className={classes.card} variant='outlined'>
                    <CardActionArea>
                    <Link to={`/pets/${pet.title}`}>
                        <CardMedia 
                            className={classes.media}
                            component='img'
                            image={
                                pet.url
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
                            {pet.title}
                            </Typography>
                            <Typography variant='body2' color='textSecondary' component='p'>
                                {pet.description}
                            </Typography>
                        </CardContent>
                        </Link>
                    </CardActionArea>
                </Card>
            </Grid>
        )
    }

    if(searchTerm){
            card = searchData && searchData.map((pet) => {
                return buildCard(pet);
            });
    }else{
        card = petsData && petsData.map((pet) => {
            return buildCard(pet);
        });
    }

    if(loading){
        return(
            <div>
                <h2>Loading...</h2>
            </div>
        )
    }else{
        return(
            <div className='petsContainer'>
                <h1>Pet Lists Page</h1>
                <SearchPets searchValue={searchValue} />
                <br/>
                <br/>
                <div className='cardContainer'>
                    <Grid container className={classes.grid} spacing={5}>
                    {card}
                    </Grid>
                </div>
            </div>
        )
    }
}

export default PetsList;