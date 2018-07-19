/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
(function(){
    this.SimpleAlert = function(){
        //create global refernece
        this.closeButton = null;
        this.simpleAlert =document.getElementById('snackbar');
        
        var defaultConfiguration = {
            closeButton: true,
            content: "&times;",
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
        
        if(arguments[0] && typeof arguments[0] == "object"){
            this.options = setDefaultConfiguration(defaultConfiguration,arguments[0]);
        }else{
            this.options = defaultConfiguration;
        }
    }
    //public methods
    SimpleAlert.prototype.closeAlert = function(){
        var _=this;
        this.simpleAlert.className = this.simpleAlert.className.replace("show","");       
    }
    SimpleAlert.prototype.openAlert = function(){
        var simple_alert = this.simpleAlert;
        buildAlert.call(this);
        initializeEvents.call(this);
        this.simpleAlert.className +=" show";
        if(this.options.autoClose == true){
            setTimeout(function(){
               simple_alert.className = 'dismiss';
            },this.options.timeOut)
        }
    }
    //private methods
    function setDefaultConfiguration(source, properties) {
        var property;
        for (property in properties) {
          if (properties.hasOwnProperty(property)) {
            source[property] = properties[property];
          }
        }
        return source;
      }
    function buildAlert(){
        var content;
        var classname;
        var _simpleAlert = this.simpleAlert;
        if (typeof this.options.content === "string") {
            content = this.options.content;
        } else {
            content = this.options.content.innerHTML;
        }
        switch(this.options.type.toString().toLowerCase()){
            case 'success':
                classname = 'success-alert';
                break;
            case 'failure':
                classname = 'failure-alert';
                break;
            case 'danger':
                classname = 'danger-alert';
                break;
            case 'primary':
                classname = 'primary-alert';
                break;
            case 'simple':
            default:
                classname = 'simple-alert';
                break;
        }
        switch(this.options.position.toString().toLowerCase()){
            case 'top-left':
                classname += ' top-left';
                break;
            case 'top-center':
                classname += ' top-center';
                break;
            case 'top-right':
                classname += ' top-right';
                break;
            case 'center-left':
                classname += ' center-left';
                break;
            case 'center':
                classname += ' center-center';
                break;
            case 'center-right':
                classname += ' center-right';
                break;
            case 'bottom-left':
                classname += ' bottom-left';
                break;
            case 'bottom-center':
                classname += ' bottom-center';
                break;
            case 'bottom-right':
                classname += ' bottom-right';
                break;
            default:
                classname += ' bottom-center';
                break;
        }
//        this.simpleAlert.classList.add(classname);
        this.simpleAlert.className = classname;
        /*set as per configuration*/
        this.simpleAlert.innerHTML=content;
        if (this.options.closeButton === true) {
            this.closeButton = document.createElement("span");
            this.closeButton.className = "right-floater-close";
            this.closeButton.innerHTML = "&times;";
            this.simpleAlert.appendChild(this.closeButton);
        }
        /* Configuration done*/
        
    }
    
    function initializeEvents(){
        if (this.options.closeButton) {
            this.closeButton.addEventListener('click', this.closeAlert.bind(this));
        }
    }
    
    function fadeOutEffect() {
    var fadeTarget = this;
    var fadeEffect = setInterval(function () {
            if (!fadeTarget.style.opacity) {
                fadeTarget.style.opacity = 1;
            }
            if (fadeTarget.style.opacity > 0) {
                fadeTarget.style.opacity -= 0.1;
            } else {
                clearInterval(fadeEffect);
            }
        }, 50);
    }
    
}())