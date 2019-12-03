function AnimableArc(containerDiv, startAngle, width) {
  var oChild = null;
  var canvas, icon;
  for (var i = 0; i < containerDiv.childNodes.length; i++) {
    oChild = containerDiv.childNodes[i];
    if (oChild.nodeName == "CANVAS") {
      canvas = oChild;
    } else if (oChild.nodeName == "DIV") {
      this.iconContainer = oChild;
      for (var j = 0; j < oChild.childNodes.length; j++) {
        if (oChild.childNodes[j].nodeName == "IMG") {
          this.icon = oChild.childNodes[j];
        }
      }
    }
  }
  this.container = containerDiv;
  this.color = canvas.getAttribute("data-fore-color");
  this.back = canvas.getAttribute("data-back-color");
  this.context = canvas.getContext("2d");
  this.context.fillStyle = this.color;
  this.startAngle = startAngle;
  this.backEndAngle = Math.PI;
  this.foreEndAngle = (canvas.getAttribute("data-end") / 100) * Math.PI * 2;
  this.backCurrentAngle = this.startAngle;
  this.foreCurrentAngle = this.startAngle;
  this.backLoadingStep = this.backEndAngle / ((400 / 1000) * 60);
  this.foreLoadingStep = this.foreEndAngle / ((600 / 1000) * 60);
  this.foreEarsingStep = this.foreEndAngle / ((600 / 1000) * 60);
  this.backEarsingStep = this.backEndAngle / ((400 / 1000) * 60);
  this.stopTime = 2000;
  this.onReSize(width);
}
AnimableArc.prototype.onReSize = function(foreSize) {
  this.context.canvas.height = this.container.clientHeight;
  this.context.canvas.width = this.container.clientWidth;
  this.size = Math.min(this.container.clientWidth, this.container.clientHeight);
  this.width = foreSize;
  this.iconContainer.style.position = "absolute";
  this.iconContainer.style.top = -foreSize + "px";
  this.iconContainer.style.left = this.size / 2 - foreSize * 1.5 + "px";
  this.iconContainer.style.width = foreSize * 3 + "px";
  this.iconContainer.style.height = this.size / 2 + foreSize / 1 + "px";
  this.iconContainer.style.transformOrigin = "center bottom";
  this.icon.style.width = foreSize * 3 + "px";
  this.icon.style.display = "block";
  this.icon.style.height = "auto";
  this.icon.style.margin = "auto";
  this.reDraw();
};
AnimableArc.prototype.rotateIcon = function(angle) {
  this.iconContainer.style.webkitTransform = "rotate(" + angle + "rad)";
  this.iconContainer.style.mozTransform = "rotate(" + angle + "rad)";
  this.iconContainer.style.msTransform = "rotate(" + angle + "rad)";
  this.iconContainer.style.oTransform = "rotate(" + angle + "rad)";
  this.iconContainer.style.transform = "rotate(" + angle + "rad)";
  this.icon.style.webkitTransform =
    "rotate(" + -(angle + 3 * this.foreLoadingStep) + "rad)";
  this.icon.style.mozTransform =
    "rotate(" + -(angle + 3 * this.foreLoadingStep) + "rad)";
  this.icon.style.msTransform =
    "rotate(" + -(angle + 3 * this.foreLoadingStep) + "rad)";
  this.icon.style.oTransform =
    "rotate(" + -(angle + 3 * this.foreLoadingStep) + "rad)";
  this.icon.style.transform =
    "rotate(" + -(angle + 3 * this.foreLoadingStep) + "rad)";
  if (this.foreCurrentAngle > this.startAngle + 0.1) {
    this.iconContainer.style.display = "block";
  } else {
    this.iconContainer.style.display = "none";
  }
};
AnimableArc.prototype.reDraw = function() {
  var fore = new Path2D(),
    back = new Path2D(),
    center = this.size / 2,
    context = this.context;

  fore.arc(
    center,
    center,
    (this.size - this.width) / 2,
    this.startAngle,
    this.foreCurrentAngle
  );
  back.arc(
    center,
    center,
    (this.size - this.width) / 2,
    this.startAngle,
    this.backCurrentAngle
  );
  context.clearRect(0, 0, this.size, this.size);
  context.lineWidth = this.width;
  context.strokeStyle = "#ebebeb";
  context.stroke(back);
  context.strokeStyle = this.color;
  context.stroke(fore);
};
AnimableArc.prototype.draw = function() {
  if (
    this.backCurrentAngle < this.backEndAngle + this.startAngle ||
    this.foreCurrentAngle < this.foreEndAngle + this.startAngle
  ) {
    var fore = new Path2D(),
      back = new Path2D(),
      center = this.size / 2,
      context = this.context;

    var nextBackAngle = this.backCurrentAngle,
      nextForeAngle = this.foreCurrentAngle;
    if (this.backCurrentAngle < this.backEndAngle + this.startAngle) {
      nextBackAngle += this.backLoadingStep;
    } else {
      nextForeAngle += this.foreLoadingStep;
    }
    fore.arc(
      center,
      center,
      (this.size - this.width) / 2,
      this.startAngle,
      nextForeAngle
    );
    back.arc(
      center,
      center,
      (this.size - this.width) / 2,
      this.startAngle,
      nextBackAngle
    );
    context.clearRect(0, 0, this.size, this.size);
    context.lineWidth = this.width;
    context.strokeStyle = "#ebebeb";
    context.stroke(back);
    context.strokeStyle = this.color;
    context.stroke(fore);
    this.backCurrentAngle = nextBackAngle;
    this.foreCurrentAngle = nextForeAngle;
    this.rotateIcon(this.foreCurrentAngle + Math.PI / 2);
    window.requestAnimationFrame(this.draw.bind(this));
  } else {
    const earse = this.earse.bind(this);
    this.foreCurrentAngle -= this.foreLoadingStep;
    setTimeout(function() {
      window.requestAnimationFrame(earse);
    }, this.stopTime);
  }
};
AnimableArc.prototype.earse = function() {
  if (
    this.backCurrentAngle > this.startAngle ||
    this.foreCurrentAngle > this.startAngle
  ) {
    var fore = new Path2D(),
      back = new Path2D(),
      center = this.size / 2,
      context = this.context;

    var nextBackAngle = this.backCurrentAngle,
      nextForeAngle = this.foreCurrentAngle;
    if (this.foreCurrentAngle > this.startAngle) {
      nextForeAngle -= this.foreEarsingStep;
    } else {
      nextBackAngle -= this.backEarsingStep;
    }
    fore.arc(
      center,
      center,
      (this.size - this.width) / 2,
      this.startAngle,
      nextForeAngle
    );
    back.arc(
      center,
      center,
      (this.size - this.width) / 2,
      this.startAngle,
      nextBackAngle
    );
    context.clearRect(0, 0, this.size, this.size);
    context.lineWidth = this.width;
    context.strokeStyle = "#ebebeb";
    context.stroke(back);
    context.strokeStyle = this.color;
    context.stroke(fore);
    this.rotateIcon(this.foreCurrentAngle + Math.PI / 2);
    this.backCurrentAngle = nextBackAngle;
    this.foreCurrentAngle = nextForeAngle;
    window.requestAnimationFrame(this.earse.bind(this));
  }
};
