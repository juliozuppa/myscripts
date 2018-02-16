<?php

// <img src="data:image/png;base64,...> data:image/jpeg;charset=utf-8;base64,
// http://danielmclaren.com/node/90

$image = 'http://images.itracki.com/2011/06/favicon.png';
// Read image path, convert to base64 encoding
$imageData = base64_encode(file_get_contents($image));

// Format the image SRC:  data:{mime};base64,{data};
$src = 'data: '.mime_content_type($image).';base64,'.$imageData;

// Echo out a sample image
echo '<img src="'.$src.'">';