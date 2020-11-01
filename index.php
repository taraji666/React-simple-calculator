<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8" />
    
    <title>calculator</title>

    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
    <link rel="stylesheet" href="app/app.css">
</head>
<body>
    <div class="container pt-4">
        <div class="row">
            <div class="col-md-3 m-auto" id="App"></div>
        </div>
    </div>

    

    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>

    <script crossorigin src="https://unpkg.com/react@16/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>

    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>

    <script type="text/babel" src="app/app.js?v=<?= uniqid();?>"></script>
</body>
</html>