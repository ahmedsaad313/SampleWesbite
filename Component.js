class Component extends React.Component{
  constructor (props){
    super(props);
    this.database = firebase.database().ref();
    this.state = {
      list: [],
    }
    this.database.on("child_added", this.addData);
    
  }
   
  addData = (rowData) => {
    const row = rowData.val();
    const act = row.action;
    let newList = this.state.list;
    newList.push(act);
    this.setState({state:newList});
  }
  
  removeFromList = (index) => {
    let newList = this.state.list;
    newList.splice(index, 1);
    this.setState({state: newList});
  }


  addToList = () => {
    let act = document.getElementsByTagName("input")[0].value;
    document.getElementsByTagName("input")[0].value = "";
    let value = {
      action:act,
    }
    console.log(this.database.push(value).getKey());
  }

  render(){
    return(
        <div>
          <h1>To Do List</h1>
          {this.state.list.map((act, index) =>
            <div className = "item">
            <p> {act} </p>
            <button onClick = {() => this.removeFromList(index)} className = "finish">Finished</button>
          </div>
          )}
          <div id = "button-input">
            What to do: <input type = "text"></input>
            <button onClick= {this.addToList} id = "submit" > Submit</button>
          </div>
        </div>
    );
  }
}