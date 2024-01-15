window.function = function (name) {

  name = name.value ?? "";

  if (name == "") {
    return "";
  }

  else {
    const response = await fetch(`https://randomuser.me/api/?results=3`);
    name = name.trim();
    arr = name.split(" ");
    final = arr[0];
    return response;
  }

}
