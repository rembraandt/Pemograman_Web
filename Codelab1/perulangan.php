<?php
// Segitiga Sama Sisi
echo "1. Segitiga Sama Sisi\n";
$size = 5;
for($i = 1; $i <= $size; $i++) {
    // Print spaces
    for($j = $size - $i; $j > 0; $j--) {
        echo " ";
    }
    // Print stars
    for($k = 0; $k < (2 * $i - 1); $k++) {
        echo "*";
    }
    echo "\n";
}

echo "\n"; // Line break between patterns

// Segitiga Sama Sisi Terbalik
echo "2. Segitiga Sama Sisi Terbalik\n";
for($i = $size; $i >= 1; $i--) {
    // Print spaces
    for($j = $size - $i; $j > 0; $j--) {
        echo " ";
    }
    // Print stars
    for($k = 0; $k < (2 * $i - 1); $k++) {
        echo "*";
    }
    echo "\n";
}
?>
