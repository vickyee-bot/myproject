import Code from "./code";
import Welcome from "./welcome";

export default function ConditionalComponent() {
  const display = false;
  return display ? <Welcome /> : <Code />;
}
