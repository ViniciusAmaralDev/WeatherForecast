import React from "react";
import { Text } from "./styles";

export default ({ ...args }) => <Text args={args}>{args.value}</Text>;
