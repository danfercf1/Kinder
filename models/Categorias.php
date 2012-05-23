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
class Categorias extends FD_ManageModel
{	
    var $alias_of_atributes = array();
    var $fd_rules = array();
	
	var $id_categoria; 
	var $nombre_categoria; 
	var $estado_categoria; 
	
	function Categorias($id_categoria = '', $nombre_categoria = '', $estado_categoria = '')
	{
		
		$this->id_categoria = $id_categoria;
		$this->nombre_categoria = $nombre_categoria;
		$this->estado_categoria = $estado_categoria;
	}
    function borrar_sorpresas(){
        $tuplas = $this->references("sorpresas");
        foreach($tuplas as $valor){
            $eliminar=$this->Connection->DB->get_object_by_id("sorpresas", $valor->id_sorpresa);
            $eliminar->delete();
        }
    }
    
    function onDelete(){
        $this->borrar_sorpresas();    
    }
    
}
?>