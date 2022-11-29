import uniqid from 'uniqid';
import BlueCouch from '../assets/blue-couch-goodwood.jpg';
import YellowCouch from '../assets/couch-yellow-goodwood.jpg';
import TurquoiseCouch from '../assets/couch-troquise-blue.jpg';
import LeatherCouch from '../assets/couch-leather-goodwood.jpg';
import BigYellowCouch from '../assets/couch-yellow-long-goodwood.jpg';
import GreyCouch from '../assets/couch-grey-goodwood.jpg';
import LightBlueCouch from '../assets/light-blue-couch-goodwood.jpg';
import BrownCouch from '../assets/couch-brown-goodwood.jpg';

const CollectionItemsData = [
    {
        id: uniqid(),
        name: 'BLUE COUCH',
        src: BlueCouch,
        description: `Bold design, straight forward
                      blue couch is making people comfortable to set around and look good my boy. 
                      You are doing good and I am doing no good and people are making crazy 
                      about you. lets go to my place and gang gang.`,
        alt: 'blue couch with wooden leg',
        price: '₹4000',
    },
    {
        id: uniqid(),
        name: 'YELLOW COUCH',
        src: YellowCouch,
        description: `Bold design, straight forward
                      blue couch is making people comfortable to set around and look good my boy. 
                      You are doing good and I am doing no good and people are making crazy 
                      about you. lets go to my place and gang gang.`,
        alt: 'small yellow couch with wooden leg',
        price: '₹3500',
    },
    {
        id: uniqid(),
        name: 'TURQUOISE COUCH',
        src: TurquoiseCouch,
        description: `Bold design, straight forward
                      blue couch is making people comfortable to set around and look good my boy. 
                      You are doing good and I am doing no good and people are making crazy 
                      about you. lets go to my place and gang gang.`,
        alt: 'turquoise couch with wooden leg',
        price: '₹3000',
    },
    {
        id: uniqid(),
        name: 'LEATHER COUCH',
        src: LeatherCouch,
        description: `Bold design, straight forward
                      blue couch is making people comfortable to set around and look good my boy. 
                      You are doing good and I am doing no good and people are making crazy 
                      about you. lets go to my place and gang gang.`,
        alt: 'big leather couch',
        price: '₹3999',
    },
    {
        id: uniqid(),
        name: 'BIG YELLOW COUCH',
        src: BigYellowCouch,
        description: `Bold design, straight forward
                      blue couch is making people comfortable to set around and look good my boy. 
                      You are doing good and I am doing no good and people are making crazy 
                      about you. lets go to my place and gang gang.`,
        alt: 'big yellow couch',
        price: '₹3999',
    },
    {
        id: uniqid(),
        name: 'GREY COUCH',
        src: GreyCouch,
        description: `Bold design, straight forward
                      blue couch is making people comfortable to set around and look good my boy. 
                      You are doing good and I am doing no good and people are making crazy 
                      about you. lets go to my place and gang gang.`,
        alt: 'grey couch',
        price: '₹3000',
    },
    {
        id: uniqid(),
        name: 'LIGHT BLUE COUCH',
        src: LightBlueCouch,
        description: `Bold design, straight forward
                      blue couch is making people comfortable to set around and look good my boy. 
                      You are doing good and I am doing no good and people are making crazy 
                      about you. lets go to my place and gang gang.`,
        alt: 'light blue couch',
        price: '₹3000',
    },
    {
        id: uniqid(),
        name: 'BROWN COUCH',
        src: BrownCouch,
        description: `Bold design, straight forward
                      blue couch is making people comfortable to set around and look good my boy. 
                      You are doing good and I am doing no good and people are making crazy 
                      about you. lets go to my place and gang gang.`,
        alt: 'brown couch',
        price: '₹4000',
    },
]

function getCollectionData(id) {
    let collectionData = CollectionItemsData.find(collection => collection.id === id);

    if (collectionData === undefined) {
        console.log("Collection data does not exist for ID:" + id);
        return undefined;
    }

    return collectionData;
}

export { CollectionItemsData, getCollectionData };