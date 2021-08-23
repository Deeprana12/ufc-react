<div class="p-3" style="z-index: 5; position: absolute; bottom: 0; right: 0;">
    <div id="liveToast" class="toast hide" role="alert" aria-live="assertive" aria-atomic="true">
        <div class="toast-header">
            <img src="../Asserts/images/favicon.ico" alt="" width="15" height="15">

            &nbsp;&nbsp;
            <strong class="mr-auto" id="toast-title">Success</strong>
            <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
                <span aria-hidden="true">×</span>
            </button>
        </div>
        <div class="toast-body" id="toast-body">
            ...
        </div>
    </div>
</div>

<script>
    $(document).ready(function(){
        let msgTitle = $("#notification-title").val();
        let msgBody = $("#notification-body").val();

        getToast(msgTitle, msgBody);
    });

    function getToast(title, msg){
        $("#toast-title").text(title);
        $("#toast-body").text(msg);
        $(".toast").toast({ delay: 4000 });
        $(".toast").toast('show');
    }

</script>