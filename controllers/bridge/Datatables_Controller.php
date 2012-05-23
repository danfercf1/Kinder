<?php
class Datatables_Controller extends FD_Management
{
	var $options=array();
    
	function Datatables_Controller()
	{
        parent::FD_Management();
        $this->Session->check("login");
	} 
	
    public function make_sql($options)
    {
        if(isset($options["table"]) and isset($options["fields"]) and is_array($options["fields"]))
        {
            $sql="SELECT ";
            foreach($options["fields"] as $kf=>$field)
            {
                if($kf!=0){$sql.=",";}                    
                $sql.=$field;
            }    
            $sql.=" FROM ".$options["table"];
            
            if(isset($options["join"]))
            {
                foreach($options["join"] as $join)
                {
                    $sql.=" ".$join["operation"]." JOIN ".$join["table"]." ON ".$join["fields"]." ";                    
                }                
            }             
            
            if(isset($options["and_like"]) or isset($options["or_like"]) or isset($options["where"]))
            {
                $sql.=" WHERE 1=1 AND ";
            }
            
            
            if(isset($options["where"]) and $_POST["sSearch"]!='')
            {
                $sql.=$options["where"]." AND ";
            }else{
                $sql.=$options["where"];
            }
            
            if(isset($options["and_like"]) and count($options["and_like"])>0)
            {                
                foreach($options["and_like"] as $kol=>$like)
                {
                    if($kol!=0){$sql.=" AND ";}
                    $sql.=$like["field"]." LIKE '%".$like["value"]."%' ";
                }
            }
            
            if(isset($options["or_like"]) and count($options["or_like"])>0)
            {             
                foreach($options["or_like"] as $kol=>$or_like)
                {
                    if($kol!=0){$sql.=" OR ";}
                    $sql.=$or_like["field"]." LIKE '%".$or_like["value"]."%' ";
                }
            }            
            
            if(isset($options["order_by"]) and count($options["order_by"])>0)
            {
                $sql.=" ORDER BY ";
                foreach($options["order_by"] as $ko=>$order_by)
                {
                    if($ko!=0){$sql.=",";}
                    $sql.=$order_by["field"]." ".strtoupper($order_by["option"])." ";    
                }
            }
            
            if(isset($options["present"]) and isset($options["limit"]))
            {
                $sql.=" LIMIT ".$options["present"].",".$options["limit"];
            }
            //echo $sql;
            return $sql;
        }
        else
        {
            return FALSE;
        }        
    }
    
	public function generate($table,$columns,$options,$buscar,$crud=false,$index='',$result=false)
    {
        
    	$this->options=$options;
		$sLimit = $this->get_paging();
	
        
        $this->options['order_by'] = $this->get_ordering($columns);
        
		$sWhere = $this->get_filtering($columns,$buscar);  
		
		switch($sWhere[0])
		{
			case 'OR':$this->options['or_like']=$sWhere[1];break;
			case 'AND':$this->options['like']=$sWhere[1];break;
		}      		        
        
        $this->Connection->execQuery($this->make_sql($this->options));
        
        $rResult_nolimit = $this->Connection->getResultsQuery();      
      		
		$iTotal=$rResult_nolimit!==FALSE?count($rResult_nolimit):0;		
		
		if(!isset($sLimit['nolimit']))
		{
			$this->options['limit']=$sLimit['limit'];
			$this->options['present']=$sLimit['present'];            
		}
		
        $this->Connection->execQuery($this->make_sql($this->options));        
		$rResult=$this->Connection->getResultsQuery();
		return $this->produce_output($iTotal,$rResult!==FALSE?count($rResult):0,$rResult!==FALSE?$rResult:array(),$crud,$index,$result);	
    }

    protected function get_paging()
    {
		$sLimit = array();

		if($_POST["iDisplayStart"] && $_POST["iDisplayLength"] != "-1")
		{
			$sLimit=array('limit'=>$_POST["iDisplayLength"],'present'=>$_POST["iDisplayStart"]);
		}
		else
		{
			if($_POST["iDisplayLength"] == "-1")
			{
				$sLimit=array('nolimit'=>1);	
			}
			else
			{
				$sLimit=array('limit'=>$_POST["iDisplayLength"],'present'=>'0');		
			}
		}

		

      return $sLimit;	  
    }

    protected function get_ordering($columns)
    {
      $sOrder = array();

		if($_POST["iSortCol_0"]!='')
		{
			for($i = 0; $i < intval($_POST["iSortingCols"]); $i++)
			{
				if ( $_POST['bSortable_'.intval($_POST['iSortCol_'.$i])] == "true" )
				{
					$sOrder[]=array(
								  'field'=>$columns[intval($_POST["iSortCol_" . $i])],
								  'option'=>$_POST["sSortDir_" . $i]
								  );
				}
			}		
		}
		return $sOrder;
    }

    protected function get_filtering($columns,$buscar)
    {
		$sLike = array();
		$op="";
		if($_POST["sSearch"] != "")
		{
			$op='OR';
			for($i = 0; $i < count($columns); $i++)
			{
				foreach($buscar as $b)
				{
					if($columns[$i]==$b){
					$sLike[]=array('field'=>$columns[$i],'value'=>$_POST["sSearch"],'wildcard'=>'both');}
				}
			}
		}else
		{
			$op='AND';
			for($i=0;$i<$_POST['iColumns'];$i++)
			{
				if($_POST['sSearch_'.$i]!='')
				{
					if(isset($buscar['search_'.$i]))
					{		
						foreach($buscar['search_'.$i] as $k=>$b)
						{
							if($b[1]=='OR')
							{
								$this->options['or_where'][]=array('field'=>$k,'value'=>$b[0]);	
							}
							else
							{
								$this->options['where'][$k]=$b[0];
							}
								
						}				
						
					}
					else
					{
						$sLike[]=array('field'=>$columns[$i],'value'=>$_POST['sSearch_'.$i],'wildcard'=>'both');
					}
				}	
			}					
		}
		
		$sLikes=array($op,$sLike);
		
		return $sLikes;
    }   

    protected function produce_output($iTotal,$rResultTotal,$rResult,$crud,$index='',$result=false)
    {
		if($result)
		{
			return array
						(
						"sEcho"                => intval($_POST["sEcho"]),
						"iTotalRecords"        => $iTotal,
						"iTotalDisplayRecords" => $iTotal,
						"aaData"               => $rResult
						);
		}
		else
		{
			$aaData = array();
			$url_id='';
			
			if(count($rResult)>0)
			{
				foreach($rResult as $row_key => $row_val)
				{
					foreach($row_val as $col_key => $col_val)
					{
						if($col_key==$index){$url_id=$col_val;}
						$aaData[$row_key][] = utf8_encode($col_val);			
					}
					
					if($crud!=false)
					{
						if($crud['sw']==1)
						{
							$edit=$crud['edit'].$url_id;
							$delete=$crud['delete'].$url_id;
						}
						else
						{
							$edit=$crud.'crud/'.$url_id;
							$delete=$crud.'del/'.$url_id;	
						}
						$aaData[$row_key][] = anchor($edit,'Edit',array('class'=>'editar'));
						$aaData[$row_key][] = anchor($delete,'Delete',array('class'=>'eliminar'));
					}
				}	
			}
			
			$sOutput = array
			(
			"sEcho"                => intval($_POST["sEcho"]),
			"iTotalRecords"        => $iTotal,
			"iTotalDisplayRecords" => $iTotal,
			"aaData"               => $aaData
			);
			return json_encode($sOutput);
		}
    }
	
	
	
}
?>