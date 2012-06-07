var animacion_agenda = new function()
{
    this.pestanear = function(objeto,wi,wf){

        Tween
            .get(objeto, {loop: true}, true)
            .wait(wi*1000)
            .to({alpha:0},1)
            .wait(wf*1000);
    }

    this.mover_cejas = function(objeto,wi,wf,grados){

        Tween
            .get(objeto, {loop: true}, true)
            .wait(wi*1000)
            .to({skewX:grados,skewY:grados},1)
            .wait(wf*1000);

    }

    this.mover_brazo = function(objeto,wi,wf,grados){

        Tween
            .get(objeto, {loop: true}, true)
            .wait(wi*1000)
            .to({skewY:grados},1)
            .wait(wf*1000);

    }

    this.mover_brazo2 = function(objeto,wi,wf,grados){

        Tween
            .get(objeto, {loop: true}, true)
            .wait(wi*1000)
            .to({skewX:grados,skewY:grados},1)
            .wait(wf*1000);

    }

} 