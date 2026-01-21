import { useCountUp } from '@/hooks/useCountUp';

interface CountUpNumberProps {
  end: number;
  suffix?: string;
  duration?: number;
  className?: string;
}

const CountUpNumber = ({ end, suffix = '', duration = 2000, className = '' }: CountUpNumberProps) => {
  const { count, ref } = useCountUp({ end, duration });

  return (
    <div ref={ref} className={className}>
      {count}{suffix}
    </div>
  );
};

export default CountUpNumber;
