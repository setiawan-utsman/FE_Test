import React from "react";

const CardTitle = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ children, ...props }, ref) => (
  <div className={props.className}>
    <div className="flex flex-col flex-1 mb-2 gap-1">
      <div className="text-lg font-medium leading-tight">{props.title}</div>
      <div className="text-muted-foreground text-sm leading-tight line-clamp-2 font-poppins">
        {props.about}
      </div>
    </div>
    {children}
  </div>
));

export { CardTitle }