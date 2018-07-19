# simpleAlert
Snackbar, Simple Javascript Plugin for Alert


var defaultConfiguration = {
            closeButton: true,
            background:"#333",
            autoClose: true,
            timeOut:3000,
            textColor:'#fff',
            textAlign:'center',
            bottom:'30px',
            left:'50%',
            type:"simple",
            position:"top-center"
        }

============Intialize===================
var simpleAlert = new SimpleAlert({
            content: "Hello Hari!",
            type:"success",
            position:"top-left",
        });

======FOR opening Alert=========
 simpleAlert.openAlert();
===========FOR CLOSING=================
simpleAlert.closeAlert();
Values of "position" available

top-left      top-center      top-right

center-left   center          center-right

bottom-left   bottom-center   bottom-right


Values of "type" available

1. success
2. failure
3. danger
4. primary
5. simple

=================================================HTML FILE=========================
1. Add a div with the id snakcbar
<div id="snackbar"></div>

2. Include Css and JS files
