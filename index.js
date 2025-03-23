
let para= "<p style='color:red'>hi</p>"

$('.btn').click(function() {
    $('.myDiv').append(para)
})

$(document).ready(function() {
    $('#hide').click(function() {
        $('#text-hide').hide()
    })
    
    $('#show').click(function() {
        $('#text-hide').show()
    })
})

