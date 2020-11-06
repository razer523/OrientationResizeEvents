var app = {
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },
    onDeviceReady: function() {
        // Handle orientation change event
        window.addEventListener('orientationchange', this.onOrientationChange);
        // Handle resize event
        window.addEventListener("resize", this.onResize);
        app.updateUI();
    },
    onOrientationChange: function () {
        console.log("Orientation change event - " + "orientation: " + window.orientation);
        app.updateUI();
    },
    onResize: function () {
        console.log("Resize event - " + "width: " + screen.width + ", height: " + screen.height);
        app.updateUI();
    },
    updateUI: function () {
        var orientation = '';
        //alert(window.orientation);
        switch (window.orientation) {
            case 0:
                orientation = 'portrait';
            break;
            case 90:
                orientation = 'landscape';
            break;
            case 180:
                orientation = 'upside-down'; // many devices do not support this one
            break;
            case -90:
                orientation = 'landscape';
            break;
            default:
                orientation = "unkown"; // should never get this one
            break;
        }
        document.getElementById('outputOrientationResize').innerHTML =
            "orientation: " + orientation + "<br/>" +
            "width: " + screen.width + ", height: " + screen.height;
    }
};

app.initialize();

// When the phone orientation changes, it will trigger an orientationchange event which this javascript will listen for. You can see the script binding to that event with this line window.addEventListener('orientationchange', this.onOrientationChange);. onOrientationChange then makes a call to the updateUI function which changes the value of the orientation property that is displayed to the user inside the outputOrientationResize element.

// To help visually represent the changing view, open the index.css file in the www/css folder and add the following snippet of code to the end of the file (i.e., underneath the .blink class). This CSS below will change the colors of the content based on the orientation.