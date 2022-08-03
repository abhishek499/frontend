
const functionality = {
    handleOpenNavMenu: (event, setState) => {
        setState(event.currentTarget);
    },
    handleCloseNavMenu: (setState) => {
        setState(null);
    },
    handlePopoverOpen: (event, setState) => {
        setState(event.target);
    },
    handlePopoverClose: (setState) => {
        setState(null);
    },
    Home: [
        {
            id: 0,
            name: 'Experience Hinduism',
            option: [{
                id: 0,
                option: 'Banaras'
            }, {
                id: 1,
                option: 'Prayag Raj'
            }, {
                id: 2,
                option: 'Ayodhya'
            }, {
                id: 3,
                option: 'Chitrakoat'
            }, {
                id: 4,
                option: 'Namish'
            }, {
                id: 5,
                option: 'Boadhgaya'
            },]
        }, {
            id: 1,
            name: 'Steps of Lord RAMA',
            option: [{
                id: 0,
                option: 'Banaras'
            }, {
                id: 1,
                option: 'Prayag Raj'
            }, {
                id: 2,
                option: 'Ayodhya'
            }, {
                id: 3,
                option: 'Chitrakoat'
            }
            ]
        }, {
            id: 2,
            name: 'Kashi Darshan',
            option: [{
                id: 0,
                option: 'Ganga Arti'
            }, {
                id: 1,
                option: 'Subeh-E-Banaras'
            }, {
                id: 2,
                option: 'Temple Tour'
            }, {
                id: 3,
                option: 'Baanfivs'
            }, {
                id: 4,
                option: 'Tent City'
            }
            ]
        }, {
            id: 3,
            name: 'Pind dan',
            option: [{
                id: 0,
                option: 'Varanasi'
            }, {
                id: 1,
                option: 'Prayagya raj'
            }, {
                id: 3,
                option: 'Gaya'
            }
            ]
        }, {
            id: 4,
            name: 'Honeymoon',
            option: [{
                id: 0,
                option: 'Nanital'
            }, {
                id: 1,
                option: 'Srinagar'
            }, {
                id: 2,
                option: 'North'
            }, {
                id: 3,
                option: 'Baanfivs'
            }, {
                id: 4,
                option: 'Tent City'
            }
            ]
        },
        {
            id: 5,
            name: 'Cab',
            option: [{
                id: 0,
                option: 'Nanital'
            }, {
                id: 1,
                option: 'Srinagar'
            }, {
                id: 2,
                option: 'North'
            }, {
                id: 3,
                option: 'Baanfivs'
            }, {
                id: 4,
                option: 'Tent City'
            }
            ]
        },
        {
            id: 6,
            name: 'Flight',
            option: [{
                id: 0,
                option: 'Nanital'
            }, {
                id: 1,
                option: 'Srinagar'
            }, {
                id: 2,
                option: 'North'
            }, {
                id: 3,
                option: 'Baanfivs'
            }, {
                id: 4,
                option: 'Tent City'
            }
            ]
        },
        {
            id: 7,
            name: 'Train',
            option: [{
                id: 0,
                option: 'Nanital'
            }, {
                id: 1,
                option: 'Srinagar'
            }, {
                id: 2,
                option: 'North'
            }, {
                id: 3,
                option: 'Baanfivs'
            }, {
                id: 4,
                option: 'Tent City'
            }
            ]
        },
    ]
}
export default functionality;