<html>
<head>
  <title>Modal Example</title>
  <link rel="stylesheet" href="simpleAlert.css">
</head>
<body>
    <!-- Use a button to open the snackbar -->
    <button onclick="myFunction()">Show Snackbar</button>
    <!-- The actual snackbar -->
    <div id="snackbar"></div>
  <script src="simpleAlert.js" type="text/javascript" charset="utf-8" async defer></script>
</body>
<script>
    var simpleAlert = null;
    function myFunction(){
        simpleAlert.openAlert();
    }
    document.addEventListener('DOMContentLoaded', function() {
        simpleAlert = new SimpleAlert({
            content: "Hello Hari!",
            type:"success",
            position:"bottom-right"
        });
        simpleAlert.openAlert();

//        setTimeout(function(){
//         simpleAlert.closeAlert(); 
//        },3000);
     });
</script>
</html>