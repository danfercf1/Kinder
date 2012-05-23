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
class Evento extends FD_ManageModel
{	
    var $alias_of_atributes = array();
    var $fd_rules = array();
	
	var $id_evento; 
	var $id_sitio; 
	var $nombre_evento; 
	var $descripcion_evento; 
	var $lugar_evento; 
	var $fecha_evento; 
	var $video_evento; 
	var $fechacr_evento; 
	
	function Evento($id_evento = '', $id_sitio = '', $nombre_evento = '', $descripcion_evento = '', $lugar_evento = '', $fecha_evento = '', $video_evento = '', $fechacr_evento = '')
	{
		
		$this->id_evento = $id_evento;
		$this->id_sitio = $id_sitio;
		$this->nombre_evento = $nombre_evento;
		$this->descripcion_evento = $descripcion_evento;
		$this->lugar_evento = $lugar_evento;
		$this->fecha_evento = $fecha_evento;
		$this->video_evento = $video_evento;
		$this->fechacr_evento = $fechacr_evento;
	}
}
?>