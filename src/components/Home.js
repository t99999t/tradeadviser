import {NavMenu} from "./NavMenu";
import React from "react";
import LinkPage from "../components/LinkPage";
import { Container,Table } from "react-bootstrap";
import { Icon } from "@fortawesome/fontawesome-svg-core";
    const   Home=()=> {
    return (
<Container>

 <div className="row">
      
      <div className="col-md-4">
                            <div><LinkPage />
                            </div>

<Table className="table table-bordered table-striped">
      <thead>
            <th>Name</th>
            <th>Email</th>

      </thead>
</Table>



      </div>
      </div>

   </Container >   )
}

export default Home
