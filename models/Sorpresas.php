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
class Sorpresas extends FD_ManageModel
{	
    var $alias_of_atributes = array();
    var $fd_rules = array();
	
	var $id_sorpresa; 
	var $id_coleccion; 
	var $nombre_sorpresa; 
	var $imagen_sorpresa; 
	var $anio_sorpresa; 
	var $id_categoria; 
	var $codigo_sorpresa; 
	
	function Sorpresas($id_sorpresa = '', $id_coleccion = '', $nombre_sorpresa = '', $imagen_sorpresa = '', $anio_sorpresa = '', $id_categoria = '', $codigo_sorpresa = '')
	{
		
		$this->id_sorpresa = $id_sorpresa;
		$this->id_coleccion = $id_coleccion;
		$this->nombre_sorpresa = $nombre_sorpresa;
		$this->imagen_sorpresa = $imagen_sorpresa;
		$this->anio_sorpresa = $anio_sorpresa;
		$this->id_categoria = $id_categoria;
		$this->codigo_sorpresa = $codigo_sorpresa;
	}
}
?>