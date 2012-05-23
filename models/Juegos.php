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
class Juegos extends FD_ManageModel
{	
    var $alias_of_atributes = array();
    var $fd_rules = array();
	
	var $id_juego; 
	var $nombre_juego; 
	var $descripcion_juego; 
	
	function Juegos($id_juego = '', $nombre_juego = '', $descripcion_juego = '')
	{
		
		$this->id_juego = $id_juego;
		$this->nombre_juego = $nombre_juego;
		$this->descripcion_juego = $descripcion_juego;
	}
}
?>