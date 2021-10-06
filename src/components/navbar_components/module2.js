import React from 'react'

export const Module2 = () => {
    return (
        <div>
            {/*<!--Module - 2    --> */}
    <div class="tab-pane fade content-page" id="module2">
        <div class="row">
            <div class="col">
                <div class="iq-card iq-card-block iq-card-stretch iq-card-height">
                    <div class="iq-card-header d-flex justify-content-between">
                        <div class="iq-header-title">
                            <h4 class="card-title">Active Users</h4>
                        </div>
                        <div class="iq-card-header-toolbar d-flex align-items-center">
                            <div class="dropdown">
                                 <span class="dropdown-toggle text-primary" id="dropdownMenuButton5" data-toggle="dropdown">
                                 <i class="ri-more-fill"></i>
                                 </span>
                                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton5">
                                    <a class="dropdown-item" href="#"><i class="ri-printer-fill mr-2"></i>Print</a>
                                    <a class="dropdown-item" href="#"><i class="ri-file-download-fill mr-2"></i>Download</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="iq-card-body">
                        <div class="table-responsive">
                            <table class="table mb-0 table-borderless">
                                <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Username</th>
                                    <th scope="col">First Name</th>
                                    <th scope="col">Last Name</th>
                                    <th scope="col">Roles</th>
                                    <th scope="col">operation</th>

                                </tr>
                                </thead>
                                <tbody>
                                                                        <tr>
                                            <td>1</td>
                                            <td>admin</td>
                                            <td>Mr.admin</td>
                                            <td></td>
                                            <td>admin</td>
                                            <td>
                                                                                                    <a class="view" data-id="1"><i class="ri-eye-fill mr-2 text-primary"></i></a>
                                                                                                    <a class="update1" id="update1" data-id="1"><i class="ri-pencil-fill mr-2 text-primary"></i></a>
                                                                                                <a class="del" data-id="1"><i class="ri-delete-bin-6-fill mr-2 text-danger"></i></a>
                                            </td>
                                                                                    </tr>
                                                                        </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>

    {/*<!-- Roles Module --> */}
    <div class="tab-pane fade content-page" id="roles">
        <div class="row">
            <div class="col">
                <div class="d-flex justify-content-end mb-2">
                    <button type="button" id="modalabtn" name="modalabtn" class="btn btn-primary" data-toggle="modal" data-target="#modala">+ Add role</button>
                </div>

                <div class="iq-card iq-card-block iq-card-stretch iq-card-height">
                    <div class="iq-card-header d-flex justify-content-between">
                        <div class="iq-header-title">
                            <h4 class="card-title">Admin Panel</h4>
                        </div>
                        <div class="iq-card-header-toolbar d-flex align-items-center">
                            <div class="dropdown">
                                 <span class="dropdown-toggle text-primary" id="dropdownMenuButton5" data-toggle="dropdown">
                                 <i class="ri-more-fill"></i>
                                 </span>
                                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton5">
                                    <a class="dropdown-item" href="#"><i class="ri-printer-fill mr-2"></i>Print</a>
                                    <a class="dropdown-item" href="#"><i class="ri-file-download-fill mr-2"></i>Download</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="iq-card-body">
                        <div class="table-responsive">
                            <div class="result">
                                <form method="GET">
                                    <table class="table">
                                        <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Roles</th>
                                            <th scope="col">Role Info</th>
                                            <th scope="col">Action</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                                                                        <tr>
                                                    <td>0</td>
                                                    <td>user</td>
                                                    <td>normal user</td>
                                                    <td> <a class="view" data-id="0"><i class="ri-eye-fill mr-2 text-primary"></i></a>
                                                        <a class="updaterole1" id="updaterole1" data-id="0"> <i class="ri-pencil-fill mr-2 text-primary"></i></a>
                                                        <a class="del1" data-id="0"><i class="ri-delete-bin-6-fill mr-2 text-danger"></i></a></td>
                                                </tr>
                                                                                                <tr>
                                                    <td>1</td>
                                                    <td>admin</td>
                                                    <td>admin</td>
                                                    <td> <a class="view" data-id="1"><i class="ri-eye-fill mr-2 text-primary"></i></a>
                                                        <a class="updaterole1" id="updaterole1" data-id="1"> <i class="ri-pencil-fill mr-2 text-primary"></i></a>
                                                        <a class="del1" data-id="1"><i class="ri-delete-bin-6-fill mr-2 text-danger"></i></a></td>
                                                </tr>
                                                                                                <tr>
                                                    <td>2</td>
                                                    <td>manager</td>
                                                    <td>manager</td>
                                                    <td> <a class="view" data-id="2"><i class="ri-eye-fill mr-2 text-primary"></i></a>
                                                        <a class="updaterole1" id="updaterole1" data-id="2"> <i class="ri-pencil-fill mr-2 text-primary"></i></a>
                                                        <a class="del1" data-id="2"><i class="ri-delete-bin-6-fill mr-2 text-danger"></i></a></td>
                                                </tr>
                                                                                        </tbody>
                                    </table>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    </div>

{/*<!-- TOP Nav Bar --> */}
<div class="iq-top-navbar">
    <div class="iq-navbar-custom">
        <div class="iq-sidebar-logo">
            <div class="top-logo">
                <a href="index.php" class="logo">
                    <img src="../Asserts/images/logo.gif" class="img-fluid" alt=""/>
                    <span>vito</span>
                </a>
            </div>
        </div>
        <nav class="navbar navbar-expand-lg navbar-light p-0">
            <div class="navbar-left">
                <h3 class="ml-3">Shree Cottages and Party plot</h3>                                
            </div>
            
            
            <div class="collapse navbar-collapse" id="navbarSupportedContent">                
            </div>
            
            <ul class="navbar-list">
                <li>
                    <a href="#" class="search-toggle iq-waves-effect d-flex align-items-center bg-primary rounded">
                        <img src="../Asserts/images/user/1.jpg" class="img-fluid rounded mr-3" alt="user"/>
                        <div class="caption">
                            <h6 class="mb-0 line-height text-white">Mr.admin </h6>
                            <span class="font-size-12 text-white">Available</span>
                        </div>
                    </a>
                    <div class="iq-sub-dropdown iq-user-dropdown">
                        <div class="iq-card shadow-none m-0">
                            <div class="iq-card-body p-0 ">
                                <div class="bg-primary p-3">
                                    <h5 class="mb-0 text-white line-height">Hello Mr.admin </h5>
                                    <span class="text-white font-size-12">Available</span>
                                </div>
                                <a href="profile.php" class="iq-sub-card iq-bg-primary-hover">
                                    <div class="media align-items-center">
                                        <div class="rounded iq-card-icon iq-bg-primary">
                                            <i class="ri-file-user-line"></i>
                                        </div>
                                        <div class="media-body ml-3">
                                            <h6 class="mb-0 ">My Profile</h6>
                                            <p class="mb-0 font-size-12">View personal profile details.</p>
                                        </div>
                                    </div>
                                </a>
                                <a href="profile-edit.php" class="iq-sub-card iq-bg-primary-hover">
                                    <div class="media align-items-center">
                                        <div class="rounded iq-card-icon iq-bg-primary">
                                            <i class="ri-profile-line"></i>
                                        </div>
                                        <div class="media-body ml-3">
                                            <h6 class="mb-0 ">Edit Profile</h6>
                                            <p class="mb-0 font-size-12">Modify your personal details.</p>
                                        </div>
                                    </div>
                                </a>
                                <a href="account-setting.php" class="iq-sub-card iq-bg-primary-hover">
                                    <div class="media align-items-center">
                                        <div class="rounded iq-card-icon iq-bg-primary">
                                            <i class="ri-account-box-line"></i>
                                        </div>
                                        <div class="media-body ml-3">
                                            <h6 class="mb-0 ">Account settings</h6>
                                            <p class="mb-0 font-size-12">Manage your account parameters.</p>
                                        </div>
                                    </div>
                                </a>
                                <a href="privacy-setting.php" class="iq-sub-card iq-bg-primary-hover">
                                    <div class="media align-items-center">
                                        <div class="rounded iq-card-icon iq-bg-primary">
                                            <i class="ri-lock-line"></i>
                                        </div>
                                        <div class="media-body ml-3">
                                            <h6 class="mb-0 ">Privacy Settings</h6>
                                            <p class="mb-0 font-size-12">Control your privacy parameters.</p>
                                        </div>
                                    </div>
                                </a>
                                <div class="d-inline-block w-100 text-center p-3">
                                    <form action="../Database/loginPostMethod.php" method="post">
                                        <button class="bg-primary iq-sign-btn" name="logout" type="submit" role="button">Sign out<i class="ri-login-box-line ml-2"></i></button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </nav>
    </div>
</div>
{/*<!-- TOP Nav Bar END --> */}



    {/*<!-- update Modal --> */}
<div class="modal fade" id="updatetable" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="staticBackdropLabel">UPDATE</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                </button>
            </div>
            <div class="modal-body" id="info_update">
                <div class="container-fluid">
                    <form action="" class="validate" method="POST">
                        <div class="row g-2">
                            <div class="col-md-6 mb-3 name">
                                <label for="firstname" class="form-label">First name : </label>
                                <input type="text" class="form-control" name="fname" id="u-fname" required=""/>
                                <div class="invalid-feedback">
                                    Please enter a firstname!
                                </div>
                            </div>

                            <div class="col-md-6 mb-3 name">
                                <label for="lastname" class="form-label">Last Name : </label>
                                <input type="text" class="form-control" name="lname" id="u-lname" required=""/>
                                <div class="invalid-feedback">
                                    Please enter a lastname!
                                </div>
                            </div>

                            <div class="col-md-12 mb-3 name">
                                <label for="username" class="form-label">Username : </label>
                                <input type="text" class="form-control" name="user" id="u-user" required=""/>
                                <div class="invalid-feedback">
                                    Please enter a username!
                                </div>
                            </div>
                            <div class="col-md-12 mb-3">
                                <label for="username" class="form-label">Roles : </label>
                                <select class="form-control" name="roles" id="u-role">
                                    <option selected="" value="" disabled="">Select Roles</option>
                                                                            <option value="0">user</option>
                                                                            <option value="1">admin</option>
                                                                            <option value="2">manager</option>
                                                                    </select>
                                <div class="invalid-feedback">
                                    Please select role!
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" id="done1" class="btn btn-primary">update</button>
            </div>
        </div>
    </div>
</div>

    {/*<!--Add role Modal--> */}
<div class="modal fade bd-example-modal-xl" id="modala" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <h3 class="modal-title">ADD ROLE</h3>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                </button>
            </div>
            <div class="modal-body">
                <form method="GET" class="validate" id="newrole">
                <div class="row">
                    <div class="col">
                        <div class="iq-card iq-card-block iq-card-stretch iq-card-height">
                            <div class="container">

                                    <div class="form-row">
                                        <div class="col name">
                                            <input type="text" id="rolename" class="form-control" placeholder="Role" required=""/>
                                            <div class="invalid-feedback">
                                                Please enter a rolename!
                                            </div>
                                        </div>
                                        <div class="col name">
                                            <input type="text" id="roled" class="form-control" placeholder="Role Description" required=""/>
                                            <div class="invalid-feedback">
                                                Please enter a role detail!
                                            </div>
                                        </div>
                                    </div>

                            </div>
                            <div class="iq-card-body">
                                <div class="table-responsive">
                                    <div class="result">
                                            <table class="table">
                                                <thead>
                                                <tr>
                                                    <th scope="col">#</th>
                                                    <th scope="col">Modules</th>
                                                    <th scope="col">Update</th>
                                                    <th scope="col">View</th>
                                                    <th scope="col">Delete</th>
                                                </tr>
                                                </thead>
                                                <tbody>

                                                                                                <tr>
                                                    <td>1</td>
                                                    <td>Module-1</td>
                                                    <td><input type="checkbox" class="get_roles11" value="0"/></td>
                                                    <td><input type="checkbox" class="get_roles11" value="1"/></td>
                                                    <td><input type="checkbox" class="get_roles11" value="2"/></td>
                                                </tr>
                                                <tr>
                                                    <td>2</td>
                                                    <td>Module-2</td>
                                                    <td><input type="checkbox" class="get_roles22" value="0"/></td>
                                                    <td><input type="checkbox" class="get_roles22" value="1"/></td>
                                                    <td><input type="checkbox" class="get_roles22" value="2"/></td>
                                                </tr>
                                                <tr>
                                                    <td>3</td>
                                                    <td>Module-3</td>
                                                    <td><input type="checkbox" class="get_roles33" value="0"/></td>
                                                    <td><input type="checkbox" class="get_roles33" value="1"/></td>
                                                    <td><input type="checkbox" class="get_roles33" value="2"/></td>
                                                </tr>
                                                </tbody>
                                            </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                    </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="submit" id="submit" class="btn btn-primary" onclick="newr(1)">Save changes</button>
            </div>
        </div>
    </div>
</div>

    {/*<!-- update role Modal--> */}
<div class="modal fade updaterole" id="updaterole" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <h3 class="modal-title">UPDATE ROLE</h3>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                </button>
            </div>
            <div class="modal-body">
                <form class="validate">
                <div class="row">

                      <div class="col">
                        <div class="iq-card iq-card-block iq-card-stretch iq-card-height">

                            <div class="container">
                                <div class="form-row">
                                    <div class="col name">
                                        <input type="text" id="rolename1" class="form-control" placeholder="Role" required=""/>
                                        <div class="invalid-feedback">
                                            Please enter a rolename!
                                        </div>
                                    </div>
                                    <div class="col name">
                                        <input type="text" id="roleinfo" class="form-control" placeholder="Role Description" required=""/>
                                        <div class="invalid-feedback">
                                            Please enter a role detail!
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="iq-card-body">
                                <div class="table-responsive">
                                    <div class="result">
                                        
                                            <table class="table">
                                                <thead>
                                                <tr>
                                                    <th scope="col">Module</th>
                                                    <th scope="col">Update</th>
                                                    <th scope="col">View</th>
                                                    <th scope="col">Delete</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr>
                                                    <td>Module-1</td>
                                                    <td><input type="checkbox" id="m1-u" name="h" class="get_permission" value="m1-0"/></td>
                                                    <td><input type="checkbox" id="m1-v" name="h" class="get_permission" value="m1-1"/></td>
                                                    <td><input type="checkbox" id="m1-d" name="h" class="get_permission" value="m1-2"/></td>
                                                </tr>
                                                <tr>
                                                    <td>Module-2</td>
                                                    <td><input type="checkbox" id="m2-u" name="h" class="get_permission" value="m2-0"/></td>
                                                    <td><input type="checkbox" id="m2-v" name="h" class="get_permission" value="m2-1"/></td>
                                                    <td><input type="checkbox" id="m2-d" name="h" class="get_permission" value="m2-2"/></td>
                                                </tr>
                                                <tr>
                                                    <td>Module-3</td>
                                                    <td><input type="checkbox" id="m3-u" name="h" class="get_permission" value="m3-0"/></td>
                                                    <td><input type="checkbox" id="m3-v" name="h" class="get_permission" value="m3-1"/></td>
                                                    <td><input type="checkbox" id="m3-d" name="h" class="get_permission" value="m3-2"/></td>
                                                </tr>
                                                </tbody>

                                            </table>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                      </div>
                  
                </div></form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary" id="savepermission">Save</button>
            </div>
        </div>
    </div>
</div>

    {/*<!--user View Modal --> */}
<div class="modal fade" id="viewmodal" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h3 class="modal-title">View</h3>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="form-row mb-2">
                            <div class="col-3">
                                <h5><b>Username:</b></h5>
                            </div>
                            <div class="col">
                                <h5 id="v-username"></h5>
                            </div>
                        </div>
                        <div class="form-row mb-2">
                            <div class="col-3">
                                <h5><b>Firstname:</b></h5>
                            </div>
                            <div class="col">
                                <h5 id="v-firstname"></h5>
                            </div>
                        </div>
                        <div class="form-row mb-2">
                            <div class="col-3">
                                <h5><b>Lastname:</b></h5>
                            </div>
                            <div class="col">
                                <h5 id="v-lastname"></h5>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="col-3">
                                <h5><b>Role:</b></h5>
                            </div>
                            <div class="col">
                                <h5 id="v-role"></h5>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
</div>

    {/*<!--admin panel Modal    --> */}
<div class="modal fade" id="view-admin" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h3 class="modal-title">View</h3>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="form-row mb-2">
                            <div class="col-3">
                                <h5><b>Role:</b></h5>
                            </div>
                            <div class="col">
                                <h5 id="v-role1"></h5>
                            </div>
                        </div>
                        <div class="form-row mb-2">
                            <div class="col-3">
                                <h5><b>Role Info:</b></h5>
                            </div>
                            <div class="col">
                                <h5 id="v-roleinfo"></h5>
                            </div>
                        </div>
                        <div class="form-row mb-2">
                            <div class="col-3">
                                <h5><b>Permission:</b></h5>
                            </div>
                            <div class="col">
                                <h5 id="v-permission"></h5>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>

        </div>
    )
}
