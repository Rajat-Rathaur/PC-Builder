import React from 'react';
import img1 from '../Images/img1.jpg';
import img2 from '../Images/img2.jpg';
import img3 from '../Images/img3.jpg';
import img4 from '../Images/img4.jpg';
import img5 from '../Images/img5.jpg';
import img6 from '../Images/img6.jpg';
import img7 from '../Images/img7.jpg';
import img8 from '../Images/img8.jpg';
import img9 from '../Images/img9.jpg';
import img10 from '../Images/img10.jpg';
import img11 from '../Images/img11.jpg';
import img12 from '../Images/img1.jpg';
import img13 from '../Images/img13.jpg';
import img14 from '../Images/img14.jpg';
import img15 from '../Images/img15.jpg';
import Carousel from "nuka-carousel";
import './home.css'
import { Link } from 'react-router-dom';
import { Card, CardContent, CardMedia, Typography, Box, Grid,Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import Navbar from '../components/Navbar';
import NewNavBar from '../components/NewNavBar';

const StyledCard = styled(Card)(({ theme }) => ({
  height: '40vh',  // Convert 400px to 40vh
  transition: 'all 0.3s',
  '&:hover': {
    transform: 'scale(1.05)'
  },
  [theme.breakpoints.down('xs')]: {
    width: '100vw',   // Mobile view: take up the full width of the viewport
  },
  [theme.breakpoints.up('sm')]: {
    width: '80vw',    // Tablet view: take up 80% of the viewport width
  },
  [theme.breakpoints.up('md')]: {
    width: '70vw',    // Desktop view: take up 70% of the viewport width
  },
}));

const mediaStyles = {
  height: '50vh',  // Convert 500px to 50vh
  fontFamily: 'Poppins',
  fontHeight: '1.3vw',  // Convert 15px to 1.3vw
};

const cardData = [
  {
    title: "Nimble ",
    description: " Whether you're handling routine assignments, making quick edits, or indulging in occasional gaming sessions, this device strikes the perfect balance ensuring a smooth and enjoyable computing experience.",
    image: img10,
    headcolor: '#9bfde5',
    bgcolor: '#027e5f'
  },
  {
    title: "Edge",
    description: "Tailored for tasks ranging from mild to heavy editing and gaming demands, this PC is purpose-built to meet the demands of users who require robust capabilities. It's the perfect solution for those who value both power and precision.",
    image: img4,
    headcolor: '#fda081',
    bgcolor: '#b02e03'
  },
  {
    title: "Titan",
    description: "Crafted to effortlessly tackle any editing project or game with unparalleled performance, this device is tailor-made for users who demand nothing short of the absolute zenith in PC capabilities.",
    image: img13,
    headcolor: '#e01f49',
    bgcolor: ' #700f24'
  }
];

const GuideSection = () => {
  return (
    <div className='guide-Box'>
      <Box padding={[4, 8]} color="white" bgcolor='rgba(64, 0, 128,0.7)' style={{}}>
        <Typography className='guide-box' variant="h4" gutterBottom align="center" style={{ fontFamily: ['Montserrat', 'Poppins'], fontWeight: 'bold', fontSize: '2vw' }}>
          How to Build Your PC
        </Typography>
        <Typography variant="h6" gutterBottom style={{ fontFamily: ['Montserrat', 'Poppins'], fontWeight: 'bold', fontSize: '2vw' }}>
          1. Preparations
        </Typography>
        <Typography variant="body1" paragraph style={{ fontFamily: ['Montserrat', 'Poppins'], fontSize: '1vw' }}>
          Before starting, ensure you have all the necessary components: motherboard, processor (CPU), RAM, graphics card (GPU), power supply unit (PSU), storage (HDD/SSD), and any additional components like coolers or Wi-Fi cards.
        </Typography>
        <Typography variant="h6" gutterBottom style={{ fontFamily: ['Montserrat', 'Poppins'], fontSize: '2vw', fontWeight: 'bold' }}>
          2. Build the Motherboard
        </Typography>
        <Typography variant="body1" paragraph style={{ fontFamily: ['Montserrat', 'Poppins'], fontSize: '1vw' }}>
          Start by installing the CPU, RAM, and GPU onto the motherboard. Also, attach any coolers or fans you have for the CPU.
        </Typography>
        <Typography variant="h6" gutterBottom style={{ fontFamily: ['Montserrat', 'Poppins'], fontSize: '2vw', fontWeight: 'bold' }}>
          3. Prep the Case
        </Typography>
        <Typography variant="body1" paragraph style={{ fontFamily: ['Montserrat', 'Poppins'], fontSize: '1vw' }}>
          Lay down your case and start mounting the power supply. Ensure that the location of your cables makes sense for where the motherboard will sit.
        </Typography>
        <Typography variant="h6" gutterBottom style={{ fontFamily: ['Montserrat', 'Poppins'], fontSize: '2vw', fontWeight: 'bold' }}>
          4. Install the Motherboard
        </Typography>
        <Typography variant="body1" paragraph style={{ fontFamily: ['Montserrat', 'Poppins'], fontSize: '1vw' }}>
          Carefully place the motherboard into the case and screw it in place. Make sure it's aligned correctly with the I/O ports.
        </Typography>
        <Typography variant="h6" gutterBottom style={{ fontFamily: ['Montserrat', 'Poppins'], fontSize: '2vw', fontWeight: 'bold' }}>
          5. Connect Components
        </Typography>
        <Typography variant="body1" paragraph style={{ fontFamily: ['Montserrat', 'Poppins'], fontSize: '1vw' }}>
          Begin connecting your components to the power supply and the motherboard. This includes hard drives, SSDs, and any optical drives.
        </Typography>
        <Typography variant="h6" gutterBottom style={{ fontFamily: ['Montserrat', 'Poppins'], fontSize: '2vw', fontWeight: 'bold' }}>
          6. Power Up
        </Typography>
        <Typography variant="body1" paragraph style={{ fontFamily: ['Montserrat', 'Poppins'], fontSize: '1vw' }}>
          Once everything is connected, power up your machine. If everything is set up correctly, you should see the boot screen. Install your preferred operating system, and you're good to go!
        </Typography>
      </Box>
    </div>
  )
}

const CustomPrevButton = ({ previousSlide }) => (
  <div style={{ position: 'absolute', top: '50%', left: '15px' }}>
    <Button onClick={previousSlide} variant="contained" style={{backgroundColor:'rgba(0,0,0,0.7)',fontSize:'1vw',width:'50px',paddingLeft:'5px',height:'70px', fontFamily:'Poppins' }}>
    {'<'}
    </Button>
  </div>
);

const CustomNextButton = ({ nextSlide }) => (
  <div style={{ position: 'absolute', top: '50%', right: '15px', transform: 'translateY(-50%)',}}>
    <Button onClick={nextSlide} variant="contained" style={{backgroundColor:'rgba(0,0,0,0.7)',fontSize:'1vw',width:'50px',paddingLeft:'5px',height:'70px', fontFamily:'Poppins' }}>
    {'>'}
    </Button>
  </div>
);

const Home = () => {
  const classes = StyledCard;

  return (
    <>
      <NewNavBar />
      <Box bgcolor="black" color="white" style={{ minHeight: '100vh' }}>
        <div>
          <Carousel
            autoplay={true}
            autoplayInterval={10000}
            wrapAround={true}
            style={{ maxHeight: '140vh' }} // Convert 1400px to 140vh
            renderCenterLeftControls={({ previousSlide }) => <CustomPrevButton previousSlide={previousSlide} />}
            renderCenterRightControls={({ nextSlide }) => <CustomNextButton nextSlide={nextSlide} />}
          >
            <div className="slide-content">
              <img src={img12} alt="Slide 1" className="carousel-image" />
            </div>

            {/* Repeat this structure for each image */}
            <div className="slide-content">
              <img src={img2} alt="Slide 2" className="carousel-image" />
            </div>

            <div className="slide-content">
              <img src={img15} alt="Slide 3" className="carousel-image" />
            </div>

            <div className="slide-content">
              <img src={img11} alt="Slide 4" className="carousel-image" />
            </div>

            <div className="slide-content">
              <img src={img9} alt="Slide 5" className="carousel-image" />
            </div>
          </Carousel>
          <div className="overlay-text">
                        <Typography style={{ fontSize: '3vw', fontFamily: ['Montserrat','Poppins'], fontWeight: 'bold' }}>
                          Welcome to <br />
                          <Typography style={{ fontSize: '3vw', fontFamily: ['Montserrat','Poppins'], fontWeight: 'bold', color: '#bb84ec' }}>VirtuTech</Typography>   PC's
                        </Typography>
                        <Typography style={{ fontSize: '2vw', fontFamily: ['Montserrat','Poppins'] }}>
                          Allow Us to be your gateway <br />
                          Into PC Building and Buying
                        </Typography>
                        <Link to="/customizePC">
                          <button className="left-btn" style={{ backgroundColor: '#bb84ec', marginTop: '3vw' }}>Start Building</button>
                        </Link>
                        <Link to="/prebuiltPC">
                          <button className="right-btn">Pre-Builts</button>
                        </Link>
            </div>

          {/* Your Carousel code here... */}

          {/* Random Text Section */}
          <div style={{ padding: '20px', backgroundColor: '#373538', fontFamily: 'Poppins' }}>
            <Typography variant="h5" gutterBottom style={{ fontFamily: ['Montserrat','Poppins'], fontSize: '2vh' }}>
              Look at previous customer build to help guide yourself through this world which may seem complicated, the builds have been categorized as per performance and goals
            </Typography>
            <Typography variant="body1" style={{ fontFamily: ['Montserrat','Poppins'], fontSize: '2vh', fontWeight: 'bold' }}>
              We have 3 broad categories for our Builds
              <br />
              <Typography style={{ fontFamily: ['Montserrat','Poppins'], fontSize: '3vh', fontWeight: 'bold' }}>
                Pick as per your need
              </Typography>
            </Typography>
          </div>


        {/* Cards Section */}
            <Grid container spacing={4} style={{ padding: '2vw', backgroundColor: '#373538', minHeight: '30vh' }}>
              {cardData.map((card, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <StyledCard style={{ backgroundColor: card.bgcolor, color: 'white', height: '55vh', width: '30vw', marginLeft: '0vw' }}>
                    <CardMedia
                      style={{ height: '30vh', fontFamily: 'Poppins', fontSize: '1.3vw' }}  // Adjusted height and font size
                      image={card.image}
                      title={`Image for ${card.title}`}
                    />
                    <CardContent style={{ fontFamily: 'Poppins', color: 'white' }}>
                      <Typography gutterBottom variant="h6" component="div" style={{ fontFamily: 'Poppins', color: card.headcolor, fontSize: '2vw' }}>
                        {card.title}
                      </Typography>
                      <Typography variant="body2" color="white" component="p" style={{ fontFamily: 'Poppins', fontSize: '1vw' }}>
                        {card.description}
                      </Typography>
                    </CardContent>
                  </StyledCard>
                </Grid>
              ))}
            </Grid>

          <GuideSection />
        </div>
      </Box>
    </>
  );
};

export default Home;
