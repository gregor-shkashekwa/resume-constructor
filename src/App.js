import React from 'react';
import {View, Panel} from "@vkontakte/vkui";
import '@vkontakte/vkui/dist/vkui.css';
import ResumeConstructor from './components/resumeConstructor';

export default function App(){
  return (
    <View activePanel="new-user">
      <Panel id="new-user">
        <ResumeConstructor/>
      </Panel>
    </View>
  );
}