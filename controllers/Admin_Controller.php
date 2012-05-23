<?php
include_once("Main_Controller.php");
class Admind_Controller extends Main_Controller
{	
	function Admind_Controller()
	{
        parent::Main_Controller();
        $this->Session->check("login", array("login","access","forgot"));
        
        $this->active_page="admin";       
	}
    
    function index()
    {
        $this->initialize("admin");
    }
}
	
?>