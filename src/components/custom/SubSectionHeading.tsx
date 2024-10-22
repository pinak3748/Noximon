import React from 'react';

function SubSectionHeading({
  heading,
  subHeading,
}: {
  heading: string;
  subHeading: string;
}) {
  return (
    <React.Fragment>
      <div>
        <h2 className="text-xl font-semibold text-accent-foreground">
          {heading}
        </h2>
        <p className="text-sm text-accent-foreground">{subHeading}</p>
      </div>
    </React.Fragment>
  );
}

export default SubSectionHeading;
