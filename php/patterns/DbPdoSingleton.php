<?php
class DbPdoSingleton {

	protected static $instance;
	
	protected function __construct() {
	}

	public static function getInstance() {
	
		if(empty(self::$instance)) {
		
			try {
			
				$str = "mysql:host=".pSRVNAME.';dbname='.pDBNAME;
				//echo $str."\n\n<br>";
				self::$instance = new PDO($str, pUSRNOME, pUSRPWD);
				
				if (self::$instance->getAttribute(PDO::ATTR_DRIVER_NAME) == 'mysql') {
				
					$sql = 'select * from '.pDBNAME;
					
					self::$instance->beginTransaction();
					$cmd = self::$instance->prepare($sql);
					
					if ($cmd->execute()) {
						if ($query = self::$instance->query('fetch all in cursorname')) {
							//print_r($query);
							$query->closeCursor();
							$cmd->closeCursor();
						}
					}
					self::$instance->commit();
				
				} else {
					die("my application only works with mysql; I should use \$stmt->fetchAll() instead");
				}
			
			}
			catch(PDOException $e) {
				echo $e->getMessage();
			}
		
		}
		
		return self::$instance;
	
	}
}

?>