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
        text: "Scorpio is dominant by nature, but he/she will have trouble keeping their Sagittarius partner under control. Scorpio loves his/her house while the Sagittarius' suitcase is always ready to be taken to a journey. The freedom is necessary for Sagittarius . Sagittarlus's far-roaming interests constantly make Scorpio jealous. Romantically, this is a volatile combination. Sagittarius is playful about sex and finds Scorpio's intense, dominating passions too much to cope with. Soon Sagittarius's inclination is to fly. Their mutual attraction is explained by sex and can not last for a long time. A one night's affair - yes; a marriage -NO.",
        image: 'GraceHopper.jpg',
        id: '1'
    },
    {
        title: 'Alan Turing',
        text: "Masterful Scorpio should make a good mate for quiet spoken Cancer. The Scorpio's force and his/her needs to dominate and protect is just what the Cancer is longing for. Cancer's possessiveness will actually make Scorpio feel secure. Cancer admires Scorpio's strength while Scorpio finds a haven in Cancer's emotional commitment. The Cancer is more sensitive about sexual relations, while the Scorpio is more passionate. The Cancer's desire to please helps avoid many problems in this area. The the Scorpio's furious jealousy does not arise, since the Cancer is devoted to the partner. The love will be growing, and this passionate connection can develop in a perfect marriage."
        image: 'AlanTuring.jpg',
        id: '2'
    },
    {
        title: 'Dorothy Vaughan',
        text: "Their interests are the same in many areas, but they are too different when it refers to the sexual sphere. It is difficult for them to establish good relationships. Virgo can become captious. Restrained Virgo has trouble keeping up with highly demonstrative Scorpio and doesn't understand what all the fuss and bother is about. Scorpio can fly into jealous rages for no reason, even if Virgo has proved to be a faithful mate, and the general Scorpio views are hard for Virgo to take or agree with for Virgo always sees the other side of the situation and the other persons point of view. In other words Scorpio can be roughly frank. The spiritual affinity is possible for some time, and then Scorpio will probably begin to search for new sexual partners. Friendship may be the best idea here.",
        image: 'DorothyVaughan.jpg',
        id: '3'
    },
    {
        title: 'Katherine Johnson',
        text: "Their interests are the same in many areas, but they are too different when it refers to the sexual sphere. It is difficult for them to establish good relationships. Virgo can become captious. Restrained Virgo has trouble keeping up with highly demonstrative Scorpio and doesn't understand what all the fuss and bother is about. Scorpio can fly into jealous rages for no reason, even if Virgo has proved to be a faithful mate, and the general Scorpio views are hard for Virgo to take or agree with for Virgo always sees the other side of the situation and the other persons point of view. In other words Scorpio can be roughly frank. The spiritual affinity is possible for some time, and then Scorpio will probably begin to search for new sexual partners. Friendship may be the best idea here.",
        image: 'KatherineJohnson.jpg',
        id: '4'
    },
    {
        title: 'Steve Jobs',
        text: "This may be a love at first sight combination. There is a strong mutual attraction between them. Pisces are ready to rely on Scorpio to compensate their indecision, and will agree with the Scorpio's aspiration to dominate. Scorplo's jealousy and possessiveness won't bother Pisces-in fact, it makes Pisces feel loved. Pisces's dependency is just what Scorpio is looking for. These two share a special communion, much of it on a sensual, unspoken level. Both have intense feelings, are loyal, intuitive, interested in the mystical and the unusual. Their sexual life should be delightful. The Pisces are inventive. The Scorpio is persevering. Both - affair and marriage are successful.",
        image: 'SteveJobs.png',
        id: '5'
    },
    {
        title: 'Mary Jackson',
        text: "The sex can turn out to be either stimulating or useless. There are two directions for the events to develop. Both the Aries, and the Scorpio possess a large amount of physical energy. They are both inclined to act. On the other hand, they are both independent and do not like being controlled. Long-term disagreements may destroy their phenomenal ability to share passion of and with each other. Usually this is an unstable partnership with a low ignition point.",
        image: 'MaryJackson.jpg',
        id: '6'
    },
    {
        title: 'Steve Wozniak',
        text: "There will be an instant mutual sexual attraction, equal in force between them. But Leo finds it hard to cope with Scorpio's jealousy and possessiveness. Intense, smoldering Scorpio is on a too short fuse, while Leo is much more buoyant. These two very strong willed individuals generally create some rather stormy moments. Generally in such relationships there will be no 'romanticism', but these two are capable of sensual loving and good, long partnership.",
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
