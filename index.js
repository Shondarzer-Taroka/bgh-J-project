
let para= "<p style='color:red'>hi</p>"

$('.btn').click(function() {
    $('.myDiv').append(para)
})

$(document).ready(function() {
    // $('#hide').click(function() {
    //     $('#text-hide').hide(1000)
    // })
    
    // $('#show').click(function() {
    //     $('#text-hide').show(1000)
    // })


  $("#hide").click(function() {
     $("#text-hide").toggle(1000)
  })
   
})

