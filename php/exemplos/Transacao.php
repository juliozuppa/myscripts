<?php
$tenta=1;
while ( $tenta == 1 ) {
  $query = mysql_query("START TRANSACTION");
  $comando = "INSERT INTO empresas VALUES (
    '$cdempresa', '$cdsetorativ', '$cdtipo', 
    '$txsenha', '$txnomefantasia', '$txrazaosocial', 
    '$txlogradouro', '$txbairro', '$txcidade', 
    '$nucep', '$txemailadd', '$nutelefone', 
    '$txhistorico', '$txurlsite', '$dtcadastro', '$aoativo'
  )";
  $query = mysql_query($comando);
  if (!$query) {
    if ( mysql_errno == 1213 ) { 
      // Erro de DeadLock - a transacao deve ser cancelada e reiniciada
      $query = mysql_query("ROLLBACK");
      $tenta=1;
    } else { 
      // O Erro nao foi por deadlock, o usuario deve ser avisado.
      // A transacao deve ser cancelada com ROLLBACK
      printf("Erro na tentativa de Exclus&atilde;o!<br>\n");
      printf("Comando: %s<br>\n",$comando);
      printf("Mensagem %s: %s <br>\n",mysql_errno($db),mysql_error($db));
      $query = mysql_query("ROLLBACK");
      $tenta=0;
    }
  } else { 
    // Nao tem erro! A transacao deve ser concluida e o usuario avisado.
    $query = mysql_query("COMMIT");
    printf("Empresa: <b> $cdempresa </b> - Inclu&iacute;do com sucesso!<br>\n");
    $tenta=0;
  }
}
?>