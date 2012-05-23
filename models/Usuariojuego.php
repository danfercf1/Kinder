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
class Usuariojuego extends FD_ManageModel
{	
    var $alias_of_atributes = array();
    var $fd_rules = array();
	
	var $id_usuariojuego; 
	var $id_juego; 
	var $id_usuario; 
	var $puntuacion_usuariojuego; 
	
	function Usuariojuego($id_usuariojuego = '', $id_juego = '', $id_usuario = '', $puntuacion_usuariojuego = '')
	{
		
		$this->id_usuariojuego = $id_usuariojuego;
		$this->id_juego = $id_juego;
		$this->id_usuario = $id_usuario;
		$this->puntuacion_usuariojuego = $puntuacion_usuariojuego;
	}
}
?>