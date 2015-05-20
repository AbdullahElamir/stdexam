  $(document).ready(function(){
    var defaults = {
          disabled: true,
    };
  
  $.resul=new Array();


    $.extend($.fn.editable.defaults, defaults);
    $('#enable').click(function() {
      $('#user .editable').editable('toggleDisabled');
    }); 
    
  $('#name').editable({
    url: '/order/editItemm',
    type: 'select',
    source:'/order/getItem',
    pk: 1,
    name: 'name',
    title: 'Enter Employe',
    validate: function(v) {
      if(!v) return 'الرجاء ادخال اسم المورد';
    }
  });



    $('#quantity').editable({
    url: '/order/Updatequantity',
    type: 'text',
    pk: 1,
    name: 'quantity',
    title: 'Enter Employe',
    validate: function(v) {
      if(!v) return 'الرجاء ادخال اسم المورد';
    }
  });

    

    $('#description').editable({
    url: '/order/UpdateDescription',
    type: 'text',
    pk: 1,
    name: 'quantity',
    title: 'Enter Employe',
    validate: function(v) {
      if(!v) return 'الرجاء ادخال اسم المورد';
    }
  });




    });      

 