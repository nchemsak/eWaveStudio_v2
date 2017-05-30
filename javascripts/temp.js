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
                            <h4 class="modal-title">effects</h4>
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
                <li><a href="#">Load Sample...</a></li>
                <li role="separator" class="divider"></li>
                <li><a href="#">Settings</a></li>
                <li role="separator" class="divider"></li>
                <li><a data-href="/delete.php?id=54" data-toggle="modal" data-target="#confirm-delete">Delete Channel</a></li>





            </ul>
        </li>
        <span class="instrument-label">
            <strong><input type="text" class="form-control" id="" /></strong>
        </span>
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



    <div class="modal fade" id="confirm-delete" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">

                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                    <h4 class="modal-title" id="myModalLabel">Confirm Delete</h4>
                </div>

                <div class="modal-body">
                    <p>You are about to delete one track, this procedure is irreversible.</p>
                    <p>Do you want to proceed?</p>
                    <p class="debug-url"></p>
                </div>

                <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>
                    <a class="btn btn-danger btn-ok">Delete</a>
                </div>
            </div>
        </div>
    </div>

    </div>

    <script>
        $('#confirm-delete').on('show.bs.modal', function(e) {
            $(this).find('.btn-ok').attr('href', $(e.relatedTarget).data('href'));

            $('.debug-url').html('Delete URL: <strong>' + $(this).find('.btn-ok').attr('href') + '</strong>');
        });
    </script>


    `);
});







