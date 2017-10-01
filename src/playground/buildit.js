class Visibility extends React.Component {
  constructor(props) {
    super(props);
    this.handleTogglevisibility = this.handleTogglevisibility.bind(this);

    this.state = {
      visibility: false
    };
  }

  handleTogglevisibility(){
    this.setState((prevState) => {
      return {
        visibility: !prevState.visibility
      }
    })
  };

  render() {
    return (
      <div>
         <h1>Toggle</h1>
         <button onClick={this.handleTogglevisibility}>
         {this.state.visibility ? 'hide details' : 'show details'}
         </button>
         {this.state.visibility && (
           <div>
             <p> details</p>
           </div>
         )}
       </div>
    );
  }
}
ReactDOM.render(<Visibility />, document.getElementById('app'));
