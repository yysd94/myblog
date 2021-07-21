import React from "react";

const AppDetail = (props) => {
  const { contentIndex, changeViewMode } = props;
  console.log(contentIndex);
  console.log(changeViewMode);
  return (
    <div>
      <p>AppDetail</p>
    </div>
  );
};

export default AppDetail;
