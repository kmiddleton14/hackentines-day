'use strict'
import React from 'react'
import {Router, Route, IndexRedirect, browserHistory} from 'react-router'
import {render} from 'react-dom'
import {connect, Provider} from 'react-redux'
import Swipeable from './components/Swipeable'
import Footer from './components/Footer'
import store from './store'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// 'user' is a scorpio

let data = [
    {
        title: 'Grace Hopper',
        text: "Scorpio is dominant by nature, but he/she will have trouble keeping their Sagittarius partner under control. Scorpio loves his/her house while the Sagittarius' suitcase is always ready to be taken to a journey. ",
        image: 'GraceHopper.jpg',
        id: '1'
    },
    {
        title: 'Alan Turing',
        text: "Masterful Scorpio should make a good mate for quiet spoken Cancer. The Scorpio's force and his/her needs to dominate and protect is just what the Cancer is longing for. ",
        image: 'AlanTuring.jpg',
        id: '2'
    },
    {
        title: 'Dorothy Vaughan',
        text: "Their interests are the same in many areas, but they are too different when it refers to the sexual sphere. ",
        image: 'DorothyVaughan.jpg',
        id: '3'
    },
    {
        title: 'Katherine Johnson',
        text: "Their interests are the same in many areas, but they are too different when it refers to the sexual sphere. It is difficult for them to establish good relationships. ",
        image: 'KatherineJohnson.jpg',
        id: '4'
    },
    {
        title: 'Steve Jobs',
        text: "This may be a love at first sight combination. There is a strong mutual attraction between them. Pisces are ready to rely on Scorpio to compensate their indecision, and will agree with the Scorpio's aspiration to dominate. ",
        image: 'SteveJobs.png',
        id: '5'
    },
    {
        title: 'Mary Jackson',
        text: "The sex can turn out to be either stimulating or useless. There are two directions for the events to develop. Both the Aries, and the Scorpio possess a large amount of physical energy. ",
        image: 'MaryJackson.jpg',
        id: '6'
    },
    {
        title: 'Steve Wozniak',
        text: "There will be an instant mutual sexual attraction, equal in force between them. But Leo finds it hard to cope with Scorpio's jealousy and possessiveness. Intense, smoldering Scorpio is on a too short fuse, while Leo is much more buoyant. ",
        image: 'SteveWozniak.jpg',
        id: '7'
    }
];

const App = () => (
  <MuiThemeProvider>
    <div>
    <Swipeable initialCardsData={data} />
    <Footer />
    </div>
  </MuiThemeProvider>
);

render (
    <App />,
  document.getElementById('main')
)
