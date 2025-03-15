import ReactDOM from 'react-dom/client';
import App from './App';
import vkBridge from '@vkontakte/vk-bridge';
import { ConfigProvider, AdaptivityProvider } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

vkBridge.send("VKWebAppInit");

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <ConfigProvider>
      <AdaptivityProvider>
        <App />
      </AdaptivityProvider>
    </ConfigProvider>
  );
}