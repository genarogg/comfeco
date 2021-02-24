import React from 'react';
import A from '../../nano/A';

const Community = ({ _id, name, foto, url}) => {
  return(
    <div id={_id} className="card-com-body">
      <div className="card-com-content">
        <img className="card-com-img" src={ foto } />
        <span className="card-com-title"> { name }</span>
      </div>
      {url && <A type={ 'a' } css={ 'card-com-link' } href={ url }><span>Unirme</span></A>}
    </div>
  )
}

export default Community;