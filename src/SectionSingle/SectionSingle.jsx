import React from 'react';
import { connect } from 'react-redux';
import {Container, Row} from 'react-bootstrap'
import SectionItem from '../SectionItem/SectionItem';
//import { setSectionItems } from '../redux/section/section.actions';

const SectionSingle =(props)=>{
    console.log(props);
    //const { items }= props.location.state.items;

    return(
    
    
    <Container>
      <Row>
      {props.Its.map(item => 
      (
        <SectionItem
         key={item.id}
         item={item}
         secTitle={props.Sec.title}
         >
        </SectionItem>
      )
      )}
      </Row>
    </Container>)


}
const mtp= (zemoums, ownProps) =>{
  const id = ownProps.match.params.id;
  const sec = zemoums.section.sections[id-1];
  return {
    Sec: sec,
    Zemoums: zemoums,
    Its: sec.items
  }
  
}

export default connect(mtp)(SectionSingle);
