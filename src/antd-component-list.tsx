import React, { useState } from "react";
import * as AntdComponents from "antd";
import { DownOutlined, SmileOutlined } from "@ant-design/icons";

import "./App.css";

console.log(AntdComponents);

const { Layout, Button } = AntdComponents;

const { Content } = Layout;

const cascaderOptions: any[] = [
  {
    value: "zhejiang",
    label: "Zhejiang",
    children: [
      {
        value: "hangzhou",
        label: "Hangzhou",
        children: [
          {
            value: "xihu",
            label: "West Lake",
          },
        ],
      },
    ],
  },
  {
    value: "jiangsu",
    label: "Jiangsu",
    children: [
      {
        value: "nanjing",
        label: "Nanjing",
        children: [
          {
            value: "zhonghuamen",
            label: "Zhong Hua Men",
          },
        ],
      },
    ],
  },
];

const menu = (
  <AntdComponents.Menu
    items={[
      {
        key: "1",
        label: (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.antgroup.com"
          >
            1st menu item
          </a>
        ),
      },
      {
        key: "2",
        label: (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.aliyun.com"
          >
            2nd menu item (disabled)
          </a>
        ),
        icon: <SmileOutlined />,
        disabled: true,
      },
      {
        key: "3",
        label: (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.luohanacademy.com"
          >
            3rd menu item (disabled)
          </a>
        ),
        disabled: true,
      },
      {
        key: "4",
        danger: true,
        label: "a danger item",
      },
    ]}
  />
);

function getMockOptions(count: number) {
  const options = [];
  for (let i = 0; i < count; i++) {
    options.push({
      label: `label-${i}`,
      value: i,
    });
  }

  return options;
}

const App: React.FC = () => {
  const [options, setOptions] = useState<{ label: string; value: number }[]>(
    []
  );
  const [drawerVisible, setDrawerVisible] = useState(false);

  const onSearch = (searchText: string) => {
    setOptions(!searchText ? [] : getMockOptions(2));
  };

  const onToggleTheme = () => {
    const theme = document.body.getAttribute("data-theme");

    if (theme === "dark") {
      document.body.removeAttribute("data-theme");
    } else {
      document.body.setAttribute("data-theme", "dark");
    }
  };

  return (
    <Content
      className="site-layout-background"
      style={{
        padding: 24,
        margin: 0,
        minHeight: 280,
      }}
    >
      Content
      <div className="component-container">
        <div>
          <h2>Affix</h2>
          <AntdComponents.Affix offsetTop={100}>
            <Button onClick={onToggleTheme} type="primary">
              Primary Dark
            </Button>
          </AntdComponents.Affix>
        </div>

        <div>
          <h2>Alert</h2>
          <AntdComponents.Alert description="This is an alert"></AntdComponents.Alert>
        </div>

        <div>
          <h2>Anchor</h2>
          <AntdComponents.Anchor>
            <Button onClick={onToggleTheme} type="primary">
              Primary Dark
            </Button>
          </AntdComponents.Anchor>
        </div>

        <div>
          <h2>AutoComplete</h2>
          <AntdComponents.AutoComplete
            options={options}
            style={{ width: 200 }}
            onSearch={onSearch}
            placeholder="input here"
          />
        </div>

        <div>
          <h2>Avatar</h2>
          <AntdComponents.Avatar size={64}></AntdComponents.Avatar>
        </div>

        <div>
          <h2>BackTop</h2>
          <AntdComponents.BackTop>
            <Button shape="round" type="primary">
              Top
            </Button>
          </AntdComponents.BackTop>
        </div>
        <div>
          <h2>Badge</h2>
          <AntdComponents.Badge count={5}>
            <AntdComponents.Avatar shape="square" size="large" />
          </AntdComponents.Badge>
        </div>
        <div>
          <h2>Breadcrumb</h2>
          <AntdComponents.Breadcrumb>
            <AntdComponents.Breadcrumb.Item>
              Home
            </AntdComponents.Breadcrumb.Item>
            <AntdComponents.Breadcrumb.Item>
              <a href="">Application Center</a>
            </AntdComponents.Breadcrumb.Item>
            <AntdComponents.Breadcrumb.Item>
              <a href="">Application List</a>
            </AntdComponents.Breadcrumb.Item>
            <AntdComponents.Breadcrumb.Item>
              An Application
            </AntdComponents.Breadcrumb.Item>
          </AntdComponents.Breadcrumb>
        </div>
      </div>
      <div>
        <h2>Badge</h2>
        <AntdComponents.Calendar />
      </div>
      <div>
        <h2>Card</h2>
        <AntdComponents.Card
          title="Default size card"
          extra={<a href="#">More</a>}
          style={{ width: 300 }}
        >
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </AntdComponents.Card>
      </div>
      <div>
        <h2>Carousel</h2>
        <AntdComponents.Carousel>
          <div>
            <h3 className="carousel-item">1</h3>
          </div>
          <div>
            <h3 className="carousel-item">2</h3>
          </div>
          <div>
            <h3 className="carousel-item">3</h3>
          </div>
          <div>
            <h3 className="carousel-item">4</h3>
          </div>
        </AntdComponents.Carousel>
      </div>
      <div>
        <h2>Cascader</h2>
        <AntdComponents.Cascader
          options={cascaderOptions}
          placeholder="Please select"
        />
      </div>
      <div>
        <h2>Checkbox</h2>
        <AntdComponents.Checkbox.Group>
          <AntdComponents.Checkbox value="1">Apple</AntdComponents.Checkbox>
          <AntdComponents.Checkbox value="2">Pear</AntdComponents.Checkbox>
          <AntdComponents.Checkbox value="3">Orange</AntdComponents.Checkbox>
        </AntdComponents.Checkbox.Group>
      </div>
      <div>
        <h2>Row/Col</h2>
        <AntdComponents.Row>
          <AntdComponents.Col span={6}>col-6</AntdComponents.Col>
          <AntdComponents.Col span={6}>col-6</AntdComponents.Col>
          <AntdComponents.Col span={6}>col-6</AntdComponents.Col>
          <AntdComponents.Col span={6}>col-6</AntdComponents.Col>
        </AntdComponents.Row>
      </div>
      <div>
        <h2>Collapse</h2>
        <AntdComponents.Collapse defaultActiveKey={["1"]}>
          <AntdComponents.Collapse.Panel
            header="This is panel header 1"
            key="1"
          >
            <p>
              A dog is a type of domesticated animal. Known for its loyalty and
              faithfulness, it can be found as a welcome guest in many
              households across the world.
            </p>
          </AntdComponents.Collapse.Panel>
          <AntdComponents.Collapse.Panel
            header="This is panel header 2"
            key="2"
          >
            <p>
              A dog is a type of domesticated animal. Known for its loyalty and
              faithfulness, it can be found as a welcome guest in many
              households across the world.
            </p>
          </AntdComponents.Collapse.Panel>
          <AntdComponents.Collapse.Panel
            header="This is panel header 3"
            key="3"
          >
            <p>
              A dog is a type of domesticated animal. Known for its loyalty and
              faithfulness, it can be found as a welcome guest in many
              households across the world.
            </p>
          </AntdComponents.Collapse.Panel>
        </AntdComponents.Collapse>
      </div>
      <div>
        <h2>Comment</h2>
        <AntdComponents.Comment
          author={<a>Han Solo</a>}
          avatar={
            <AntdComponents.Avatar
              src="https://joeschmoe.io/api/v1/random"
              alt="Han Solo"
            />
          }
          content={
            <p>
              We supply a series of design principles, practical patterns and
              high quality design resources (Sketch and Axure), to help people
              create their product prototypes beautifully and efficiently.
            </p>
          }
          datetime="2022-05-14"
        />
      </div>
      <div>
        <h2>DatePicker</h2>
        <AntdComponents.DatePicker />
      </div>
      <div>
        <h2>Descriptions</h2>
        <AntdComponents.Descriptions title="User Info">
          <AntdComponents.Descriptions.Item label="UserName">
            Zhou Maomao
          </AntdComponents.Descriptions.Item>
          <AntdComponents.Descriptions.Item label="Telephone">
            1810000000
          </AntdComponents.Descriptions.Item>
          <AntdComponents.Descriptions.Item label="Live">
            Hangzhou, Zhejiang
          </AntdComponents.Descriptions.Item>
          <AntdComponents.Descriptions.Item label="Remark">
            empty
          </AntdComponents.Descriptions.Item>
          <AntdComponents.Descriptions.Item label="Address">
            No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
          </AntdComponents.Descriptions.Item>
        </AntdComponents.Descriptions>
      </div>
      <div>
        <h2>Divider</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne
          merninisti licere mihi ista probare, quae sunt a te dicta? Refert
          tamen, quo modo.
        </p>
        <AntdComponents.Divider />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne
          merninisti licere mihi ista probare, quae sunt a te dicta? Refert
          tamen, quo modo.
        </p>
        <AntdComponents.Divider dashed />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne
          merninisti licere mihi ista probare, quae sunt a te dicta? Refert
          tamen, quo modo.
        </p>
      </div>
      <div>
        <h2>Drawer</h2>
        <Button type="primary" onClick={() => setDrawerVisible(true)}>
          Open
        </Button>
        <AntdComponents.Drawer
          title="Basic Drawer"
          placement="right"
          onClose={() => setDrawerVisible(false)}
          visible={drawerVisible}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </AntdComponents.Drawer>
      </div>
      <div>
        <h2>Dropdown</h2>

        <AntdComponents.Dropdown overlay={menu}>
          <a onClick={(e) => e.preventDefault()}>
            <AntdComponents.Space>
              Hover me
              <DownOutlined />
            </AntdComponents.Space>
          </a>
        </AntdComponents.Dropdown>
      </div>
      <div>
        <h2>Input</h2>
        <AntdComponents.Input />
        <AntdComponents.Input.Password />
        <AntdComponents.Input.Search />
        <AntdComponents.Input.TextArea />
      </div>
      <div>
        <h2>Select</h2>
        <AntdComponents.Select
          style={{ width: 120 }}
          options={getMockOptions(5)}
        ></AntdComponents.Select>
      </div>
    </Content>
  );
};

export default App;
