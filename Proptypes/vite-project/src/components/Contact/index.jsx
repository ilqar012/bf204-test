import React from "react";
import List from "../List";
import ListItem from "../Listitem";

const Contact = ({ item }) => {
  return (
    <List>
      {item &&
        item.map((product, idx) => {
          <ListItem key={idx} product={product} />;
        })}
    </List>
  );
};

export default Contact;
