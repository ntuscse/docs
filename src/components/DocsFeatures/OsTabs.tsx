import React, { ReactNode } from 'react';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

interface OsTabsProps {
  windows?: ReactNode;
  macos?: ReactNode;
  linux?: ReactNode;
}

const OsTabs = ({windows, macos, linux}: OsTabsProps) => {
  return <Tabs groupId="operating-systems">
    {windows ? <TabItem value="win" label="Windows">
      {windows}
    </TabItem> : null}
    {macos ? <TabItem value="mac" label="macOS">
      {macos}
    </TabItem> : null}
    {linux ? <TabItem value="linux" label="Linux">
      {linux}
    </TabItem> : null}
  </Tabs>
}

export default OsTabs
