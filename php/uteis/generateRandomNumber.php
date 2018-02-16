<?php

/**
 * Method generateRandomNumber
 *
 * Gera um número incrivelmente grande. Mas deve-se tomar cuidado
 * com o limite de memória definido no php e
 * o limite de tempo de execução de um script.
 * Levando em consideração que cada caractere/digito consome 1 byte de memória
 * 1.000.000 caracteres consumirá aproximadamente 1,2MB
 *
 * @author Julio Cesar <juliozuppa@gmail.com>
 *
 * @param $digits
 *
 * @return bool|string
 *
 */
function generateRandomNumber($digits)
{
    $randomStr = mt_rand();
    $len = strlen($randomStr);
    while ($len < $digits) {
        $randomStr .= mt_rand();
        $len = strlen($randomStr);
    }
    //echo (memory_get_peak_usage(true)/1024/1024) . ' MB' . PHP_EOL;
    return substr($randomStr, 0, $digits);
}

/*
$start = microtime(true);
for($i = 0; $i<1000; $i++) {
	echo generateRandomNumber(20) . PHP_EOL;
}
$final = microtime(true) - $start;
echo PHP_EOL . 'Tempo: ' . $final . ' segundos' . PHP_EOL . PHP_EOL;
*/

$start = microtime(true);
generateRandomNumber(1000000) . PHP_EOL;
$final = microtime(true) - $start;
echo PHP_EOL . 'Tempo: ' . $final . ' segundos' . PHP_EOL;


