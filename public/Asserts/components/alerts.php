<!-- ------------Documentation -----created by Niyam-->
<!-- -> initialise the $_SESSION['alert-title'] and $_SESSION['alert-body'].-->
<!-- -> include this php file where you want to show alert.-->
<?php
    if(isset($_SESSION['alert-title'])){
        if($_SESSION['alert-title'] == 'Success'){
            echo '<div class="alert alert-success" role="alert">
                <div class="iq-alert-text">' . $_SESSION["alert-body"] . '</div>
            </div>';
        }
        if($_SESSION['alert-title'] == 'Error'){
            echo '<div class="alert alert-warning" role="alert">
                <div class="iq-alert-text">' . $_SESSION["alert-body"] . '</div>
            </div>';
        }
        unset($_SESSION['alert-title']);
        unset($_SESSION['alert-body']);
    }
?>