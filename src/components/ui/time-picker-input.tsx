import * as React from 'react';

import { Input } from '@/components/ui/input';

import { cn } from '@/utils/classnames';

import { clamp, get12HourParts, snapMinute, to24Hour } from './time-picker-utils';

export type TimePickerInputProps = Omit<
  React.ComponentProps<typeof Input>,
  'value' | 'onChange' | 'ref'
> & {
  picker: 'hours' | 'minutes';
  date: Date | undefined;
  setDate: (date: Date | undefined) => void;
  /** Required for hours when using 12h display. */
  period?: 'AM' | 'PM';
  minuteStep?: number;
  onLeftFocus?: () => void;
  onRightFocus?: () => void;
};

const TimePickerInput = React.forwardRef<HTMLInputElement, TimePickerInputProps>(
  (
    {
      className,
      picker,
      date,
      setDate,
      period = 'AM',
      minuteStep = 1,
      onLeftFocus,
      onRightFocus,
      disabled,
      onKeyDown,
      ...props
    },
    ref
  ) => {
    const innerRef = React.useRef<HTMLInputElement>(null);
    React.useImperativeHandle(ref, () => innerRef.current as HTMLInputElement);

    const [draft, setDraft] = React.useState('');

    React.useEffect(() => {
      if (!date) {
        setDraft('');
        return;
      }
      if (picker === 'hours') {
        const { h12 } = get12HourParts(date.getHours());
        setDraft(String(h12));
      } else {
        setDraft(String(date.getMinutes()).padStart(2, '0'));
      }
    }, [date, picker]);

    const emptyBase = () => {
      const d = new Date();
      d.setHours(0, 0, 0, 0);
      return d;
    };

    const commitHours = (raw: string) => {
      if (!date && raw.trim() === '') {
        setDate(undefined);
        return;
      }
      const base = date ?? emptyBase();
      const n = parseInt(raw, 10);
      const h12 = Number.isNaN(n) ? 12 : clamp(n, 1, 12);
      const h24 = to24Hour(h12, period);
      const d = new Date(base);
      d.setHours(h24, d.getMinutes(), 0, 0);
      setDate(d);
    };

    const commitMinutes = (raw: string) => {
      if (!date && raw.trim() === '') {
        setDate(undefined);
        return;
      }
      const base = date ?? emptyBase();
      let m = parseInt(raw, 10);
      if (Number.isNaN(m)) m = 0;
      m = clamp(m, 0, 59);
      m = snapMinute(m, minuteStep);
      const d = new Date(base);
      d.setMinutes(m, 0, 0);
      setDate(d);
    };

    const handleBlur = () => {
      if (picker === 'hours') commitHours(draft);
      else commitMinutes(draft);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const v = e.target.value.replace(/\D/g, '');
      if (picker === 'hours') {
        if (v.length <= 2) setDraft(v);
      } else {
        if (v.length <= 2) setDraft(v);
      }
    };

    const bump = (delta: number) => {
      if (!date) {
        const d = emptyBase();
        if (picker === 'hours') {
          d.setHours(to24Hour(9, period), 0, 0, 0);
        }
        setDate(d);
        return;
      }
      const d = new Date(date);
      if (picker === 'hours') {
        const { h12 } = get12HourParts(d.getHours());
        let next = h12 + delta;
        if (next < 1) next = 12;
        if (next > 12) next = 1;
        d.setHours(to24Hour(next, period), d.getMinutes(), 0, 0);
      } else {
        let m = d.getMinutes() + delta * minuteStep;
        m = ((m % 60) + 60) % 60;
        m = snapMinute(m, minuteStep);
        d.setMinutes(m, 0, 0);
      }
      setDate(d);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      onKeyDown?.(e);
      if (e.defaultPrevented) return;
      if (e.key === 'ArrowUp') {
        e.preventDefault();
        bump(1);
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        bump(-1);
      } else if (e.key === 'ArrowRight') {
        onRightFocus?.();
      } else if (e.key === 'ArrowLeft') {
        onLeftFocus?.();
      }
    };

    return (
      <Input
        ref={innerRef}
        type="text"
        inputMode="numeric"
        className={cn('w-12 text-center tabular-nums sm:w-14', className)}
        value={draft}
        onChange={handleChange}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
        disabled={disabled}
        aria-label={picker === 'hours' ? 'Hours' : 'Minutes'}
        {...props}
      />
    );
  }
);
TimePickerInput.displayName = 'TimePickerInput';

export { TimePickerInput };
