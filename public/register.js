$(function () {
  $('#register').on('click', function () {
    $.ajax({
      url: 'register',
      method: 'post',
      data: {
        account: $('#account').val(),
        password: $('#password').val()
      },
      dataType: 'json',
      success: function (data, status, xhr) {
        console.log(data)
      },
      error: function (xhr, status, error) {
        console.log(error);
      }
    });
  });
});