(function(exports){
  var SignaturePad = function() {
    if(!(this instanceof SignaturePad)){
      return new SignaturePad();
    }

    this.endpoint  = "https://www.signature.io";
    this.uuid      = this.Uuid();
    this.script    = this.CurrentlyExecutedScript();

    if (this.script) {
      this.key     = this.script.getAttribute("data-signature-key");
    }
    
    this.init();
    return this;
  };

  SignaturePad.prototype.init = function() {
    if (this.script) {
      this.script.className += " signature-pad-script";
      this.script.id        = "signature-pad-script-"+this.uuid;

      this.draw();
      this.events();
      SignatureMark(this.canvas);
    }
  };

  exports.SignaturePad = SignaturePad;

}(this));