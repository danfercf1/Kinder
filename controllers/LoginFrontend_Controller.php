<?php
class LoginFrontend_Controller extends FD_Management
{	
	function LoginFrontend_Controller()
	{
        parent::FD_Management();        
	}
    
    function index()
    {
        $this->loadView("login_frontend");
    }
    
    function load_login($datos="")
    {
        $data['confirmacion'] = $datos;
        $this->loadView("login_frontend",$data);
    }
    
    function logout()
    {
        $this->Session->logout("frontend");
    }
    
    function access()
    {
        if($this->Session->login($_POST["LOGIN_USUARIO"], $_POST["PASS_USUARIO"],3))
        {
            $datos = "correcto";
            $this->load_login($datos);
            //$logeado="true";
            //$this->redirect("/");
             
        }else {
            
            $this->load_login();
             
        }
    }
}
	
?>