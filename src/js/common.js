$(document).ready(function() {

    //header css_include
    $('header').load('/src/html/layout/header.html',function(){
    	$(this).find('header').unwrap('header');
    });

    //footer css_include
    $('footer').load('/src/html/layout/footer.html',function(){
    	$(this).find('footer').unwrap('footer');
    });

		$(".datepicker").datepicker({
			changeMonth: true,
			changeYear: true,
			showButtonPanel: false,
			showOn: "button",
			buttonImage: "/dist/images/common/ic-calendar.png",
			buttonImageOnly: true,
			showOtherMonths: true,
			selectOtherMonths: true
		});

});
