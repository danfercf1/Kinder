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
class Series extends FD_ManageModel
{	
    var $alias_of_atributes = array();
    var $fd_rules = array();
	
	var $id_serie; 
	var $nombre_serie; 
	
	function Series($id_serie = '', $nombre_serie = '')
	{
		
		$this->id_serie = $id_serie;
		$this->nombre_serie = $nombre_serie;
	}
}
?>