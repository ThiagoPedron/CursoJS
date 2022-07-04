$(document).ready(function () {
  $('#example').DataTable({
    "language": {
      "url": '//cdn.datatables.net/plug-ins/1.12.1/i18n/pt-BR.json'
    },
  });
});

$(function () {

  var popOpts = {
    placement: 'right',
    title: 'Delete Item',
    html: 'true',
    content: 'Are you sure you want to delete this item?<br><button class="btn btn-default popover-submit" type="button">Yes</button><button class="btn btn-default" type="button">No</button>',
    //container: 'body'
  }


  // Delete button popover confirmation
  $(".btn-delete").popover(popOpts).on('shown.bs.popover', function (e) {
    var $delete = $(this)
    var $form = $delete.closest('form')
    var $pop = $form.find('.popover');
    var $popButtons = $pop.find('button').click(function () {
      if ($(this).is('.popover-submit')) {
        $form.submit();
      }
      $delete.popover('destroy').popover(popOpts);
    })
  });
})