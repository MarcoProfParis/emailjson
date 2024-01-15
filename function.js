window.function = function (name) {

  name = name.value ?? "";

  if (name == "") {
    return "";
  }

  else {
    name = name.trim();
    arr = name.split(" ");
    final = arr[0];
    return final;
  }

}
