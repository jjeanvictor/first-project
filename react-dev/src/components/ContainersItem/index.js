import React from "react";

import {ConteinerItens} from "./style"

function Containers({children, Isblur}){

  return <ConteinerItens Isblur={Isblur}>{children}</ConteinerItens>
}
export default Containers
