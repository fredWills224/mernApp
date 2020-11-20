import React from 'react';
import axios from 'axios';

class App extends React.Component{

  state ={
    title: '',
    body: '',
    posts: []
  };

  componentDidMount = ()=>{
    this.getBlogPost();
  };

  getBlogPost = ()=>{

    axios.get('/api')
      .then((response)=>{
        const data = response.data;
        this.setState({ posts: data });
        console.log('Data has been received!!!!');
      })
      .catch(()=>{
        console.log('Error retrieving data!!!!');
        alert('Error retrieving data!!!!');
      });
    ;

  };

  handleChange = ({ target })=>{
    
    const { name, value } = target;
    this.setState({
      //[name] dynamicly passes in 'title' from input and 'body' from textArea 
      [name]: value
    });

  };

  submit = (event)=>{
    
    //stoping the browser's behavior, keeping it from refreshing
    event.preventDefault();
    const payload = {
      title: this.state.title,
      body: this.state.body
    };

    axios({
      //[http://localhost:8080] no longer needed in url because it has been added
      //as a proxy in the clients package.json which routes every unknown request that
      //port 3000 recieves to port 8080
      url:'/api/save',
      method: 'POST',
      data: payload
    })
      .then(()=>{
        console.log('Data has been sent to the server');
        this.resetUserInputs();
        this.getBlogPost();
      })
      .catch(() =>{
        console.log('Internal server error');
      });;
    ;

  };

  resetUserInputs = ()=>{
    
    this.setState({
      title: '',
      body:''
    });
  
  };

  displayBlogPost = (posts)=>{

    if(!posts.length) return null;
    return posts.map((post, index)=>(
      <div key={index}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    ));

  };

  render(){

    console.log('State: ', this.state);
    //jsx
    return(
      <div>

        <h2>Welcome to my App</h2>
        <form onSubmit={this.submit}>

          <div className='form-input'>
            <input
              type='text'
              name= 'title'
              placeholder='Title'
              value= {this.state.title}
              onChange={this.handleChange}
            />
          </div>

          <div className='form-input'>
            <textarea 
              name='body' 
              placeholder='message' 
              cols='30' rows='10' 
              value={this.state.body} 
              onChange={this.handleChange}
            >

            </textarea>
          </div>
          
          <button>Submit</button>

        </form>

        <div className='blog-post'>
          {this.displayBlogPost(this.state.posts)}
        </div>

      </div>
    );

  };

}

export default App;