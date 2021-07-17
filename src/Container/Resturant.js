import React, { Component } from 'react'
import { Label, FormGroup, Button, Input } from 'reactstrap'
import Axios from 'axios'
import ListResturant from './ListResturant'


export default class AddRestuarant extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       resturant_name: null,
       resturant_address: null,
       fooditem: null,
       res_image: null,
       food : [],
       imgPreview:null,
       config: {
        headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
    },
    selectedFile: null,
    }
    this.handleFileSelect = this.handleFileSelect.bind(this)
  }

    handleFileSelect = (e) => {
      this.setState({
        selectedFile: e.target.files[0],
        imgPreview:URL.createObjectURL(e.target.files[0])
      })
    }

    handleChange = (e) => {
      this.setState({
        [e.target.name]: e.target.value
      })
    }

    handleFoodChange = (e) => {
      this.setState({
        fooditem : e.target.value
      });
    }

    addRest = () => {
      const data = new FormData();
      data.append('imageFile',this.state.selectedFile)
      Axios.post('http://localhost:90/upload', data, this.state.config)
      .then((response) => {
          this.setState({
              res_image: response.data.filename
          })
          Axios.post('http://localhost:90/resturants',this.state,this.state.config)
          .then((response) => {
            alert("Restaurant added successfully");
            console.log(response.data)
          })
          .catch((err) => console.log(err.response))
      }).catch((err) => console.log(err.response))
    }
      

    render() {
      return (
        <>
     
        <div className="container">
          <h2 style={{color:'#34495E'}}>Add Resturant</h2><hr/>
          <div className="row">
            <div className="col-md-8">
              <form style={{backgroundColor:'#EAF2F8'}} className="p-3">
                <FormGroup>
                  <Input type='text' id="resturantname" name='resturant_name' value={this.state.resturant_name}
                    onChange={this.handleChange} placeholder="Enter restaurant name" required/>
                </FormGroup>
                <FormGroup>
                  <Input type='text' id='resturant_address' name='resturant_address' value={this.state.resturant_address}
                    onChange={ this.handleChange} placeholder="Enter restaurant address" required/>
                    </FormGroup>
                  <FormGroup style={{display: "ruby"}}>
                    <Label className="btn btn-outline-info float-left" htmlFor="filePicker">Upload image for restaurant</Label>
                    <Input id="filePicker" style={{visibility:"hidden"}} type='file' name='res_image' onChange={this.handleFileSelect}/>
                  </FormGroup>
                  <Button type="submit" color='success' onClick={this.addRest} block>Add Resturant</Button>
              </form>
            </div>
            <div className="col-md-4 flex">
              <img alt="Image Preview" 
              style={{display:'block', border: '1px solid gray', width:"200px", textAlign:'center'}} 
              src={this.state.imgPreview}/><br/>
            </div>
          </div>
              <hr></hr>
              <h2 style={{color:'#34495E'}}>View Restaurant</h2>
            <ListResturant />
          </div>




          import React, { Component } from 'react'
import { Table, Button, Modal, ModalHeader, ModalBody, ModalFooter,Input } from 'reactstrap';
import Axios from 'axios'


export default class ListFoods extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
                 _id: '',
                 resturant_name: '',
                 resturant_address: '',
                 res_image:'',
                 popular: [],
                 resturant: [],
                 modal : false,
                 isupdated: false,
                 config: {
                    headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
                },
                selectedFile: null,
                imgPreview:null,
          }
          this.toggle = this.toggle.bind(this);
      }

  toggle() {
    this.setState({
    modal: !this.state.modal
    })
  }
             
  componentDidMount() {
    Axios.get('http://localhost:90/resturants',this.state.config)
    .then((response)=>{
      const data = response.data;
      this.setState({popular:  data});
      this.setState({resturant: data});        
      console.log("data fecth");       
    }).catch(error => console.log(error.response));
  }

  handleFileSelect = (e) => {
    this.setState({
      selectedFile: e.target.files[0],
      imgPreview: URL.createObjectURL(e.target.files[0])
    })
  }     
       
  handleChange = (e)  =>{
    this.setState({
      [e.target.name]: e.target.value 
    })
  }

  deleteresturant(resId){
    Axios.delete(`http://localhost:90/resturants/${resId}`, this.state.config)
    .then((response) => {
      console.log("delete trying")
    })
  }

  handleEdit = (resId) => {
    this.setState({
      modal: !this.state.modal
    });
    Axios.get(`http://localhost:90/resturants/${resId}`,this.state.config)
    .then((response)=>{
      const data = response.data;
      this.setState({
        resturant: data,
        imgPreview:`http://localhost:90/pictures/${data.res_image}`
      });         
    }).catch(error => console.log(error.response)); 
  }

  handleupdate = (e) =>{
    this.setState({
      resturant: { ...this.state.resturant, [e.target.name]: e.target.value }
    })
  }
     
  updateRestaurant = (resId) => {
    const data = new FormData()
    data.append('imageFile', this.state.selectedFile)
    Axios.post('http://localhost:90/upload', data, this.state.config)
    .then((response) => {
      this.setState({
        res_image: response.data.filename
      })
      console.log(response)
      Axios.put(`http://localhost:90/resturants/${resId}`, 
      { 
        resturant_name:this.state.resturant.resturant_name,
        resturant_address: this.state.resturant.resturant_address,
        res_image:this.state.res_image 
      },this.state.config)
        .then((response) => {
          // alert("Restaurant updated successfully")
            window.location.reload();
          console.log(response.data)
        })
        .catch((err) => console.log(err.response))
    }).catch((err) => console.log(err.response))
    }    
  
    render() {
        return (
            <Table hover>
            <thead>
              <tr>
                <th>Resturant Name</th>
                <th>Resturant Address</th>
                <th>Resturant Image</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
                {
                  this.state.popular.map(pop => 
                  <tr key={pop._id}>
                    <td>{pop.resturant_name}</td>
                    <td>{pop.resturant_address}</td>
                          <td><img alt="img" src={`http://localhost:90/pictures/${pop.res_image}`} style={{height: "50px",width:"50px"}}/></td>
                    <td><a className="btn btn-success" onClick={() => this.handleEdit(pop._id)}>
                                        Edit</a></td>
                    <td><a onClick={() => this.deleteresturant(pop._id)} className="btn btn-danger" href="">Delete</a></td>
                  </tr>
                  )
                }
    
        <Modal isOpen={this.state.modal}>
          <ModalHeader toggle={this.toggle}><legend>Update</legend></ModalHeader>
          <ModalBody>
                <legend><h3>Update Resturant</h3></legend>
                <div className="form-group">
                    <label> Resturant Name</label> 
                      <input type="text" name="resturant_name" className="form-control"
                        value ={this.state.resturant.resturant_name} onChange={this.handleupdate}/> 
                  </div>
                  <div className="form-group">
                      <label>Resturant Address</label>
                      <input type="text" name="resturant_address" className="form-control"
                      value={this.state.resturant.resturant_address}  
                      onChange={this.handleupdate}  />
                  </div>
                  <img className='img-thumbnail' width='200'
                  src={this.state.imgPreview} alt="resImg" />
                  <Input type='file' name='res_image' id='res_image'
                    onChange={this.handleFileSelect}/>
                  <button className="btn btn-primary btn-block" onClick={() => this.updateRestaurant(this.state.resturant._id)}>Update</button>   
          </ModalBody>
          <ModalFooter>
          </ModalFooter>
        </Modal>
      </tbody>
    </Table>
    )
  }
}














          </>
        )
      }
    }

