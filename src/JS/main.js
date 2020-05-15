new Vue({
    el:'#app',
    data: {
        board: {
            model: 'NodeMCU',
            status: [
                'connected',
                'timeout',
                'disconnected',
            ],

        },
        pins: [
            {
                name: 'D0',
                state: 'Free',
            },
            {
                name: 'D1',
                state: 'Free',
            },
            {
                name: 'D2',
                state: 'Free',
            },
            {
                name: 'D3',
                state: 'Free',
            },
            {
                name: 'D4',
                state: 'Free',
            },
            {
                name: 'D5',
                state: 'Free',
            },
            {
                name: 'D6',
                state: 'Free',
            },
            {
                name: 'D7',
                state: 'Free',
            },
            {
                name: 'D8',
                state: 'Free',
            },
            {
                name: 'D9/RX',
                state: 'Free',
            },
            {
                name: 'D10/TX',
                state: 'Free',
            },
            {
                name: 'D11/SD2',
                state: 'Free',
            },
            {
                name: 'D12/SD3',
                state: 'Free',
            },
            
        ],
        cards: [
            {
                title: 'Hourly temprature',
                details: 'recorded data shows an odd increase in temprature.',
                icon:  'mdi-chart-bar',
            },
            {
                title: 'Pin status',
                details: '',
                icon:  'mdi-account',
            },
            {
                title: 'first title',
                details: '',
                icon:  '',
            },
        ]
    },
    methods: {

    },
    computed: {

    },
});
