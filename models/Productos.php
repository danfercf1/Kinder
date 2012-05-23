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
class Productos extends FD_ManageModel
{	
    var $alias_of_atributes = array();
    var $fd_rules = array();
	
	var $id_producto; 
	var $id_sitio; 
	var $nombre_producto; 
	var $descripcion_producto; 
	var $imagen_producto; 
	var $infonutricional_producto; 
	var $fechacr_producto; 
	var $estado_producto; 
	
	function Productos($id_producto = '', $id_sitio = '', $nombre_producto = '', $descripcion_producto = '', $imagen_producto = '', $infonutricional_producto = '', $fechacr_producto = '', $estado_producto = '')
	{
		
		$this->id_producto = $id_producto;
		$this->id_sitio = $id_sitio;
		$this->nombre_producto = $nombre_producto;
		$this->descripcion_producto = $descripcion_producto;
		$this->imagen_producto = $imagen_producto;
		$this->infonutricional_producto = $infonutricional_producto;
		$this->fechacr_producto = $fechacr_producto;
		$this->estado_producto = $estado_producto;
	}
}
?>