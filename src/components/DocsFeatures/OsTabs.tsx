import React from 'react';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

const OsTabs = ({windows, macos, linux}) => {
  return <Tabs groupId="operating-systems">
    <TabItem value="win" label="Windows">
      {windows}
    </TabItem>
    <TabItem value="mac" label="macOS">
      {macos}
    </TabItem>
    <TabItem value="linux" label="Linux">
      {linux}
    </TabItem>
  </Tabs>
}

export default OsTabs
