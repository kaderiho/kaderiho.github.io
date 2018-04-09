import serialize from 'serialize-javascript';

export default (appComponent, preLoadedState) => {
    return `<!doctype html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport"
                content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
                <meta http-equiv="X-UA-Compatible" content="ie=edge">
                <title>Basic ReactJS application</title>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
                
                <script src="/index.bundle.js" defer></script>
                <script>window.__INITIAL_DATA__ = ${serialize(preLoadedState)}</script>
            </head>
            
            <body>
                <div id="app">${appComponent}</div>
            </body>
        </html>`
}