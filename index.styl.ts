export default {
    container: {
        position: 'fixed',
        top: -40,
        height: 40,
        width: '100%',
        align: 'center middle',
        zIndex: 12000,
        features: 'pointer-events',
    },
    wrapper: {
        height: 40,
        width: 400,
        borderRadius: 4,
        align: 'center middle',
        backgroundColor: ' rgba(255,255,255, 1)',
        boxShadow: '0 12 40 rgba(0,0,0,0.50)',
    },
    banner: {
        width: 400,
        height: 40,
        backgroundColor: ' rgba(255,255,255, 0.65)',
    },
    type_symbol: {
        height: '100%',
        align: 'middle',
        marginRight: 10
    },
    loading: {
        width: '20',
        height: '20'
    },
    loading_symbol: {
        position: 'fixed',
        height: '100%',
        width:'100%',
        transform: 'origin(50%,50%)'
    },
    text: {
        height: '100%',
        align: 'middle',
        fontSize: 13,
        textColor: '#444'
    },
    extra: {
        height: '100%',
        align: 'middle',
        marginLeft: 10,
        textColor: '#57A3FF',
        fontSize: 13,
    }
}