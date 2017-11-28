class FirefoxRetention extends React.Component {
  componentDidMount() {
    var snippet = document.getElementById('snippet');

    //snippet.addEventListener('show_snippet', function () {
     var animation = "dynamic";
     var snippetContainer = document.getElementById('snippetContainer');
     var snippets = document.getElementById('snippets');
     snippetContainer.style.height = snippets.offsetHeight + 24 + "px";

     var requestAnimFrame = (function(){
       return window.requestAnimationFrame       ||
              window.mozRequestAnimationFrame    ||
              function( callback ){
                window.setTimeout(callback, 1000 / 60);
              };
     })();

     // Returns a random number between a range.
     function range(a,b) {
       return (b-a)*Math.random()+a;
     }

     var NUM_CONFETTI = 425;
     var COLORS = [
       "rgb(255,255,255)", "rgb(255,112,87)", "rgb(244,239,50)", "rgb(23,137,147)"
     ];

     function setupConfetti(id) {
       var canvas = document.getElementById(id);
       var context = canvas.getContext("2d");
       var width = 0;
       var height = 0;

       function resizeWindow() {
         width = canvas.width = ((window.innerWidth/2) - (470/2) - 25);
         height = canvas.height = document.body.offsetHeight;
       }
       resizeWindow();

       var defaultOpacity = 0;
       if (animation === "static") {
         defaultOpacity = 1;
       } else {
         window.addEventListener('resize', resizeWindow, false);
       }

       var confettiSize = 6;

       var xpos = 0;
       document.addEventListener("mousemove", function(e) {
         xpos = (e.pageX/window.innerWidth)-0.5;
       });

       // Initial code thanks to https://codepen.io/linrock/pen/Amdhr
       class Confetti {
         constructor() {
           this.rgb = COLORS[~~range(0,4)];
           this.replace();
           this.start = Date.now()/1000;
           this.now = this.start;
           this.diff = 0;
         }
         replace() {
           this.opacity = defaultOpacity;
           this.x = range(-100,width-confettiSize+100);
           this.y = range(-100,height-confettiSize);
           this.xmax = width-confettiSize;
           this.ymax = height-confettiSize;

           this.dop = range(4,6);
           this.vx = (range(-0.2,0.2)+xpos)*200;
           this.vy = confettiSize+range(1,2)*150;
           this.start = Date.now()/1000;
           this.now = this.start;
           this.diff = 0;
         }
         draw() {
           this.now = Date.now()/1000;
           this.diff = this.now - this.start;

           this.x += (this.vx * this.diff);
           this.y += (this.vy * this.diff);
           this.opacity += (this.dop * this.diff);

           if (this.opacity > 1) {
             this.opacity = 1;
             this.dop *= -1;
           }
           if (this.opacity < 0 || this.y > this.ymax) {
             this.replace();
           }
           if (!(0 < this.x < this.xmax)) {
             this.x = (this.x + this.xmax) % this.xmax;
           }
           context.beginPath();
           context.rect(~~this.x,~~this.y,confettiSize,confettiSize);
           context.globalAlpha = this.opacity;
           context.fillStyle = this.rgb;
           context.fill();
           this.start = Date.now()/1000;
         }
       }

       var confetti = [];
       var pushConfetti = function() {
         confetti.push(new Confetti());
         if (confetti.length < NUM_CONFETTI) {
           requestAnimationFrame(pushConfetti);
         }
       }
       if (animation === "static") {
         var pushConfetti = function() {
           confetti.push(new Confetti());
           if (confetti.length < NUM_CONFETTI) {
             pushConfetti();
           }
         }
       }
       pushConfetti();

       function step() {
         context.clearRect(0,0,width,height);
         confetti.forEach(function(c) {
           c.draw();
         });
       }

       return step;
     }

     var stepLeft = setupConfetti("canvas-left");
     var stepRight = setupConfetti("canvas-right");
     var step = function() {
       stepLeft();
       stepRight();
       requestAnimationFrame(step);
     };
     if (animation === "static") {
       step = function() {
         stepLeft();
         stepRight();
       };
     }
     step();
    //});
  }

  render() {
    return (
      <div className="firefox-retention">
        <Snippet>
          <div className="snippet" id="snippet">
            <img className="header-image" height="104" src="data:image/png;base64,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" alt="heres to you"/>
            <p>Thanks for choosing Firefox and supporting an independent web.</p>
            <a href="https://www.mozilla.org/etc/firefox/retention/thank-you-b/">Why it’s worth celebrating</a>
          </div>
          <canvas id="canvas-left"></canvas>
          <canvas id="canvas-right"></canvas>
        </Snippet>
      </div>
    );
  }
}
