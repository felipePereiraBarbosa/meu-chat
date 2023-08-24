import { LinePath } from '@visx/shape';
import { scaleLinear, scaleTime } from '@visx/scale';
import { Group } from '@visx/group';
import { AxisLeft, AxisBottom } from '@visx/axis';
import { useEffect, useState } from 'react';

export default function Chart() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const newData = Array.from({ length: 6 }, (_, i) => ({
      x: new Date(2018 + i, 0, 1),
      y: Math.floor(Math.random() * 10000) + 1000, 
    }));
    setData(newData);
  }, []);

  const xScale = scaleTime({
    domain: [new Date(2018, 0, 1), new Date(2023, 0, 1)],
    range: [0, 400],
  });

  const yScale = scaleLinear({
    domain: [0, 11000],
    range: [400, 0],
  });

  return (
    <svg width={500} height={500}>
      <Group left={50} top={50}>
        <LinePath
          data={data}
          x={(d) => xScale(d.x) ?? 0}
          y={(d) => yScale(d.y) ?? 0}
          stroke="blue"
          strokeWidth={2}
        />
        <AxisLeft scale={yScale} />
        <AxisBottom scale={xScale} top={400} />
      </Group>
    </svg>
  );
}
