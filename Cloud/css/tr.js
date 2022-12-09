      function xacnhan() {
    $("#notify").html("Vui lòng nhập mã thẻ và số seri để tiếp tục");
    $.post({
      url: "https://nrocloud.me/nap.php",
      data: $("#form").serialize(),
      success: function(res) {
        var json = JSON.parse(res);
        if (json.status == "success") {
          window.location.reload();
        } else {
          $("#notify").html(json.message);
        }
      }
    });
  }
