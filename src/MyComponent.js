import React from 'react';

import {withTweekKeys} from '@npmsoluto/react-tweek';

const MyComponent = (props) => {
    const {shouldmultiplex = "waiting..."} = props;
    const {remoteprompttimeoutIsenabled = "waiting..."} = props;
    const {resendscreenshotrequests = "waiting..."} = props;
    
    return (
      <div>
          <div>{'shouldmultiplex: ' + shouldmultiplex}</div>
          <div>{'remoteprompttimeout_isenabled: ' + remoteprompttimeoutIsenabled}</div>
          <div>{'resendscreenshotrequests: ' + resendscreenshotrequests}</div>                    
      </div>
    )
}

export default withTweekKeys("legacy/mobileremote/_")(MyComponent);