document.getElementById('todo1').onclick = function(e)
{
  var textTodo = document.getElementById("TodoText1");
  
  if (this.checked)
  {
    textTodo.innerHTML = "<del>Không trượt môn</del> Oke";
  }
  else
  {
    textTodo.innerHTML = "Không trượt môn";
  }
}


document.getElementById('todo2').onclick = function(e)
{
  var textTodo = document.getElementById("TodoText2");

  if (this.checked)
  {
    textTodo.innerHTML = "<del>Master Rubik</del> Good Job";
  }
  else
  {
    textTodo.innerHTML = "Master Rubik";
  }
}

document.getElementById('todo3').onclick = function(e)
{
  var textTodo = document.getElementById("TodoText3");

  if (this.checked)
  {
    textTodo.innerHTML = "<del>Tập thể dục hằng ngày</del> Ăn hằng ngày";
  }
  else
  {
    textTodo.innerHTML = "Tập thể dục hằng ngày";
  }
}

document.getElementById('todo4').onclick = function(e)
{
  var textTodo = document.getElementById("TodoText4");

  if (this.checked)
  {
    textTodo.innerHTML = "<del>Làm nhân viên chính thức</del> Mấy năm nữa nhớ :))";
  }
  else
  {
    textTodo.innerHTML = "Làm nhân viên chính thức";
  }
}

document.getElementById('todo5').onclick = function(e)
{
  var textTodo = document.getElementById("TodoText5");

  if (this.checked)
  {
    textTodo.innerHTML = "<del>Kiếm người yêu</del> Có cái nịt";
  }
  else
  {
    textTodo.innerHTML = "Kiếm người yêu";
  }
}