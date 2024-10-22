let count = 0;

document.getElementById("plus").addEventListener("click", function() {
  count++;
  document.getElementById("count").textContent = count;
});

document.getElementById("minus").addEventListener("click", function() {
  if (count > 0) {
    count--;
    document.getElementById("count").textContent = count;
  }
});

document.getElementById("reset").addEventListener("click", function() {
  count = 0;
  document.getElementById("count").textContent = count;
});

document.getElementById("showCount").addEventListener("click", function() {
  alert("Siz " + count + " marta zikir aytdingiz.");
});
