import React from "react";

import Back from "./BackArrow";
import Refresh from "./Refresh";
import Copy from "./Copy";
import Menu from "./Menu";
import LessThanArrow from "./LessThanArrow";
import GreaterThanArrow from "./GreaterThanArrow";
import GitHub from "./GitHub";
import Hyperlink from "./Link";

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

    case "github":
      return <GitHub {...props} />;

    case "link":
      return <Hyperlink {...props} />;

    default:
      return;
  }
};

export default Icon;
