<?php

include "index.php";

use Controller\ProductController;
$productController = new ProductController; 
echo $productController -> getAllProduct();