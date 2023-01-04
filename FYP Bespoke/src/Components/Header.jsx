import React, {useState} from 'react'
import Navbar from './Navbar'
import image from '../images/bg.png'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Post from '../Pages/Post'
function Header() {

  const [post, setPost] = useState(false);
    const handleClosePost = () => setPost(false);
    const handlePost = () => setPost(true);

    const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // const ShowAlertComponent = () => {
  //   const showAlert = () => {
  //     return(
  //       <Post></Post>
  //     )
  //   }}


  return (
    <div>
      <div className='name'>
          <h1><span>Bespoke</span><br/>A Customized Product Platform</h1>
          <p className='details'>Find your dream customized products by sitting at home. Your dreams are our responsinility.</p>
          <div className='button'>
          <a href='#' onClick={handleShow} className='cv-btn'>Post Order</a>
          <a href='#' className='cv-btn'>Get Order</a>
          <a href='#' className='cv-btn'>Shop</a>
          </div>
      </div>
      <div className='sideImage'>
      <img style={{ width: "450px", height: "500px", marginLeft: '700px', marginTop:'55px' }} src={image} alt=''/>
      </div>



      {/* catagory modal */}
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton style={{color:'#00b7ff'}}>
          <Modal.Title>Post order</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
          <p>Catagory</p>
            <Form.Select aria-label="Default select example">
            <option>Select Catagory</option>
            <option value="1">Food</option>
            <option value="2">Furniture</option>
            <option value="3">Cloths</option>
          </Form.Select>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={()=> {handlePost(); handleClose()}} style={{backgroundColor:'#00b7ff', color:'#ffffff'}}>
            Continue
          </Button>
        </Modal.Footer>
      </Modal>





       {/* registration modal */}

       <Modal show={post} onHide={handleClosePost}>
        <Modal.Header closeButton style={{color:'#00b7ff'}}>
          <Modal.Title>Post Order</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="title"
                placeholder="e.g customize a dress"
                autoFocus
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Details</Form.Label>
              <Form.Control
                type="textarea"
                placeholder="text here"
                autoFocus
              />
              </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Due Date</Form.Label>
              <Form.Control type="date"
                placeholder=""
                autoFocus />
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Asstimated Budget</Form.Label>
              <Form.Control
                type="price"
                placeholder="0/Rs."
                autoFocus
              />
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Location</Form.Label>
              <Form.Control
                type="location"
                placeholder="e.g Lahore"
                autoFocus
              />
            </Form.Group>

           
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClosePost} style={{backgroundColor:'#00b7ff', color:'#ffffff'}}>
            Post
          </Button>
        </Modal.Footer>
      </Modal>
    </div>


  ) 
}

export default Header
