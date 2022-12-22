import { useEffect } from "react";

import { useHookReducer } from "./hooks/useHookReducer";
import reducer from "./reducers/item.reducer";
import { ItemI } from "./interfaces/ItemI";

import { Button, Space, Layout } from "antd";

import "./App.css";

const { Footer, Content } = Layout;

const initialState: ItemI[] = [];

function App() {
  const { state, dispatch } = useHookReducer<ItemI[]>(
    initialState,
    reducer
  );

  useEffect(() => {
    let timerId = null;

    if(state.length > 0) timerId = setInterval(() => dispatch({ type: "REMOVE" }), 1000);

    return () => clearInterval(timerId);
  }, [state, dispatch]);

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
