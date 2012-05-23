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
class Sitio extends FD_ManageModel
{	
    var $alias_of_atributes = array();
    var $fd_rules = array();
	
	var $id_sitio; 
	var $emailcontacto_sitio; 
	
	function Sitio($id_sitio = '', $emailcontacto_sitio = '')
	{
		
		$this->id_sitio = $id_sitio;
		$this->emailcontacto_sitio = $emailcontacto_sitio;
	}
}
?>