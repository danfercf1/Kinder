<?php
include_once("Main_Controller.php");
class Dashboard_Controller extends Main_Controller
{	
	function Dashboard_Controller()
	{
        parent::Main_Controller();
        
        $this->Session->check("login");
        
        if ($_SESSION["UROLE_SESSION"] == 1) 
            
            $this->active_page="dashboard";
            
        else
            $this->redirect("login");
               
	}
    
    function index()
    {
        
        $this->initialize("dashboard");
    }
}
	
?>