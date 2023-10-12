'use client'

const Error = ({error}:{error: Error}) => {
  return (
    <h3>
      {`Error : ${error.message}`}
    </h3>
  );
};

export default Error;