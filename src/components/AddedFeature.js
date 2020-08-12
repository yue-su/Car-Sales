import React from 'react';
import { useDispatch } from 'react-redux'
import { deleteFeature} from '../actions/index'

const AddedFeature = props => {

  const dispatch = useDispatch()

  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button
        onClick={() => dispatch(deleteFeature(props.feature.id))}
        className="button">
        X
      </button>
      {props.feature.name}
    </li>
  )
};


export default AddedFeature;
