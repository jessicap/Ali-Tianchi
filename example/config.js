require.config({
    paths: {
        'geoJson': '../geoData/geoJson',
        'theme': '../theme',
        'data': './data',
        'map': '../map',
        'bmap': '../example/js/bmap'
    },
    packages: [
        {
            main: 'echarts',
            location: '../example/js',
            name: 'echarts'
        },
        {
            main: 'zrender',
            location: '../example/js/zrender/src',
            name: 'zrender'
        }
    ]
    // urlArgs: '_v_=' + +new Date()
});
