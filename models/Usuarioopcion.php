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
class Usuarioopcion extends FD_ManageModel
{	
    var $alias_of_atributes = array();
    var $fd_rules = array();
	
	var $id_usuarioopcion; 
	var $id_usuario; 
	var $id_opcion; 
	
	function Usuarioopcion($id_usuarioopcion = '', $id_usuario = '', $id_opcion = '')
	{
		
		$this->id_usuarioopcion = $id_usuarioopcion;
		$this->id_usuario = $id_usuario;
		$this->id_opcion = $id_opcion;
	}
}
?>