import './App.css';
import logoRuda from './img/logoRuda.png';
import cook from './img/cook.png'
import fitness from './img/fittnes.jpg';
import travel from './img/trabel.jpg';
import Quoty from './img/quotyProject.jpg';
import toDoList from './img/todolistProject.jpg';
import geoQuizz from './img/geoquizzProject.jpg';
import pokemonProject from './img/pokemonProject.jpg';
import {Grid, Paper, Typography, Button,Box} from "@mui/material";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import { styled } from '@mui/material/styles';




function App() {



  
    const Img = styled('img')({
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
      });
      

    return (
        <Grid className='main' container spacing={1} rowSpacing={4}>
            <Grid item xs={2}/>
            <Grid item xs={2}>
                <Grid container spacing={4} rowSpacing={4}>
                    <Grid item xs={12}>
                        <Paper className='inner-padding-card' elevation={1}>
                            <div className="img-container">
                                <img src='https://avatars.githubusercontent.com/u/114024195?v=4'/>
                            </div>
                            <Typography gutterBottom variant="h5" component="div">
                                Lis Gimena Roa
                            </Typography>
                            <Typography variant="subtitle1" color="text.secondary">
                                <EmailIcon/> lisgimenaroa@gmail.com
                            </Typography>
                            <Typography variant="subtitle1" color="text.secondary">
                                <LocalPhoneIcon/> +54 3625 143 030
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Self-motivate developer, who is willing to learn and create outstanding UI applications.
                            </Typography>
                        </Paper>
                    </Grid>

                    <Grid item xs={12}>
                        <Paper className='inner-padding-card' elevation={1}>
                              <Typography variant="h6" color="text.secondary">
                                Experience
                              </Typography>
                              <div className='img-logo'> 
                                <img src = {logoRuda} />
                                      <p className='ruda'> <b>RUDA</b><br></br> 2020-2022</p>
                                      <p> I worked as a baker in a bakery called 'Ruda'. Making organic, vegan and sourdough products such as cakes, cookies, puddings and bread.</p>
                              </div>
                        </Paper>
                    </Grid>

                    <Grid item xs={12}>
                        <Paper className='inner-padding-card' elevation={1}>
                            <Typography variant="h6" color="text.secondary">
                                <b>Hobbies</b>
                            </Typography>
                            <div className='img-hobbies-container'>
                                <img src={cook}/>
                                    <Typography><b>Cooking</b></Typography>
                                    <p className='description'>I really enjoy cooking.</p>
                                 <img src={fitness}/>
                                    <Typography><b>Exercise</b></Typography>
                                    <p className='description'>Go to the gym or go for a run.</p>
                                <img src={travel}/>
                                    <Typography><b>Travel</b></Typography>
                                    <p className='description'>Know other countries, cultures, landscapes.</p>
                            </div>

                        </Paper>
                    </Grid>
                </Grid>

            </Grid>
            <Grid item xs={6}>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                                 <Paper className='inner-padding-card' elevation={1}>
                                    <Typography variant="h5" color="text.secondary">
                                        FRONT-END
                                    </Typography>
                                </Paper>
                            
                    
                    </Grid>

                    <Grid item xs={6}>
                        <Paper className='inner-padding-card' elevation={1}>
                            <Typography variant="h5" color="text.secondary">
                                DESING
                            </Typography>
                        </Paper>
                    </Grid>

                    <Grid item xs={12}>
                        <Paper elevation={4}>
                            <Typography variant='h5' padding={2}> Projects</Typography>
                        </Paper>
                    </Grid>
                <Grid item xs={12}>
                  <Paper sx={{ p: 2, margin: 'auto', maxWidth: 650, flexGrow: 1,}}>
                    <Grid container spacing={2}>
                       <Grid item>
                         <div className='img-hobbies-container'>
                            <Img alt="complex" src= {pokemonProject} />
                          </div>
                        </Grid>
                      <Grid item xs={12} sm container>
                        <Grid item xs container direction="column" spacing={2}>
                            <Grid item xs>
                                 <Typography variant="h8" component="div">
                                     React, Javascript, CSS3,HTML
                                </Typography>
                                <Typography variant="h5">
                                    Pokemon Guesser
                               </Typography>
                                  <Typography variant="h7">
                                     A game where you have to guess who is the hidden pokemon.
                                  </Typography>
                               </Grid>
                               <div className='buttonsContainer'>
                                <Button variant="contained" size='large'href='https://pokeguesser.netlify.app/'>Demo</Button> 
                                <Button variant="outlined" size= 'large' href='https://github.com/lisroa/Pokemon-Game'> Code</Button>
                                </div>
                           </Grid>
          
                        </Grid>
                    </Grid>
                  </Paper>
              
                </Grid>      
                <Grid item xs={12}>
                  <Paper sx={{ p: 2, margin: 'auto', maxWidth: 650, flexGrow: 1,}}>
                    <Grid container spacing={2}>
                       <Grid item>
                         <div className='img-hobbies-container'>
                            <Img alt="complex" src= {Quoty} />
                          </div>
                        </Grid>
                      <Grid item xs={12} sm container>
                        <Grid item xs container direction="column" spacing={2}>
                            <Grid item xs>
                                 <Typography variant="h8" component="div">
                                     React, Javascript, CSS3,HTML
                                </Typography>
                                <Typography variant="h5">
                                    Quoty
                               </Typography>
                                  <Typography variant="h7">
                                  Quoty is a web that displays a random quote every time you open it, and if you click on it's author, it will show more quotes of the same.
                                  </Typography>
                               </Grid>
                               <div className='buttonsContainer'>
                                <Button variant="contained" size='large' href='https://quotyapp.netlify.app/'>Demo</Button> 
                                <Button variant="outlined" size= 'large' href='https://github.com/lisroa/Quoty'> Code</Button>
                                </div>
                           </Grid>
          
                        </Grid>
                    </Grid>
                  </Paper>
              
                </Grid>      
                <Grid item xs={12}>
                  <Paper sx={{ p: 2, margin: 'auto', maxWidth: 650, flexGrow: 1,}}>
                    <Grid container spacing={2}>
                       <Grid item>
                         <div className='img-hobbies-container'>
                            <Img alt="complex" src= {geoQuizz} />
                          </div>
                        </Grid>
                      <Grid item xs={12} sm container>
                        <Grid item xs container direction="column" spacing={2}>
                            <Grid item xs>
                                 <Typography variant="h8" component="div">
                                     React, Javascript, CSS3,HTML
                                </Typography>
                                <Typography variant="h5">
                                   Geo-Quizz
                               </Typography>
                                  <Typography variant="h7">
                                  Ask you random questions about geography and then shows your score.
                                  </Typography>
                               </Grid>
                               <div className='buttonsContainer'>
                                <Button variant="contained" size='large' href='https://geoquizz.netlify.app/'>Demo</Button> 
                                <Button variant="outlined" size= 'large' href='https://github.com/lisroa/Geo-quiz'> Code</Button>
                                </div>
                           </Grid>
          
                        </Grid>
                    </Grid>
                  </Paper>
              
                </Grid>      
                <Grid item xs={12}>
                  <Paper sx={{ p: 2, margin: 'auto', maxWidth: 650, flexGrow: 1,}}>
                    <Grid container spacing={2}>
                       <Grid item>
                         <div className='img-hobbies-container'>
                            <Img alt="complex" src= {toDoList} />
                          </div>
                        </Grid>
                      <Grid item xs={12} sm container>
                        <Grid item xs container direction="column" spacing={2}>
                            <Grid item xs>
                                 <Typography variant="h8" component="div">
                                     React, Javascript, CSS3,HTML
                                </Typography>
                                <Typography variant="h5">
                                    To-Do-List
                               </Typography>
                                  <Typography variant="h7">
                                  A web application that allows you to add your pending tasks of the day, complete them and delete them.
                                  </Typography>
                               </Grid>
                               <div className='buttonsContainer'>
                                <Button variant="contained" size='large' href='https://seemytasks.netlify.app/'>Demo</Button> 
                                <Button variant="outlined" size= 'large' href='https://github.com/lisroa/To-Do-List'> Code</Button>
                                </div>
                           </Grid>
          
                        </Grid>
                    </Grid>
                  </Paper>
              
                </Grid>      



                </Grid>
                
                
          </Grid>
            
        

          
        </Grid>

        
    );

}

export default App;










