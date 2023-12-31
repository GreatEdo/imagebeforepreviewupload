// function bacaGambar(input) {
//     if (input.files && input.files[0]) {
//       var reader = new FileReader();
//       reader.onload = function(e) {
//         $("#gambar_load").attr('src', e.target.result);
//       }
//       reader.readAsDataURL(input.files[0]);
//     }
//   }
//   $("#preview_gambar").change(function() {
//     bacaGambar(this);
//   });

const image = document.querySelector("img"),
    input = document.querySelector("input");
input.addEventListener("change", () => {
    image.src = URL.createObjectURL(input.files[0]);
});