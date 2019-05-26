<body>
	<?php
		$g= $_GET['submit_btn'];
		echo "<script type="text/javascript">alert('$g');</script>";?>
		Welcome <?php echo $_GET['name'];?><br>
		Your email:<?php echo $_GET['email'];?><br>
		Your car:<?php echo $_GET['cars'];?><br>
		Your gender:<?php echo $_GET['gender'];?><br>
		Your message:<?php echo $_GET['message'];?><br>s
</body>