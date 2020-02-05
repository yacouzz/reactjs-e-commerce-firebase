import React from 'react';
import MenuItem from '../MenuItem/MenuItem';
import {Row} from 'react-bootstrap';
//import {setSectionItems} from '../redux/section/section.actions';
//import {Link} from 'react-router-dom';
import { connect } from 'react-redux';


class Directory extends React.Component{
 
  
constructor(props){
  super(props)
  console.log(props);
  
}
  render(){
        return(
            <Row style={{marginTop:'100px'}}>
                {
                  this.props.sections.section.sections.map(section =>(
                        <MenuItem key={section.id} title={section.title} imageUrl={section.imageUrl} index={section.id}/>
                ))
                }
            </Row>
        );
    }
}

const mtp= sections =>({
  sections: sections
})
/*const mapDispatchToProps = (dispatch) => ({
  setSectionItems: sections => dispatch(setSectionItems(sections))
})*/
export default connect(mtp)(Directory);