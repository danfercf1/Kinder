<?php
include_once("Main_Controller.php");
class Settings_Controller extends Main_Controller
{	
	function Settings_Controller()
	{
        parent::Main_Controller();
        
        $this->Session->check("login");
        
        if ($_SESSION["UROLE_SESSION"] == 1) 
            
            $this->active_page="settings";
            
        else
            $this->redirect("login");
        
            
	}
    
    function general()
    {
        $this->js[]="scripts/jquery.validate.min";
        $this->js[]="misc/validate_defaults";
        $this->js[]="settings/general";   
        if(isset($_POST) && !empty($_POST)){
            
            $user = $_SESSION["ULOGIN_SESSION"];
            
            $usuario = current($this->Connection->DB->get_objects_By_Sql("usuario","select * from usuario where login_usuario='$user' and tipo_usuario=1 "));
            
            $usuario->pass_usuario = md5($_POST['PASS_USUARIO']);
            
            $usuario->update();
            
            $status_message = array("title"=>"Correcto","status"=>"success","message"=>"Se modific&oacute; la contrase&ntilde;a correctamente");
              
            $this->status_mensajes[]= $status_message;
            
        }
        $this->initialize("ajustes/generales");
    }
  
}
	
?>