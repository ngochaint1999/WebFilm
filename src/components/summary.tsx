/** @format */

import React, { FC } from "react";

type SummaryProps = {
  content: string;
};

const Summary: FC<SummaryProps> = (props) => {
  const { content } = props;
  return (
    <React.Fragment>
      <h3 className="text-white mt-5">Tóm tắt</h3>
      <p className="mt-4 text-text text-sm">{content}</p>
    </React.Fragment>
  );
};

export default Summary;
