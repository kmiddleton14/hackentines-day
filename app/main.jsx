'use strict'
import React from 'react'
import {Router, Route, IndexRedirect, browserHistory} from 'react-router'
import {render} from 'react-dom'
import {connect, Provider} from 'react-redux'
import Swipeable from './components/Swipeable'
import Footer from './components/Footer'
import store from './store'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

let data = [
    {
        title: 'Grace Hopper',
        text: 'Born December 9',
        image: 'GraceHopper.jpg',
        id: '1'
    },
    {
        title: 'Alan Turing',
        text: 'Born June 23',
        image: 'AlanTuring.jpg',
        id: '2'
    },
    {
        title: 'Dorothy Vaughan',
        text: 'Born September 20',
        image: 'DorothyVaughan.jpg',
        id: '3'
    },
    {
        title: 'Katherine Johnson',
        text: 'Born August 26',
        image: 'KatherineJohnson.jpg',
        id: '4'
    },
    {
        title: 'Steve Jobs',
        text: 'Born February 24',
        image: 'SteveJobs.png',
        id: '5'
    },
    {
        title: 'Mary Jackson',
        text: 'Born April 9',
        image: 'MaryJackson.jpg',
        id: '6'
    },
    {
        title: 'Steve Wozniak',
        text: 'Born August 11',
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
