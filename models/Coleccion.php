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
class Coleccion extends FD_ManageModel
{	
    var $alias_of_atributes = array();
    var $fd_rules = array();
	
	var $id_coleccion; 
	var $id_usuario; 
	var $nombre_coleccion; 
	var $id_sorpresa; 
	
	function Coleccion($id_coleccion = '', $id_usuario = '', $nombre_coleccion = '', $id_sorpresa = '')
	{
		
		$this->id_coleccion = $id_coleccion;
		$this->id_usuario = $id_usuario;
		$this->nombre_coleccion = $nombre_coleccion;
		$this->id_sorpresa = $id_sorpresa;
	}
}
?>