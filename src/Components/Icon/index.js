import React from "react";

import Back from "./BackArrow";
import Refresh from "./Refresh";
import Copy from "./Copy";
import Menu from "./Menu";
import LessThanArrow from "./LessThanArrow";
import GreaterThanArrow from "./GreaterThanArrow";

const Icon = props => {
  switch (props.name) {
    case "back-arrow":
      return <Back {...props} />;
    
    case "copy":
      return <Copy {...props} />;
    
    case "refresh":
      return <Refresh {...props} />;

    case "menu":
      return <Menu {...props} />;

    case "lt-arrow":
      return <LessThanArrow {...props} />;

    case "gt-arrow":
      return <GreaterThanArrow {...props} />;

    default:
      return;
  }
};

export default Icon;
