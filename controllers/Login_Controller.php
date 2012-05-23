<?php
class Login_Controller extends FD_Management
{	
	function Login_Controller()
	{
        parent::FD_Management();        
	}
    
    function index()
    {
        $this->loadView("login", array("login","access","forgot"),"simple",array("css"=>array("styles/login")));
    }
    
    function logout()
    {
        $this->Session->logout("dashboard");
    }
    
    function access()
    {
        //echo "***************************"; 
        if($this->Session->login($_POST["login"], $_POST["pass"]))
            $this->redirect("dashboard", ""); 
        else {
            $this->redirect("login", ""); 
        }
    }
}
	
?>