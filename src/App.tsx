import React from 'react';
import { View, Panel} from "@vkontakte/vkui";
import '@vkontakte/vkui/dist/vkui.css';
import ResumeConstructor from './components/resumeConstructor';

export interface AppProps {}

const App: React.FC<AppProps> = () => {
  return (
    <View activePanel="new-user">
      <Panel id="new-user">
        <ResumeConstructor />
      </Panel>
    </View>
  );
};

export default App;