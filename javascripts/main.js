"use strict";

$(".addChannel").click(function() {
    $("#sequencer").append(
        `<div class="row" data-instrument="hihat">
        <form>
            <label class="checkbox">
                <input type="checkbox">
            </label>
        </form>

        <a href="#" class="dropdown-toggle" data-toggle="modal" data-target="#myModal" aria-expanded="false">
                <img src="images/fx_1.png" class="fx" />
            </a>
            <div class="modal fade" id="myModal" role="dialog">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                            <h4 class="modal-title content-head">effects</h4>
                        </div>
                        <div class="modal-body">
                            <ul>
                                <li><a href="#">Delay</a></li>
                                <li><a href="#">Flanger</a></li>
                                <li><a href="#">Tremolo</a></li>
                                <li><a href="#">Distortion</a></li>
                                <li><a href="#">Reverb</a></li>
                            </ul>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>


        <li class="dropdown">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                <svg aria-hidden="true" height="16" viewBox="0 0 8 16" width="8">
                    <path d="M8 4v1H0V4h8zM0 8h8V7H0v1zm0 3h8v-1H0v1z"></path>
                </svg>
            </a>
            <ul class="dropdown-menu">
                <li><input id="load" name="load" type="file" accept="audio/*"><label for="load">Load Sample...</label></li>
                <li><a href="#">Select Sample...</a></li>
                <li role="separator" class="divider"></li>
                <li><a href="#">Settings</a></li>
                <li role="separator" class="divider"></li>
                <li><a href="#">Delete Channel</a></li>
            </ul>
        </li>

        <div class="pad column_0"></div>
        <div class="pad column_1"></div>
        <div class="pad column_2"></div>
        <div class="pad column_3"></div>
        <div class="pad column_4"></div>
        <div class="pad column_5"></div>
        <div class="pad column_6"></div>
        <div class="pad column_7"></div>
        <div class="pad column_8"></div>
        <div class="pad column_9"></div>
        <div class="pad column_10"></div>
        <div class="pad column_11"></div>
        <div class="pad column_12"></div>
        <div class="pad column_13"></div>
        <div class="pad column_14"></div>
        <div class="pad column_15"></div>
    </div>`);
});
