<?php
/**
 * @package FastDevelPHP
 * @author Ing. Florencio Peredo
 * @email peredo@sysdecom.com
 * @company Systems Development Company "Sysdecom" srl.
 * @license All rights reservate
 * @version 1.0
 * @copyright 2009
 */
class Home_Controller extends FD_Management
{	
	function Home_Controller()
	{
        parent::FD_Management();
        $this->useLayout("public");
        $this->Session->check();
	}
    
    function index()
    {
        $this->loadView("home", array());
    }
}
	
?>