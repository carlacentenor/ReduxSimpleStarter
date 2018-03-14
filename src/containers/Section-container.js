import { connect } from 'react-redux';
import Section from '../components/Section';

function mapStateToProps(state){
    
    return { info : state.info }
   }

export default connect(mapStateToProps)(Section)