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
class Usuario extends FD_ManageModel
{	
    var $alias_of_atributes = array();
    var $fd_rules = array();
	
	var $id_usuario; 
	var $nombres_usuario; 
	var $apellidos_usuario; 
	var $genero_usuario; 
	var $fechanac_usuario; 
	var $email_usuario; 
	var $localidad_usuario; 
	var $provincia_usuario; 
	var $login_usuario; 
	var $pass_usuario; 
	var $newsletter_usuario; 
	var $ofertas_usuario; 
	var $informacion_usuario; 
	var $tipo_usuario; 
	var $fechacr_usuario; 
	var $nombresp_usuario; 
	var $apellidosp_usuario; 
	var $emailp_usuario; 
	var $fechanacp_usuario; 
	var $generop_usuario; 
	var $key_usuario; 
	var $estado_usuario; 
	
	function Usuario($id_usuario = '', $nombres_usuario = '', $apellidos_usuario = '', $genero_usuario = '', $fechanac_usuario = '', $email_usuario = '', $localidad_usuario = '', $provincia_usuario = '', $login_usuario = '', $pass_usuario = '', $newsletter_usuario = '', $ofertas_usuario = '', $informacion_usuario = '', $tipo_usuario = '', $fechacr_usuario = '', $nombresp_usuario = '', $apellidosp_usuario = '', $emailp_usuario = '', $fechanacp_usuario = '', $generop_usuario = '', $key_usuario = '', $estado_usuario = '')
	{
		
		$this->id_usuario = $id_usuario;
		$this->nombres_usuario = $nombres_usuario;
		$this->apellidos_usuario = $apellidos_usuario;
		$this->genero_usuario = $genero_usuario;
		$this->fechanac_usuario = $fechanac_usuario;
		$this->email_usuario = $email_usuario;
		$this->localidad_usuario = $localidad_usuario;
		$this->provincia_usuario = $provincia_usuario;
		$this->login_usuario = $login_usuario;
		$this->pass_usuario = $pass_usuario;
		$this->newsletter_usuario = $newsletter_usuario;
		$this->ofertas_usuario = $ofertas_usuario;
		$this->informacion_usuario = $informacion_usuario;
		$this->tipo_usuario = $tipo_usuario;
		$this->fechacr_usuario = $fechacr_usuario;
		$this->nombresp_usuario = $nombresp_usuario;
		$this->apellidosp_usuario = $apellidosp_usuario;
		$this->emailp_usuario = $emailp_usuario;
		$this->fechanacp_usuario = $fechanacp_usuario;
		$this->generop_usuario = $generop_usuario;
		$this->key_usuario = $key_usuario;
		$this->estado_usuario = $estado_usuario;
	}
}
?>