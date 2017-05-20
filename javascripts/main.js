"use strict";

$(".addChannel").click(function() {
  $("#sequencer").append('<div class="row" data-instrument="hihat"><form><label class="checkbox"><input type="checkbox"></label></form><li class="dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><svg aria-hidden="true" height="16" viewBox="0 0 8 16" width="8"><path d="M8 4v1H0V4h8zM0 8h8V7H0v1zm0 3h8v-1H0v1z"></path></svg></a><ul class="dropdown-menu"><li><a href="#">Delay</a></li><li><a href="#">Flanger</a></li><li><a href="#">Tremolo</a></li><li><a href="#">Distortion</a></li><li><a href="#">Reverb</a></li><li role="separator" class="divider"></li><li><a href="#">Settings</a></li></ul></li><span class="instrument-label"><strong><input type="text" class="form-control" id="" /></strong></span><div class="pad column_0">0</div><div class="pad column_1">1</div><div class="pad column_2">2</div><div class="pad column_3">3</div><div class="pad column_4">4</div><div class="pad column_5">5</div><div class="pad column_6">6</div><div class="pad column_7">7</div><div class="pad column_8">8</div><div class="pad column_9">9</div><div class="pad column_10">10</div><div class="pad column_11">11</div><div class="pad column_12">12</div><div class="pad column_13">13</div><div class="pad column_14">14</div><div class="pad column_15">15</div></div>');
});



// <div class="form-group"><input type="text" class="form-control" id=""></div>
