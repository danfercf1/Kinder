<?php
include_once("Datatables_Controller.php");
class Bridge_Controller extends Datatables_Controller
{
	function Bridge_Controller()
	{
		parent::Datatables_Controller();
        
		if (isset($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest') 
		{
		  $this->Session->check("login");
		}
        else
        {
            $this->redirect("dashboard");
        }
        
	}
	
    
	function prepare_data($result,$arrayOutput,$otherData=array())
	{        
		$sOutput = array
		(
		"sEcho"                => $result['sEcho'],
		"iTotalRecords"        => $result['iTotalRecords'],
		"iTotalDisplayRecords" => $result['iTotalDisplayRecords'],
		"aaData"               => $arrayOutput
		);

		$sOutput=array_merge($sOutput,$otherData);
		
		echo json_encode($sOutput);	
	}
    
    function products_list()
    {
   	    $table='productos';        
		$fields=array('ID_PRODUCTO','NOMBRE_PRODUCTO','DESCRIPCION_PRODUCTO','ESTADO_PRODUCTO','IMAGEN_PRODUCTO');
		$index='ID_PRODUCTO';
		$search=array('NOMBRE_PRODUCTO','ESTADO_PRODUCTO');
        //$where = 'ID_USUARIO='.$_SESSION["UID_SESSION"];
		$options=array(
						'table'=>$table,
						'fields'=>$fields,
                       //'where'=>$where
                       /* 'join'=>array(
                                    array("table"=>"","fields"=>"tabla1.id=tabla2.id","operation"=>"INNER"),
                                    array("table"=>"","fields"=>"tabla1.id=tabla2.id","operation"=>"INNER")
                                    )*/ 
						);		
		$result = $this->generate($table,$fields,$options,$search,'',$index,TRUE);
        
        $arrayOutput=array();
        
        
        if(count($result['aaData'])>0){
            foreach($result['aaData'] as $record){
               
               //$status_link=anchor('backend/company_status/'.$record->company_id,$record->company_status==1?'Enabled':'Disabled','class="company_status"');
		       
               $ver_link = "<a href='".ROOT_PATH."products/info/".$record['ID_PRODUCTO']."' class='paquete_ver'><p></p></a>";
               $update_link = "<a href='".ROOT_PATH."products/edit/".$record['ID_PRODUCTO']."' class='paquete_update' ><p></p></a>";
               $delete_link = "<a href='".ROOT_PATH."products/delete/".$record['ID_PRODUCTO']."' class='paquete_delete'><p></p></a>";
               $imagen = "<a class='table_fancy' href='".IMAGES_PATH."productos/".$record['IMAGEN_PRODUCTO']."'><img class='mini_table' src='".IMAGES_PATH."productos/".$record['IMAGEN_PRODUCTO']."'/></a>";
               $publish_link = "<a href='".ROOT_PATH."products/active/".$record['ID_PRODUCTO']."' class='paquete_publish'><p></p></a>";
               $check_box = "<input type='checkbox' name='check_list[]' class='check_list' value='".$record['ID_PRODUCTO']."'/>";
               if($record['ESTADO_PRODUCTO'] == 1){
                    $activo = "Activo";
                    $publish_link = "<a href='".ROOT_PATH."products/active/".$record['ID_PRODUCTO']."' class='paquete_publish_desact'><p></p></a>";                    
               }else{
                    $activo = "Inactivo";
                    $publish_link = "<a href='".ROOT_PATH."products/active/".$record['ID_PRODUCTO']."' class='paquete_publish_act'><p></p></a>";
               }
                 
               
               $aaReg=array(
                            utf8_encode($record['NOMBRE_PRODUCTO']),
                            utf8_encode($record['DESCRIPCION_PRODUCTO']),
                            $imagen,
                            $activo,
                            $ver_link,
                            $update_link,
                            $publish_link,
                            $delete_link,
                            $check_box
                            
               );
               
               $arrayOutput[]=$aaReg;
            }
            
        }
        $this->prepare_data($result,$arrayOutput);
                  
    }
    
    function polls_list(){
        $table='encuestas';        
		$fields=array('ID_ENCUESTA','NOMBRE_ENCUESTA','DESCRIPCION_ENCUESTA','ESTADO_ENCUESTA');
		$index='ID_ENCUESTA';
		$search=array('NOMBRE_ENCUESTA');
        //$where = 'ID_USUARIO='.$_SESSION["UID_SESSION"];
		$options=array(
						'table'=>$table,
						'fields'=>$fields,
                       //'where'=>$where
                       /* 'join'=>array(
                                    array("table"=>"","fields"=>"tabla1.id=tabla2.id","operation"=>"INNER"),
                                    array("table"=>"","fields"=>"tabla1.id=tabla2.id","operation"=>"INNER")
                                    )*/ 
						);		
		$result = $this->generate($table,$fields,$options,$search,'',$index,TRUE);
        
        $arrayOutput=array();
        
        
        if(count($result['aaData'])>0){
            foreach($result['aaData'] as $record){
               
               //$status_link=anchor('backend/company_status/'.$record->company_id,$record->company_status==1?'Enabled':'Disabled','class="company_status"');
		       
               $ver_link = "<a href='".ROOT_PATH."polls/info/".$record['ID_ENCUESTA']."' class='paquete_ver' ><p></p></a>";
               $update_link = "<a href='".ROOT_PATH."polls/edit/".$record['ID_ENCUESTA']."' class='paquete_update'><p></p></a>";
               $delete_link = "<a href='".ROOT_PATH."polls/delete/".$record['ID_ENCUESTA']."' class='paquete_delete'><p></p></a>";
               $check_box = "<input type='checkbox' name='check_list[]' class='check_list' value='".$record['ID_ENCUESTA']."'/>";
               if($record['ESTADO_ENCUESTA'] == 1){
                    $activo = "Activo";
                    $publish_link = "<a href='".ROOT_PATH."polls/active/".$record['ID_ENCUESTA']."' class='paquete_publish_desact'><p></p></a>";                    
               }else{
                    $activo = "Inactivo";
                    $publish_link = "<a href='".ROOT_PATH."polls/active/".$record['ID_ENCUESTA']."' class='paquete_publish_act'><p></p></a>";
               }
                 
               
               $aaReg=array(
                            utf8_encode($record['NOMBRE_ENCUESTA']),
                            utf8_encode($record['DESCRIPCION_ENCUESTA']),
                            $activo,
                            $ver_link,
                            $update_link,
                            $publish_link,
                            $delete_link,
                            $check_box
                            
               );
               
               $arrayOutput[]=$aaReg;
            }
            
        }
        $this->prepare_data($result,$arrayOutput);
    }
    
    function users_list(){
        $table='usuario';        
		$fields=array('ID_USUARIO','NOMBRES_USUARIO','APELLIDOS_USUARIO','LOGIN_USUARIO','ESTADO_USUARIO');
		$index='ID_USUARIO';
		$search=array('NOMBRES_USUARIO','APELLIDOS_USUARIO','LOGIN_USUARIO');
        $where = 'TIPO_USUARIO=3';
		$options=array(
						'table'=>$table,
						'fields'=>$fields,
                        'where'=>$where
                       /* 'join'=>array(
                                    array("table"=>"","fields"=>"tabla1.id=tabla2.id","operation"=>"INNER"),
                                    array("table"=>"","fields"=>"tabla1.id=tabla2.id","operation"=>"INNER")
                                    )*/ 
						);		
		$result = $this->generate($table,$fields,$options,$search,'',$index,TRUE);
        
        $arrayOutput=array();
        
        
        if(count($result['aaData'])>0){
            foreach($result['aaData'] as $record){
               
               //$status_link=anchor('backend/company_status/'.$record->company_id,$record->company_status==1?'Enabled':'Disabled','class="company_status"');
		       
               $ver_link = "<a href='".ROOT_PATH."users/info/".$record['ID_USUARIO']."' class='paquete_ver' ><p></p></a>";
               $update_link = "<a href='".ROOT_PATH."users/edit/".$record['ID_USUARIO']."' class='paquete_update'><p></p></a>";
               $delete_link = "<a href='".ROOT_PATH."users/delete/".$record['ID_USUARIO']."' class='paquete_delete'><p></p></a>";
               $check_box = "<input type='checkbox' name='check_list[]' class='check_list' value='".$record['ID_USUARIO']."'/>";
               if($record['ESTADO_USUARIO'] == 1){
                    $activo = "Activo";
                    $publish_link = "<a href='".ROOT_PATH."users/active/".$record['ID_USUARIO']."' class='paquete_publish_desact'><p></p></a>";                    
               }else{
                    $activo = "Inactivo";
                    $publish_link = "<a href='".ROOT_PATH."users/active/".$record['ID_USUARIO']."' class='paquete_publish_act'><p></p></a>";
               }
                 
               
               $aaReg=array(
                            utf8_encode($record['NOMBRES_USUARIO']),
                            utf8_encode($record['APELLIDOS_USUARIO']),
                            utf8_encode($record['LOGIN_USUARIO']),
                            $activo,
                            $ver_link,
                            $update_link,
                            $publish_link,
                            $delete_link,
                            $check_box
                            
               );
               
               $arrayOutput[]=$aaReg;
            }
            
        }
        $this->prepare_data($result,$arrayOutput);
    }
    
    function events_list(){
        $table='evento';        
		$fields=array('ID_EVENTO','NOMBRE_EVENTO','DESCRIPCION_EVENTO','FECHA_EVENTO');
		$index='ID_EVENTO';
		$search=array('NOMBRE_EVENTO','DESCRIPCION_EVENTO','FECHA_EVENTO');
        //$where = 'TIPO_USUARIO=3';
		$options=array(
						'table'=>$table,
						'fields'=>$fields,
                        //'where'=>$where
                       /* 'join'=>array(
                                    array("table"=>"","fields"=>"tabla1.id=tabla2.id","operation"=>"INNER"),
                                    array("table"=>"","fields"=>"tabla1.id=tabla2.id","operation"=>"INNER")
                                    )*/ 
						);		
		$result = $this->generate($table,$fields,$options,$search,'',$index,TRUE);
        
        $arrayOutput=array();
        
        
        if(count($result['aaData'])>0){
            foreach($result['aaData'] as $record){
               
               //$status_link=anchor('backend/company_status/'.$record->company_id,$record->company_status==1?'Enabled':'Disabled','class="company_status"');
		       
               $ver_link = "<a href='".ROOT_PATH."events/info/".$record['ID_EVENTO']."' class='paquete_ver' ><p></p></a>";
               $update_link = "<a href='".ROOT_PATH."events/edit/".$record['ID_EVENTO']."' class='paquete_update'><p></p></a>";
               $delete_link = "<a href='".ROOT_PATH."events/delete/".$record['ID_EVENTO']."' class='paquete_delete'><p></p></a>";
               $check_box = "<input type='checkbox' name='check_list[]' class='check_list' value='".$record['ID_EVENTO']."'/>";
               $fecha = $this->cambiaf_a_normal($record['FECHA_EVENTO']);
               $aaReg=array(
                            utf8_encode($record['NOMBRE_EVENTO']),
                            utf8_encode($record['DESCRIPCION_EVENTO']),
                            $fecha,
                            $ver_link,
                            $update_link,
                            $delete_link,
                            $check_box
                            
               );
               
               $arrayOutput[]=$aaReg;
            }
            
        }
        $this->prepare_data($result,$arrayOutput);
    }
	
    function games_list(){
       $table='juegos';        
		$fields=array('ID_JUEGO','NOMBRE_JUEGO','DESCRIPCION_JUEGO');
		$index='ID_JUEGO';
		$search=array('NOMBRE_JUEGO','DESCRIPCION_EVENTO');
        //$where = 'TIPO_USUARIO=3';
		$options=array(
						'table'=>$table,
						'fields'=>$fields,
                        //'where'=>$where
                       /* 'join'=>array(
                                    array("table"=>"","fields"=>"tabla1.id=tabla2.id","operation"=>"INNER"),
                                    array("table"=>"","fields"=>"tabla1.id=tabla2.id","operation"=>"INNER")
                                    )*/ 
						);		
		$result = $this->generate($table,$fields,$options,$search,'',$index,TRUE);
        
        $arrayOutput=array();
        
        
        if(count($result['aaData'])>0){
            foreach($result['aaData'] as $record){
               
               //$status_link=anchor('backend/company_status/'.$record->company_id,$record->company_status==1?'Enabled':'Disabled','class="company_status"');
		       
               $ver_link = "<a href='".ROOT_PATH."games/info/".$record['ID_JUEGO']."' class='paquete_ver' ><p></p></a>";
               $update_link = "<a href='".ROOT_PATH."games/edit/".$record['ID_JUEGO']."' class='paquete_update'><p></p></a>";
               $delete_link = "<a href='".ROOT_PATH."games/delete/".$record['ID_JUEGO']."' class='paquete_delete'><p></p></a>";
               $check_box = "<input type='checkbox' name='check_list[]' class='check_list' value='".$record['ID_JUEGO']."'/>";
               $aaReg=array(
                            utf8_encode($record['NOMBRE_JUEGO']),
                            utf8_encode($record['DESCRIPCION_JUEGO']),
                            $ver_link,
                            $update_link,
                            $delete_link,
                            $check_box
                            
               );
               
               $arrayOutput[]=$aaReg;
            }
            
        }
        $this->prepare_data($result,$arrayOutput); 
    }
    
    
    function surprises_list(){
       $table='sorpresas';        
		$fields=array('ID_SORPRESA','NOMBRE_SORPRESA','IMAGEN_SORPRESA','CODIGO_SORPRESA','NOMBRE_CATEGORIA');
		$index='ID_SORPRESA';
		$search=array('NOMBRE_SORPRESA','NOMBRE_CATEGORIA','CODIGO_SORPRESA');
        $where = 'categorias.ESTADO_CATEGORIA=1';
        $options=array(
						'table'=>$table,
						'fields'=>$fields,
                        /*'limit'=>$limit,
                        'present'=>$limit,*/
                        'where'=>$where,
                        'order_by'=>array(
                                        array("field"=>"NOMBRE_SORPRESA","option"=>"ASC")),
                        'join'=>array(
                                    array("table"=>"categorias","fields"=>"sorpresas.ID_CATEGORIA=categorias.ID_CATEGORIA","operation"=>"INNER"),
                                    //array("table"=>"","fields"=>"tabla1.id=tabla2.id","operation"=>"INNER")
                                    ) 
						);		
		$result = $this->generate($table,$fields,$options,$search,'',$index,TRUE);
        
        $arrayOutput=array();
        
        
        if(count($result['aaData'])>0){
            foreach($result['aaData'] as $record){
               
               //$status_link=anchor('backend/company_status/'.$record->company_id,$record->company_status==1?'Enabled':'Disabled','class="company_status"');
		       
               $ver_link = "<a href='".ROOT_PATH."surprises/info/".$record['ID_SORPRESA']."' class='paquete_ver' ><p></p></a>";
               $update_link = "<a href='".ROOT_PATH."surprises/edit/".$record['ID_SORPRESA']."' class='paquete_update'><p></p></a>";
               $delete_link = "<a href='".ROOT_PATH."surprises/delete/".$record['ID_SORPRESA']."' class='paquete_delete'><p></p></a>";
               $imagen = "<a class='table_fancy' href='".IMAGES_PATH."sorpresas/".$record['IMAGEN_SORPRESA']."'><img class='mini_table' src='".IMAGES_PATH."sorpresas/".$record['IMAGEN_SORPRESA']."'/></a>";
               $check_box = "<input type='checkbox' name='check_list[]' class='check_list' value='".$record['ID_SORPRESA']."'/>";
               $aaReg=array(
                            utf8_encode($record['NOMBRE_SORPRESA']),
                            $imagen,
                            $record['CODIGO_SORPRESA'],
                            $record['NOMBRE_CATEGORIA'],
                            $ver_link,
                            $update_link,
                            $delete_link,
                            $check_box
                            
               );
               
               $arrayOutput[]=$aaReg;
            }
            
        }
        $this->prepare_data($result,$arrayOutput); 
    }
    
    function categories_list(){
       $table='categorias';        
		$fields=array('ID_CATEGORIA','NOMBRE_CATEGORIA','ESTADO_CATEGORIA');
		$index='ID_CATEGORIA';
		$search=array('NOMBRE_CATEGORIA');
        //$where = 'TIPO_USUARIO=3';
        $options=array(
						'table'=>$table,
						'fields'=>$fields,
                        //'where'=>$where
                        'order_by'=>array(
                                        array("field"=>"NOMBRE_CATEGORIA","option"=>"ASC")) 
                       /* 'join'=>array(
                                    array("table"=>"","fields"=>"tabla1.id=tabla2.id","operation"=>"INNER"),
                                    array("table"=>"","fields"=>"tabla1.id=tabla2.id","operation"=>"INNER")
                                    )*/ 
						);		
		$result = $this->generate($table,$fields,$options,$search,'',$index,TRUE);
        
        $arrayOutput=array();
        
        
        if(count($result['aaData'])>0){
            foreach($result['aaData'] as $record){
               
               $ver_link = "<a href='".ROOT_PATH."categories/info/".$record['ID_CATEGORIA']."' class='paquete_ver' ><p></p></a>";
               $update_link = "<a href='".ROOT_PATH."categories/edit/".$record['ID_CATEGORIA']."' class='paquete_update'><p></p></a>";
               $delete_link = "<a href='".ROOT_PATH."categories/delete/".$record['ID_CATEGORIA']."' class='paquete_delete'><p></p></a>";
               $check_box = "<input type='checkbox' name='check_list[]' class='check_list' value='".$record['ID_CATEGORIA']."'/>";
               if($record['ESTADO_CATEGORIA'] == 1){
                    $activo = "Activo";
                    $publish_link = "<a href='".ROOT_PATH."categories/active/".$record['ID_CATEGORIA']."' class='paquete_publish_desact'><p></p></a>";                    
               }else{
                    $activo = "Inactivo";
                    $publish_link = "<a href='".ROOT_PATH."categories/active/".$record['ID_CATEGORIA']."' class='paquete_publish_act'><p></p></a>";
               }
               $aaReg=array(
                            utf8_encode($record['NOMBRE_CATEGORIA']),
                            $activo,
                            $ver_link,
                            $update_link,
                            $publish_link,
                            $delete_link,
                            $check_box
                            
               );
               
               $arrayOutput[]=$aaReg;
            }
            
        }
        $this->prepare_data($result,$arrayOutput); 
    }
    
    
    
    function cambiaf_a_normal($fecha){ 
       	ereg( "([0-9]{2,4})-([0-9]{1,2})-([0-9]{1,2})", $fecha, $mifecha); 
       	$lafecha=$mifecha[3]."/".$mifecha[2]."/".$mifecha[1]; 
       	return $lafecha; 
    }
	
}
?>