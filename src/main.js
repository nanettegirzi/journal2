import { Entry } from './journal';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function(){
  $('#entry-form').submit(function(event){
    event.preventDefault();
    var title = $("#title").val();
    var body = $('#body').val();
    var output = new Entry(title, body);
    $("#titleResult").text(output.title);
    $("#bodyResult").text(output.body);
    $("#wordCountResult").text(output.TotalWords(body));
    $("#vowelCountResult").text(output.CountVowels(body));
    $("#consonantCountResult").text(output.CountConsonants(body));
  });
});
