document.getElementById("addSabzavot").addEventListener("click",() => {
    let sabzavotInput = document.getElementById("sabzavotInput");
    let sabzavot = sabzavotInput.value;
  
    if (sabzavot !== "") {
        let li = document.createElement("li");
      li.textContent = sabzavot;
  
      document.getElementById("sabzavotlarList").appendChild(li);
      sabzavotInput.value = "";
    }
  });
  