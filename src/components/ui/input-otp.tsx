import * as React from 'react';

import { cn } from '@/utils/classnames';

interface InputOTPContextValue {
  value: string;
  setValue: (value: string) => void;
  maxLength: number;
}

const InputOTPContext = React.createContext<InputOTPContextValue | undefined>(undefined);

const useInputOTP = () => {
  const context = React.useContext(InputOTPContext);
  if (!context) {
    throw new Error('InputOTP components must be used within InputOTP');
  }
  return context;
};

const InputOTP = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<'div'> & {
    maxLength?: number;
    value?: string;
    onValueChange?: (value: string) => void;
  }
>(
  (
    { className, maxLength = 4, value: controlledValue, onValueChange, children, ...props },
    ref
  ) => {
    const [internalValue, setInternalValue] = React.useState('');
    const value = controlledValue !== undefined ? controlledValue : internalValue;
    const setValue = React.useCallback(
      (newValue: string) => {
        if (controlledValue === undefined) {
          setInternalValue(newValue);
        }
        if (onValueChange) {
          onValueChange(newValue);
        }
      },
      [controlledValue, onValueChange]
    );

    return (
      <InputOTPContext.Provider value={{ value, setValue, maxLength }}>
        <div ref={ref} className={cn('flex items-center', className)} {...props}>
          {children}
        </div>
      </InputOTPContext.Provider>
    );
  }
);
InputOTP.displayName = 'InputOTP';

const InputOTPGroup = React.forwardRef<HTMLDivElement, React.ComponentProps<'div'>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('flex items-center gap-2.5', className)} {...props} />
  )
);
InputOTPGroup.displayName = 'InputOTPGroup';

const InputOTPSlot = React.forwardRef<
  HTMLInputElement,
  React.ComponentProps<'input'> & {
    index: number;
  }
>(({ className, index, ...props }, ref) => {
  const { value, setValue, maxLength } = useInputOTP();
  const inputRef = React.useRef<HTMLInputElement>(null);

  const getInputByIndex = React.useCallback(
    (targetIndex: number) =>
      document.querySelector<HTMLInputElement>(`input[data-otp-index="${targetIndex}"]`),
    []
  );

  React.useImperativeHandle(ref, () => inputRef.current as HTMLInputElement);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    if (!/^\d*$/.test(newValue)) return;

    const currentValues = value.split('').slice(0, maxLength);
    while (currentValues.length < maxLength) {
      currentValues.push('');
    }

    // If user types a digit in an already filled slot, replace and move forward
    if (newValue.length > 0) {
      currentValues[index] = newValue.slice(-1);
      const newOtpValue = currentValues.join('');
      setValue(newOtpValue);

      // Move to next input if available
      if (index < maxLength - 1) {
        setTimeout(() => {
          getInputByIndex(index + 1)?.focus();
        }, 0);
      }
    } else {
      // Clear current slot
      currentValues[index] = '';
      const newOtpValue = currentValues.join('');
      setValue(newOtpValue);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace') {
      if (!value[index] && index > 0) {
        // If current slot is empty and backspace is pressed, move to previous and clear it
        e.preventDefault();
        const currentValues = value.split('').slice(0, maxLength);
        while (currentValues.length < maxLength) {
          currentValues.push('');
        }
        currentValues[index - 1] = '';
        setValue(currentValues.join(''));
        setTimeout(() => {
          getInputByIndex(index - 1)?.focus();
        }, 0);
      }
    } else if (e.key === 'ArrowLeft' && index > 0) {
      e.preventDefault();
      getInputByIndex(index - 1)?.focus();
    } else if (e.key === 'ArrowRight' && index < maxLength - 1) {
      e.preventDefault();
      getInputByIndex(index + 1)?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text').slice(0, maxLength).replace(/\D/g, '');
    if (pastedData) {
      setValue(pastedData);
      const nextIndex = Math.min(pastedData.length, maxLength - 1);
      setTimeout(() => {
        getInputByIndex(nextIndex)?.focus();
      }, 0);
    }
  };

  const slotValue = value[index] || '';

  return (
    <input
      ref={inputRef}
      data-slot="input-otp-slot"
      data-otp-index={index}
      type="text"
      inputMode="numeric"
      maxLength={1}
      value={slotValue}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
      onPaste={index === 0 ? handlePaste : undefined}
      className={cn(
        'flex h-12 w-12 items-center justify-center rounded-md border border-neutral-200 bg-transparent text-center text-lg shadow-xs transition-all placeholder:text-neutral-500 focus-visible:border-neutral-950 focus-visible:ring-neutral-950/50 focus-visible:ring-[1px] disabled:cursor-not-allowed disabled:opacity-50 dark:border-neutral-800 dark:placeholder:text-neutral-400 dark:focus-visible:border-neutral-300 dark:focus-visible:ring-neutral-300/50',
        className
      )}
      {...props}
    />
  );
});
InputOTPSlot.displayName = 'InputOTPSlot';

export { InputOTP, InputOTPGroup, InputOTPSlot };
