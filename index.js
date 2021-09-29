export { default as SendBirdProvider } from './SendbirdProvider.js';
export { default as App } from './App.js';
export { default as ChannelSettings } from './ChannelSettings.js';
export { default as ChannelList } from './ChannelList.js';
export { default as Channel, getAllEmojisFromEmojiContainer, getEmojiCategoriesFromEmojiContainer, getEmojisFromEmojiContainer } from './Channel.js';
import { S as SendbirdSdkContext } from './LocalizationContext-b81db37c.js';
export { g as getStringSet, w as withSendBird } from './LocalizationContext-b81db37c.js';
export { default as OpenChannel } from './OpenChannel.js';
export { default as OpenChannelSettings } from './OpenChannelSettings.js';
export { default as MessageSearch } from './MessageSearch.js';
export { s as sendBirdSelectors } from './index-8c938b6d.js';
import { useContext } from 'react';
import 'prop-types';
import 'sendbird';
import './actionTypes-486b0988.js';
import 'css-vars-ponyfill';
import './index-2eb85071.js';
import './LeaveChannel-c1de11a7.js';
import './index-2282d297.js';
import './index-712a433c.js';
import './utils-c85af9b9.js';
import './index-73b2ceb6.js';
import './index-47c8b917.js';
import './index-8b57d003.js';
import './index-d8c9b7c3.js';
import 'react-dom';

/**
 * Example:
 * const MyComponent = () => {
 *  const context = useSendbirdStateContext();
 *  const sdk = sendbirdSelectors.getSdk(context);
 *  return (<div>...</div>);
 * }
 */

function useSendbirdStateContext() {
  var context = useContext(SendbirdSdkContext);
  return context;
}

export { useSendbirdStateContext };
//# sourceMappingURL=index.js.map
