import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";

export const RadioGroup = ({
  children,
  ...props
}: RadioGroupPrimitive.RadioGroupProps) => {
  return (
    <RadioGroupPrimitive.Root className="flex items-center gap-3" {...props}>
      {children}
    </RadioGroupPrimitive.Root>
  );
};

export const RadioButton = ({
  children,
  ...props
}: RadioGroupPrimitive.RadioGroupItemProps) => {
  return (
    <RadioGroupPrimitive.Item
      className="bg-accent-button hover:bg-accent-button-hover duration-200 rounded-md px-5 py-4 flex items-center gap-3 uppercase text-xs border border-accent-button radix-state-checked:border-purple radix-state-checked:bg-purple-light"
      {...props}
    >
      {children}
    </RadioGroupPrimitive.Item>
  );
};
