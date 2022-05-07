document.querySelector("#lastmod").textContent = document.lastModified;
// try{
//     let options = {
//         year: "numeric"
//     }
//     document.getElementById("#currentyear").textContent = new Date().toLocaleDateString("en-US", options);
// } catch (e) {
//     alert("Error with code in browser");
// }
const currentYear = "2022";
document.querySelector('#year').textContent = currentYear