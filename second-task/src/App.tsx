import { useLocalStorageReducer } from "./hooks/useLocalStorageReducer";

import reducer from "./reducers/item.reducer";
import { ItemI } from "./interface/ItemI";

import "./App.css";

import { Button, Space, Layout } from "antd";
import { useEffect } from "react";

const { Footer, Content } = Layout;

const initialState: ItemI[] = [];

function App() {
  const { state, dispatch } = useLocalStorageReducer<ItemI[]>(
    initialState,
    reducer
  );

  useEffect(() => {
    const timerId = setInterval(() => dispatch({ type: "REMOVE" }), 1000);

    return () => clearInterval(timerId);
  }, [dispatch]);

  return (
    <div className="App">
      <Layout>
        <Content>
          <Space>
            <ul>
              {state?.map(({ id, timeout }, index) => {
                return (
                  <li key={id}>
                    <Button>
                      {index + 1}. Исчезнет через{" "}
                      {new Date(
                        timeout.valueOf() - Date.now().valueOf()
                      ).getSeconds()}{" "}
                      секунд
                    </Button>
                  </li>
                );
              })}
            </ul>
          </Space>
        </Content>

        <Footer>
          <Button type="primary" onClick={() => dispatch({ type: "ADD" })}>
            Добавить элемент
          </Button>
        </Footer>
      </Layout>
    </div>
  );
}

export default App;
