import React from "react"

function Parking() {
    return (
      <div className="App">
		  <div className="container">
    <div className="page-header-extended">
      <h4 className="page-title">Parking lot</h4>
    </div>
    <div className="info-table-header-block">
      <input type="text" placeholder="Search" id="member_search" onkeyup="getTableData()"/>
    </div>
    <div className="starter-template">
      <div className="info-table-header-block">
        <button type="button slot" className="pbtn btn-primary slot-button" data-toggle="modal" data-target="#addnewModal">
          Add new vehicle
        </button>
      </div>
      <div className="modal fade" id="addnewModal" tabindex="-1" role="dialog" aria-labelledby="addnewModalTitle" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title" id="addnewModalTitle">Add new vehicle</h4>
            </div>
            <div className="modal-body">
              <form id="saveMemberInfo">
                <div className="form-group">
                  <label for="reg_no">Registration no
                    <span className="required-field">*</span>
                  </label>
                  <input type="text" className="form-control" placeholder="Enter registration no:" id="reg_no" required />
                </div>
                <div className="form-group">
                  <label for="owner_name">Owner name
                    <span className="required-field">*</span>
                  </label>
                  <input type="text" className="form-control" placeholder="Enter owner name:" id="owner_name" required />
                </div>
                <div className="form-group">
                  <label for="d_o_a">Date of allocation
                    <span className="required-field">*</span>
                  </label>
                  <input type="text" className="form-control" placeholder="Enter date of allocation" id="d_o_a" required onkeypress="return false;" />
                </div>
                <div className="form-group">
                  <label for="slot">Slot number
                    <span className="required-field">*</span>
                  </label>
                  <input type="number" className="form-control" placeholder="Enter slot number" id="slot" required min="1" max="10" maxlength="2"/>
                </div>
                <div className="modal-footer-extended">
                  <button type="submit" className="pbtn btn-primary">Create</button>
                  <button type="button" className="pbtn btn-secondary" data-dismiss="modal">Cancel</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <table id="member_table" className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Registration no.</th>
            <th>Owner name</th>
            <th>Date of allocation</th>
            <th>Slot number</th>
            <th>Actions</th>
          </tr>
        </thead>
      </table>
      <div className="show-table-info hide">
        <div className="alert alert-info center">
          <strong>Parking lot is empty</strong>
        </div>
      </div>
    </div>
  </div>
  <div id="show_user_info">
    <div className="modal fade" id="showModal" tabindex="-1" role="dialog" aria-labelledby="showModalTitle" aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title" id="showModal">Vehicle Information</h4>
          </div>
          <div className="modal-body">
            <div className="form-group">
              <label for="show_reg_no">Registration no</label>
              <input type="text" className="form-control" id="show_reg_no" value="" disabled/>
            </div>
            <div className="form-group">
              <label for="show_owner_name">Owner name</label>
              <input type="text" className="form-control" id="show_owner_name" value="" disabled/>
            </div>
            <div className="form-group">
              <label for="show_d_o_a">Date of allocation</label>
              <input type="text" className="form-control" id="show_d_o_a" value="" disabled/>
            </div>
            <div className="form-group">
              <label for="show_slot">Slot number</label>
              <input type="number" className="form-control" id="show_slot" value="" disabled/>
            </div>
            <div className="modal-footer-extended">
              <button type="button" className="pbtn btn-secondary" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div id="show_user_info">
    <div className="modal fade" id="editModal" tabindex="-1" role="dialog" aria-labelledby="editModalTitle" aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title" id="editModal">Edit Vehicle Information</h4>
          </div>
          <div className="modal-body">
            <form>
              <div className="form-group">
                <label for="edit_reg_no">Registration no
                  <span className="required-field">*</span>
                </label>
                <input type="text" className="form-control" id="edit_reg_no" value="" required />
              </div>
              <div className="form-group">
                <label for="edit_owner_name">Owner name
                  <span className="required-field">*</span>
                </label>
                <input type="text" className="form-control" id="edit_owner_name" value="" required />
              </div>
              <div className="form-group">
                <label for="edit_d_o_a">Date of allocation
                  <span className="required-field">*</span>
                </label>
                <input type="text" className="form-control" id="edit_d_o_a" value="" required onkeypress="return false;" />
              </div>
              <div className="form-group">
                <label for="edit_slot">Slot number
                  <span className="required-field">*</span>
                </label>
                <input type="number" className="form-control" id="edit_slot" value="" required />
              </div>
              <div className="form-group">
                <input type="hidden" className="form-control" id="member_id"/>
              </div>
              <div className="modal-footer-extended">
                <button type="button" className="pbtn btn-success" onclick="updateMemberData();">Update</button>
                <button type="button" className="pbtn btn-danger" data-dismiss="modal">Cancel</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div id="show_user_info">
    <div className="modal fade" id="deleteDialog" tabindex="-1" role="dialog" aria-labelledby="deleteDialogTitle" aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title" id="deleteDialog">Warning!</h4>
          </div>
          <div className="modal-body">
            <h4>Are you sure you want to delete this request? </h4>
            <input type="hidden" id="deleted-member-id" value=""/>
            <div className="modal-footer-extended">
              <button className="pbtn btn-danger" onclick="deleteMemberData()">Delete</button>
              <button type="button" className="pbtn btn-secondary" data-dismiss="modal">Cancel</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
      </div>
    );
  }
  
  export default Parking;