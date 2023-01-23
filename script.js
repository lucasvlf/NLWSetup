const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)
const button = document.querySelector("header button")

button.addEventListener("click", add)
form.addEventListener("change", save)
function add() {
  const today = new Date().toLocaleDateString("pt-br").slice(0, -5)
  const dayExists = nlwSetup.dayExists(today)

  if (dayExists) {
    alert("Dia ja incluso!")
    return
  }
  alert("Dia adicionado com sucesso ✔")

  nlwSetup.addDay(today)
}

function save() {
  localStorage.setItem("NLWSetupHabits", JSON.stringify(nlwSetup.data))
}

//const data = {
// water: ["01-01", "01-02", "01-03", "01-04", "01-05"],
//}
const data = JSON.parse(localStorage.getItem("NLWSetupHabits")) || {}
nlwSetup.setData(data)
nlwSetup.load()
