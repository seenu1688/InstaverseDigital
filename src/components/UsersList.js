import React, {Component} from 'react';
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import $ from 'jquery'; 
export default class UsersList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            users: [],
            classes_count: 5,
            input: {},
            errors: {},
            member_id:0,
            searchkey:""
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        let initsearchkey = window.location.href.slice(window.location.href.indexOf('?') + 1).split('=')[1];        
        let self = this;
        fetch('http://localhost:4000/users', {
            method: 'GET'
        }).then(function(response) {
            if (response.status >= 400) {
                throw new Error("Bad response from server");
            }
            return response.json();
        }).then(function(data) {
            let promises = data.map(function(user){
                return fetch('http://localhost:4000/latestclass/'+user.id, {
                    method: 'GET'
                }).then(function(response) {
                    if (response.status >= 400) {
                        throw new Error("Bad response from server");
                    }
                    return response.json();
                }).then(function(data) {
                    user.latest_class = (data[0]) ? data[0] : {};             
                    return user;
                }).catch(err => {
                    console.log('caught it!',err);
                });
            });
            Promise.all(promises).then((response)=>{
                self.setState({users: response});
                $('#userlistdata').DataTable({
                    "order": [[ 0, "desc" ]],
                    "initComplete": function () {
                        this.api().search(initsearchkey).draw();
                    }
                });
            })
            
        }).catch(err => {
        console.log('caught it!',err);
        })
    }

    handleChange(event) {
        let input = this.state.input;
        input[event.target.name] = event.target.value;
      
        this.setState({
          input
        });
      }

    handleSubmit(event){
        event.preventDefault();
        let postdata = {};
        postdata['member_id'] = this.state.member_id;
        postdata['total'] = this.state.input.total;
        postdata['paid'] = this.state.input.paid;
        
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(postdata)
        };
        fetch('http://localhost:4000/updatepayment', requestOptions)
        .then(response => response.json())
        .then(data => {
            let input = {};
            input["total"] = "";
            input["paid"] = "";
            this.setState({input:input});
                alert(data.result);
                var parsedUrl = window.location.href.split('?')[0];
                window.location.href = ($('.dataTables_filter input').val() != "") ? parsedUrl+'?search='+$('.dataTables_filter input').val() : parsedUrl;
            });
    }

    changeClass = (event,member_id) => {
        let postdata = {};
        postdata['class_number'] = event.target.value;
        postdata['member_id'] = member_id;
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(postdata)
        };
        fetch('http://localhost:4000/updateclass', requestOptions).then(response=>{
            console.log(response.json());
            alert('Updated!!');
        })
    }

    render() {
        return (
        <div className="container sm-padding userslist"> 
            <div className="panel panel-default p50 uth-panel table-responsive">
                <table className="table table-hover" id="userlistdata">
                    <thead>
                        <tr>
                            <th>Member id</th>
                            <th>Member name</th>
                            <th>Email</th>
                            <th>Phone number</th>
                            
                            <th>Class Attended</th>
                            <th>Attended Date</th>
                            <th>Total</th>
                            <th>Paid</th>
                            <th>Balance amount</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.state.users.map((member, index) =>
                        <tr key={member.id}>
                        <td>{member.id}</td>
                        <td>{member.firstname} {member.lastname} </td>
                        <td>{member.email}</td>
                        <td>{member.phone}</td>                        
                        <td>
                            <select onChange={(event)=>this.changeClass(event,member.id)} defaultValue={member.latest_class.class_number}>
                                {Array.from(Array(this.state.classes_count).keys()).map(i=>{
                                    return <option value={i} key={i}>{i}</option>;
                                })}
                            </select> 
                        </td>
                        <td>{member.latest_class.attended_date ? (new Date(member.latest_class.attended_date)).toString().replace('GMT+0530 (India Standard Time)','') : ''}</td>
                        <td>{member.total}</td>
                        <td>{member.paid}</td>
                        <td>{member.total - member.paid}</td>
                        <td><button className="btn btn-info" data-toggle="modal" data-target="#exampleModal" onClick={()=>{this.setState({member_id:member.id,input:{...this.state.input,total:member.total,paid:member.paid}})}}>edit</button></td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>
            <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Payment</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <form className="contact-form" onSubmit={this.handleSubmit}>
                    <div className="modal-body">     
                    <div>
                    <label>Total</label>               
                    <input type="text" className="input" placeholder="Total" value={this.state.input.total} onChange={this.handleChange} name="total" />
                    </div>
                    <div>
                    <label>Paid</label>               
                    <input type="text" className="input" placeholder="Paid" value={this.state.input.paid} onChange={this.handleChange} name="paid" />
                    </div>
                    </div>
                    <div className="modal-footer">
                        <button type="submit" className="btn btn-primary">Save changes</button>
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                    </form>
                    </div>
                </div>
                </div>
        </div>
        );
    }
}