import React from "react";
import { View } from "@tarojs/components";
import Taro from "@tarojs/taro";

import "./index.scss";

export default class Index extends React.Component<any, any> {
  public config: Taro.PageConfig = {
    navigationBarTitleText: "Taro CVUI",
  };

  public render() {
    return <View className="page page-index"></View>;
  }
}
