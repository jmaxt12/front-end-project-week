
import React from 'react';



class Note extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedNote: '',
      notes: []
    }
  }

  

  render() { 
    const id = this.props.match.params.id.slice(1);
 
    const note = this.props.notes[id]
    
  return (
    <div>
        <div>
            <p>edit</p>
            <p>delete</p>
        </div>
        <div>
            <h1>{note.title}</h1>
            <p>{note.textBody}</p>
        </div>
    </div>
   )
  }
}

export default Note;