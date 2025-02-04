import React, { useState } from 'react';

import ActiveImage from '../../../assets/images/investor-logos/Illusionist/Color.png';
import InactiveImage from '../../../assets/images/investor-logos/Illusionist/Mono.png';

const Active = (props) => (
  <img alt="" {...props} src={ActiveImage} />
);

const Inactive = (props) => (
  <img alt="" {...props} src={InactiveImage} />
);


const LDCapital = ({ className }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div onMouseEnter={() => setIsActive(true)} onMouseLeave={() => setIsActive(false)}>
      {isActive ? <Active className={className}/> : <Inactive className={className} />}
    </div>
  );
};

export default LDCapital;
