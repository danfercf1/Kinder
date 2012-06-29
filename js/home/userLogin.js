var loginUser = new function(){

    this.uLogin = function(user){
        registrate.obj.removeAllChildren();
        placa_usuario.init();
        placa_usuario.initNombreUsuario(user);
        animacion_home.puntero_obj(placa_usuario.logoutImg);
        animacion_home.puntero_obj(placa_usuario.btnLoadImg);
        animacion_home.cerrarSesion(placa_usuario.logoutImg);
        animacion_home.obj_fancy(placa_usuario.btnLoadImg,'LoginFrontend/loadCode');
    };

};
